import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import type { MindmapNodeData, NodeCategory, NodeContentBlock } from '@/data/mindmapTypes';

const categoryLabels: Record<NodeCategory, string> = {
  root: 'Tổng quan',
  intro: 'Giới thiệu',
  dantoc: 'Dân tộc',
  tongiao: 'Tôn giáo',
  quanhe: 'Quan hệ DT - TG',
};

const categoryColors: Record<NodeCategory, string> = {
  root: 'hsl(var(--node-root-bg))',
  intro: 'hsl(var(--node-intro-bg))',
  dantoc: 'hsl(var(--node-dantoc-bg))',
  tongiao: 'hsl(var(--node-tongiao-bg))',
  quanhe: 'hsl(var(--node-quanhe-bg))',
};

interface Props {
  node: MindmapNodeData | null;
  onClose: () => void;
}

function ContentBlock({ block }: Readonly<{ block: NodeContentBlock }>) {
  if (block.type === 'text') {
    return <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{block.text}</p>;
  }

  if (block.type === 'list') {
    return (
      <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/85 leading-relaxed">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'video') {
    const captionSrc = block.captionsSrc ?? 'data:text/vtt;charset=utf-8,WEBVTT';

    return (
      <figure className="space-y-2">
        <video
          className="w-full rounded-xl border border-border bg-black/60"
          src={block.src}
          poster={block.poster}
          controls={block.controls ?? true}
          autoPlay={block.autoPlay ?? false}
          loop={block.loop ?? false}
          muted={block.muted ?? false}
          playsInline
          title={block.title}
        >
          <track
            kind="captions"
            src={captionSrc}
            srcLang={block.captionsLang ?? 'vi'}
            label={block.captionsLabel ?? 'Vietnamese captions'}
            default
          />
        </video>
        {(block.caption || block.title) && (
          <figcaption className="text-xs text-muted-foreground">{block.caption ?? block.title}</figcaption>
        )}
      </figure>
    );
  }

  if (block.type === 'iframe') {
    return (
      <figure className="space-y-2">
        <iframe
          src={block.src}
          title={block.title}
          className="w-full rounded-xl border border-border bg-card"
          style={{ height: block.height ?? 360 }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        {(block.caption || block.title) && (
          <figcaption className="text-xs text-muted-foreground">{block.caption ?? block.title}</figcaption>
        )}
      </figure>
    );
  }

  if (block.type === 'pdf') {
    return (
      <figure className="space-y-2">
        <iframe
          src={block.src}
          title={block.title}
          className="w-full rounded-xl border border-border bg-card"
          style={{ height: block.height ?? 520 }}
          loading="lazy"
        />
        <div className="flex items-center justify-between gap-2">
          <figcaption className="text-xs text-muted-foreground">{block.caption ?? block.title}</figcaption>
          <a
            href={block.src}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-primary hover:underline"
          >
            Mở PDF tab mới
          </a>
        </div>
      </figure>
    );
  }

  return (
    <figure className="space-y-2">
      <img
        src={block.src}
        alt={block.alt}
        className="w-full rounded-xl border border-border object-cover"
      />
      {block.caption && <figcaption className="text-xs text-muted-foreground">{block.caption}</figcaption>}
    </figure>
  );
}

export default function DetailSidebar({ node, onClose }: Readonly<Props>) {
  const pages = node?.detailPages ?? [];
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (!node) return;

    const startIndex = node.interaction?.startPageId
      ? pages.findIndex((page) => page.id === node.interaction?.startPageId)
      : 0;

    setPageIndex(Math.max(0, startIndex));
  }, [node, pages]);

  const page = useMemo(() => pages[pageIndex], [pages, pageIndex]);

  if (typeof document === 'undefined') {
    return null;
  }

  // Unified UX: always render node content as popup.
  const showPopup = true;
  const panelClassName = showPopup
    ? 'pointer-events-auto z-50 w-[94vw] md:w-[70vw] h-[82vh] md:h-[70vh] max-w-[1200px] max-h-[900px] rounded-2xl bg-card shadow-2xl flex flex-col border border-border'
    : 'fixed top-0 right-0 h-full w-[420px] max-w-[90vw] z-50 bg-card shadow-2xl flex flex-col border-l border-border';

  const panelAnimation = showPopup
    ? {
        initial: { y: 24, opacity: 0, scale: 0.97 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: 24, opacity: 0, scale: 0.97 },
      }
    : {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
      };

  return createPortal(
    <AnimatePresence>
      {node && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-foreground/20"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 pointer-events-none">
            <motion.div
              initial={panelAnimation.initial}
              animate={panelAnimation.animate}
              exit={panelAnimation.exit}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className={panelClassName}
            >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: categoryColors[node.category] }}
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {categoryLabels[node.category]}
                </span>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5">
              <div
                className="border-l-[3px] pl-4 mb-5"
                style={{ borderColor: categoryColors[node.category] }}
              >
                <h2 className="text-base font-bold text-foreground leading-snug whitespace-pre-line">
                  {node.label}
                </h2>
              </div>

              {page && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">{page.title}</h3>
                    <span className="text-xs text-muted-foreground">
                      {pageIndex + 1}/{pages.length}
                    </span>
                  </div>

                  {page.blocks.map((block, index) => (
                    <ContentBlock key={`${page.id}-${index}`} block={block} />
                  ))}
                </div>
              )}
            </div>

            {pages.length > 1 && (
              <div className="shrink-0 flex items-center justify-between px-5 py-3 border-t border-border bg-card/80 backdrop-blur">
                <button
                  type="button"
                  onClick={() => setPageIndex((prev) => Math.max(0, prev - 1))}
                  disabled={pageIndex === 0}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-colors"
                >
                  <ChevronLeft size={14} />
                  Trang trước
                </button>
                <button
                  type="button"
                  onClick={() => setPageIndex((prev) => Math.min(pages.length - 1, prev + 1))}
                  disabled={pageIndex === pages.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted transition-colors"
                >
                  Trang sau
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
