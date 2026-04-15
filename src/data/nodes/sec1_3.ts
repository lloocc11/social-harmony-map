import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_3Node: MindmapNodeData = {
  id: 'sec1_3',
  label: '1.3 Dân tộc\nvà quan hệ\nở Việt Nam',
  category: 'dantoc',
  level: 2,
  parentId: 'sec1',
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'sec1-3-main',
      title: '1.3 Dân tộc và quan hệ dân tộc ở Việt Nam',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung phần 1.3 được trình bày qua hai khía cạnh chính: Đặc điểm dân tộc Việt Nam và Quan điểm, chính sách của Đảng, Nhà nước về vấn đề dân tộc.',
        },
      ],
    },
    {
      id: 'sec1-3-focus',
      title: 'Trọng tâm thảo luận',
      blocks: [
        {
          type: 'list',
          items: [
            '1.3.1 Đặc điểm dân tộc Việt Nam (6 đặc điểm nổi bật).',
            '1.3.2 Quan điểm của Đảng và chính sách của Nhà nước về vấn đề dân tộc.',
          ],
        },
      ],
    },
    {
      id: 'sec1-3-link-note',
      title: 'Liên kết node con',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung chi tiết được triển khai ở hai node con: "Đặc điểm dân tộc VN" và "Chính sách của Đảng".',
        },
      ],
    },
  ],
  children: ['sec1_3a', 'sec1_3b'],
};
