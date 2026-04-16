import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import type { MindmapNodeData, NodeCategory, NodeContentBlock } from '@/data/mindmapTypes';
import sec1_1Img from '@/PIC/1.1.1.jpg';
import sec1_2Img from '@/PIC/1.2.2.jpg';
import sec1_3aImg from '@/PIC/1.3.1.jpg';
import sec2_1aImg from '@/PIC/2.1.1.jpg';
import sec2_2bImg from '@/PIC/2.2.2.jpg';

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
  const sideImage =
    node?.id === 'sec1_1'
      ? sec1_1Img
      : node?.id === 'sec1_2'
        ? sec1_2Img
        : node?.id === 'sec1_3a'
          ? sec1_3aImg
          : node?.id === 'sec2_1a'
            ? sec2_1aImg
            : node?.id === 'sec2_2b'
              ? sec2_2bImg
          : null;

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

              <div className={sideImage ? 'flex flex-col md:flex-row gap-5 items-start' : ''}>
                <div className={sideImage ? 'flex-1 min-w-0 space-y-5' : 'space-y-5'}>
                  {pages.map((page) => (
                    <section
                      key={page.id}
                      className="rounded-2xl border border-border bg-muted/30 p-5"
                    >
                      <h3 className="text-sm font-semibold text-foreground">{page.title}</h3>
                      <div className="mt-3 space-y-3">
                        {page.blocks.map((block, index) => (
                          <ContentBlock key={`${page.id}-${index}`} block={block} />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                {sideImage && (
                  <aside className="w-full md:w-[320px] lg:w-[360px] shrink-0 md:sticky md:top-4">
                    <div className="rounded-2xl overflow-hidden border border-border bg-card">
                      <img
                        src={sideImage}
                        alt="Hình minh hoạ"
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                  </aside>
                )}
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
