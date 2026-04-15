import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec2_1Node: MindmapNodeData = {
  id: 'sec2_1',
  label: '2.1 CN Mác-Lênin\nvề tôn giáo',
  category: 'tongiao',
  level: 2,
  parentId: 'sec2',
  detailPages: [
    {
      id: 'sec2-1-main',
      title: 'Quan điểm Mác-Lênin về tôn giáo',
      blocks: [
        {
          type: 'text',
          text: 'Phân tích bản chất, nguồn gốc, tính chất tôn giáo và nguyên tắc giải quyết.',
        },
      ],
    },
    {
      id: 'sec2-1-focus',
      title: 'Trọng tâm triển khai',
      blocks: [
        {
          type: 'list',
          items: ['Bản chất và nguồn gốc tôn giáo', 'Nguyên tắc giải quyết vấn đề tôn giáo'],
        },
      ],
    },
  ],
  children: ['sec2_1a', 'sec2_1b'],
};
