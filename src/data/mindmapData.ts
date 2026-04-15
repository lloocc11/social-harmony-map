import type { MindmapNodeData } from '@/data/mindmapTypes';
import { nodes } from '@/data/nodes';

export type { MindmapNodeData, NodeCategory } from '@/data/mindmapTypes';

export const nodeDataMap: Record<string, MindmapNodeData> = nodes.reduce(
  (acc, node) => {
    acc[node.id] = node;
    return acc;
  },
  {} as Record<string, MindmapNodeData>
);

export const allNodeIds = nodes.map((node) => node.id);
