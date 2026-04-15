import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MindmapNodeData, NodeCategory } from '@/data/mindmapData';

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

export default function DetailSidebar({ node, onClose }: Props) {
  return (
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
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 h-full w-[380px] max-w-[85vw] z-50 bg-card shadow-2xl flex flex-col"
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
            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div
                className="border-l-[3px] pl-4 mb-5"
                style={{ borderColor: categoryColors[node.category] }}
              >
                <h2 className="text-base font-bold text-foreground leading-snug whitespace-pre-line">
                  {node.label}
                </h2>
              </div>
              <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {node.detail}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
