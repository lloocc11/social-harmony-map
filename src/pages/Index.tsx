import { useMemo, useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import MindmapFlow from '@/components/MindmapFlow';
import Chatbox from '../components/Chatbox';
import HiddenBox from '../components/HiddenBox';
import Casestudy from '@/components/Casestudy';
import { nodeDataMap } from '@/data/mindmapData';
import type { NodeContentBlock } from '@/data/mindmapTypes';

type HeaderTab = 'intro' | 'mindmap' | 'chatbox' | 'hiddenbox' | 'casestudy';
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
      {tab === 'intro' && (
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <h2 className="text-lg font-bold whitespace-pre-line">{introContent.label}</h2>
            <div className="mt-5 space-y-6">
              {introContent.detailPages.map((page) => (
                <section key={page.id} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold">{page.title}</h3>
                  <div className="mt-3 space-y-3">{page.blocks.map((block, idx) => renderIntroBlock(block, idx))}</div>
                </section>
              ))}
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
