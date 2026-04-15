import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_1Node: MindmapNodeData = {
  id: 'sec1_1',
  label: '1.1 Khái niệm\nđặc trưng\ndân tộc',
  category: 'dantoc',
  level: 2,
  parentId: 'sec1',
  detailPages: [
    {
      id: 'sec1-1-main',
      title: 'Khái niệm dân tộc',
      blocks: [
        {
          type: 'text',
          text: 'Dân tộc là cộng đồng người ổn định, hình thành trong lịch sử, dựa trên cơ sở cộng đồng về ngôn ngữ, lãnh thổ, kinh tế, văn hóa và ý thức tự giác tộc người.',
        },
      ],
    },
    {
      id: 'sec1-1-core-features',
      title: 'Các đặc trưng cơ bản',
      blocks: [
        {
          type: 'list',
          items: ['Ngôn ngữ chung', 'Lãnh thổ ổn định', 'Đời sống kinh tế thống nhất', 'Nền văn hóa và ý thức tự giác cộng đồng'],
        },
      ],
    },
    {
      id: 'sec1-1-full-legacy',
      title: 'Nội dung đầy đủ (legacy)',
      blocks: [
        {
          type: 'text',
          text: `Dân tộc là quá trình phát triển dài của xã hội loài người, trải qua các hình thức cộng đồng từ thấp đến cao: thị tộc -> bộ lạc -> dân tộc.
Sự biến đổi của phương thức sản xuất là nguyên nhân quyết định sự biến đổi của cộng đồng dân tộc.

Dân tộc được hiểu theo hai nghĩa:
1. Theo nghĩa rộng (Nation):
Là một cộng đồng người ổn định, có lãnh thổ chung, ngôn ngữ chung, gắn bó bởi quyền lợi chính trị - kinh tế, truyền thống văn hóa và đấu tranh dựng nước, giữ nước.
-> Dân tộc ở đây đồng nghĩa với quốc gia (toàn bộ nhân dân của một nước).

2. Theo nghĩa hẹp (Ethnic):
Là cộng đồng người có các đặc trưng cơ bản:
- Cộng đồng về ngôn ngữ (ngôn ngữ mẹ đẻ hoặc ngôn ngữ chung)
- Cộng đồng về văn hóa (văn hóa vật thể và phi vật thể, phong tục, tập quán, tín ngưỡng...)
- Cộng đồng về ý thức dân tộc (ý thức về danh dự, tên gọi dân tộc) <- Tiêu chí quan trọng nhất

Kết luận: Hai cách hiểu này có mối quan hệ mật thiết, không tách rời nhau. Dân tộc quốc gia bao hàm dân tộc người, và dân tộc người là bộ phận cấu thành của dân tộc quốc gia.`,
        },
      ],
    },
  ],
};
