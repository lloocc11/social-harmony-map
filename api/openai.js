export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OpenAI API key not configured" });
  }

  const { message, history = [] } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const systemPrompt = `Bạn là "Triết Gia Biện Chứng" - chuyên gia phân tích vấn đề đời sống theo triết học Mác-Lênin.

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
- Có cấu trúc rõ ràng với emoji phù hợp`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          ...history,
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API Error:", error);
      return res.status(500).json({
        error: error.error?.message || "OpenAI API error",
      });
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "";

    // Parse insight from response
    let insight = null;
    const insightMatch = assistantMessage.match(/```insight\s*([\s\S]*?)```/);
    if (insightMatch) {
      try {
        insight = JSON.parse(insightMatch[1].trim());
      } catch (e) {
        console.warn("Failed to parse insight JSON:", e);
      }
    }

    return res.status(200).json({
      success: true,
      message: assistantMessage,
      insight,
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({
      error: error?.message || "Internal server error",
    });
  }
}
