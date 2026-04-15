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
          type: 'text',
          text: 'Phần mở đầu giúp người học xác định trọng tâm kiến thức và cách vận dụng vào thực tiễn xã hội Việt Nam.',
        },
      ],
    },
    {
      id: 'intro-goals',
      title: 'Ba mục tiêu cụ thể',
      blocks: [
        {
          type: 'list',
          items: [
            'Nắm vững quan điểm cơ bản của chủ nghĩa Mác-Lênin về dân tộc và tôn giáo.',
            'Hiểu chính sách dân tộc, tôn giáo của Đảng và Nhà nước Việt Nam.',
            'Biết vận dụng vào xây dựng khối đại đoàn kết toàn dân tộc.',
          ],
        },
      ],
    },
    {
      id: 'intro-presentation-note',
      title: 'Gợi ý thuyết trình',
      blocks: [
        {
          type: 'list',
          items: [
            'Mở bằng ví dụ thực tiễn về đa dân tộc - đa tôn giáo ở Việt Nam.',
            'Liên hệ ngắn với bối cảnh địa phương hoặc tin tức hiện tại.',
            'Kết thúc phần mở đầu bằng câu hỏi định hướng cho người nghe.',
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
