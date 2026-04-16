import type { MindmapNodeData } from '@/data/mindmapTypes';
import sec2_2aImg1 from '@/PIC/2.2.1.1.jpg';
import sec2_2aImg2 from '@/PIC/2.2.1.2.jpg';

export const sec2_2aNode: MindmapNodeData = {
  id: 'sec2_2a',
  label: 'Đặc điểm tôn giáo\nở Việt Nam',
  category: 'tongiao',
  level: 3,
  parentId: 'sec2_2',
  detailPages: [
    {
      id: 'sec2-2a-overview',
      title: 'Đặc điểm của tôn giáo ở Việt Nam hiện nay',
      blocks: [
        {
          type: 'text',
          text: 'Việt Nam có 6 đặc điểm tôn giáo nổi bật, phản ánh sự đa dạng tín ngưỡng - tôn giáo, đồng thời đặt ra yêu cầu quản lý nhà nước linh hoạt, tôn trọng tự do tín ngưỡng và giữ vững ổn định xã hội.',
        },
        {
          type: 'image',
          src: sec2_2aImg1,
          alt: 'Đặc điểm tôn giáo ở Việt Nam - hình 1',
          caption: 'Hình minh họa 1 cho nội dung 2.2.1.',
        },
        {
          type: 'image',
          src: sec2_2aImg2,
          alt: 'Đặc điểm tôn giáo ở Việt Nam - hình 2',
          caption: 'Hình minh họa 2 cho nội dung 2.2.1.',
        },
      ],
    },
    {
      id: 'sec2-2a-feature-1-2',
      title: 'Đặc điểm 1-2',
      blocks: [
        {
          type: 'list',
          items: [
            'Thứ nhất: Việt Nam là quốc gia có nhiều tôn giáo. Hiện có 13 tôn giáo được công nhận tư cách pháp nhân và trên 40 tổ chức tôn giáo đã được công nhận, với khoảng 24 triệu tín đồ. Có cả tôn giáo du nhập từ bên ngoài và tôn giáo nội sinh.',
            'Thứ hai: Tôn giáo ở Việt Nam đa dạng, đan xen, chung sống hòa bình; chưa xảy ra xung đột, chiến tranh tôn giáo. Các tôn giáo cùng tồn tại trên một địa bàn, tín đồ tôn trọng niềm tin của nhau; tôn giáo khi du nhập đều chịu ảnh hưởng của bản sắc văn hóa Việt Nam.',
          ],
        },
      ],
    },
    {
      id: 'sec2-2a-feature-3-4',
      title: 'Đặc điểm 3-4',
      blocks: [
        {
          type: 'list',
          items: [
            'Thứ ba: Tín đồ các tôn giáo phần lớn là nhân dân lao động, có lòng yêu nước, tinh thần dân tộc; đa số gắn bó với dân tộc, tham gia xây dựng và bảo vệ Tổ quốc.',
            'Thứ tư: Hàng ngũ chức sắc tôn giáo có vai trò, vị trí quan trọng trong giáo hội, có uy tín và ảnh hưởng với tín đồ. Họ giữ vai trò truyền bá giáo lý, tổ chức sinh hoạt tôn giáo, chăm lo đời sống tâm linh và nhìn chung có xu hướng phát triển tiến bộ.',
          ],
        },
      ],
    },
    {
      id: 'sec2-2a-feature-5-6',
      title: 'Đặc điểm 5-6',
      blocks: [
        {
          type: 'list',
          items: [
            'Thứ năm: Các tôn giáo ở Việt Nam đều có quan hệ với tổ chức, cá nhân tôn giáo ở nước ngoài. Việc giải quyết vấn đề tôn giáo phải kết hợp mở rộng giao lưu, hợp tác quốc tế với bảo đảm độc lập, chủ quyền và ngăn chặn lợi dụng tự do tôn giáo để chống phá.',
            'Thứ sáu: Các hiện tượng tôn giáo mới có xu hướng phát triển mạnh, tác động đến đời sống cộng đồng và khối đại đoàn kết toàn dân tộc. Bên cạnh nhu cầu tín ngưỡng chính đáng, xuất hiện các tổ chức đội lốt tôn giáo mang màu sắc mê tín, xuyên tạc chính sách, gây phức tạp an ninh trật tự, đòi hỏi quản lý chặt chẽ và phù hợp.',
          ],
        },
      ],
    },
  ],
};
