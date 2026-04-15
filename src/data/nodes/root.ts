import type { MindmapNodeData } from '@/data/mindmapTypes';

export const rootNode: MindmapNodeData = {
  id: 'root',
  label: 'Chương 6\nVấn đề dân tộc\nvà tôn giáo',
  category: 'root',
  level: 0,
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'overview',
      title: 'Tổng quan chương',
      blocks: [
        {
          type: 'text',
          text: 'Chương 6 trình bày những vấn đề lý luận và thực tiễn về dân tộc, tôn giáo và mối quan hệ giữa chúng trong thời kỳ quá độ lên chủ nghĩa xã hội.',
        },
        {
          type: 'list',
          items: ['Khung lý luận Mác-Lênin', 'Thực tiễn Việt Nam', 'Định hướng chính sách và giải pháp'],
        },
      ],
    },
  ],
  layout: {
    radius: 0,
  },
  children: ['intro', 'sec1', 'sec2', 'sec3'],
};
