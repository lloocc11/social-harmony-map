import type { MindmapNodeData } from '@/data/mindmapTypes';
import sec1_3aImg from '@/PIC/1.3.1.jpg';

export const sec1_3aNode: MindmapNodeData = {
  id: 'sec1_3a',
  label: 'Đặc điểm\ndân tộc VN',
  category: 'dantoc',
  level: 3,
  parentId: 'sec1_3',
  detailPages: [
    {
      id: 'sec1-3a-main',
      title: 'Đặc điểm dân tộc Việt Nam',
      blocks: [
        {
          type: 'text',
          text: 'Việt Nam là một quốc gia đa tộc người với 54 dân tộc anh em. Bức tranh dân tộc Việt Nam có 6 đặc điểm nổi bật, vừa thể hiện tính đa dạng, vừa tạo nền tảng cho khối đại đoàn kết toàn dân tộc.',
        },
        {
          type: 'image',
          src: sec1_3aImg,
          alt: 'Đặc điểm dân tộc Việt Nam',
          caption: 'Hình minh họa cho nội dung đặc điểm dân tộc Việt Nam.',
        },
      ],
    },
    {
      id: 'sec1-3a-feature-1-2',
      title: 'Đặc điểm 1-2',
      blocks: [
        {
          type: 'list',
          items: [
            'Thứ nhất: Có sự chênh lệch về số dân giữa các tộc người. Dân tộc Kinh chiếm 85,7% dân số, trong khi 53 dân tộc thiểu số chiếm 14,3%. Quy mô dân số giữa các dân tộc thiểu số cũng không đồng đều, có dân tộc trên 1 triệu người nhưng có dân tộc chỉ vài ba trăm người, đòi hỏi chính sách quan tâm đặc biệt để bảo tồn và phát triển.',
            'Thứ hai: Các dân tộc cư trú xen kẽ nhau. Việt Nam là nơi chuyển cư của nhiều dân tộc, tạo nên bản đồ cư trú phân tán, không có dân tộc nào cư trú tập trung duy nhất trên một địa bàn. Điều này vừa thuận lợi cho giao lưu, phát triển văn hóa thống nhất trong đa dạng, vừa có thể nảy sinh mâu thuẫn và bị lợi dụng để chia rẽ.',
          ],
        },
      ],
    },
    {
      id: 'sec1-3a-feature-3-4',
      title: 'Đặc điểm 3-4',
      blocks: [
        {
          type: 'list',
          items: [
            'Thứ ba: Phân bố chủ yếu ở địa bàn có vị trí chiến lược quan trọng. 53 dân tộc thiểu số cư trú trên 3/4 diện tích lãnh thổ, tập trung ở các vùng trọng yếu về kinh tế, an ninh, quốc phòng như biên giới, hải đảo, vùng sâu, vùng xa. Nhiều dân tộc có quan hệ dòng tộc với các nước láng giềng.',
            'Thứ tư: Trình độ phát triển không đều. Có sự chênh lệch khá lớn về trình độ phát triển kinh tế, văn hóa, xã hội giữa các dân tộc. Mặc dù đại bộ phận đã chuyển sang phương thức sản xuất tiến bộ, một số ít vẫn duy trì kinh tế chiếm đoạt. Thu hẹp khoảng cách phát triển là nội dung quan trọng trong đường lối, chính sách của Nhà nước.',
          ],
        },
      ],
    },
    {
      id: 'sec1-3a-feature-5-6',
      title: 'Đặc điểm 5-6',
      blocks: [
        {
          type: 'list',
          items: [
            'Thứ năm: Có truyền thống đoàn kết gắn bó lâu đời. Đặc trưng này hình thành từ yêu cầu hợp sức để cải biến tự nhiên và chống ngoại xâm, tạo ra độ kết dính cao giữa các dân tộc. Đây là sức mạnh, động lực quyết định mọi thắng lợi trong lịch sử và trong sự nghiệp xây dựng, bảo vệ Tổ quốc ngày nay.',
            'Thứ sáu: Mỗi dân tộc có bản sắc văn hóa riêng. Sự đa dạng văn hóa của từng dân tộc góp phần tạo nên nền văn hóa Việt Nam thống nhất trong đa dạng, dựa trên nền tảng chung là lịch sử dựng nước, giữ nước và ý thức quốc gia độc lập.',
          ],
        },
      ],
    },
    {
      id: 'sec1-3a-conclusion',
      title: 'Ý nghĩa đối với chính sách dân tộc',
      blocks: [
        {
          type: 'text',
          text: 'Sáu đặc điểm trên là cơ sở thực tiễn quan trọng để xây dựng và thực hiện chính sách dân tộc đúng đắn, qua đó củng cố khối đại đoàn kết toàn dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội.',
        },
      ],
    },
  ],
};
