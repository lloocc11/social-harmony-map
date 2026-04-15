import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_2bNode: MindmapNodeData = {
  id: 'sec1_2b',
  label: 'Cương lĩnh\ndân tộc',
  category: 'dantoc',
  level: 3,
  parentId: 'sec1_2',
  detailPages: [
    {
      id: 'sec1-2b-main',
      title: 'Nội dung cương lĩnh dân tộc',
      blocks: [
        {
          type: 'list',
          items: ['Các dân tộc hoàn toàn bình đẳng', 'Các dân tộc được quyền tự quyết', 'Liên hiệp công nhân tất cả các dân tộc'],
        },
      ],
    },
  ],
};
