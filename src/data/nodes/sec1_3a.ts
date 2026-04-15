import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_3aNode: MindmapNodeData = {
  id: 'sec1_3a',
  label: 'Đặc điểm\ndân tộc VN',
  category: 'dantoc',
  level: 3,
  parentId: 'sec1_3',
  detailPages: [
    {
      id: 'sec1-3a-main',
      title: 'Đặc điểm dân tộc Việt Nam',
      blocks: [
        {
          type: 'list',
          items: [
            '54 dân tộc, Kinh chiếm ~86%.',
            'Truyền thống đoàn kết lâu đời.',
            'Dân tộc thiểu số ở miền núi, vùng sâu.',
            'Phát triển không đồng đều.',
          ],
        },
      ],
    },
  ],
};
