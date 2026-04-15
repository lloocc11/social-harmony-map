import { useState } from 'react';

export default function HiddenBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-1 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-bold">HiddenBox</h2>
          <button
            onClick={() => setOpen((v) => !v)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-card text-foreground border border-border shadow-sm hover:bg-muted transition-all"
          >
            {open ? 'Ẩn nội dung' : 'Hiện nội dung'}
          </button>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-5">
          {open ? (
            <p className="text-sm text-foreground/80 leading-relaxed">
              Đây là vùng “ẩn/hiện” để bạn chứa nội dung bổ trợ, câu hỏi ôn tập, hoặc ghi chú khi thuyết trình.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">Nội dung đang bị ẩn.</p>
          )}
        </div>
      </div>
    </div>
  );
}

