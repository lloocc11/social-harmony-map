import { useCallback, useEffect, useState } from 'react';
import { Presentation } from 'lucide-react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  type Node,
  type Edge,
  BackgroundVariant,
} from '@xyflow/react';
import RadialNode from './RadialNode';
import MindmapEdge from './MindmapEdge';
import DetailSidebar from './DetailSidebar';
import PresentationMode from './PresentationMode';
import { nodeDataMap, allNodeIds, type MindmapNodeData } from '@/data/mindmapData';

const nodeTypes = { radial: RadialNode };
const edgeTypes = { mindmap: MindmapEdge };

// Sizes per level
const SIZES = [210, 150, 124, 110];

// Radial distances used by the sector-based radial layout.
const L1_RADIUS = 360;
const L2_RADIUS = 620;
const L3_OFFSET = 195;

const categoryColorMap: Record<string, string> = {
  root: 'hsl(var(--node-root-bg))',
  intro: 'hsl(var(--node-intro-bg))',
  dantoc: 'hsl(var(--node-dantoc-bg))',
  tongiao: 'hsl(var(--node-tongiao-bg))',
  quanhe: 'hsl(var(--node-quanhe-bg))',
};

function distributedAngles(count: number, centerAngle: number, spreadAngle: number) {
  if (count <= 0) return [];
  if (count === 1) return [centerAngle];

  const start = centerAngle - spreadAngle / 2;
  const step = spreadAngle / (count - 1);
  return Array.from({ length: count }, (_, i) => start + i * step);
}

function getSize(level: number) {
  return SIZES[Math.min(level, SIZES.length - 1)];
}

/**
 * Compute a sector-based radial layout.
 * Root stays at center (0,0), level-1 nodes are equally spaced by 90 degrees,
 * level-2 nodes use outer rings inside each sector, and level-3 nodes extend
 * outward from level-2 to keep each branch readable and separated.
 */
function buildRadialLayout(collapsed: Set<string>) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const positions = new Map<string, { x: number; y: number }>();
  const angles = new Map<string, number>();

  const rootChildren = nodeDataMap.root.children || [];

  const defaultBranchAngles = rootChildren.reduce<Record<string, number>>((acc, id, idx) => {
    acc[id] = -135 + idx * 90;
    return acc;
  }, {});

  function placeNode(id: string, cx: number, cy: number, angleDeg?: number) {
    const data = nodeDataMap[id];
    if (!data) return;
    const size = getSize(data.level);
    // Position is top-left corner, center the circle
    const x = cx - size / 2;
    const y = cy - size / 2;
    positions.set(id, { x: cx, y: cy });
    if (typeof angleDeg === 'number') {
      angles.set(id, angleDeg);
    }

    nodes.push({
      id,
      type: 'radial',
      position: { x, y },
      data: {
        label: data.label,
        category: data.category,
        level: data.level,
        hasChildren: (data.children?.length ?? 0) > 0,
        collapsed: collapsed.has(id),
        size,
      },
    });
  }

  function addEdge(parentId: string, childId: string) {
    const parentCat = nodeDataMap[parentId]?.category ?? 'root';
    const childCat = nodeDataMap[childId]?.category ?? parentCat;
    edges.push({
      id: `${parentId}-${childId}`,
      source: parentId,
      target: childId,
      type: 'mindmap',
      data: {
        startColor: categoryColorMap[parentCat] ?? categoryColorMap.root,
        endColor: categoryColorMap[childCat] ?? categoryColorMap.root,
      },
    });
  }

  // Place root
  placeNode('root', 0, 0, 0);

  // Place level-1 branches
  for (const childId of rootChildren) {
    const angleDeg = nodeDataMap[childId]?.layout?.angle ?? defaultBranchAngles[childId] ?? 0;
    const angleRad = (angleDeg * Math.PI) / 180;
    const l1Radius = nodeDataMap[childId]?.layout?.radius ?? L1_RADIUS;
    const cx = Math.cos(angleRad) * l1Radius;
    const cy = Math.sin(angleRad) * l1Radius;
    placeNode(childId, cx, cy, angleDeg);
    addEdge('root', childId);

    if (collapsed.has(childId)) continue;

    // Keep each branch within its own angular sector to avoid inter-branch overlap.
    const l2Children = nodeDataMap[childId]?.children || [];
    const l2Spread = nodeDataMap[childId]?.layout?.sectorSpread ?? 62;
    const l2Angles = distributedAngles(l2Children.length, angleDeg, l2Spread);

    for (let i = 0; i < l2Children.length; i++) {
      const l2Id = l2Children[i];
      const a2Deg = l2Angles[i] ?? angleDeg;
      const a2Rad = (a2Deg * Math.PI) / 180;

      // Place level-2 nodes on an outer ring for more breathing room.
      const l2Radius = nodeDataMap[l2Id]?.layout?.radius ?? L2_RADIUS;
      const cx2 = Math.cos(a2Rad) * l2Radius;
      const cy2 = Math.sin(a2Rad) * l2Radius;
      placeNode(l2Id, cx2, cy2, a2Deg);
      addEdge(childId, l2Id);

      if (collapsed.has(l2Id)) continue;

      // Place level-3 children
      const l3Children = nodeDataMap[l2Id]?.children || [];
      const baseL3Angle = angles.get(l2Id) ?? a2Deg;
      const l3Spread = nodeDataMap[l2Id]?.layout?.childSpread ?? 34;
      const l3Angles = distributedAngles(l3Children.length, baseL3Angle, l3Spread);

      for (let j = 0; j < l3Children.length; j++) {
        const l3Id = l3Children[j];
        const a3Deg = l3Angles[j] ?? baseL3Angle;
        const a3Rad = (a3Deg * Math.PI) / 180;
        const p2 = positions.get(l2Id);
        if (!p2) continue;

        // Push level-3 nodes outward from their level-2 parent.
        const l3Offset = nodeDataMap[l3Id]?.layout?.radius ?? L3_OFFSET;
        const cx3 = p2.x + Math.cos(a3Rad) * l3Offset;
        const cy3 = p2.y + Math.sin(a3Rad) * l3Offset;
        placeNode(l3Id, cx3, cy3, a3Deg);
        addEdge(l2Id, l3Id);
      }
    }
  }

  return { nodes, edges };
}

