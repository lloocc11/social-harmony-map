import type { MindmapNodeData } from '@/data/mindmapTypes';
import sec2_1aImg from '@/PIC/2.1.1.jpg';

export const sec2_1aNode: MindmapNodeData = {
  id: 'sec2_1a',
  label: 'Bản chất\nnguồn gốc\ntôn giáo',
  category: 'tongiao',
  level: 3,
  parentId: 'sec2_1',
  detailPages: [
    {
      id: 'sec2-1a-main',
      title: '2.1.1 Bản chất, nguồn gốc và tính chất của tôn giáo',
      blocks: [
        {
          type: 'text',
          text: 'Theo chủ nghĩa Mác - Lênin, tôn giáo là hiện tượng xã hội - văn hóa do con người sáng tạo ra. Việc nhận thức đúng bản chất, nguồn gốc và tính chất của tôn giáo là cơ sở để giải quyết đúng đắn vấn đề tôn giáo trong thực tiễn.',
        },
        {
          type: 'image',
          src: sec2_1aImg,
          alt: 'Bản chất và nguồn gốc tôn giáo',
          caption: 'Hình minh họa cho nội dung 2.1.1.',
        },
      ],
    },
    {
      id: 'sec2-1a-essence',
      title: 'Về bản chất của tôn giáo',
      blocks: [
        {
          type: 'text',
          text: 'Tôn giáo là một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan. Thông qua sự phản ánh này, các lực lượng tự nhiên và xã hội trở thành những lực lượng siêu nhiên, thần bí chi phối cuộc sống con người.',
        },
        {
          type: 'text',
          text: 'Dưới góc độ thực thể xã hội, tôn giáo được nhận diện qua các tiêu chí: có niềm tin sâu sắc vào đấng siêu nhiên, có hệ thống giáo thuyết (giáo lý, luật lệ, lễ nghi), cơ sở thờ tự, tổ chức nhân sự quản lý và hệ thống tín đồ đông đảo.',
        },
        {
          type: 'text',
          text: 'Khẳng định quan trọng là: tôn giáo do con người sáng tạo vì mục đích, lợi ích và phản ánh ước mơ của mình; nhưng sau đó con người lại có thể bị lệ thuộc vào tôn giáo. Mọi quan niệm và thiết chế tôn giáo đều chịu sự quy định của sản xuất vật chất và quan hệ kinh tế, và biến đổi theo cơ sở kinh tế - xã hội.',
        },
      ],
    },
    {
      id: 'sec2-1a-distinguish',
      title: 'Phân biệt tôn giáo, tín ngưỡng và mê tín dị đoan',
      blocks: [
        {
          type: 'list',
          items: [
            'Tín ngưỡng: hệ thống niềm tin, sự ngưỡng mộ trước các lực lượng thần thánh; ví dụ thờ cúng tổ tiên, thờ anh hùng dân tộc.',
            'Mê tín dị đoan: niềm tin mê muội, viển vông, phi khoa học, dễ dẫn đến hành vi cực đoan, sai lệch và gây tổn hại cho cá nhân, cộng đồng.',
            'Cần phân biệt rõ để vừa tôn trọng nhu cầu tinh thần chính đáng, vừa đấu tranh với các biểu hiện lệch chuẩn và phản khoa học.',
          ],
        },
      ],
    },
    {
      id: 'sec2-1a-origins',
      title: 'Về nguồn gốc của tôn giáo',
      blocks: [
        {
          type: 'list',
          items: [
            'Nguồn gốc tự nhiên, kinh tế - xã hội: Trong xã hội nguyên thủy, con người yếu đuối trước tự nhiên nên gán cho tự nhiên sức mạnh thần bí; trong xã hội có giai cấp, sự áp bức, bóc lột khiến quần chúng trông chờ vào sự giải phóng từ lực lượng siêu nhiên.',
            'Nguồn gốc nhận thức: Khoảng cách giữa điều "biết" và "chưa biết" khi nhận thức còn giới hạn là mảnh đất cho tôn giáo tồn tại; thực chất là sự tuyệt đối hóa mặt chủ thể nhận thức, biến nội dung khách quan thành cái siêu nhiên.',
            'Nguồn gốc tâm lý: Sợ hãi trước tự nhiên, xã hội, bệnh tật, rủi ro hoặc mong muốn bình yên khi làm việc lớn dễ đưa con người đến với tôn giáo; kể cả những tình cảm tích cực như biết ơn, tôn kính người có công cũng có thể là nền tảng hình thành niềm tin tôn giáo.',
          ],
        },
      ],
    },
    {
      id: 'sec2-1a-characteristics',
      title: 'Về tính chất của tôn giáo',
      blocks: [
        {
          type: 'list',
          items: [
            'Tính lịch sử: Tôn giáo có quá trình hình thành, tồn tại và biến đổi để thích nghi với từng giai đoạn lịch sử, từng chế độ chính trị - xã hội. Khi khoa học, giáo dục phát triển, tôn giáo dần mất đi vị trí tuyệt đối trong nhận thức xã hội.',
            'Tính quần chúng: Tôn giáo phổ biến với số lượng tín đồ rất đông, là nơi sinh hoạt văn hóa, tinh thần của nhiều cộng đồng; phản ánh khát vọng về một xã hội tự do, bình đẳng, bác ái nên có sức thu hút rộng.',
            'Tính chính trị: Xuất hiện rõ khi xã hội phân chia giai cấp đối kháng. Tôn giáo mang tính chính trị tiêu cực khi bị giai cấp thống trị lợi dụng để phục vụ lợi ích bóc lột, chống lại lực lượng lao động và sự tiến bộ xã hội.',
          ],
        },
      ],
    },
  ],
};
