import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec2_1bNode: MindmapNodeData = {
  id: 'sec2_1b',
  label: 'Nguyên tắc\ngiải quyết',
  category: 'tongiao',
  level: 3,
  parentId: 'sec2_1',
  detailPages: [
    {
      id: 'sec2-1b-main',
      title: 'Nguyên tắc giải quyết vấn đề tôn giáo',
      blocks: [
        {
          type: 'list',
          items: [
            'Tôn trọng quyền tự do tín ngưỡng.',
            'Khắc phục ảnh hưởng tiêu cực qua phát triển KT-XH.',
            'Phân biệt mặt chính trị và tư tưởng.',
          ],
        },
      ],
    },
  ],
};
