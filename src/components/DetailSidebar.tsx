import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MindmapNodeData, NodeCategory } from '@/data/mindmapData';

const categoryLabels: Record<NodeCategory, string> = {
  root: 'Tổng quan',
  intro: 'Giới thiệu',
  dantoc: 'Dân tộc',
  tongiao: 'Tôn giáo',
  quanhe: 'Quan hệ dân tộc - tôn giáo',
};

const categoryBorders: Record<NodeCategory, string> = {
  root: 'border-l-node-root',
  intro: 'border-l-node-intro',
  dantoc: 'border-l-node-dantoc',
  tongiao: 'border-l-node-tongiao',
  quanhe: 'border-l-node-quanhe',
};

interface Props {
  node: MindmapNodeData | null;
  onClose: () => void;
}

export default function DetailSidebar({ node, onClose }: Props) {
  return (
    <AnimatePresence>
      {node && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="fixed top-0 right-0 h-full w-[400px] max-w-[90vw] z-50 bg-card border-l border-border shadow-2xl flex flex-col"
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {categoryLabels[node.category]}
            </span>
            <button onClick={onClose} className="p-1 rounded hover:bg-muted transition-colors">
              <X size={18} className="text-muted-foreground" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
            <div className={`border-l-4 ${categoryBorders[node.category]} pl-4 mb-5`}>
              <h2 className="text-lg font-bold text-foreground leading-tight whitespace-pre-line">
                {node.label}
              </h2>
            </div>
            <div className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line">
              {node.detail}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
