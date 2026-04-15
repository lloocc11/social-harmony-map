import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import MindmapFlow from '@/components/MindmapFlow';

export default function Index() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <header className="shrink-0 border-b border-border bg-card px-5 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-sm font-bold text-foreground leading-tight">
            Mindmap Thuyết trình — Chương 6
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH
          </p>
        </div>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          title="Chuyển đổi giao diện"
        >
          {dark ? <Sun size={16} className="text-muted-foreground" /> : <Moon size={16} className="text-muted-foreground" />}
        </button>
      </header>
      <MindmapFlow />
    </div>
  );
}
