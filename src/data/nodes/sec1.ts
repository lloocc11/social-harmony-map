import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1Node: MindmapNodeData = {
  id: 'sec1',
  label: '1. Dân tộc\ntrong thời kỳ\nquá độ lên CNXH',
  category: 'dantoc',
  level: 1,
  parentId: 'root',
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'sec1-overview',
      title: 'Khung nội dung phần 1',
      blocks: [
        {
          type: 'text',
          text: 'Phần này phân tích khái niệm dân tộc, quan điểm Mác-Lênin về vấn đề dân tộc, và thực tiễn dân tộc ở Việt Nam.',
        },
      ],
    },
    {
      id: 'sec1-outline',
      title: 'Ba nhánh triển khai',
      blocks: [
        {
          type: 'list',
          items: ['1.1 Khái niệm đặc trưng dân tộc', '1.2 Quan điểm Mác-Lênin', '1.3 Dân tộc và quan hệ ở Việt Nam'],
        },
      ],
    },
  ],
  layout: {
    angle: -45,
    sectorSpread: 64,
  },
  children: ['sec1_1', 'sec1_2', 'sec1_3'],
};
