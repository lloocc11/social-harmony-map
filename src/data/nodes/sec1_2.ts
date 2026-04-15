import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_2Node: MindmapNodeData = {
  id: 'sec1_2',
  label: '1.2 CN Mác-Lênin\nvề vấn đề\ndân tộc',
  category: 'dantoc',
  level: 2,
  parentId: 'sec1',
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'sec1-2-main',
      title: '1.2 Chủ nghĩa Mác - Lênin về vấn đề dân tộc',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung cốt lõi của phần này gồm hai vấn đề: Hai xu hướng khách quan của sự phát triển quan hệ dân tộc và Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin.',
        },
      ],
    },
    {
      id: 'sec1-2-part-1',
      title: '1.2.1 Hai xu hướng khách quan của sự phát triển quan hệ dân tộc',
      blocks: [
        {
          type: 'text',
          text: 'Khi nghiên cứu về vấn đề dân tộc, V.I. Lênin đã phát hiện hai xu hướng khách quan trong sự phát triển quan hệ dân tộc.',
        },
        {
          type: 'list',
          items: [
            'Xu hướng thứ nhất: Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập. Nguyên nhân là do sự thức tỉnh và trưởng thành về ý thức dân tộc, ý thức về quyền sống của mình. Xu hướng này thể hiện rõ qua phong trào đấu tranh giành độc lập của các dân tộc thuộc địa và phụ thuộc nhằm thoát khỏi áp bức, bóc lột của đế quốc, thực dân.',
            'Xu hướng thứ hai: Các dân tộc trong một quốc gia, thậm chí ở nhiều quốc gia, muốn liên hiệp lại với nhau. Sự phát triển mạnh mẽ của lực lượng sản xuất, khoa học công nghệ và sự giao lưu kinh tế, văn hóa trong xã hội tư bản đã làm nảy sinh nhu cầu xóa bỏ các hàng rào ngăn cách, thúc đẩy các dân tộc xích lại gần nhau.',
          ],
        },
      ],
    },
    {
      id: 'sec1-2-part-2',
      title: '1.2.2 Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin',
      blocks: [
        {
          type: 'text',
          text: 'Dựa trên quan điểm của C. Mác về mối quan hệ giữa dân tộc và giai cấp, kết hợp phân tích hai xu hướng khách quan và kinh nghiệm thực tiễn từ cách mạng Nga, V.I. Lênin đã khái quát Cương lĩnh dân tộc với ba nguyên tắc cơ bản: "Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc lại".',
        },
        {
          type: 'text',
          text: 'Chi tiết từng nội dung được trình bày ở hai node con: Hai xu hướng khách quan và Cương lĩnh dân tộc.',
        },
      ],
    },
    {
      id: 'sec1-2-relation-note',
      title: 'Lưu ý về mối quan hệ biện chứng',
      blocks: [
        {
          type: 'text',
          text: 'Trong thời đại ngày nay, hai xu hướng khách quan luôn có sự tác động qua lại, hỗ trợ lẫn nhau trong tiến trình phát triển của mỗi quốc gia và toàn nhân loại. Việc vi phạm mối quan hệ biện chứng này có thể dẫn tới hậu quả tiêu cực, đặc biệt khi bị các thế lực thù địch lợi dụng để thực hiện "diễn biến hòa bình".',
        },
      ],
    },
  ],
  layout: {
    childSpread: 34,
  },
  children: ['sec1_2a', 'sec1_2b'],
};
