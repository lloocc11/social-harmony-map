import { BaseEdge, getBezierPath, type EdgeProps } from '@xyflow/react';

type MindmapEdgeData = {
  startColor?: string;
  endColor?: string;
};

export default function MindmapEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps) {
  const edgeData = (data ?? {}) as MindmapEdgeData;
  const startColor = edgeData.startColor ?? 'hsl(var(--node-root-bg))';
  const endColor = edgeData.endColor ?? startColor;
  const gradientId = `mindmap-edge-${id.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    curvature: 0.33,
  });

  return (
    <>
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1={sourceX}
          y1={sourceY}
          x2={targetX}
          y2={targetY}
        >
          <stop offset="0%" stopColor={startColor} stopOpacity={0.82} />
          <stop offset="100%" stopColor={endColor} stopOpacity={0.96} />
        </linearGradient>
      </defs>

      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: `url(#${gradientId})`,
          strokeWidth: 5,
          strokeLinecap: 'round',
          opacity: 0.9,
          filter: 'drop-shadow(0 2px 4px rgba(15, 23, 42, 0.24))',
        }}
      />
    </>
  );
}
