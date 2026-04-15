import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec2_1aNode: MindmapNodeData = {
  id: 'sec2_1a',
  label: 'Bản chất\nnguồn gốc\ntôn giáo',
  category: 'tongiao',
  level: 3,
  parentId: 'sec2_1',
  detailPages: [
    {
      id: 'sec2-1a-main',
      title: 'Bản chất và nguồn gốc tôn giáo',
      blocks: [
        {
          type: 'text',
          text: 'Tôn giáo được nhìn nhận vừa là hiện tượng xã hội - lịch sử, vừa phản ánh nhu cầu tinh thần của quần chúng trong bối cảnh cụ thể.',
        },
      ],
    },
    {
      id: 'sec2-1a-points',
      title: 'Nội dung cốt lõi',
      blocks: [
        {
          type: 'list',
          items: [
            'Bản chất: phản ánh hư ảo thế giới khách quan.',
            'Nguồn gốc: kinh tế - xã hội, nhận thức, tâm lý.',
            'Tính chất: lịch sử, quần chúng, chính trị.',
          ],
        },
      ],
    },
    {
      id: 'sec2-1a-full-legacy',
      title: 'Nội dung đầy đủ (legacy)',
      blocks: [
        {
          type: 'text',
          text: `Thứ nhất: Bản chất của tôn giáo
Theo chủ nghĩa Mác - Lênin, tôn giáo là một hình thái ý thức xã hội, là sự phản ánh hư ảo hiện thực khách quan vào trong đầu óc con người. Ph.Ăngghen viết: "Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh hư ảo - vào trong đầu óc của con người - của những lực lượng ở bên ngoài chi phối cuộc sống hàng ngày của họ; chỉ là sự phản ánh trong đó những lực lượng ở trần thế đã mang hình thức những lực lượng siêu trần thế".
Tôn giáo là một thực thể xã hội, với các tiêu chí cơ bản sau:

Có niềm tin sâu sắc vào đấng siêu nhiên, thần linh (niềm tin tôn giáo).
Có hệ thống giáo thuyết (giáo lý, giáo luật, lễ nghi).
Có hệ thống cơ sở thờ tự.
Có tổ chức và nhân sự quản lý việc đạo.
Có hệ thống tín đồ đông đảo.

Chủ nghĩa Mác - Lênin khẳng định: Tôn giáo là sản phẩm do con người sáng tạo ra, phản ánh ước mơ, nguyện vọng và những điều kiện sống nhất định của họ. Tuy nhiên, con người lại bị lệ thuộc vào tôn giáo mà họ tạo ra. Sản xuất vật chất và quan hệ kinh tế là nhân tố quyết định sự tồn tại và phát triển của tôn giáo.
Về thế giới quan, tôn giáo mang tính duy tâm, khác với thế giới quan duy vật biện chứng của chủ nghĩa Mác - Lênin. Tuy nhiên, những người cộng sản không xem thường hay trấn áp nhu cầu tín ngưỡng của nhân dân, mà luôn tôn trọng quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo.

Thứ hai: Nguồn gốc của tôn giáo
Tôn giáo có ba nguồn gốc chính: nguồn gốc tự nhiên và kinh tế - xã hội; nguồn gốc nhận thức; nguồn gốc tâm lý.

Thứ ba: Tính chất của tôn giáo
Tôn giáo có tính lịch sử, tính quần chúng và tính chính trị, biến đổi theo điều kiện xã hội cụ thể.`,
        },
      ],
    },
  ],
};
