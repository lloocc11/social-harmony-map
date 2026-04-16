import { useCallback, useEffect, useState, useMemo } from 'react';
import { useReactFlow } from '@xyflow/react';
import { Play, Pause, SkipForward, SkipBack, X, ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { nodeDataMap } from '@/data/mindmapData';
import type { MindmapNodeData, NodeCategory, NodeContentBlock, NodeContentPage } from '@/data/mindmapTypes';

interface PresentationModeProps {
  active: boolean;
  onClose: () => void;
  onExpandNode: (id: string) => void;
  presentationTextBoost?: boolean;
}

const categoryColors: Record<NodeCategory, string> = {
  root: 'hsl(var(--node-root-bg))',
  intro: 'hsl(var(--node-intro-bg))',
  dantoc: 'hsl(var(--node-dantoc-bg))',
  tongiao: 'hsl(var(--node-tongiao-bg))',
  quanhe: 'hsl(var(--node-quanhe-bg))',
};

const categoryLabels: Record<NodeCategory, string> = {
  root: 'Tổng quan',
  intro: 'Giới thiệu',
  dantoc: 'Dân tộc',
  tongiao: 'Tôn giáo',
  quanhe: 'Quan hệ DT - TG',
};

interface PresentationStep {
  nodeId: string;
  node: MindmapNodeData;
  focusNodes: string[];
  expandIds: string[];
}

function buildPresentationSteps(): PresentationStep[] {
  const steps: PresentationStep[] = [];
  const root = nodeDataMap.root;
  if (!root) return steps;

  // Root
  steps.push({ nodeId: 'root', node: root, focusNodes: ['root'], expandIds: [] });

  const l1Children = root.children || [];
  for (const l1Id of l1Children) {
    const l1 = nodeDataMap[l1Id];
    if (!l1) continue;

    // L1 node
    steps.push({ nodeId: l1Id, node: l1, focusNodes: ['root', l1Id], expandIds: [] });

    const l2Children = l1.children || [];
    for (const l2Id of l2Children) {
      const l2 = nodeDataMap[l2Id];
      if (!l2) continue;

      // L2 node
      steps.push({ nodeId: l2Id, node: l2, focusNodes: [l1Id, l2Id], expandIds: [l1Id] });

      const l3Children = l2.children || [];
      for (const l3Id of l3Children) {
        const l3 = nodeDataMap[l3Id];
        if (!l3) continue;
        steps.push({ nodeId: l3Id, node: l3, focusNodes: [l2Id, l3Id], expandIds: [l1Id, l2Id] });
      }
    }
  }

  return steps;
}

function getStepIndicatorClass(index: number, currentStep: number): string {
  if (index === currentStep) return 'bg-primary scale-125 ring-2 ring-primary/30';
  if (index < currentStep) return 'bg-primary/50';
  return 'bg-muted-foreground/30';
}

function ContentBlock({ block, fontScale }: Readonly<{ block: NodeContentBlock; fontScale: number }>) {
  if (block.type === 'text') {
    return (
      <p className="text-foreground/80 leading-relaxed whitespace-pre-line" style={{ fontSize: `${0.95 * fontScale}rem` }}>
        {block.text}
      </p>
    );
  }
  if (block.type === 'list') {
    return (
      <ul className="list-disc pl-5 space-y-1.5 text-foreground/85 leading-relaxed" style={{ fontSize: `${0.95 * fontScale}rem` }}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === 'image') {
    return (
      <figure className="space-y-1">
        <img src={block.src} alt={block.alt} className="w-full rounded-lg border border-border object-cover" />
        {block.caption && <figcaption className="text-muted-foreground" style={{ fontSize: `${0.8 * fontScale}rem` }}>{block.caption}</figcaption>}
      </figure>
    );
  }
  if (block.type === 'video') {
    return (
      <figure className="space-y-1">
        <video
          className="w-full rounded-lg border border-border bg-black/60"
          src={block.src}
          poster={block.poster}
          controls
          playsInline
          title={block.title}
        >
          <track kind="captions" src="data:text/vtt;charset=utf-8,WEBVTT" srcLang="vi" label="Vietnamese" default />
        </video>
        {block.caption && <figcaption className="text-muted-foreground" style={{ fontSize: `${0.8 * fontScale}rem` }}>{block.caption}</figcaption>}
      </figure>
    );
  }
  return null;
}

function NodeContentPanel({
  node,
  pageIndex,
  onPageChange,
  fontScale,
}: Readonly<{
  node: MindmapNodeData;
  pageIndex: number;
  onPageChange: (i: number) => void;
  fontScale: number;
}>) {
  const pages = node.detailPages;
  const page: NodeContentPage | undefined = pages[pageIndex];

  if (!pages.length) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground" style={{ fontSize: `${0.95 * fontScale}rem` }}>
        <p>Chưa có nội dung chi tiết cho mục này.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="shrink-0 px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: categoryColors[node.category] }} />
          <span className="font-semibold uppercase tracking-widest text-muted-foreground" style={{ fontSize: `${0.74 * fontScale}rem` }}>
            {categoryLabels[node.category]}
          </span>
        </div>
        <h2 className="font-bold text-foreground leading-snug whitespace-pre-line" style={{ borderLeft: `3px solid ${categoryColors[node.category]}`, paddingLeft: 12, fontSize: `${1.05 * fontScale}rem` }}>
          {node.label}
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto px-5 py-4">
        {page && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${node.id}-${page.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground" style={{ fontSize: `${0.95 * fontScale}rem` }}>{page.title}</h3>
                {pages.length > 1 && (
                  <span className="text-muted-foreground" style={{ fontSize: `${0.74 * fontScale}rem` }}>{pageIndex + 1}/{pages.length}</span>
                )}
              </div>
              {page.blocks.map((block, idx) => (
                <ContentBlock key={`${page.id}-${idx}`} block={block} fontScale={fontScale} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Page navigation */}
      {pages.length > 1 && (
        <div className="shrink-0 flex items-center justify-between px-5 py-2.5 border-t border-border">
          <button
            onClick={() => onPageChange(Math.max(0, pageIndex - 1))}
            disabled={pageIndex === 0}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border font-medium disabled:opacity-30 hover:bg-muted transition-colors"
            style={{ fontSize: `${0.74 * fontScale}rem` }}
          >
            <ChevronLeft size={14} /> Trang trước
          </button>
          <button
            onClick={() => onPageChange(Math.min(pages.length - 1, pageIndex + 1))}
            disabled={pageIndex === pages.length - 1}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border font-medium disabled:opacity-30 hover:bg-muted transition-colors"
            style={{ fontSize: `${0.74 * fontScale}rem` }}
          >
            Trang sau <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function PresentationMode({ active, onClose, onExpandNode, presentationTextBoost = false }: Readonly<PresentationModeProps>) {
  const { fitView } = useReactFlow();
  const steps = useMemo(() => buildPresentationSteps(), []);
  const contentPanelWidth = '40vw';
  const fontScale = presentationTextBoost ? 1.18 : 1;
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  const goToStep = useCallback(
    (stepIndex: number) => {
      if (stepIndex < 0 || stepIndex >= steps.length) return;
      const step = steps[stepIndex];
      setCurrentStep(stepIndex);
      setPageIndex(0);

      for (const expandId of step.expandIds) {
        onExpandNode(expandId);
      }

      setTimeout(() => {
        fitView({
          nodes: step.focusNodes.map((id) => ({ id })),
          padding: 0.35,
          duration: 800,
          maxZoom: 1.8,
        });
      }, 150);
    },
    [steps, fitView, onExpandNode],
  );

  const next = useCallback(() => {
    const step = steps[currentStep];
    const pages = step?.node.detailPages || [];

    // If there are more pages in this node, go to next page first
    if (showContent && pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
      return;
    }

    // Otherwise go to next step
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentStep, steps, goToStep, pageIndex, showContent]);

  const prev = useCallback(() => {
    // If on a sub-page, go back a page first
    if (showContent && pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      return;
    }
    if (currentStep > 0) goToStep(currentStep - 1);
  }, [currentStep, goToStep, pageIndex, showContent]);

  useEffect(() => {
    if (!isPlaying || !active) return;
    const timer = setTimeout(next, 5000);
    return () => clearTimeout(timer);
  }, [isPlaying, active, next, currentStep, pageIndex]);

  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === 'Escape') { onClose(); }
      if (e.key === 'c' || e.key === 'C') { setShowContent((v) => !v); }
    };
    globalThis.addEventListener('keydown', handler);
    return () => globalThis.removeEventListener('keydown', handler);
  }, [active, next, prev, onClose]);

  useEffect(() => {
    if (active) {
      setCurrentStep(0);
      setPageIndex(0);
      goToStep(0);
    }
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!active) return null;

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <>
      {/* Content sidebar */}
      <AnimatePresence>
        {showContent && step && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            className="absolute top-0 right-0 h-full w-[40vw] z-20 bg-card/95 backdrop-blur-md border-l border-border shadow-2xl"
          >
            <NodeContentPanel
              node={step.node}
              pageIndex={pageIndex}
              onPageChange={setPageIndex}
              fontScale={fontScale}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20" style={{ right: showContent ? contentPanelWidth : 0 }}>
        <div className="flex justify-center mb-3">
          <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl px-5 py-3 shadow-xl max-w-lg">
            <div className="flex items-center gap-2 text-muted-foreground mb-1" style={{ fontSize: `${0.74 * fontScale}rem` }}>
              <ChevronRight size={12} />
              <span>Bước {currentStep + 1} / {steps.length}</span>
              {step?.node.detailPages.length > 1 && showContent && (
                <span className="text-muted-foreground/60">• Trang {pageIndex + 1}/{step.node.detailPages.length}</span>
              )}
            </div>
            <p className="font-semibold text-foreground leading-snug" style={{ fontSize: `${0.95 * fontScale}rem` }}>
              {step?.node.label.replaceAll('\n', ' ')}
            </p>
          </div>
        </div>

        <div className="bg-card/95 backdrop-blur-md border-t border-border px-5 py-3">
          <div className="w-full h-1 bg-muted rounded-full mb-3 overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[40%] scrollbar-hide">
              {steps.map((s, i) => (
                <button
                  key={s.nodeId}
                  onClick={() => goToStep(i)}
                  className={[
                    'w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300',
                    getStepIndicatorClass(i, currentStep),
                  ].join(' ')}
                  title={s.node.label.replaceAll('\n', ' ')}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowContent(!showContent)}
                className={[
                  'p-2 rounded-lg transition-colors',
                  showContent ? 'bg-primary/20 text-primary' : 'bg-muted text-foreground',
                ].join(' ')}
                title="Hiện/ẩn nội dung (C)"
              >
                <BookOpen size={16} />
              </button>

              <div className="w-px h-6 bg-border" />

              <button
                onClick={prev}
                disabled={currentStep === 0 && pageIndex === 0}
                className="p-2 rounded-lg bg-muted text-foreground disabled:opacity-30 hover:bg-accent transition-colors"
                title="Bước trước (←)"
              >
                <SkipBack size={16} />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                title={isPlaying ? 'Tạm dừng' : 'Tự động (5s)'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <button
                onClick={next}
                disabled={currentStep === steps.length - 1 && pageIndex >= (step?.node.detailPages.length || 1) - 1}
                className="p-2 rounded-lg bg-muted text-foreground disabled:opacity-30 hover:bg-accent transition-colors"
                title="Bước tiếp (→)"
              >
                <SkipForward size={16} />
              </button>

              <div className="w-px h-6 bg-border" />

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                title="Thoát (Esc)"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
