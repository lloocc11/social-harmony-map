import { useState, useEffect } from 'react';
import { Sun, Moon, RotateCcw } from 'lucide-react';
import MindmapFlow from '@/components/MindmapFlow';

export default function Index() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      {/* Nav */}
      <header className="shrink-0 border-b border-border bg-card px-6 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-sm font-bold leading-tight text-foreground">
            Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">Mindmap Thuyết trình</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            title="Reset View"
          >
            <RotateCcw size={16} className="text-muted-foreground" />
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            title="Toggle Theme"
          >
            {dark ? <Sun size={16} className="text-muted-foreground" /> : <Moon size={16} className="text-muted-foreground" />}
          </button>
        </div>
      </header>

      <MindmapFlow />
    </div>
  );
}
