import ChatAI from './ChatAI';

export default function Chatbox() {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="mx-auto h-full max-w-5xl px-6 py-8">
        <h2 className="text-lg font-bold">Chatbox AI</h2>
        <p className="mt-2 text-sm text-foreground/80">
          Hỏi đáp theo nội dung chương 6 theo thời gian thực qua API `/api/openai`.
        </p>
        <div className="mt-5 h-[calc(100%-64px)] min-h-[520px]">
          <ChatAI variant="page" />
        </div>
      </div>
    </div>
  );
}

