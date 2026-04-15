import type { MindmapNodeData } from '@/data/mindmapTypes';

export const introNode: MindmapNodeData = {
  id: 'intro',
  label: 'A. Mục tiêu\nGiới thiệu',
  category: 'intro',
  level: 1,
  parentId: 'root',
  detailPages: [
    {
      id: 'intro-main',
      title: 'Mục tiêu bài học',
      blocks: [
        {
          type: 'list',
          items: [
            'Nắm vững quan điểm cơ bản của chủ nghĩa Mác-Lênin về dân tộc và tôn giáo.',
            'Hiểu được chính sách dân tộc, tôn giáo của Đảng và Nhà nước Việt Nam.',
            'Vận dụng kiến thức vào thực tiễn xây dựng khối đại đoàn kết toàn dân tộc.',
          ],
        },
      ],
    },
  ],
  layout: {
    angle: -135,
    sectorSpread: 56,
  },
};
