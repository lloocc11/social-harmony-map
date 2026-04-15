import { useCallback, useEffect, useState } from 'react';
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
import DetailSidebar from './DetailSidebar';
import { nodeDataMap, allNodeIds, type MindmapNodeData } from '@/data/mindmapData';

const nodeTypes = { radial: RadialNode };

// Sizes per level
const SIZES = [160, 110, 80, 65];

// Radial distances per level
const RADII = [0, 260, 200, 150];

function getSize(level: number) {
  return SIZES[Math.min(level, SIZES.length - 1)];
}

/**
 * Compute radial positions.
 * Root at center (0,0).
 * Level-1 nodes around root at RADII[1].
 * Level-2 nodes around their parent at RADII[2].
 * Level-3 nodes around their parent at RADII[3].
 */
function buildRadialLayout(collapsed: Set<string>) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const positions = new Map<string, { x: number; y: number }>();

  // Branch angles for level-1 nodes (4 branches spread around)
  const branchAngles: Record<string, number> = {
    intro: -120, // upper-left
    sec1: -30,   // upper-right
    sec2: 120,   // lower-right
    sec3: 210,   // lower-left
  };

  function placeNode(id: string, cx: number, cy: number) {
    const data = nodeDataMap[id];
    if (!data) return;
    const size = getSize(data.level);
    // Position is top-left corner, center the circle
    const x = cx - size / 2;
    const y = cy - size / 2;
    positions.set(id, { x: cx, y: cy });

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
    const parentCat = nodeDataMap[parentId]?.category || 'root';
    const childCat = nodeDataMap[childId]?.category || parentCat;
    const cat = childCat;
    const varMap: Record<string, string> = {
      root: 'var(--node-root-bg)',
      intro: 'var(--node-intro-bg)',
      dantoc: 'var(--node-dantoc-bg)',
      tongiao: 'var(--node-tongiao-bg)',
      quanhe: 'var(--node-quanhe-bg)',
    };
    edges.push({
      id: `${parentId}-${childId}`,
      source: parentId,
      target: childId,
      type: 'default',
      style: {
        stroke: `hsl(${varMap[cat] || varMap.root})`,
        strokeWidth: 2.5,
        opacity: 0.5,
      },
    });
  }

  // Place root
  placeNode('root', 0, 0);

  // Place level-1 branches
  const rootChildren = nodeDataMap.root.children || [];
  for (const childId of rootChildren) {
    const angleDeg = branchAngles[childId] ?? 0;
    const angleRad = (angleDeg * Math.PI) / 180;
    const r = RADII[1];
    const cx = Math.cos(angleRad) * r;
    const cy = Math.sin(angleRad) * r;
    placeNode(childId, cx, cy);
    addEdge('root', childId);

    if (collapsed.has(childId)) continue;

    // Place level-2 children
    const l2Children = nodeDataMap[childId]?.children || [];
    const l2Count = l2Children.length;
    const spreadAngle = l2Count <= 2 ? 50 : 40;
    const startAngle = angleDeg - ((l2Count - 1) * spreadAngle) / 2;

    for (let i = 0; i < l2Count; i++) {
      const l2Id = l2Children[i];
      const a2Deg = startAngle + i * spreadAngle;
      const a2Rad = (a2Deg * Math.PI) / 180;
      const r2 = RADII[2];
      const parentPos = positions.get(childId)!;
      const cx2 = parentPos.x + Math.cos(a2Rad) * r2;
      const cy2 = parentPos.y + Math.sin(a2Rad) * r2;
      placeNode(l2Id, cx2, cy2);
      addEdge(childId, l2Id);

      if (collapsed.has(l2Id)) continue;

      // Place level-3 children
      const l3Children = nodeDataMap[l2Id]?.children || [];
      const l3Count = l3Children.length;
      const spreadAngle3 = l3Count <= 2 ? 45 : 35;
      const startAngle3 = a2Deg - ((l3Count - 1) * spreadAngle3) / 2;

      for (let j = 0; j < l3Count; j++) {
        const l3Id = l3Children[j];
        const a3Deg = startAngle3 + j * spreadAngle3;
        const a3Rad = (a3Deg * Math.PI) / 180;
        const r3 = RADII[3];
        const p2 = positions.get(l2Id)!;
        const cx3 = p2.x + Math.cos(a3Rad) * r3;
        const cy3 = p2.y + Math.sin(a3Rad) * r3;
        placeNode(l3Id, cx3, cy3);
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

  useEffect(() => {
    const { nodes: layoutNodes, edges: layoutEdges } = buildRadialLayout(collapsed);
    const withHandlers = layoutNodes.map((n) => ({
      ...n,
      data: {
        ...n.data,
        onToggle: () => {
          setCollapsed((prev) => {
            const next = new Set(prev);
            next.has(n.id) ? next.delete(n.id) : next.add(n.id);
            return next;
          });
        },
        onClick: () => {
          if (n.id !== 'root') setSelectedNode(nodeDataMap[n.id] || null);
        },
      },
    }));
    setNodes(withHandlers);
    setEdges(layoutEdges);
    setTimeout(() => fitView({ padding: 0.15, duration: 400 }), 50);
  }, [collapsed, setNodes, setEdges, fitView]);

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
        fitView
        fitViewOptions={{ padding: 0.15 }}
        minZoom={0.15}
        maxZoom={2.5}
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{ type: 'default' }}
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
