import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec2_2Node: MindmapNodeData = {
  id: 'sec2_2',
  label: '2.2 Tôn giáo VN\nvà chính sách\ncủa Đảng',
  category: 'tongiao',
  level: 2,
  parentId: 'sec2',
  detailPages: [
    {
      id: 'sec2-2-main',
      title: 'Tôn giáo Việt Nam và chính sách',
      blocks: [
        {
          type: 'list',
          items: [
            'Việt Nam đa tôn giáo, hơn 26 triệu tín đồ.',
            'Phật giáo, Công giáo, Tin Lành, Cao Đài, Hòa Hảo, Hồi giáo.',
            'Chính sách: tôn trọng, bình đẳng, đoàn kết.',
          ],
        },
      ],
    },
  ],
};
