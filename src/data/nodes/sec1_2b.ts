import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_2bNode: MindmapNodeData = {
  id: 'sec1_2b',
  label: 'Cương lĩnh\ndân tộc',
  category: 'dantoc',
  level: 3,
  parentId: 'sec1_2',
  detailPages: [
    {
      id: 'sec1-2b-main',
      title: 'Nội dung cương lĩnh dân tộc',
      blocks: [
        {
          type: 'text',
          text: 'Cương lĩnh dân tộc tập trung vào ba nguyên tắc cốt lõi để giải quyết vấn đề dân tộc trong cách mạng vô sản.',
        },
      ],
    },
    {
      id: 'sec1-2b-principles',
      title: 'Ba nguyên tắc',
      blocks: [
        {
          type: 'list',
          items: ['Các dân tộc hoàn toàn bình đẳng', 'Các dân tộc được quyền tự quyết', 'Liên hiệp công nhân tất cả các dân tộc'],
        },
      ],
    },
    {
      id: 'sec1-2b-full-legacy',
      title: 'Nội dung đầy đủ (legacy)',
      blocks: [
        {
          type: 'text',
          text: `Cương lĩnh dân tộc của V.I. Lênin
(Theo quan điểm chủ nghĩa Mác - Lênin)
V.I. Lênin đã khái quát Cương lĩnh dân tộc thành ba nội dung cơ bản:

1. Các dân tộc hoàn toàn bình đẳng

Đây là quyền thiêng liêng của mọi dân tộc, không phân biệt lớn nhỏ, trình độ phát triển cao hay thấp.
Các dân tộc có quyền lợi và nghĩa vụ ngang nhau trên tất cả các lĩnh vực: chính trị, kinh tế, văn hóa.
Không dân tộc nào được áp bức, bóc lột dân tộc khác.
Phải xóa bỏ áp bức giai cấp để thực hiện bình đẳng dân tộc và đấu tranh chống chủ nghĩa dân tộc cực đoan, phân biệt chủng tộc.

2. Các dân tộc được quyền tự quyết

Quyền tự quyết định vận mệnh của dân tộc mình, tự lựa chọn chế độ chính trị và con đường phát triển.
Bao gồm quyền tách ra thành lập quốc gia độc lập hoặc tự nguyện liên hiệp với các quốc gia khác trên cơ sở bình đẳng.
Quyền này đặc biệt nhấn mạnh với các dân tộc bị áp bức và phụ thuộc.
Tuy nhiên, phải xuất phát từ lợi ích giai cấp công nhân và lợi ích chung của dân tộc, không được lợi dụng để chia rẽ hoặc can thiệp nội bộ.

3. Liên hiệp công nhân tất cả các dân tộc

Thể hiện sự thống nhất giữa giải phóng dân tộc và giải phóng giai cấp.
Là sự gắn bó chặt chẽ giữa chủ nghĩa yêu nước với chủ nghĩa quốc tế vô sản.
Đây là nền tảng để đoàn kết toàn dân lao động các dân tộc trong cuộc đấu tranh chống đế quốc và xây dựng chủ nghĩa xã hội.

Ý nghĩa:
Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin là cơ sở lý luận quan trọng để các Đảng Cộng sản vận dụng trong đấu tranh giành độc lập dân tộc và xây dựng chủ nghĩa xã hội.`,
        },
      ],
    },
  ],
};
