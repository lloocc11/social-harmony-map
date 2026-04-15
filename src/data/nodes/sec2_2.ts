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
          type: 'text',
          text: 'Thực tiễn tôn giáo Việt Nam thể hiện sự đa dạng, đồng thời đặt ra yêu cầu bảo đảm quyền tự do tín ngưỡng đi đôi với ổn định xã hội.',
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
            'Việt Nam đa tôn giáo, hơn 26 triệu tín đồ.',
            'Phật giáo, Công giáo, Tin Lành, Cao Đài, Hòa Hảo, Hồi giáo.',
            'Chính sách: tôn trọng, bình đẳng, đoàn kết.',
          ],
        },
      ],
    },
  ],
  children: ['sec2_2a', 'sec2_2b'],
};
