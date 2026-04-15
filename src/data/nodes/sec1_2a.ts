import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_2aNode: MindmapNodeData = {
  id: 'sec1_2a',
  label: 'Hai xu hướng\nkhách quan',
  category: 'dantoc',
  level: 3,
  parentId: 'sec1_2',
  detailPages: [
    {
      id: 'sec1-2a-main',
      title: 'Hai xu hướng khách quan',
      blocks: [
        {
          type: 'text',
          text: 'Khi nghiên cứu về vấn đề dân tộc, V.I. Lênin đã chỉ ra hai xu hướng khách quan trong sự phát triển quan hệ dân tộc. Hai xu hướng này tồn tại song song và có tác động qua lại lẫn nhau.',
        },
      ],
    },
    {
      id: 'sec1-2a-trend-1',
      title: 'Xu hướng thứ nhất',
      blocks: [
        {
          type: 'text',
          text: 'Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập. Nguyên nhân là do sự thức tỉnh và trưởng thành về ý thức dân tộc, ý thức về quyền sống của mình.',
        },
        {
          type: 'text',
          text: 'Xu hướng này thể hiện rõ qua phong trào đấu tranh giành độc lập của các dân tộc thuộc địa và phụ thuộc nhằm thoát khỏi sự áp bức, bóc lột của đế quốc, thực dân.',
        },
      ],
    },
    {
      id: 'sec1-2a-trend-2',
      title: 'Xu hướng thứ hai',
      blocks: [
        {
          type: 'text',
          text: 'Các dân tộc trong một quốc gia, thậm chí ở nhiều quốc gia, muốn liên hiệp lại với nhau. Sự phát triển mạnh mẽ của lực lượng sản xuất, khoa học công nghệ và sự giao lưu kinh tế, văn hóa trong xã hội tư bản đã làm nảy sinh nhu cầu xóa bỏ các hàng rào ngăn cách, thúc đẩy các dân tộc xích lại gần nhau.',
        },
      ],
    },
    {
      id: 'sec1-2a-dialectic-relation',
      title: 'Quan hệ giữa hai xu hướng trong thời đại ngày nay',
      blocks: [
        {
          type: 'text',
          text: 'Trong thời đại ngày nay, hai xu hướng này luôn có sự tác động qua lại, hỗ trợ lẫn nhau trong tiến trình phát triển của mỗi quốc gia và toàn nhân loại.',
        },
        {
          type: 'text',
          text: 'Việc vi phạm mối quan hệ biện chứng giữa hai xu hướng có thể dẫn tới hậu quả tiêu cực, đặc biệt khi bị các thế lực thù địch lợi dụng để thực hiện "diễn biến hòa bình".',
        },
      ],
    },
  ],
};
