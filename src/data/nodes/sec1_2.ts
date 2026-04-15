import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_2Node: MindmapNodeData = {
  id: 'sec1_2',
  label: '1.2 CN Mác-Lênin\nvề vấn đề\ndân tộc',
  category: 'dantoc',
  level: 2,
  parentId: 'sec1',
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'sec1-2-main',
      title: 'Quan điểm Mác-Lênin',
      blocks: [
        {
          type: 'text',
          text: 'Quan điểm Mác-Lênin bao gồm hai xu hướng khách quan và Cương lĩnh dân tộc.',
        },
      ],
    },
  ],
  layout: {
    childSpread: 34,
  },
  children: ['sec1_2a', 'sec1_2b'],
};
