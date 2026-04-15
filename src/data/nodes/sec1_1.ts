import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_1Node: MindmapNodeData = {
  id: 'sec1_1',
  label: '1.1 Khái niệm\nđặc trưng\ndân tộc',
  category: 'dantoc',
  level: 2,
  parentId: 'sec1',
  detailPages: [
    {
      id: 'sec1-1-main',
      title: 'Khái niệm dân tộc',
      blocks: [
        {
          type: 'text',
          text: 'Dân tộc là cộng đồng người ổn định, hình thành trong lịch sử, dựa trên cơ sở cộng đồng về ngôn ngữ, lãnh thổ, kinh tế, văn hóa và ý thức tự giác tộc người.',
        },
      ],
    },
  ],
};
