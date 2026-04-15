import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_3bNode: MindmapNodeData = {
  id: 'sec1_3b',
  label: 'Chính sách\ncủa Đảng',
  category: 'dantoc',
  level: 3,
  parentId: 'sec1_3',
  detailPages: [
    {
      id: 'sec1-3b-main',
      title: 'Chính sách dân tộc của Đảng',
      blocks: [
        {
          type: 'list',
          items: [
            'Bình đẳng, đoàn kết, tương trợ giữa các dân tộc.',
            'Chống tư tưởng dân tộc lớn và dân tộc hẹp hòi.',
            'Phát triển kinh tế - xã hội vùng dân tộc thiểu số.',
          ],
        },
      ],
    },
  ],
};
