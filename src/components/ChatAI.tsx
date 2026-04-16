import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, X } from 'lucide-react';

type ChatRole = 'user' | 'ai';

interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

interface GeminiResponse {
  success?: boolean;
  text?: string;
  answer?: string;
  message?: string;
}

interface ChatAIProps {
  variant?: 'floating' | 'page';
  onClose?: () => void;
}

const SUGGESTED_QUESTIONS = [
  'Giải thích bản chất của tôn giáo theo Chủ nghĩa Mác - Lênin?',
  'Hai xu hướng khách quan trong phát triển quan hệ dân tộc là gì?',
  'Cương lĩnh dân tộc của Lênin gồm những nội dung chính nào?',
  'Đặc điểm dân tộc Việt Nam hiện nay và thách thức lớn nhất trong bình đẳng dân tộc?',
  'Nguyên tắc giải quyết vấn đề tôn giáo trong thời kỳ quá độ lên CNXH?',
  'Quan điểm của Đảng về chính sách dân tộc và tôn giáo hiện nay?',
  'Mối quan hệ giữa dân tộc và tôn giáo ở Việt Nam có những đặc điểm gì?',
  'Phân tích tình huống: "Không xung đột có phải là bình đẳng dân tộc hoàn toàn không?"',
];

function genId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function renderMessageContent(content: string) {
  const insightRegex = /```insight\s*([\s\S]*?)```/;
  const match = insightRegex.exec(content);

  if (!match) {
    return <p className="whitespace-pre-wrap break-words">{content}</p>;
  }

  const before = content.slice(0, match.index).trim();
  const after = content.slice(match.index + match[0].length).trim();
  const cleaned = [before, after].filter(Boolean).join('\n\n').trim();

  if (!cleaned) {
    return null;
  }

  return <p className="whitespace-pre-wrap break-words">{cleaned}</p>;
}

export default function ChatAI({ variant = 'floating', onClose }: Readonly<ChatAIProps>) {
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: genId(),
      role: 'ai',
      content:
        'Chào bạn, mình là Trợ lý AI Chương 6. Bạn có thể chọn câu hỏi gợi ý hoặc nhập câu hỏi để mình hỗ trợ ngay.',
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    list.scrollTop = list.scrollHeight;
  }, [messages, isThinking]);

  const disabled = useMemo(() => isThinking || !input.trim(), [input, isThinking]);

  const handleClose = () => {
    onClose?.();
  };

  const askOpenAI = async (prompt: string) => {
    const userMessage: ChatMessage = { id: genId(), role: 'user', content: prompt };
    const history = messages.map((msg) => ({
      role: msg.role === 'ai' ? 'assistant' : 'user',
      content: msg.content,
    }));

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: prompt,
          history,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = (await res.json()) as GeminiResponse;
      const aiText = data.text || data.answer || data.message || 'Mình chưa có phản hồi phù hợp lúc này.';

      setMessages((prev) => [
        ...prev,
        {
          id: genId(),
          role: 'ai',
          content: aiText,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: genId(),
          role: 'ai',
          content:
            'Hiện tại chưa thể kết nối AI. Bạn kiểm tra API /api/openai hoặc thử lại sau nhé.',
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleSend = async () => {
    const prompt = input.trim();
    if (!prompt || isThinking) return;
    await askOpenAI(prompt);
  };

  const handleSuggestedQuestion = async (question: string) => {
    if (isThinking) return;
    await askOpenAI(question);
  };

  const wrapperClassName =
    variant === 'floating'
      ? 'fixed bottom-6 right-6 z-50 h-[520px] w-[380px] rounded-2xl border border-white/10 bg-[#0e1220]/95 shadow-2xl backdrop-blur-md'
      : 'h-full w-full rounded-2xl border border-white/10 bg-[#0e1220]/90 shadow-2xl backdrop-blur-md';

  return (
    <div className={wrapperClassName}>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 px-4 py-3 text-slate-950">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-black/15 p-1.5">
              <Bot size={16} />
            </div>
            <h3 className="text-sm font-bold">Trợ lý AI Chương 6</h3>
          </div>
          {variant === 'floating' && (
            <button
              type="button"
              onClick={handleClose}
              className="rounded-md p-1.5 transition hover:bg-black/15"
              aria-label="Đóng chat"
              title="Đóng"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
          <AnimatePresence initial={false}>
            {messages.map((message) => {
              const fromUser = message.role === 'user';
              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${fromUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={[
                      'max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed',
                      fromUser
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-slate-800 text-slate-100 border border-slate-700',
                    ].join(' ')}
                  >
                    {renderMessageContent(message.content)}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {isThinking && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="rounded-2xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200">
                Đang suy nghĩ...
              </div>
            </motion.div>
          )}
        </div>

        <div className="border-t border-slate-800 px-3 py-2">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-slate-400">Câu hỏi gợi ý</p>
          <div className="max-h-24 overflow-y-auto pr-1">
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void handleSuggestedQuestion(question)}
                  disabled={isThinking}
                  className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] text-slate-300 transition hover:border-amber-400/50 hover:text-amber-200 disabled:opacity-50"
                  title={question}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 px-3 py-3">
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  void handleSend();
                }
              }}
              placeholder="Nhập câu hỏi của bạn..."
              className="h-10 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-3 text-sm text-slate-100 outline-none transition focus:border-amber-400/60"
            />
            <button
              type="button"
              onClick={() => void handleSend()}
              disabled={disabled}
              className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-3 text-slate-950 transition hover:brightness-110 disabled:opacity-50"
              title="Gửi"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
