import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec2_2Node: MindmapNodeData = {
  id: 'sec2_2',
  label: '2.2 Tôn giáo VN\nvà chính sách\ncủa Đảng',
  category: 'tongiao',
  level: 2,
  parentId: 'sec2',
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'sec2-2-main',
      title: '2.2 Tôn giáo ở Việt Nam và chính sách hiện nay',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung phần 2.2 được chia thành hai nội dung chính: (1) Đặc điểm tôn giáo ở Việt Nam; (2) Chính sách của Đảng, Nhà nước Việt Nam đối với tín ngưỡng, tôn giáo hiện nay.',
        },
      ],
    },
    {
      id: 'sec2-2-points',
      title: 'Thông tin trọng tâm',
      blocks: [
        {
          type: 'list',
          items: [
            '2.2.1 Đặc điểm tôn giáo ở Việt Nam: 6 đặc điểm nổi bật.',
            '2.2.2 Chính sách tôn giáo của Đảng, Nhà nước: 5 nội dung cơ bản.',
          ],
        },
      ],
    },
    {
      id: 'sec2-2-link-note',
      title: 'Liên kết node con',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung chi tiết được triển khai ở hai node con: "Đặc điểm tôn giáo ở Việt Nam" và "Chính sách của Đảng, Nhà nước Việt Nam đối với tín ngưỡng, tôn giáo hiện nay".',
        },
      ],
    },
  ],
  children: ['sec2_2a', 'sec2_2b'],
};
