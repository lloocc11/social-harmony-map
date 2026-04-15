import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  BackgroundVariant,
} from '@xyflow/react';
import MindmapNode from './MindmapNode';
import DetailSidebar from './DetailSidebar';
import { nodeDataMap, allNodeIds, type MindmapNodeData } from '@/data/mindmapData';

const nodeTypes = { mindmap: MindmapNode };

const X_GAP = [0, 360, 320, 280, 260];
const Y_GAP = [0, 120, 80, 65, 55];

function buildLayout(collapsed: Set<string>) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  let yOffset = 0;

  function traverse(id: string, depth: number, parentId?: string): number {
    const data = nodeDataMap[id];
    if (!data) return 0;

    const x = depth === 0 ? 0 : X_GAP.slice(0, depth + 1).reduce((a, b) => a + b, 0);
    const children = data.children || [];
    const isCollapsed = collapsed.has(id);
    const visibleChildren = isCollapsed ? [] : children;

    const childMidpoints: number[] = [];
    for (const childId of visibleChildren) {
      const startY = yOffset;
      const h = traverse(childId, depth + 1, id);
      childMidpoints.push(startY + h / 2);
    }

    let nodeY: number;
    if (childMidpoints.length > 0) {
      nodeY = (childMidpoints[0] + childMidpoints[childMidpoints.length - 1]) / 2;
    } else {
      nodeY = yOffset;
      yOffset += Y_GAP[Math.min(depth, Y_GAP.length - 1)];
    }

    nodes.push({
      id,
      type: 'mindmap',
      position: { x, y: nodeY },
      data: {
        label: data.label,
        category: data.category,
        level: data.level,
        hasChildren: children.length > 0,
        collapsed: isCollapsed,
      },
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${id}`,
        source: parentId,
        target: id,
        type: 'smoothstep',
        style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1.5, opacity: 0.5 },
      });
    }

    return visibleChildren.length > 0
      ? yOffset - (nodeY - (childMidpoints.length > 0 ? 0 : 0))
      : Y_GAP[Math.min(depth, Y_GAP.length - 1)];
  }

  traverse('root', 0);
  return { nodes, edges };
}

export default function MindmapFlow() {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [selectedNode, setSelectedNode] = useState<MindmapNodeData | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const { nodes: layoutNodes, edges: layoutEdges } = buildLayout(collapsed);

    const withHandlers = layoutNodes.map((n) => ({
      ...n,
      data: {
        ...n.data,
        onToggle: () => {
          setCollapsed((prev) => {
            const next = new Set(prev);
            if (next.has(n.id)) next.delete(n.id);
            else next.add(n.id);
            return next;
          });
        },
        onClick: () => setSelectedNode(nodeDataMap[n.id] || null),
      },
    }));

    setNodes(withHandlers);
    setEdges(layoutEdges);
  }, [collapsed, setNodes, setEdges]);

  const expandAll = useCallback(() => setCollapsed(new Set()), []);
  const collapseAll = useCallback(() => {
    const ids = allNodeIds.filter((id) => (nodeDataMap[id]?.children?.length ?? 0) > 0);
    setCollapsed(new Set(ids));
  }, []);

  return (
    <div className="flex-1 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        minZoom={0.2}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} className="!bg-background" />
        <Controls className="!bg-card !border-border !shadow-lg [&>button]:!bg-card [&>button]:!border-border [&>button]:!text-foreground" />
      </ReactFlow>

      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button onClick={expandAll} className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:brightness-110 transition-all">
          Mở rộng tất cả
        </button>
        <button onClick={collapseAll} className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:brightness-110 transition-all">
          Thu gọn tất cả
        </button>
      </div>

      <DetailSidebar node={selectedNode} onClose={() => setSelectedNode(null)} />
    </div>
  );
}
