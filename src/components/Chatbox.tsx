export default function Chatbox() {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold">Chatbox</h2>
        <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
          Khu vực này đang để trống để bạn tích hợp chat (ví dụ: hỏi đáp theo nội dung mindmap).
        </p>
        <div className="mt-6 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
          Chưa có chức năng chat.
        </div>
      </div>
    </div>
  );
}

