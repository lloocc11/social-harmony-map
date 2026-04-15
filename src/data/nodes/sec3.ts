import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec3Node: MindmapNodeData = {
  id: 'sec3',
  label: '3. Quan hệ\ndân tộc và\ntôn giáo ở VN',
  category: 'quanhe',
  level: 1,
  parentId: 'root',
  detailPages: [
    {
      id: 'sec3-main',
      title: 'Quan hệ dân tộc - tôn giáo',
      blocks: [
        {
          type: 'text',
          text: 'Mối quan hệ giữa dân tộc và tôn giáo ở Việt Nam và hướng giải quyết.',
        },
      ],
    },
  ],
  layout: {
    angle: 135,
    sectorSpread: 60,
  },
  children: ['sec3_a', 'sec3_b'],
};
