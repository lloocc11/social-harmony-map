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
          type: 'text',
          text: 'Định hướng xử lý quan hệ dân tộc - tôn giáo cần kết hợp giữa phát triển, đối thoại và quản trị pháp luật.',
        },
      ],
    },
    {
      id: 'sec3-b-solutions',
      title: 'Các giải pháp trọng tâm',
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
    {
      id: 'sec3-b-full-legacy',
      title: 'Nội dung đầy đủ (legacy)',
      blocks: [
        {
          type: 'text',
          text: `Giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam hiện nay cần quán triệt các quan điểm chỉ đạo:
1) Củng cố khối đại đoàn kết toàn dân tộc và đoàn kết tôn giáo là nhiệm vụ chiến lược lâu dài.
2) Đặt vấn đề dân tộc - tôn giáo trong khuôn khổ cộng đồng quốc gia thống nhất theo định hướng xã hội chủ nghĩa.
3) Bảo đảm quyền tự do tín ngưỡng, tôn giáo đi đôi với đấu tranh chống lợi dụng dân tộc, tôn giáo vào mục đích chính trị.

Mục tiêu cuối cùng là phát huy mặt tích cực, tăng cường đồng thuận xã hội, giữ vững ổn định chính trị và bảo vệ vững chắc Tổ quốc.`,
        },
      ],
    },
  ],
};
