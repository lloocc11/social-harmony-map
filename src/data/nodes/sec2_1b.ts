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
          type: 'text',
          text: 'Giải quyết vấn đề tôn giáo cần dựa trên nguyên tắc tôn trọng quyền tự do tín ngưỡng và gắn với mục tiêu phát triển xã hội bền vững.',
        },
      ],
    },
    {
      id: 'sec2-1b-principles',
      title: 'Các nguyên tắc',
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
    {
      id: 'sec2-1b-full-legacy',
      title: 'Nội dung đầy đủ (legacy)',
      blocks: [
        {
          type: 'text',
          text: `Thứ nhất: Bản chất của tôn giáo
Theo chủ nghĩa Mác - Lênin, tôn giáo là một hình thái ý thức xã hội, là sự phản ánh hư ảo hiện thực khách quan vào trong đầu óc con người.

Thứ hai: Nguồn gốc của tôn giáo
Tôn giáo có ba nguồn gốc chính:
- Nguồn gốc tự nhiên và kinh tế - xã hội.
- Nguồn gốc nhận thức.
- Nguồn gốc tâm lý.

Thứ ba: Tính chất của tôn giáo
Tính lịch sử, tính quần chúng và tính chính trị.

Nguyên tắc xử lý vấn đề tôn giáo cần thống nhất giữa tôn trọng tự do tín ngưỡng và quản trị xã hội bằng pháp luật, tránh lợi dụng tôn giáo vào mục đích chia rẽ.`,
        },
      ],
    },
  ],
};
