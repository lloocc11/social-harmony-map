export type NodeCategory = 'root' | 'intro' | 'dantoc' | 'tongiao' | 'quanhe';

export interface MindmapNodeData {
  id: string;
  label: string;
  category: NodeCategory;
  level: number; // 0=root, 1=branch, 2=sub, 3=leaf
  parentId?: string;
  detail: string;
  children?: string[];
}

export const nodeDataMap: Record<string, MindmapNodeData> = {
  root: {
    id: 'root',
    label: 'Chương 6\nVấn đề dân tộc\nvà tôn giáo',
    category: 'root',
    level: 0,
    detail: 'Chương 6 trình bày những vấn đề lý luận và thực tiễn về dân tộc, tôn giáo và mối quan hệ giữa chúng trong thời kỳ quá độ lên chủ nghĩa xã hội.',
    children: ['intro', 'sec1', 'sec2', 'sec3'],
  },
  intro: {
    id: 'intro',
    label: 'A. Mục tiêu\nGiới thiệu',
    category: 'intro',
    level: 1,
    parentId: 'root',
    detail: '• Nắm vững quan điểm cơ bản của chủ nghĩa Mác-Lênin về dân tộc và tôn giáo.\n• Hiểu được chính sách dân tộc, tôn giáo của Đảng và Nhà nước Việt Nam.\n• Vận dụng kiến thức vào thực tiễn xây dựng khối đại đoàn kết toàn dân tộc.',
  },
  sec1: {
    id: 'sec1',
    label: '1. Dân tộc\ntrong thời kỳ\nquá độ lên CNXH',
    category: 'dantoc',
    level: 1,
    parentId: 'root',
    detail: 'Phần này phân tích khái niệm dân tộc, quan điểm Mác-Lênin về vấn đề dân tộc, và thực tiễn dân tộc ở Việt Nam.',
    children: ['sec1_1', 'sec1_2', 'sec1_3'],
  },
  sec1_1: {
    id: 'sec1_1',
    label: '1.1 Khái niệm\nđặc trưng\ndân tộc',
    category: 'dantoc',
    level: 2,
    parentId: 'sec1',
    detail:
      'Dân tộc là quá trình phát triển dài của xã hội loài người, trải qua các hình thức cộng đồng từ thấp đến cao: thị tộc → bộ lạc → dân tộc.\n' +
      'Sự biến đổi của phương thức sản xuất là nguyên nhân quyết định sự biến đổi của cộng đồng dân tộc.\n' +
      '\n' +
      'Dân tộc được hiểu theo hai nghĩa:\n' +
      '1. Theo nghĩa rộng (Nation):\n' +
      'Là một cộng đồng người ổn định, có lãnh thổ chung, ngôn ngữ chung, gắn bó bởi quyền lợi chính trị - kinh tế, truyền thống văn hóa và đấu tranh dựng nước, giữ nước.\n' +
      '→ Dân tộc ở đây đồng nghĩa với quốc gia (toàn bộ nhân dân của một nước).\n' +
      '\n' +
      '2. Theo nghĩa hẹp (Ethnic):\n' +
      'Là cộng đồng người có các đặc trưng cơ bản:\n' +
      '- Cộng đồng về ngôn ngữ (ngôn ngữ mẹ đẻ hoặc ngôn ngữ chung)\n' +
      '- Cộng đồng về văn hóa (văn hóa vật thể và phi vật thể, phong tục, tập quán, tín ngưỡng…)\n' +
      '- Cộng đồng về ý thức dân tộc (ý thức về danh dự, tên gọi dân tộc) ← Tiêu chí quan trọng nhất\n' +
      '\n' +
      'Kết luận: Hai cách hiểu này có mối quan hệ mật thiết, không tách rời nhau. Dân tộc quốc gia bao hàm dân tộc người, và dân tộc người là bộ phận cấu thành của dân tộc quốc gia.',
  },
  sec1_2: {
    id: 'sec1_2',
    label: '1.2 CN Mác-Lênin\nvề vấn đề\ndân tộc',
    category: 'dantoc',
    level: 2,
    parentId: 'sec1',
    detail: 'Quan điểm Mác-Lênin bao gồm hai xu hướng khách quan và Cương lĩnh dân tộc.',
    children: ['sec1_2a', 'sec1_2b'],
  },
  sec1_2a: {
    id: 'sec1_2a',
    label: 'Hai xu hướng\nkhách quan',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_2',
    detail:
      'Xu hướng thứ nhất:\n' +
      'Các cộng đồng dân tộc muốn tách ra để hình thành dân tộc độc lập.\n' +
      '→ Thể hiện qua ý thức dân tộc thức tỉnh, đòi tự do, bình đẳng và phồn vinh dân tộc.\n' +
      '→ Biểu hiện rõ nét trong phong trào giải phóng dân tộc chống thực dân, đế quốc.\n' +
      '\n' +
      'Xu hướng thứ hai:\n' +
      'Các dân tộc muốn xích lại gần nhau, liên hiệp và hợp tác.\n' +
      '→ Do sự phát triển của lực lượng sản xuất, khoa học - công nghệ và giao lưu kinh tế - văn hóa.\n' +
      '→ Thể hiện trong xu thế toàn cầu hóa, hợp tác khu vực và quốc tế.\n' +
      '\n' +
      'Trong thời đại ngày nay:\n' +
      '\n' +
      'Xu hướng 1: Đòi độc lập, tự do, bình đẳng dân tộc.\n' +
      'Xu hướng 2: Hợp tác, liên minh giữa các dân tộc trên mọi lĩnh vực.\n' +
      '\n' +
      'Mối quan hệ giữa hai xu hướng:\n' +
      'Hai xu hướng có quan hệ biện chứng, tác động qua lại lẫn nhau. Việc vi phạm một xu hướng sẽ dẫn đến mâu thuẫn gay gắt với xu hướng kia. Hiện nay, cả hai xu hướng đều bị các thế lực thù địch lợi dụng để thực hiện chiến lược “diễn biến hòa bình”.',
  },
  sec1_2b: {
    id: 'sec1_2b',
    label: 'Cương lĩnh\ndân tộc',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_2',
    detail:
      'Cương lĩnh dân tộc của V.I. Lênin\n' +
      '(Theo quan điểm chủ nghĩa Mác - Lênin)\n' +
      'V.I. Lênin đã khái quát Cương lĩnh dân tộc thành ba nội dung cơ bản:\n' +
      '\n' +
      '1. Các dân tộc hoàn toàn bình đẳng\n' +
      '\n' +
      'Đây là quyền thiêng liêng của mọi dân tộc, không phân biệt lớn nhỏ, trình độ phát triển cao hay thấp.\n' +
      'Các dân tộc có quyền lợi và nghĩa vụ ngang nhau trên tất cả các lĩnh vực: chính trị, kinh tế, văn hóa.\n' +
      'Không dân tộc nào được áp bức, bóc lột dân tộc khác.\n' +
      'Phải xóa bỏ áp bức giai cấp để thực hiện bình đẳng dân tộc và đấu tranh chống chủ nghĩa dân tộc cực đoan, phân biệt chủng tộc.\n' +
      '\n' +
      '2. Các dân tộc được quyền tự quyết\n' +
      '\n' +
      'Quyền tự quyết định vận mệnh của dân tộc mình, tự lựa chọn chế độ chính trị và con đường phát triển.\n' +
      'Bao gồm quyền tách ra thành lập quốc gia độc lập hoặc tự nguyện liên hiệp với các quốc gia khác trên cơ sở bình đẳng.\n' +
      'Quyền này đặc biệt nhấn mạnh với các dân tộc bị áp bức và phụ thuộc.\n' +
      'Tuy nhiên, phải xuất phát từ lợi ích giai cấp công nhân và lợi ích chung của dân tộc, không được lợi dụng để chia rẽ hoặc can thiệp nội bộ.\n' +
      '\n' +
      '3. Liên hiệp công nhân tất cả các dân tộc\n' +
      '\n' +
      'Thể hiện sự thống nhất giữa giải phóng dân tộc và giải phóng giai cấp.\n' +
      'Là sự gắn bó chặt chẽ giữa chủ nghĩa yêu nước với chủ nghĩa quốc tế vô sản.\n' +
      'Đây là nền tảng để đoàn kết toàn dân lao động các dân tộc trong cuộc đấu tranh chống đế quốc và xây dựng chủ nghĩa xã hội.\n' +
      '\n' +
      'Ý nghĩa:\n' +
      'Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin là cơ sở lý luận quan trọng để các Đảng Cộng sản vận dụng trong đấu tranh giành độc lập dân tộc và xây dựng chủ nghĩa xã hội.',
  },
  sec1_3: {
    id: 'sec1_3',
    label: '1.3 Dân tộc\nvà quan hệ\nở Việt Nam',
    category: 'dantoc',
    level: 2,
    parentId: 'sec1',
    detail: 'Vấn đề dân tộc ở Việt Nam với 54 dân tộc anh em.',
    children: ['sec1_3a', 'sec1_3b'],
  },
  sec1_3a: {
    id: 'sec1_3a',
    label: 'Đặc điểm\ndân tộc VN',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_3',
    detail:
      'Đặc điểm dân tộc Việt Nam\n' +
      'Việt Nam là một quốc gia đa dân tộc với 54 dân tộc anh em, có những đặc điểm nổi bật sau:\n' +
      'Thứ nhất: Sự chênh lệch về số dân giữa các tộc người\n' +
      'Việt Nam có 54 dân tộc, trong đó dân tộc Kinh chiếm 85,7% dân số (hơn 73,5 triệu người), 53 dân tộc thiểu số chiếm 14,3% (hơn 12,2 triệu người).\n' +
      'Tỷ lệ dân số giữa các dân tộc rất không đồng đều: có dân tộc trên 1 triệu người, nhưng cũng có dân tộc chỉ vài trăm người. Việc phát triển số dân hợp lý cho các dân tộc rất ít người là nội dung được Đảng và Nhà nước quan tâm đặc biệt.\n' +
      'Thứ hai: Các dân tộc cư trú xen kẽ nhau\n' +
      'Các dân tộc ở Việt Nam không có lãnh thổ tộc người riêng mà cư trú phân tán, xen kẽ lẫn nhau.\n' +
      '→ Tạo điều kiện thuận lợi cho giao lưu, hiểu biết và xây dựng nền văn hóa thống nhất trong đa dạng.\n' +
      '→ Đồng thời cũng dễ phát sinh mâu thuẫn, xung đột, bị các thế lực thù địch lợi dụng để phá hoại khối đại đoàn kết dân tộc.\n' +
      'Thứ ba: Phân bố chủ yếu ở địa bàn chiến lược quan trọng\n' +
      '53 dân tộc thiểu số chỉ chiếm 14,3% dân số nhưng lại cư trú trên ¾ diện tích lãnh thổ, chủ yếu ở vùng biên giới, hải đảo, vùng sâu, vùng xa.\n' +
      'Đây là những khu vực có vị trí quan trọng về kinh tế, an ninh, quốc phòng và môi trường sinh thái. Do đó, vấn đề dân tộc luôn gắn liền với an ninh quốc gia.\n' +
      'Thứ tư: Trình độ phát triển không đều\n' +
      'Giữa các dân tộc còn tồn tại sự chênh lệch khá lớn về trình độ phát triển kinh tế, văn hóa, xã hội. Nhiều dân tộc thiểu số vẫn còn trình độ dân trí và chuyên môn thấp.\n' +
      'Việc giảm dần và tiến tới xóa bỏ khoảng cách phát triển giữa các dân tộc là nhiệm vụ quan trọng để thực hiện bình đẳng dân tộc.\n' +
      'Thứ năm: Truyền thống đoàn kết gắn bó lâu đời\n' +
      'Đoàn kết dân tộc là truyền thống quý báu, được hình thành từ rất sớm trong lịch sử dựng nước và giữ nước.\n' +
      'Đây là nguồn sức mạnh quan trọng giúp dân tộc Việt Nam vượt qua mọi kẻ thù xâm lược. Ngày nay, cần tiếp tục phát huy truyền thống này, nâng cao cảnh giác, đấu tranh chống mọi âm mưu chia rẽ dân tộc.\n' +
      'Thứ sáu: Mỗi dân tộc có bản sắc văn hóa riêng\n' +
      'Mỗi dân tộc đều có sắc thái văn hóa độc đáo, góp phần tạo nên nền văn hóa Việt Nam thống nhất trong đa dạng.\n' +
      'Sự thống nhất này xuất phát từ mục tiêu chung: dựng nước và giữ nước, ý thức về một quốc gia độc lập, thống nhất.\n' +
      'Kết luận:\n' +
      'Những đặc điểm trên là cơ sở quan trọng để Đảng và Nhà nước ta xây dựng và thực hiện chính sách dân tộc đúng đắn, góp phần củng cố khối đại đoàn kết toàn dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội.',
  },
  sec1_3b: {
    id: 'sec1_3b',
    label: 'Chính sách\ncủa Đảng',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_3',
    detail:
      'Thứ nhất: Quan điểm của Đảng về vấn đề dân tộc\n' +
      'Đảng Cộng sản Việt Nam ngay từ khi mới ra đời đã thực hiện nhất quán các nguyên tắc cơ bản của chủ nghĩa Mác - Lênin về dân tộc. Dựa trên thực tiễn cách mạng Việt Nam và tình hình thế giới, Đảng và Nhà nước ta luôn coi trọng vấn đề dân tộc và xây dựng khối đại đoàn kết toàn dân tộc là một nhiệm vụ có ý nghĩa chiến lược đặc biệt.\n' +
      'Quan điểm cơ bản của Đảng về vấn đề dân tộc được thể hiện ở các nội dung sau:\n' +
      '\n' +
      '- Vấn đề dân tộc và đoàn kết dân tộc là vấn đề chiến lược cơ bản, lâu dài, đồng thời cũng là vấn đề cấp bách của cách mạng Việt Nam.\n' +
      '- Các dân tộc trong đại gia đình Việt Nam bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển, cùng phấn đấu thực hiện công nghiệp hóa, hiện đại hóa đất nước và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.\n' +
      '- Kiên quyết đấu tranh chống mọi âm mưu chia rẽ, phá hoại khối đại đoàn kết dân tộc.\n' +
      '- Phát triển toàn diện chính trị, kinh tế, văn hóa, xã hội, an ninh - quốc phòng ở vùng dân tộc và miền núi; gắn tăng trưởng kinh tế với giải quyết các vấn đề xã hội, quan tâm bồi dưỡng nguồn nhân lực và cán bộ dân tộc thiểu số.\n' +
      '- Ưu tiên đầu tư phát triển kinh tế - xã hội vùng dân tộc thiểu số, vùng sâu, vùng xa, biên giới, hải đảo; kết hợp phát huy nội lực với sự hỗ trợ của Trung ương và cả nước.\n' +
      '- Công tác dân tộc và thực hiện chính sách dân tộc là nhiệm vụ của toàn Đảng, toàn dân, toàn quân, của các cấp, các ngành và toàn bộ hệ thống chính trị.\n' +
      '\n' +
      'Thứ hai: Chính sách dân tộc của Đảng, Nhà nước Việt Nam\n' +
      'Chính sách dân tộc của Đảng và Nhà nước ta mang tính toàn diện, tổng hợp, bao trùm tất cả các lĩnh vực của đời sống xã hội. Nội dung cụ thể được thể hiện như sau:\n' +
      '\n' +
      'Về chính trị: Thực hiện bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển giữa các dân tộc; nâng cao nhận thức và tính tích cực chính trị của đồng bào các dân tộc thiểu số.\n' +
      'Về kinh tế: Phát triển kinh tế - xã hội ở miền núi, vùng đồng bào dân tộc thiểu số; khắc phục dần khoảng cách phát triển giữa các vùng, các dân tộc; thực hiện tốt chiến lược phát triển kinh tế - xã hội ở vùng sâu, vùng xa, biên giới, hải đảo.\n' +
      'Về văn hóa: Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; giữ gìn và phát huy giá trị văn hóa truyền thống của các dân tộc; nâng cao trình độ văn hóa, chống diễn biến hòa bình trên mặt trận tư tưởng - văn hóa.\n' +
      'Về xã hội: Thực hiện chính sách an sinh xã hội, xóa đói giảm nghèo, phát triển giáo dục, y tế; chú trọng tính đặc thù của từng vùng, từng dân tộc; phát huy vai trò của hệ thống chính trị cơ sở ở vùng dân tộc.\n' +
      'Về an ninh - quốc phòng: Tăng cường sức mạnh bảo vệ Tổ quốc, giữ vững ổn định chính trị, trật tự an toàn xã hội; xây dựng thế trận quốc phòng toàn dân trong vùng đồng bào dân tộc.\n' +
      '\n' +
      'Tính chất của chính sách dân tộc:\n' +
      'Chính sách dân tộc của Đảng và Nhà nước ta mang tính cách mạng, tiến bộ và nhân văn sâu sắc. Nó không bỏ sót bất kỳ dân tộc nào, không cho phép tư tưởng kỳ thị, chia rẽ; đồng thời phát huy nội lực của mỗi dân tộc kết hợp với sự giúp đỡ của các dân tộc anh em trong cả nước, nhằm thực hiện mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.',
  },
  sec2: {
    id: 'sec2',
    label: '2. Tôn giáo\ntrong thời kỳ\nquá độ lên CNXH',
    category: 'tongiao',
    level: 1,
    parentId: 'root',
    detail: 'Phần này trình bày quan điểm Mác-Lênin về tôn giáo và thực tiễn tôn giáo tại Việt Nam.',
    children: ['sec2_1', 'sec2_2'],
  },
  sec2_1: {
    id: 'sec2_1',
    label: '2.1 CN Mác-Lênin\nvề tôn giáo',
    category: 'tongiao',
    level: 2,
    parentId: 'sec2',
    detail: 'Phân tích bản chất, nguồn gốc, tính chất tôn giáo và nguyên tắc giải quyết.',
    children: ['sec2_1a', 'sec2_1b'],
  },
  sec2_1a: {
    id: 'sec2_1a',
    label: 'Bản chất\nnguồn gốc\ntôn giáo',
    category: 'tongiao',
    level: 3,
    parentId: 'sec2_1',
    detail:
      'Thứ nhất: Bản chất của tôn giáo\n' +
      'Theo chủ nghĩa Mác - Lênin, tôn giáo là một hình thái ý thức xã hội, là sự phản ánh hư ảo hiện thực khách quan vào trong đầu óc con người. Ph.Ăngghen viết: “Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh hư ảo – vào trong đầu óc của con người – của những lực lượng ở bên ngoài chi phối cuộc sống hàng ngày của họ; chỉ là sự phản ánh trong đó những lực lượng ở trần thế đã mang hình thức những lực lượng siêu trần thế”.\n' +
      'Tôn giáo là một thực thể xã hội, với các tiêu chí cơ bản sau:\n' +
      '\n' +
      'Có niềm tin sâu sắc vào đấng siêu nhiên, thần linh (niềm tin tôn giáo).\n' +
      'Có hệ thống giáo thuyết (giáo lý, giáo luật, lễ nghi).\n' +
      'Có hệ thống cơ sở thờ tự.\n' +
      'Có tổ chức và nhân sự quản lý việc đạo.\n' +
      'Có hệ thống tín đồ đông đảo.\n' +
      '\n' +
      'Chủ nghĩa Mác - Lênin khẳng định: Tôn giáo là sản phẩm do con người sáng tạo ra, phản ánh ước mơ, nguyện vọng và những điều kiện sống nhất định của họ. Tuy nhiên, con người lại bị lệ thuộc vào tôn giáo mà họ tạo ra. Sản xuất vật chất và quan hệ kinh tế là nhân tố quyết định sự tồn tại và phát triển của tôn giáo.\n' +
      'Về thế giới quan, tôn giáo mang tính duy tâm, khác với thế giới quan duy vật biện chứng của chủ nghĩa Mác - Lênin. Tuy nhiên, những người cộng sản không xem thường hay trấn áp nhu cầu tín ngưỡng của nhân dân, mà luôn tôn trọng quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo.\n' +
      'Phân biệt một số khái niệm liên quan:\n' +
      '\n' +
      'Tín ngưỡng: Niềm tin, sự ngưỡng mộ và cách thức thể hiện niềm tin trước các lực lượng linh thiêng (thờ cúng tổ tiên, anh hùng dân tộc, thờ Mẫu…).\n' +
      'Mê tín: Niềm tin mê muội, viễn vông, không có cơ sở khoa học.\n' +
      'Dị đoan: Hành vi suy đoán và hành động sai lệch, trái với chuẩn mực xã hội.\n' +
      'Mê tín dị đoan: Niềm tin cực đoan vào lực lượng siêu nhiên dẫn đến hành vi gây hại cho cá nhân và xã hội.\n' +
      '\n' +
      '\n' +
      'Thứ hai: Nguồn gốc của tôn giáo\n' +
      'Tôn giáo có ba nguồn gốc chính:\n' +
      '\n' +
      'Nguồn gốc tự nhiên và kinh tế - xã hội\n' +
      'Trong xã hội nguyên thủy: Con người bất lực trước thiên nhiên hùng vĩ nên gán cho nó những sức mạnh thần bí.\n' +
      'Khi xã hội có giai cấp đối kháng và áp bức bất công, con người trông chờ vào một lực lượng siêu nhiên để giải thoát.\n' +
      '\n' +
      'Nguồn gốc nhận thức\n' +
      'Sự giới hạn của nhận thức con người (khoảng cách giữa “biết” và “chưa biết”). Những vấn đề khoa học chưa giải thích được hoặc trình độ dân trí thấp là điều kiện cho tôn giáo tồn tại và phát triển.\n' +
      'Nguồn gốc tâm lý\n' +
      'Sự sợ hãi trước thiên nhiên, bệnh tật, may rủi; nhu cầu mong muốn bình yên, che chở trong cuộc sống (ma chay, cưới xin, làm ăn…). Thậm chí cả những tình cảm tích cực như lòng biết ơn, kính trọng cũng có thể dẫn con người đến với tôn giáo.\n' +
      '\n' +
      '\n' +
      'Thứ ba: Tính chất của tôn giáo\n' +
      '\n' +
      'Tính lịch sử\n' +
      'Tôn giáo là hiện tượng xã hội có tính lịch sử: có sự hình thành, tồn tại, phát triển và có thể biến đổi theo điều kiện kinh tế - xã hội. Khi khoa học và giáo dục phát triển, tôn giáo sẽ dần mất đi vị trí trong đời sống xã hội và nhận thức của con người.\n' +
      'Tính quần chúng\n' +
      'Tôn giáo có tính quần chúng rộng lớn (gần ¾ dân số thế giới có tín ngưỡng). Nó là nơi sinh hoạt văn hóa, tinh thần của một bộ phận nhân dân, đồng thời phản ánh khát vọng về một xã hội tự do, bình đẳng, bác ái.\n' +
      'Tính chính trị\n' +
      'Khi xã hội chưa có giai cấp, tôn giáo chưa mang tính chính trị.\n' +
      'Khi xã hội phân chia giai cấp, tôn giáo trở thành công cụ phản ánh lợi ích giai cấp và bị các giai cấp thống trị lợi dụng để duy trì sự thống trị.\n' +
      'Do đó, tôn giáo có thể mang tính chính trị tích cực hoặc tiêu cực tùy theo điều kiện lịch sử.',
  },
  sec2_1b: {
    id: 'sec2_1b',
    label: 'Nguyên tắc\ngiải quyết',
    category: 'tongiao',
    level: 3,
    parentId: 'sec2_1',
    detail:
      'Thứ nhất: Bản chất của tôn giáo\n' +
      'Theo chủ nghĩa Mác - Lênin, tôn giáo là một hình thái ý thức xã hội, là sự phản ánh hư ảo hiện thực khách quan vào trong đầu óc con người. Ph.Ăngghen viết: “Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh hư ảo – vào trong đầu óc của con người – của những lực lượng ở bên ngoài chi phối cuộc sống hàng ngày của họ; chỉ là sự phản ánh trong đó những lực lượng ở trần thế đã mang hình thức những lực lượng siêu trần thế”.\n' +
      'Tôn giáo là một thực thể xã hội, với các tiêu chí cơ bản sau:\n' +
      '\n' +
      '- Có niềm tin sâu sắc vào đấng siêu nhiên, thần linh (niềm tin tôn giáo).\n' +
      '- Có hệ thống giáo thuyết (giáo lý, giáo luật, lễ nghi).\n' +
      '- Có hệ thống cơ sở thờ tự.\n' +
      '- Có tổ chức và nhân sự quản lý việc đạo.\n' +
      '- Có hệ thống tín đồ đông đảo.\n' +
      '\n' +
      'Chủ nghĩa Mác - Lênin khẳng định: Tôn giáo là sản phẩm do con người sáng tạo ra, phản ánh ước mơ, nguyện vọng và những điều kiện sống nhất định của họ. Tuy nhiên, con người lại bị lệ thuộc vào tôn giáo mà họ tạo ra. Sản xuất vật chất và quan hệ kinh tế là nhân tố quyết định sự tồn tại và phát triển của tôn giáo.\n' +
      'Về thế giới quan, tôn giáo mang tính duy tâm, khác với thế giới quan duy vật biện chứng của chủ nghĩa Mác - Lênin. Tuy nhiên, những người cộng sản không xem thường hay trấn áp nhu cầu tín ngưỡng của nhân dân, mà luôn tôn trọng quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo.\n' +
      'Phân biệt một số khái niệm liên quan:\n' +
      '\n' +
      '- Tín ngưỡng: Niềm tin, sự ngưỡng mộ và cách thức thể hiện niềm tin trước các lực lượng linh thiêng (thờ cúng tổ tiên, anh hùng dân tộc, thờ Mẫu…).\n' +
      '- Mê tín: Niềm tin mê muội, viễn vông, không có cơ sở khoa học.\n' +
      '- Dị đoan: Hành vi suy đoán và hành động sai lệch, trái với chuẩn mực xã hội.\n' +
      '- Mê tín dị đoan: Niềm tin cực đoan vào lực lượng siêu nhiên dẫn đến hành vi gây hại cho cá nhân và xã hội.\n' +
      '\n' +
      '\n' +
      'Thứ hai: Nguồn gốc của tôn giáo\n' +
      'Tôn giáo có ba nguồn gốc chính:\n' +
      '\n' +
      'Nguồn gốc tự nhiên và kinh tế - xã hội\n' +
      '- Trong xã hội nguyên thủy: Con người bất lực trước thiên nhiên hùng vĩ nên gán cho nó những sức mạnh thần bí.\n' +
      '- Khi xã hội có giai cấp đối kháng và áp bức bất công, con người trông chờ vào một lực lượng siêu nhiên để giải thoát.\n' +
      '\n' +
      'Nguồn gốc nhận thức\n' +
      'Sự giới hạn của nhận thức con người (khoảng cách giữa “biết” và “chưa biết”). Những vấn đề khoa học chưa giải thích được hoặc trình độ dân trí thấp là điều kiện cho tôn giáo tồn tại và phát triển.\n' +
      '\n' +
      'Nguồn gốc tâm lý\n' +
      'Sự sợ hãi trước thiên nhiên, bệnh tật, may rủi; nhu cầu mong muốn bình yên, che chở trong cuộc sống (ma chay, cưới xin, làm ăn…). Thậm chí cả những tình cảm tích cực như lòng biết ơn, kính trọng cũng có thể dẫn con người đến với tôn giáo.\n' +
      '\n' +
      '\n' +
      'Thứ ba: Tính chất của tôn giáo\n' +
      '\n' +
      'Tính lịch sử\n' +
      'Tôn giáo là hiện tượng xã hội có tính lịch sử: có sự hình thành, tồn tại, phát triển và có thể biến đổi theo điều kiện kinh tế - xã hội. Khi khoa học và giáo dục phát triển, tôn giáo sẽ dần mất đi vị trí trong đời sống xã hội và nhận thức của con người.\n' +
      '\n' +
      'Tính quần chúng\n' +
      'Tôn giáo có tính quần chúng rộng lớn (gần ¾ dân số thế giới có tín ngưỡng). Nó là nơi sinh hoạt văn hóa, tinh thần của một bộ phận nhân dân, đồng thời phản ánh khát vọng về một xã hội tự do, bình đẳng, bác ái.\n' +
      '\n' +
      'Tính chính trị\n' +
      'Khi xã hội chưa có giai cấp, tôn giáo chưa mang tính chính trị.\n' +
      'Khi xã hội phân chia giai cấp, tôn giáo trở thành công cụ phản ánh lợi ích giai cấp và bị các giai cấp thống trị lợi dụng để duy trì sự thống trị.\n' +
      'Do đó, tôn giáo có thể mang tính chính trị tích cực hoặc tiêu cực tùy theo điều kiện lịch sử.',
  },
  sec2_2: {
    id: 'sec2_2',
    label: '2.2 Tôn giáo VN\nvà chính sách\ncủa Đảng',
    category: 'tongiao',
    level: 2,
    parentId: 'sec2',
    detail: '• Việt Nam đa tôn giáo, hơn 26 triệu tín đồ.\n• Phật giáo, Công giáo, Tin Lành, Cao Đài, Hòa Hảo, Hồi giáo.\n• Chính sách: tôn trọng, bình đẳng, đoàn kết.',
    children: ['sec2_2a', 'sec2_2b'],
  },
  sec2_2a: {
    id: 'sec2_2a',
    label: 'Đặc điểm tôn giáo\nở Việt Nam',
    category: 'tongiao',
    level: 3,
    parentId: 'sec2_2',
    detail:
      'Đặc điểm của tôn giáo ở Việt Nam hiện nay\n' +
      'Nước ta hiện nay có 13 tôn giáo được công nhận tư cách pháp nhân (Phật giáo, Công giáo, Tin lành, Hồi giáo, Cao Đài, Phật giáo Hòa Hảo, Tứ Ân Hiếu Nghĩa, Bửu Sơn Kỳ Hương, Bahá’í, Minh Lý Đạo - Tam Tông Miếu, Giáo hội Phật đường Nam Tông Minh Sư Đạo, Tịnh độ Cư sĩ Phật hội, Bà la môn) và hơn 40 tổ chức tôn giáo đã được công nhận hoặc đăng ký hoạt động. Toàn quốc có khoảng 24 triệu tín đồ, gần 95.000 chức sắc, 200.000 chức việc và hơn 23.250 cơ sở thờ tự.\n' +
      'Các tôn giáo ở Việt Nam có những đặc điểm nổi bật sau:\n' +
      'Thứ nhất: Đa dạng về nguồn gốc và hình thức tồn tại\n' +
      '\n' +
      'Có tôn giáo du nhập từ bên ngoài (Phật giáo, Công giáo, Tin lành, Hồi giáo…).\n' +
      'Có tôn giáo nội sinh do người Việt sáng tạo (Cao Đài, Phật giáo Hòa Hảo…).\n' +
      'Mỗi tôn giáo có quá trình du nhập, hình thành và phát triển khác nhau.\n' +
      '\n' +
      'Thứ hai: Đa dạng, đan xen, chung sống hòa bình\n' +
      'Các tôn giáo ở Việt Nam cùng tồn tại, đan xen trên cùng một địa bàn. Tín đồ các tôn giáo khác nhau sống hòa bình, tôn trọng niềm tin của nhau. Việt Nam chưa từng xảy ra xung đột hoặc chiến tranh tôn giáo. Mỗi tôn giáo khi du nhập vào Việt Nam đều chịu ảnh hưởng và mang dấu ấn của bản sắc văn hóa dân tộc Việt Nam.\n' +
      'Thứ ba: Tín đồ phần lớn là nhân dân lao động, có lòng yêu nước\n' +
      'Tín đồ các tôn giáo có thành phần rất đa dạng, nhưng chủ yếu là người lao động. Đa số tín đồ đều có tinh thần yêu nước, gắn bó với dân tộc, tôn trọng công lý và đi theo đường lối của Đảng. Trong lịch sử, tín đồ các tôn giáo đã cùng nhân dân tham gia tích cực vào sự nghiệp đấu tranh giải phóng dân tộc và xây dựng đất nước, với mong muốn “tốt đời, đẹp đạo”.\n' +
      'Thứ tư: Hàng ngũ chức sắc có vai trò quan trọng và uy tín\n' +
      'Chức sắc tôn giáo là những người có chức vụ, phẩm sắc trong tôn giáo, chịu trách nhiệm truyền bá giáo lý, tổ chức sinh hoạt tôn giáo và chăm lo đời sống tâm linh cho tín đồ. Hiện nay, hàng ngũ chức sắc tôn giáo ở Việt Nam có xu hướng tiến bộ ngày càng rõ nét, tích cực tham gia các hoạt động xã hội và xây dựng khối đại đoàn kết dân tộc.\n' +
      'Thứ năm: Có quan hệ với tổ chức tôn giáo quốc tế\n' +
      'Các tôn giáo ở Việt Nam (cả tôn giáo ngoại nhập và nội sinh) đều có quan hệ với các tổ chức, cá nhân tôn giáo ở nước ngoài. Trong bối cảnh hội nhập quốc tế sâu rộng, Nhà nước Việt Nam chủ trương mở rộng giao lưu, hợp tác quốc tế về tôn giáo trên cơ sở bảo đảm độc lập, chủ quyền quốc gia, không để các thế lực thù địch lợi dụng “dân chủ”, “nhân quyền”, “tự do tôn giáo” để can thiệp vào công việc nội bộ, thực hiện âm mưu “diễn biến hòa bình”.',
  },
  sec2_2b: {
    id: 'sec2_2b',
    label: 'Chính sách của Đảng,\nNhà nước Việt Nam\nđối với tín ngưỡng,\ntôn giáo hiện nay',
    category: 'tongiao',
    level: 3,
    parentId: 'sec2_2',
    detail:
      'Chính sách tôn giáo của Đảng và Nhà nước Việt Nam\n' +
      'Chính sách tôn giáo của Đảng và Nhà nước ta là nhất quán, khoa học và nhân văn, thể hiện qua các nội dung cơ bản sau:\n' +
      '1. Tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo\n' +
      'Tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân và sẽ tồn tại lâu dài cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội.\n' +
      'Đảng và Nhà nước thực hiện nhất quán chính sách tôn trọng và bảo đảm quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo của công dân. Các tổ chức tôn giáo hoạt động bình đẳng trước pháp luật và trong khuôn khổ pháp luật.\n' +
      '2. Thực hiện đại đoàn kết dân tộc\n' +
      '\n' +
      'Đoàn kết đồng bào theo các tôn giáo khác nhau; đoàn kết giữa đồng bào có tôn giáo và đồng bào không theo tôn giáo.\n' +
      'Nghiêm cấm mọi hành vi chia rẽ, phân biệt đối xử vì lý do tín ngưỡng, tôn giáo.\n' +
      'Giữ gìn và phát huy những giá trị tích cực của truyền thống thờ cúng tổ tiên, tôn vinh người có công với Tổ quốc.\n' +
      'Kiên quyết đấu tranh chống lợi dụng tín ngưỡng, tôn giáo để hoạt động mê tín dị đoan, gây chia rẽ nhân dân, xâm phạm an ninh quốc gia.\n' +
      '\n' +
      '3. Công tác tôn giáo là công tác vận động quần chúng\n' +
      '\n' +
      'Động viên đồng bào các tôn giáo phát huy tinh thần yêu nước, ý thức bảo vệ độc lập, thống nhất đất nước.\n' +
      'Thông qua phát triển kinh tế - xã hội, nâng cao đời sống vật chất và tinh thần để đồng bào tín đồ nhận thức đúng đường lối, chính sách của Đảng và pháp luật của Nhà nước.\n' +
      'Tăng cường sự gắn bó giữa đồng bào tín đồ với khối đại đoàn kết toàn dân tộc.\n' +
      '\n' +
      '4. Công tác tôn giáo là trách nhiệm của toàn bộ hệ thống chính trị\n' +
      'Công tác tôn giáo liên quan đến nhiều lĩnh vực của đời sống xã hội, đối nội và đối ngoại. Đây là trách nhiệm của toàn Đảng, toàn dân, toàn quân, của các cấp, các ngành và toàn bộ hệ thống chính trị.\n' +
      'Cần củng cố tổ chức bộ máy, đội ngũ cán bộ làm công tác tôn giáo và tăng cường quản lý nhà nước đối với hoạt động tôn giáo.\n' +
      '5. Về việc theo đạo và truyền đạo\n' +
      '\n' +
      'Mọi công dân đều có quyền tự do theo đạo và hành đạo tại gia đình, cơ sở thờ tự hợp pháp theo quy định của pháp luật.\n' +
      'Các tổ chức tôn giáo được Nhà nước công nhận được hoạt động theo pháp luật và được pháp luật bảo hộ.\n' +
      'Nghiêm cấm lợi dụng tôn giáo để tuyên truyền tà đạo, hoạt động mê tín dị đoan, ép buộc người dân theo đạo hoặc truyền đạo trái phép.',
  },
  sec3: {
    id: 'sec3',
    label: '3. Quan hệ\ndân tộc và\ntôn giáo ở VN',
    category: 'quanhe',
    level: 1,
    parentId: 'root',
    detail: 'Mối quan hệ giữa dân tộc và tôn giáo ở Việt Nam và hướng giải quyết.',
    children: ['sec3_a', 'sec3_b'],
  },
  sec3_a: {
    id: 'sec3_a',
    label: 'Đặc điểm\nquan hệ DT-TG\nở Việt Nam',
    category: 'quanhe',
    level: 2,
    parentId: 'sec3',
    detail:
      'Quan hệ giữa dân tộc và tôn giáo ở Việt Nam\n' +
      'Quan hệ dân tộc và tôn giáo là sự liên kết, tác động qua lại và chi phối lẫn nhau giữa dân tộc với tôn giáo trong nội bộ một quốc gia hoặc giữa các quốc gia trên mọi lĩnh vực của đời sống xã hội. Việc giải quyết tốt mối quan hệ này có ý nghĩa quan trọng đối với sự ổn định chính trị và phát triển bền vững của đất nước, đặc biệt ở các quốc gia đa dân tộc, đa tôn giáo.\n' +
      'Ở Việt Nam hiện nay, quan hệ dân tộc và tôn giáo có những đặc điểm cơ bản sau:\n' +
      'Thứ nhất: Được thiết lập và củng cố trên cơ sở cộng đồng quốc gia - dân tộc thống nhất\n' +
      'Việt Nam là quốc gia đa dân tộc, đa tôn giáo. Các tôn giáo ở Việt Nam có truyền thống gắn bó chặt chẽ với dân tộc, “gắn đạo với đời”, đồng hành cùng dân tộc trong sự nghiệp dựng nước và giữ nước.\n' +
      'Mọi công dân Việt Nam, không phân biệt dân tộc, tín ngưỡng hay tôn giáo, đều có ý thức rõ về cội nguồn dân tộc và một quốc gia thống nhất. Trong lịch sử, trừ giai đoạn thực dân Pháp và đế quốc Mỹ lợi dụng tôn giáo để xâm lược, quan hệ dân tộc - tôn giáo ở Việt Nam nhìn chung được giải quyết tốt, không dẫn đến xung đột lớn. Tuy nhiên, vẫn còn một số mâu thuẫn cục bộ do nhận thức và tổ chức thực hiện chưa tốt cần tiếp tục khắc phục.\n' +
      'Thứ hai: Chịu sự chi phối mạnh mẽ của tín ngưỡng truyền thống\n' +
      'Tín ngưỡng truyền thống (đặc biệt là thờ cúng tổ tiên, thờ anh hùng dân tộc và Thành hoàng làng) có vai trò rất quan trọng trong đời sống tinh thần của người Việt.\n' +
      '\n' +
      'Ở cấp độ gia đình, dòng họ: Thờ cúng tổ tiên là sợi dây gắn kết các thành viên.\n' +
      'Ở cấp độ làng xã: Thờ Thành hoàng làng tạo sự gắn bó cộng đồng.\n' +
      'Ở cấp độ quốc gia: Tín ngưỡng hướng về cội nguồn (thờ các Vua Hùng) thể hiện ý thức dân tộc và tinh thần “con Lạc cháu Hồng”.\n' +
      '\n' +
      'Chính tín ngưỡng truyền thống đã làm nên nét đặc thù của quan hệ dân tộc - tôn giáo ở Việt Nam. Các tôn giáo ngoại lai khi du nhập vào Việt Nam đều phải chịu sự chi phối và biến đổi để phù hợp với bản sắc văn hóa dân tộc.\n' +
      'Thứ ba: Sự xuất hiện và phát triển của các hiện tượng tôn giáo mới\n' +
      'Trong bối cảnh đổi mới, hội nhập quốc tế và kinh tế thị trường, đời sống tín ngưỡng, tôn giáo ở Việt Nam có nhiều chuyển biến. Một số hiện tượng tôn giáo mới xuất hiện (Long Hoa Di Lặc, Tin Lành Vàng Chứ, Thanh Hải Vô Thượng Sư, Tiên Rồng…) và một số tổ chức đội lốt tôn giáo (Tin Lành Đề Ga, Hà Mòn…).\n' +
      'Những hiện tượng này thường mang tính mê tín rõ nét, một số bị lợi dụng để truyền đạo trái phép, tuyên truyền xuyên tạc, gây hoang mang dư luận, phá hoại khối đại đoàn kết dân tộc và ảnh hưởng đến an ninh chính trị, trật tự xã hội. Do đó, cần quản lý tốt các hiện tượng tôn giáo mới nhằm đảm bảo ổn định chính trị và giải quyết hài hòa quan hệ dân tộc - tôn giáo.',
  },
  sec3_b: {
    id: 'sec3_b',
    label: 'Định hướng\ngiải quyết\nDT - TG',
    category: 'quanhe',
    level: 2,
    parentId: 'sec3',
    detail:
      'Giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam hiện nay\n' +
      '1. Quan điểm chỉ đạo của Đảng Cộng sản Việt Nam\n' +
      'Đảng Cộng sản Việt Nam khẳng định:\n' +
      '“… Nghiêm trị những âm mưu, hành động chia rẽ, phá hoại khối đại đoàn kết dân tộc… Đồng thời chủ động phòng ngừa, kiên quyết đấu tranh với những hành vi lợi dụng tín ngưỡng, tôn giáo để chia rẽ, phá hoại khối đại đoàn kết dân tộc hoặc những hoạt động tín ngưỡng, tôn giáo trái quy định của pháp luật.”\n' +
      '2. Các quan điểm cơ bản cần quán triệt khi giải quyết mối quan hệ dân tộc - tôn giáo\n' +
      'Quan điểm 1:\n' +
      'Tăng cường mối quan hệ tốt đẹp giữa dân tộc và tôn giáo, củng cố khối đại đoàn kết toàn dân tộc và đoàn kết tôn giáo là vấn đề chiến lược, cơ bản, lâu dài và cấp bách của cách mạng Việt Nam.\n' +
      '\n' +
      'Đây là động lực quan trọng để phát huy nguồn lực của các dân tộc và tôn giáo, thúc đẩy sự nghiệp đổi mới, xây dựng và bảo vệ Tổ quốc.\n' +
      'Xã hội xã hội chủ nghĩa phải là môi trường thuận lợi để các dân tộc và tôn giáo tự do phát triển theo pháp luật, góp phần xây dựng đất nước phồn vinh, bền vững.\n' +
      '\n' +
      'Quan điểm 2:\n' +
      'Giải quyết mối quan hệ dân tộc và tôn giáo phải đặt trong khuôn khổ cộng đồng quốc gia - dân tộc thống nhất theo định hướng xã hội chủ nghĩa.\n' +
      '\n' +
      'Không được lợi dụng tôn giáo để đòi ly khai dân tộc hoặc chia rẽ khối đại đoàn kết dân tộc.\n' +
      'Phải đảm bảo giữ vững độc lập, chủ quyền, thống nhất lãnh thổ và ổn định chính trị - xã hội.\n' +
      '\n' +
      'Quan điểm 3:\n' +
      'Giải quyết mối quan hệ dân tộc và tôn giáo phải bảo đảm quyền tự do tín ngưỡng, tôn giáo của nhân dân và quyền của các dân tộc thiểu số, đồng thời kiên quyết đấu tranh chống lợi dụng dân tộc, tôn giáo vào mục đích chính trị.\n' +
      '\n' +
      'Quyền tự do tín ngưỡng phải gắn với pháp luật.\n' +
      'Tăng cường an ninh quốc phòng, vận động quần chúng, tuyên truyền và xây dựng quy chế phối hợp giữa các lực lượng để nắm chắc tình hình.\n' +
      'Chủ động vạch trần và kiên quyết xử lý các âm mưu lợi dụng dân tộc - tôn giáo để thực hiện “diễn biến hòa bình”, chia rẽ dân tộc, gây rối an ninh trật tự.\n' +
      '\n' +
      'Kết luận\n' +
      'Nhận diện đúng đặc điểm quan hệ dân tộc - tôn giáo ở Việt Nam hiện nay nhằm:\n' +
      '\n' +
      'Phát huy mặt tích cực, tăng cường đoàn kết dân tộc và đoàn kết tôn giáo, tạo đồng thuận xã hội để xây dựng đất nước dân giàu, nước mạnh, dân chủ, công bằng, văn minh.\n' +
      'Chủ động phòng ngừa, ngăn chặn và kiên quyết đấu tranh với mọi hành vi lợi dụng dân tộc, tôn giáo gây mất ổn định chính trị, trật tự xã hội và phá hoại sự nghiệp xây dựng và bảo vệ Tổ quốc xã hội chủ nghĩa.',
  },
};
import type { MindmapNodeData } from '@/data/mindmapTypes';
import { nodes } from '@/data/nodes';

export type { MindmapNodeData, NodeCategory } from '@/data/mindmapTypes';

export const nodeDataMap: Record<string, MindmapNodeData> = nodes.reduce(
  (acc, node) => {
    acc[node.id] = node;
    return acc;
  },
  {} as Record<string, MindmapNodeData>
);

export const allNodeIds = nodes.map((node) => node.id);
