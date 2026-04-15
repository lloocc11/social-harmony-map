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
          text: 'Trong tiến trình lịch sử, vấn đề dân tộc thường vận động theo hai xu hướng song song và có thể đan xen.',
        },
      ],
    },
    {
      id: 'sec1-2a-trend-1',
      title: 'Xu hướng thứ nhất',
      blocks: [
        {
          type: 'text',
          text: 'Các cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập.',
        },
      ],
    },
    {
      id: 'sec1-2a-trend-2',
      title: 'Xu hướng thứ hai',
      blocks: [
        {
          type: 'text',
          text: 'Các dân tộc muốn liên hiệp lại với nhau trên cơ sở lợi ích phát triển chung.',
        },
      ],
    },
    {
      id: 'sec1-2a-full-legacy',
      title: 'Nội dung đầy đủ (legacy)',
      blocks: [
        {
          type: 'text',
          text: `Xu hướng thứ nhất:
Các cộng đồng dân tộc muốn tách ra để hình thành dân tộc độc lập.
-> Thể hiện qua ý thức dân tộc thức tỉnh, đòi tự do, bình đẳng và phồn vinh dân tộc.
-> Biểu hiện rõ nét trong phong trào giải phóng dân tộc chống thực dân, đế quốc.

Xu hướng thứ hai:
Các dân tộc muốn xích lại gần nhau, liên hiệp và hợp tác.
-> Do sự phát triển của lực lượng sản xuất, khoa học - công nghệ và giao lưu kinh tế - văn hóa.
-> Thể hiện trong xu thế toàn cầu hóa, hợp tác khu vực và quốc tế.

Trong thời đại ngày nay:

Xu hướng 1: Đòi độc lập, tự do, bình đẳng dân tộc.
Xu hướng 2: Hợp tác, liên minh giữa các dân tộc trên mọi lĩnh vực.

Mối quan hệ giữa hai xu hướng:
Hai xu hướng có quan hệ biện chứng, tác động qua lại lẫn nhau. Việc vi phạm một xu hướng sẽ dẫn đến mâu thuẫn gay gắt với xu hướng kia. Hiện nay, cả hai xu hướng đều bị các thế lực thù địch lợi dụng để thực hiện chiến lược "diễn biến hòa bình".`,
        },
      ],
    },
  ],
};
