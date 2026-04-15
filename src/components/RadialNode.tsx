import { memo, type CSSProperties } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { NodeCategory } from '@/data/mindmapData';

export interface RadialNodeData {
  label: string;
  category: NodeCategory;
  level: number;
  hasChildren: boolean;
  collapsed: boolean;
  onToggle: () => void;
  onClick: () => void;
  size: number;
}

const categoryVars: Record<NodeCategory, { bg: string; fg: string }> = {
  root:    { bg: 'var(--node-root-bg)',    fg: 'var(--node-root-fg)' },
  intro:   { bg: 'var(--node-intro-bg)',   fg: 'var(--node-intro-fg)' },
  dantoc:  { bg: 'var(--node-dantoc-bg)',  fg: 'var(--node-dantoc-fg)' },
  tongiao: { bg: 'var(--node-tongiao-bg)', fg: 'var(--node-tongiao-fg)' },
  quanhe:  { bg: 'var(--node-quanhe-bg)',  fg: 'var(--node-quanhe-fg)' },
};

const RadialNode = memo(({ data }: NodeProps) => {
  const d = data as unknown as RadialNodeData;
  const vars = categoryVars[d.category];
  const isRoot = d.level === 0;
  const isLeaf = d.level >= 2;
  const size = d.size;

  const circleStyle: CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: isLeaf ? 'hsl(var(--node-leaf-bg))' : `hsl(${vars.bg})`,
    color: isLeaf ? 'hsl(var(--node-leaf-fg))' : `hsl(${vars.fg})`,
    border: isLeaf ? '2px solid hsl(var(--node-leaf-border))' : '3px solid rgba(255,255,255,0.15)',
    boxShadow: isRoot
      ? `0 8px 32px hsl(${vars.bg} / 0.4), 0 0 0 4px hsl(${vars.bg} / 0.15)`
      : isLeaf
        ? '0 2px 8px rgba(0,0,0,0.08)'
        : `0 4px 16px hsl(${vars.bg} / 0.3)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    padding: isRoot ? 16 : isLeaf ? 8 : 12,
  };

  const fontSize = isRoot ? 13 : d.level === 1 ? 11 : d.level === 2 ? 10 : 9;
  const fontWeight = isRoot ? 700 : d.level === 1 ? 600 : 500;

  return (
    <div
      style={circleStyle}
      className="hover:scale-110 hover:z-10 group"
      onClick={d.onClick}
    >
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0 !w-0 !h-0" />

      <div className="flex flex-col items-center gap-0.5">
        <span
          style={{ fontSize, fontWeight, lineHeight: 1.25, textAlign: 'center' }}
          className="whitespace-pre-line"
        >
          {d.label}
        </span>
        {d.hasChildren && (
          <button
            onClick={(e) => { e.stopPropagation(); d.onToggle(); }}
            className="mt-1 opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ fontSize: 9 }}
          >
            {d.collapsed ? '＋' : '−'}
          </button>
        )}
      </div>
    </div>
  );
});

RadialNode.displayName = 'RadialNode';
export default RadialNode;
