import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { NodeCategory } from '@/data/mindmapData';

const categoryStyles: Record<NodeCategory, string> = {
  root: 'bg-node-root text-node-root-fg shadow-lg shadow-node-root/30 min-w-[280px]',
  intro: 'bg-node-intro text-node-intro-fg shadow-md shadow-node-intro/20',
  dantoc: 'bg-node-dantoc text-node-dantoc-fg shadow-md shadow-node-dantoc/20',
  tongiao: 'bg-node-tongiao text-node-tongiao-fg shadow-md shadow-node-tongiao/20',
  quanhe: 'bg-node-quanhe text-node-quanhe-fg shadow-md shadow-node-quanhe/20',
};

const levelSizes: Record<number, string> = {
  0: 'text-base font-bold px-6 py-5',
  1: 'text-sm font-semibold px-5 py-4',
  2: 'text-xs font-medium px-4 py-3',
  3: 'text-xs font-medium px-3 py-2.5',
};

export type MindmapNodeType = {
  label: string;
  category: NodeCategory;
  level: number;
  hasChildren: boolean;
  collapsed: boolean;
  onToggle: () => void;
  onClick: () => void;
};

const MindmapNode = memo(({ data }: NodeProps) => {
  const d = data as unknown as MindmapNodeType;
  const style = categoryStyles[d.category];
  const size = levelSizes[d.level] || levelSizes[3];
  const isLeaf = !d.hasChildren;

  return (
    <div
      className={`rounded-lg border border-white/10 cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-110 ${style} ${size}`}
      onClick={d.onClick}
    >
      {d.level > 0 && <Handle type="target" position={Position.Left} className="!bg-transparent !border-0 !w-2 !h-2" />}
      
      <div className="flex items-start gap-2">
        {d.hasChildren && (
          <button
            onClick={(e) => { e.stopPropagation(); d.onToggle(); }}
            className="mt-0.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            {d.collapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
        <span className="whitespace-pre-line leading-snug">{d.label}</span>
      </div>

      {!isLeaf && <Handle type="source" position={Position.Right} className="!bg-transparent !border-0 !w-2 !h-2" />}
      {isLeaf && d.level > 0 && null}
    </div>
  );
});

MindmapNode.displayName = 'MindmapNode';
export default MindmapNode;
