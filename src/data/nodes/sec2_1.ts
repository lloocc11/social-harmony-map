import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec2_1Node: MindmapNodeData = {
  id: 'sec2_1',
  label: '2.1 CN Mác-Lênin\nvề tôn giáo',
  category: 'tongiao',
  level: 2,
  parentId: 'sec2',
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'sec2-1-main',
      title: '2.1 Chủ nghĩa Mác - Lênin về tôn giáo',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung phần 2.1 được phân chia thành hai tiểu mục cốt lõi: (1) Bản chất, nguồn gốc và tính chất của tôn giáo; (2) Nguyên tắc giải quyết vấn đề tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội.',
        },
      ],
    },
    {
      id: 'sec2-1-focus',
      title: 'Trọng tâm triển khai',
      blocks: [
        {
          type: 'list',
          items: [
            '2.1.1 Bản chất, nguồn gốc và tính chất của tôn giáo.',
            '2.1.2 Nguyên tắc giải quyết vấn đề tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội.',
          ],
        },
      ],
    },
    {
      id: 'sec2-1-link-note',
      title: 'Liên kết node con',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung chi tiết được triển khai ở hai node con: "Bản chất nguồn gốc tôn giáo" và "Nguyên tắc giải quyết".',
        },
      ],
    },
  ],
  children: ['sec2_1a', 'sec2_1b'],
};
