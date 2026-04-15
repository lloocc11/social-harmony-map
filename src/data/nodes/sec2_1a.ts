import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec2_1aNode: MindmapNodeData = {
  id: 'sec2_1a',
  label: 'Bản chất\nnguồn gốc\ntôn giáo',
  category: 'tongiao',
  level: 3,
  parentId: 'sec2_1',
  detailPages: [
    {
      id: 'sec2-1a-main',
      title: 'Bản chất và nguồn gốc tôn giáo',
      blocks: [
        {
          type: 'list',
          items: [
            'Bản chất: phản ánh hư ảo thế giới khách quan.',
            'Nguồn gốc: kinh tế - xã hội, nhận thức, tâm lý.',
            'Tính chất: lịch sử, quần chúng, chính trị.',
          ],
        },
      ],
    },
  ],
};
