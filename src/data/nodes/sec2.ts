import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec2Node: MindmapNodeData = {
  id: 'sec2',
  label: '2. Tôn giáo\ntrong thời kỳ\nquá độ lên CNXH',
  category: 'tongiao',
  level: 1,
  parentId: 'root',
  interaction: { mode: 'popup', startPageId: 'sec2-overview' },
  detailPages: [
    {
      id: 'sec2-overview',
      title: 'Khung nội dung phần 2',
      blocks: [
        {
          type: 'text',
          text: 'Phần này trình bày quan điểm Mác-Lênin về tôn giáo và thực tiễn tôn giáo tại Việt Nam.',
        },
      ],
    },
    {
      id: 'sec2-outline',
      title: 'Hai nhánh triển khai',
      blocks: [
        {
          type: 'list',
          items: ['2.1 Quan điểm Mác-Lênin về tôn giáo', '2.2 Tôn giáo Việt Nam và chính sách của Đảng'],
        },
      ],
    },
    {
      id: 'sec2-example-image',
      title: 'Ví dụ trang có hình ảnh',
      blocks: [
        {
          type: 'text',
          text: 'Bạn có thể thay ảnh minh họa này bằng ảnh sơ đồ, ảnh thống kê hoặc ảnh từ slide.',
        },
        {
          type: 'image',
          src: '/images/ton-giao-overview.png',
          alt: 'Minh họa tôn giáo tại Việt Nam',
          caption: 'Thay đường dẫn ảnh trong file node để cập nhật nhanh.',
        },
      ],
    },
  ],
  layout: {
    angle: 45,
    sectorSpread: 62,
  },
  children: ['sec2_1', 'sec2_2'],
};
