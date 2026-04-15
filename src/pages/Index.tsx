import { useMemo, useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import MindmapFlow from '@/components/MindmapFlow';
import Chatbox from '../components/Chatbox';
import HiddenBox from '../components/HiddenBox';
import Casestudy from '@/components/Casestudy';
import { nodeDataMap } from '@/data/mindmapData';

type HeaderTab = 'intro' | 'mindmap' | 'chatbox' | 'hiddenbox' | 'casestudy';

export default function Index() {
  const [dark, setDark] = useState(true);
  const [tab, setTab] = useState<HeaderTab>('mindmap');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const introContent = useMemo(() => nodeDataMap.intro, []);

  const tabLabel: Record<HeaderTab, string> = {
    intro: 'Mở đầu - Giới thiệu',
    mindmap: 'Mindmap',
    chatbox: 'Chatbox',
    hiddenbox: 'HiddenBox',
    casestudy: 'Casestudy',
  };

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <header className="shrink-0 border-b border-border bg-card px-5 py-3 flex items-center gap-4">
        <div className="min-w-[260px]">
          <h1 className="text-sm font-bold text-foreground leading-tight">
            Mindmap Thuyết trình — Chương 6
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH
          </p>
        </div>

        <nav className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-1 rounded-xl border border-border bg-background/40 p-1">
            {(Object.keys(tabLabel) as HeaderTab[]).map((key) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={[
                    'px-3 py-1.5 text-xs font-medium rounded-lg transition-colors',
                    active ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  ].join(' ')}
                >
                  {tabLabel[key]}
                </button>
              );
            })}
          </div>
        </nav>

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          title="Chuyển đổi giao diện"
        >
          {dark ? <Sun size={16} className="text-muted-foreground" /> : <Moon size={16} className="text-muted-foreground" />}
        </button>
      </header>

      {tab === 'mindmap' && <MindmapFlow />}
      {tab === 'intro' && (
        <div className="flex-1 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <h2 className="text-lg font-bold whitespace-pre-line">{introContent.label}</h2>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{introContent.detail}</p>
          </div>
        </div>
      )}
      {tab === 'chatbox' && <Chatbox />}
      {tab === 'hiddenbox' && <HiddenBox />}
      {tab === 'casestudy' && <Casestudy />}
    </div>
  );
}
