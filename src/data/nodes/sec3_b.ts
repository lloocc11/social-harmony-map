import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec3_bNode: MindmapNodeData = {
  id: 'sec3_b',
  label: 'Định hướng\ngiải quyết\nDT - TG',
  category: 'quanhe',
  level: 2,
  parentId: 'sec3',
  detailPages: [
    {
      id: 'sec3-b-main',
      title: 'Định hướng giải quyết',
      blocks: [
        {
          type: 'list',
          items: [
            'Tăng cường mối quan hệ tốt đẹp.',
            'Phát huy giá trị tích cực của tôn giáo.',
            'Kiên quyết chống lợi dụng dân tộc, tôn giáo.',
            'Hoàn thiện pháp luật về dân tộc và tôn giáo.',
          ],
        },
      ],
    },
  ],
};
