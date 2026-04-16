import { useMemo, useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import MindmapFlow from '@/components/MindmapFlow';
import Chatbox from '../components/Chatbox';
import HiddenBox from '../components/HiddenBox';
import Casestudy from '@/components/Casestudy';
import RealtimeQA from '../components/RealtimeQA';
import { nodeDataMap } from '@/data/mindmapData';
import type { NodeContentBlock } from '@/data/mindmapTypes';

type HeaderTab = 'intro' | 'mindmap' | 'qna' | 'chatbox' | 'hiddenbox' | 'casestudy';
type ThemeMode = 'light' | 'dark' | 'lgbtq';

const themeOptions: Array<{
  value: ThemeMode;
  label: string;
  Icon: typeof Sun;
}> = [
  { value: 'light', label: 'Sáng', Icon: Sun },
  { value: 'dark', label: 'Tối', Icon: Moon },
  { value: 'lgbtq', label: 'LGBT', Icon: Sparkles },
];

export default function Index() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (globalThis.window === undefined) return 'dark';
    const saved = globalThis.localStorage.getItem('theme-mode');
    if (saved === 'light' || saved === 'dark' || saved === 'lgbtq') return saved;
    return 'dark';
  });
  const [tab, setTab] = useState<HeaderTab>('mindmap');

  useEffect(() => {
    const el = document.documentElement;
    el.classList.remove('dark', 'lgbtq');
    if (theme === 'dark') el.classList.add('dark');
    if (theme === 'lgbtq') el.classList.add('lgbtq');
    globalThis.localStorage.setItem('theme-mode', theme);
  }, [theme]);

  const introContent = useMemo(() => nodeDataMap.intro, []);

  const renderIntroBlock = (block: NodeContentBlock, idx: number) => {
    if (block.type === 'text') {
      return (
        <p key={idx} className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
          {block.text}
        </p>
      );
    }
    if (block.type === 'list') {
      return (
        <ul key={idx} className="list-disc pl-5 space-y-1 text-base text-foreground/80">
          {block.items.map((it) => (
            <li key={it} className="leading-relaxed">
              {it}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const tabLabel: Record<HeaderTab, string> = {
    intro: 'Mở đầu - Giới thiệu',
    mindmap: 'Mindmap',
    qna: 'Q&A',
    chatbox: 'Chatbox',
    hiddenbox: 'HiddenBox',
    casestudy: 'Casestudy',
  };

  const appClassName = [
    'h-screen flex flex-col text-foreground',
    theme === 'lgbtq' ? 'lgbtq-app-bg' : 'bg-background',
  ].join(' ');

  return (
    <div className={appClassName}>
      <header className="shrink-0 border-b border-border bg-card px-5 py-3 flex items-center gap-4">
        <div className="min-w-[260px]">
          <h1 className="text-sm font-bold text-foreground leading-tight">
            Mindmap — Chương 6
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

        <div className="flex items-center gap-1 rounded-xl border border-border bg-background/40 p-1" aria-label="Chọn giao diện">
          {themeOptions.map(({ value, label, Icon }) => {
            const active = theme === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setTheme(value)}
                className={[
                  'inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors',
                  active
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                ].join(' ')}
                title={`Chuyển sang giao diện ${label}`}
                aria-pressed={active}
              >
                <Icon size={14} />
                {label}
              </button>
            );
          })}
        </div>
      </header>

      {tab === 'mindmap' && <MindmapFlow />}
      {tab === 'qna' && <RealtimeQA />}
      {tab === 'intro' && (
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-950 via-black to-black intro-animated-bg relative">
          <div className="min-h-full flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-4xl mx-auto translate-y-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH
                </h2>
                <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed">
                  Phần mở đầu giúp người học xác định trọng tâm kiến thức và cách vận dụng vào thực tiễn xã hội Việt Nam.
                </p>
              </div>

              <div className="mt-10 flex justify-center">
                <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center">
                  <h3 className="text-xl font-bold text-white">Ba mục tiêu cụ thể</h3>
                  <div className="mt-5 space-y-2.5 text-base text-white/80 leading-relaxed">
                    <p>Nắm vững quan điểm cơ bản của chủ nghĩa Mác-Lênin về dân tộc và tôn giáo.</p>
                    <p>Hiểu chính sách dân tộc, tôn giáo của Đảng và Nhà nước Việt Nam.</p>
                    <p>Biết vận dụng vào xây dựng khối đại đoàn kết toàn dân tộc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {tab === 'chatbox' && <Chatbox />}
      {tab === 'hiddenbox' && <HiddenBox />}
      {tab === 'casestudy' && <Casestudy />}
    </div>
  );
}
