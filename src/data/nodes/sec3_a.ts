import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec3_aNode: MindmapNodeData = {
  id: 'sec3_a',
  label: 'Đặc điểm\nquan hệ DT-TG\nở Việt Nam',
  category: 'quanhe',
  level: 2,
  parentId: 'sec3',
  detailPages: [
    {
      id: 'sec3-a-main',
      title: 'Đặc điểm quan hệ dân tộc - tôn giáo',
      blocks: [
        {
          type: 'list',
          items: [
            'Đa dân tộc, đa tôn giáo.',
            'Quan hệ gắn bó chặt chẽ trong lịch sử.',
            'Tín ngưỡng đan xen với văn hóa dân tộc.',
          ],
        },
      ],
    },
  ],
};
