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
      title: 'Khái quát về sự hình thành dân tộc',
      blocks: [
        {
          type: 'text',
          text: `Theo quan điểm của chủ nghĩa Mác - Lênin, dân tộc là quá trình phát triển lâu dài của xã hội loài người, trải qua các hình thức cộng đồng từ thấp đến cao, bao gồm: thị tộc, bộ lạc, bộ tộc, rồi đến dân tộc.
Sự biến đổi của phương thức sản xuất chính là nguyên nhân quyết định sự biến đổi của cộng đồng dân tộc.`,
        },
      ],
    },
    {
      id: 'sec1-1-nation',
      title: 'Dân tộc theo nghĩa rộng (Dân tộc - Quốc gia / Nation)',
      blocks: [
        {
          type: 'text',
          text: `Khái niệm: Dân tộc theo nghĩa rộng dùng để chỉ một cộng đồng người ổn định làm thành nhân dân một nước, có lãnh thổ riêng, nền kinh tế thống nhất, ngôn ngữ chung và có ý thức về sự thống nhất của mình, gắn bó với nhau bởi quyền lợi chính trị, kinh tế, truyền thống văn hóa và truyền thống đấu tranh chung.
Với nghĩa này, khái niệm dân tộc dùng để chỉ một quốc gia (ví dụ: dân tộc Ấn Độ, dân tộc Trung Hoa, dân tộc Việt Nam...).`,
        },
        {
          type: 'list',
          items: [
            'Thứ nhất, có chung một vùng lãnh thổ ổn định: Lãnh thổ là dấu hiệu xác định không gian sinh tồn, vị trí địa lý, thể hiện chủ quyền của một dân tộc. Yếu tố lãnh thổ là thiêng liêng nhất, không có lãnh thổ thì không có khái niệm Tổ quốc, quốc gia.',
            'Thứ hai, có chung một phương thức sinh hoạt kinh tế: Đây là đặc trưng quan trọng nhất, là cơ sở để gắn kết các bộ phận, các thành viên trong dân tộc, tạo nên tính thống nhất, ổn định, bền vững của dân tộc.',
            'Thứ ba, có chung một ngôn ngữ làm công cụ giao tiếp: Mỗi dân tộc có ngôn ngữ riêng (nói và viết), làm công cụ giao tiếp giữa các thành viên trên mọi lĩnh vực. Trong một quốc gia có nhiều cộng đồng tộc người thì bao giờ cũng có một ngôn ngữ chung, thống nhất.',
            'Thứ tư, có chung một nền văn hóa và tâm lý: Văn hóa dân tộc được biểu hiện thông qua tâm lý, tính cách, phong tục, tập quán, lối sống, tạo nên bản sắc riêng của từng dân tộc.',
            'Thứ năm, có chung một nhà nước (nhà nước dân tộc): Các thành viên và cộng đồng tộc người đều chịu sự quản lý của một nhà nước độc lập. Đây là yếu tố phân biệt dân tộc-quốc gia và dân tộc-tộc người.',
          ],
        },
      ],
    },
    {
      id: 'sec1-1-ethnie',
      title: 'Dân tộc theo nghĩa hẹp (Dân tộc - Tộc người / Ethnie)',
      blocks: [
        {
          type: 'text',
          text: `Khái niệm: Dân tộc theo nghĩa hẹp dùng để chỉ một cộng đồng tộc người được hình thành trong lịch sử, có mối liên hệ chặt chẽ và bền vững, có chung ý thức tự giác tộc người, ngôn ngữ và văn hóa.
Với nghĩa này, dân tộc là một bộ phận hay thành phần của quốc gia (ví dụ Việt Nam là quốc gia có 54 dân tộc, tức 54 cộng đồng tộc người).`,
        },
        {
          type: 'list',
          items: [
            'Cộng đồng về ngôn ngữ: Bao gồm ngôn ngữ nói, ngôn ngữ viết hoặc chỉ riêng ngôn ngữ nói; đây là tiêu chí cơ bản để phân biệt các tộc người khác nhau.',
            'Cộng đồng về văn hóa: Bao gồm văn hóa vật thể và phi vật thể, phản ánh truyền thống, lối sống, phong tục, tập quán, tín ngưỡng, tôn giáo của tộc người đó.',
            'Ý thức tự giác tộc người: Đây là tiêu chí quan trọng nhất để phân định một tộc người. Đặc trưng nổi bật là tộc người đó luôn tự ý thức về nguồn gốc, tộc danh của dân tộc mình, cũng như ý thức tự khẳng định sự tồn tại và phát triển của mỗi tộc người.',
          ],
        },
      ],
    },
    {
      id: 'sec1-1-relation',
      title: 'Mối quan hệ giữa dân tộc quốc gia và dân tộc tộc người',
      blocks: [
        {
          type: 'text',
          text: `Thực chất, hai cách hiểu trên về khái niệm dân tộc tuy không đồng nhất nhưng lại gắn bó mật thiết và không tách rời nhau.
Dân tộc quốc gia bao hàm dân tộc tộc người, và dân tộc tộc người là bộ phận hình thành nên dân tộc quốc gia.
Thông thường, những nhân tố hình thành dân tộc tộc người không tách rời với những nhân tố hình thành quốc gia.`,
        },
      ],
    },
  ],
};
