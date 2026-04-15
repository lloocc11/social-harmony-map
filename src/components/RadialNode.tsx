import { memo, useMemo, useState, type CSSProperties } from 'react';
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

function getNodePadding(level: number) {
  if (level === 0) return 16;
  if (level >= 2) return 8;
  return 12;
}

function getFontSize(level: number) {
  if (level === 0) return 14;
  if (level === 1) return 12;
  if (level === 2) return 10;
  return 9;
}

function getFontWeight(level: number) {
  if (level === 0) return 700;
  if (level === 1) return 600;
  return 500;
}

function getShadow(bg: string, level: number, hovered: boolean) {
  const isRoot = level === 0;
  const isLeaf = level >= 2;

  if (isRoot) {
    return hovered
      ? `0 18px 48px hsl(${bg} / 0.58), 0 0 0 8px hsl(${bg} / 0.28)`
      : `0 12px 38px hsl(${bg} / 0.46), 0 0 0 5px hsl(${bg} / 0.2)`;
  }

  if (isLeaf) {
    return hovered ? '0 10px 26px rgba(0, 0, 0, 0.2)' : '0 4px 14px rgba(0, 0, 0, 0.12)';
  }

  return hovered
    ? `0 14px 34px hsl(${bg} / 0.45)`
    : `0 8px 22px hsl(${bg} / 0.34)`;
}

const RadialNode = memo(({ data }: NodeProps) => {
  const d = data as unknown as RadialNodeData;
  const vars = categoryVars[d.category];
  const isLeaf = d.level >= 2;
  const size = d.size;
  const [isHovered, setIsHovered] = useState(false);
  const nodeShadow = useMemo(() => getShadow(vars.bg, d.level, isHovered), [d.level, isHovered, vars.bg]);

  const circleStyle: CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: isLeaf ? 'hsl(var(--node-leaf-bg))' : `hsl(${vars.bg})`,
    color: isLeaf ? 'hsl(var(--node-leaf-fg))' : `hsl(${vars.fg})`,
    border: isLeaf ? '2px solid hsl(var(--node-leaf-border))' : '3px solid rgba(255,255,255,0.15)',
    boxShadow: nodeShadow,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
    transition: 'transform 0.22s ease, box-shadow 0.22s ease',
    padding: getNodePadding(d.level),
  };

  const fontSize = getFontSize(d.level);
  const fontWeight = getFontWeight(d.level);

  return (
    <button
      type="button"
      style={circleStyle}
      className="group"
      aria-label={d.label.replaceAll('\n', ' ')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={d.onClick}
    >
      {/* Keep handles at node center so edges are rendered center-to-center. */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          width: 1,
          height: 1,
          pointerEvents: 'none',
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          width: 1,
          height: 1,
          pointerEvents: 'none',
        }}
      />

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
    </button>
  );
});

RadialNode.displayName = 'RadialNode';
export default RadialNode;