function MindmapInner() {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [selectedNode, setSelectedNode] = useState<MindmapNodeData | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { fitView } = useReactFlow();

  const toggleNodeCollapse = useCallback((id: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const openNodeDetails = useCallback((id: string) => {
    // DetailSidebar handles both sidebar and popup modes based on node.interaction.mode.
    setSelectedNode(nodeDataMap[id] || null);
  }, []);

  useEffect(() => {
    const { nodes: layoutNodes, edges: layoutEdges } = buildRadialLayout(collapsed);
    const withHandlers = layoutNodes.map((n) => ({
      ...n,
      data: {
        ...n.data,
        onToggle: () => toggleNodeCollapse(n.id),
        onClick: () => openNodeDetails(n.id),
      },
    }));
    setNodes(withHandlers);
    setEdges(layoutEdges);
    setTimeout(() => fitView({ padding: 0.15, duration: 400 }), 50);
  }, [collapsed, setNodes, setEdges, fitView, toggleNodeCollapse, openNodeDetails]);

  const expandAll = useCallback(() => setCollapsed(new Set()), []);
  const collapseAll = useCallback(() => {
    const ids = allNodeIds.filter((id) => (nodeDataMap[id]?.children?.length ?? 0) > 0);
    setCollapsed(new Set(ids));
  }, []);
  const resetView = useCallback(() => {
    setCollapsed(new Set());
    setTimeout(() => fitView({ padding: 0.15, duration: 500 }), 100);
  }, [fitView]);

  return (
    <div className="flex-1 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.15}
        maxZoom={2.5}
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{ type: 'mindmap' }}
      >
        <Background variant={BackgroundVariant.Dots} gap={30} size={1} className="!bg-background" />
        <Controls
          showInteractive={false}
          className="!bg-card !border-border !shadow-lg [&>button]:!bg-card [&>button]:!border-border [&>button]:!text-foreground"
        />
      </ReactFlow>

      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button onClick={resetView} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-card text-foreground border border-border shadow-sm hover:bg-muted transition-all">
          Reset View
        </button>
        <button onClick={expandAll} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-card text-foreground border border-border shadow-sm hover:bg-muted transition-all">
          Mở rộng
        </button>
        <button onClick={collapseAll} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-card text-foreground border border-border shadow-sm hover:bg-muted transition-all">
          Thu gọn
        </button>
      </div>

      <DetailSidebar node={selectedNode} onClose={() => setSelectedNode(null)} />
    </div>
  );
}

export default function MindmapFlow() {
  return (
    <ReactFlowProvider>
      <MindmapInner />
    </ReactFlowProvider>
  );
}
