import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec3_aNode: MindmapNodeData = {
  id: 'sec3_a',
  label: 'Đặc điểm\nquan hệ DT-TG\nở Việt Nam',
  category: 'quanhe',
  level: 2,
  parentId: 'sec3',
  detailPages: [
    {
      id: 'sec3-a-main',
      title: 'Đặc điểm quan hệ dân tộc - tôn giáo',
      blocks: [
        {
          type: 'text',
          text: 'Quan hệ dân tộc và tôn giáo ở Việt Nam có 3 đặc điểm đặc thù cơ bản, phản ánh lịch sử hình thành quốc gia, nền tảng tín ngưỡng truyền thống và tác động của bối cảnh hội nhập hiện nay.',
        },
      ],
    },
    {
      id: 'sec3-a-feature-1',
      title: 'Đặc điểm thứ nhất',
      blocks: [
        {
          type: 'text',
          text: 'Việt Nam là quốc gia đa dân tộc, đa tôn giáo; quan hệ dân tộc và tôn giáo được thiết lập, củng cố trên cơ sở cộng đồng quốc gia - dân tộc thống nhất. Các tôn giáo ở Việt Nam có truyền thống gắn bó, đồng hành cùng dân tộc, gắn đạo với đời.',
        },
        {
          type: 'text',
          text: 'Mọi công dân không phân biệt dân tộc, tín ngưỡng đều có ý thức về cội nguồn và trách nhiệm bảo vệ Tổ quốc. Dưới sự lãnh đạo của Đảng, quan hệ dân tộc - tôn giáo nhìn chung được giải quyết tốt, không dẫn đến xung đột lớn trong nội bộ quốc gia.',
        },
      ],
    },
    {
      id: 'sec3-a-feature-2',
      title: 'Đặc điểm thứ hai',
      blocks: [
        {
          type: 'text',
          text: 'Quan hệ dân tộc và tôn giáo ở Việt Nam chịu sự chi phối mạnh mẽ bởi tín ngưỡng truyền thống. Tín ngưỡng thờ cúng tổ tiên, anh hùng dân tộc diễn ra ở nhiều cấp độ: gia đình, dòng họ, làng xã đến phạm vi quốc gia.',
        },
        {
          type: 'text',
          text: 'Nền tảng tín ngưỡng này là sợi dây gắn kết cộng đồng, tạo nên nét đặc thù văn hóa Việt Nam, đồng thời chi phối và làm biến đổi các tôn giáo ngoại nhập để phù hợp với bản sắc văn hóa bản địa.',
        },
      ],
    },
    {
      id: 'sec3-a-feature-3',
      title: 'Đặc điểm thứ ba',
      blocks: [
        {
          type: 'text',
          text: 'Các hiện tượng tôn giáo mới có xu hướng phát triển mạnh, tác động đến đời sống cộng đồng và khối đại đoàn kết toàn dân tộc. Quá trình hội nhập làm xuất hiện một số hiện tượng tôn giáo mới và tổ chức đội lốt tôn giáo mang màu sắc mê tín.',
        },
        {
          type: 'text',
          text: 'Một số nhóm lợi dụng truyền đạo trái phép, phát tán tài liệu xuyên tạc, kích động chia rẽ dân tộc - tôn giáo, làm phức tạp tình hình an ninh chính trị, trật tự an toàn xã hội.',
        },
      ],
    },
  ],
};
