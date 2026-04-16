import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { componentTagger } from "lovable-tagger";

interface ChatCompletionResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `Bạn là "Triết Gia Biện Chứng" - chuyên gia phân tích vấn đề đời sống theo triết học Mác-Lênin.

KHI NHẬN VẤN ĐỀ TỪ NGƯỜI DÙNG, HÃY:

1. XÁC ĐỊNH quy luật biện chứng phù hợp nhất:
   - **Quy luật MÂU THUẪN**: đấu tranh và thống nhất giữa các mặt đối lập, mâu thuẫn là động lực phát triển
   - **Quy luật LƯỢNG-CHẤT**: tích lũy dần dần (lượng) dẫn đến thay đổi căn bản (chất), bước nhảy vọt
   - **Quy luật PHỦ ĐỊNH CỦA PHỦ ĐỊNH**: phát triển theo hình xoáy ốc, kế thừa và vượt qua

2. PHÂN TÍCH sâu vấn đề theo quy luật đã chọn, kết nối với tình huống thực tế của người dùng

3. ĐƯA RA lời khuyên thực tế, cụ thể và có thể hành động được

4. KẾT THÚC với một khối JSON insight (QUAN TRỌNG - phải đúng format):
\`\`\`insight
{"rule": "tên quy luật", "tags": ["#Tag1", "#Tag2"], "lesson": "bài học cô đọng 1 câu"}
\`\`\`

PHONG CÁCH VIẾT:
- Ấm áp, thân thiện như người thầy tâm lý
- Học thuật nhưng dễ hiểu, tránh thuật ngữ khó
- Sử dụng ví dụ thực tế từ đời sống Việt Nam
- Có cấu trúc rõ ràng với emoji phù hợp

NGUYÊN TẮC BẮT BUỘC KHI TRẢ LỜI:
5. Tôn trọng tuyệt đối sự tôn nghiêm trong hình ảnh của Chủ tịch Hồ Chí Minh, không dùng ngôn từ đùa cợt, xúc phạm hoặc xuyên tạc.
6. Đảm bảo tính chính xác về bản đồ và chủ quyền Việt Nam; không phát ngôn trái với chủ quyền, toàn vẹn lãnh thổ của Việt Nam.
7. Khi đề cập phẩm chất cá nhân của Hồ Chí Minh, cần dùng ngôn ngữ tôn trọng, chuẩn mực, bám theo giá trị lịch sử và đạo đức cách mạng.
8. Tôn trọng các tư tưởng, giá trị văn hóa và nền tảng chính trị của Việt Nam; tránh diễn giải thiên lệch, kích động hoặc phủ định cực đoan.`;

function sendJson(
  res: any,
  statusCode: number,
  payload: unknown
) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

async function readRequestBody(req: NodeJS.ReadableStream) {
  let rawBody = "";
  for await (const chunk of req) {
    rawBody += typeof chunk === "string" ? chunk : chunk.toString();
  }
  return rawBody;
}

function extractInsight(assistantMessage: string) {
  const insightRegex = /```insight\s*([\s\S]*?)```/;
  const match = insightRegex.exec(assistantMessage);
  if (!match) return null;
  try {
    return JSON.parse(match[1].trim()) as {
      rule?: string;
      tags?: string[];
      lesson?: string;
    };
  } catch {
    return null;
  }
}

function normalizeHistory(history: unknown): ChatMessage[] {
  if (!Array.isArray(history)) return [];

  return history
    .filter(
      (item): item is ChatMessage =>
        typeof item === "object" &&
        item !== null &&
        (item as { role?: string }).role !== undefined &&
        (item as { content?: string }).content !== undefined
    )
    .map((item) => ({
      role: item.role === "assistant" ? "assistant" as const : "user" as const,
      content: String(item.content),
    }))
    .slice(-12);
}

async function requestOpenAI(openAIKey: string, messages: Array<{ role: string; content: string }>) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAIKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      temperature: 0.7,
      max_tokens: 2000,
      messages,
    }),
  });

  const data = (await response.json()) as ChatCompletionResponse;
  return { response, data };
}

function openAIMiniApiPlugin(openAIKey: string | undefined): Plugin {
  return {
    name: "openai-mini-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/openai", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        if (req.method === "OPTIONS") {
          sendJson(res, 200, { ok: true });
          return;
        }

        if (req.method !== "POST") {
          sendJson(res, 405, { message: "Method not allowed" });
          return;
        }

        if (!openAIKey) {
          sendJson(res, 500, { message: "Missing OPENAI_API_KEY in environment" });
          return;
        }

        try {
          const rawBody = await readRequestBody(req);

          const parsed = rawBody ? JSON.parse(rawBody) : {};
          const message = typeof parsed.message === "string" ? parsed.message.trim() : "";
          const history = normalizeHistory(parsed.history);

          if (!message) {
            sendJson(res, 400, { error: "Message is required" });
            return;
          }

          const payloadMessages: Array<{ role: string; content: string }> = [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            ...history,
            {
              role: "user",
              content: message,
            },
          ];

          const { response, data } = await requestOpenAI(openAIKey, payloadMessages);

          if (!response.ok) {
            const message = data.error?.message || "OpenAI request failed";
            sendJson(res, response.status, { error: message });
            return;
          }

          const assistantMessage = data.choices?.[0]?.message?.content || "";
          const insight = extractInsight(assistantMessage);

          sendJson(res, 200, {
            success: true,
            message: assistantMessage || "Mình chưa có phản hồi phù hợp lúc này.",
            insight,
          });
        } catch {
          sendJson(res, 500, { error: "Internal server error" });
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const openAIKey = env.OPENAI_API_KEY || env.VITE_OPENAI_API_KEY;

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      openAIMiniApiPlugin(openAIKey),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
  };
});
