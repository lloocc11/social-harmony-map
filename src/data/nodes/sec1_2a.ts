import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_2aNode: MindmapNodeData = {
  id: 'sec1_2a',
  label: 'Hai xu hướng\nkhách quan',
  category: 'dantoc',
  level: 3,
  parentId: 'sec1_2',
  detailPages: [
    {
      id: 'sec1-2a-main',
      title: 'Hai xu hướng khách quan',
      blocks: [
        {
          type: 'list',
          items: [
            'Xu hướng 1: Các cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập.',
            'Xu hướng 2: Các dân tộc muốn liên hiệp lại với nhau.',
          ],
        },
      ],
    },
  ],
};
