import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_3Node: MindmapNodeData = {
  id: 'sec1_3',
  label: '1.3 Dân tộc\nvà quan hệ\nở Việt Nam',
  category: 'dantoc',
  level: 2,
  parentId: 'sec1',
  detailPages: [
    {
      id: 'sec1-3-main',
      title: 'Dân tộc tại Việt Nam',
      blocks: [
        {
          type: 'text',
          text: 'Vấn đề dân tộc ở Việt Nam với 54 dân tộc anh em.',
        },
      ],
    },
  ],
  children: ['sec1_3a', 'sec1_3b'],
};
