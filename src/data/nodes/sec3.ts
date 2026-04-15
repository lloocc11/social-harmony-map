import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec3Node: MindmapNodeData = {
  id: 'sec3',
  label: '3. Quan hệ\ndân tộc và\ntôn giáo ở VN',
  category: 'quanhe',
  level: 1,
  parentId: 'root',
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'sec3-main',
      title: '3. Quan hệ dân tộc và tôn giáo ở Việt Nam',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung phần 3 được chia thành hai nội dung chính: đặc điểm của quan hệ dân tộc - tôn giáo ở Việt Nam và định hướng giải quyết của Đảng, Nhà nước hiện nay.',
        },
      ],
    },
    {
      id: 'sec3-outline',
      title: 'Hai nội dung chính',
      blocks: [
        {
          type: 'list',
          items: [
            '3.1 Đặc điểm quan hệ dân tộc và tôn giáo ở Việt Nam.',
            '3.2 Định hướng giải quyết mối quan hệ dân tộc và tôn giáo hiện nay.',
          ],
        },
      ],
    },
    {
      id: 'sec3-link-note',
      title: 'Liên kết node con',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung chi tiết được triển khai ở hai node con: "Đặc điểm quan hệ DT-TG ở Việt Nam" và "Định hướng giải quyết DT - TG".',
        },
      ],
    },
  ],
  layout: {
    angle: 135,
    sectorSpread: 60,
  },
  children: ['sec3_a', 'sec3_b'],
};
