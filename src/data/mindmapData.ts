export type NodeCategory = 'root' | 'intro' | 'dantoc' | 'tongiao' | 'quanhe';

export interface MindmapNodeData {
  id: string;
  label: string;
  category: NodeCategory;
  level: number;
  parentId?: string;
  detail: string;
  children?: string[];
}

export const nodeDataMap: Record<string, MindmapNodeData> = {
  root: {
    id: 'root',
    label: 'Chương 6:\nVấn đề dân tộc và tôn giáo\ntrong thời kỳ quá độ lên CNXH',
    category: 'root',
    level: 0,
    detail: 'Chương 6 trình bày những vấn đề lý luận và thực tiễn về dân tộc, tôn giáo và mối quan hệ giữa chúng trong thời kỳ quá độ lên chủ nghĩa xã hội. Nội dung bao gồm quan điểm của chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh và chính sách của Đảng Cộng sản Việt Nam.',
    children: ['intro', 'sec1', 'sec2', 'sec3'],
  },
  intro: {
    id: 'intro',
    label: 'A. Mục tiêu -\nGiới thiệu',
    category: 'intro',
    level: 1,
    parentId: 'root',
    detail: '• Nắm vững quan điểm cơ bản của chủ nghĩa Mác-Lênin về dân tộc và tôn giáo.\n• Hiểu được chính sách dân tộc, tôn giáo của Đảng và Nhà nước Việt Nam.\n• Vận dụng kiến thức vào thực tiễn xây dựng khối đại đoàn kết toàn dân tộc.',
  },
  sec1: {
    id: 'sec1',
    label: '1. Dân tộc trong\nthời kỳ quá độ lên CNXH',
    category: 'dantoc',
    level: 1,
    parentId: 'root',
    detail: 'Phần này phân tích khái niệm dân tộc, quan điểm Mác-Lênin về vấn đề dân tộc, và thực tiễn dân tộc ở Việt Nam.',
    children: ['sec1_1', 'sec1_2', 'sec1_3'],
  },
  sec1_1: {
    id: 'sec1_1',
    label: '1.1 Khái niệm,\nđặc trưng cơ bản\ncủa dân tộc',
    category: 'dantoc',
    level: 2,
    parentId: 'sec1',
    detail: 'Dân tộc là cộng đồng người ổn định, hình thành trong lịch sử, dựa trên cơ sở cộng đồng về ngôn ngữ, lãnh thổ, kinh tế, văn hóa và ý thức tự giác tộc người.\n\n• Cộng đồng về ngôn ngữ\n• Cộng đồng về lãnh thổ\n• Cộng đồng về kinh tế\n• Cộng đồng về văn hóa\n• Cộng đồng về ý thức tự giác tộc người',
  },
  sec1_2: {
    id: 'sec1_2',
    label: '1.2 Chủ nghĩa\nMác-Lênin về\nvấn đề dân tộc',
    category: 'dantoc',
    level: 2,
    parentId: 'sec1',
    detail: 'Quan điểm Mác-Lênin bao gồm hai xu hướng khách quan và Cương lĩnh dân tộc.',
    children: ['sec1_2a', 'sec1_2b'],
  },
  sec1_2a: {
    id: 'sec1_2a',
    label: 'Hai xu hướng\nkhách quan của\nquan hệ dân tộc',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_2',
    detail: '• Xu hướng 1: Các cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập (do sự thức tỉnh ý thức dân tộc).\n• Xu hướng 2: Các dân tộc muốn liên hiệp lại với nhau (do sự phát triển lực lượng sản xuất, khoa học kỹ thuật, giao lưu kinh tế-văn hóa).',
  },
  sec1_2b: {
    id: 'sec1_2b',
    label: 'Cương lĩnh\ndân tộc của\nchủ nghĩa Mác-Lênin',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_2',
    detail: '• Các dân tộc hoàn toàn bình đẳng\n• Các dân tộc được quyền tự quyết\n• Liên hiệp công nhân tất cả các dân tộc\n\nĐây là ba nguyên tắc cơ bản trong Cương lĩnh dân tộc của Lênin.',
  },
  sec1_3: {
    id: 'sec1_3',
    label: '1.3 Dân tộc và\nquan hệ dân tộc\nở Việt Nam',
    category: 'dantoc',
    level: 2,
    parentId: 'sec1',
    detail: 'Vấn đề dân tộc ở Việt Nam với 54 dân tộc anh em, trong đó dân tộc Kinh chiếm đa số.',
    children: ['sec1_3a', 'sec1_3b'],
  },
  sec1_3a: {
    id: 'sec1_3a',
    label: 'Đặc điểm\ndân tộc\nViệt Nam',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_3',
    detail: '• Việt Nam có 54 dân tộc, dân tộc Kinh chiếm khoảng 86%.\n• Các dân tộc có truyền thống đoàn kết, gắn bó lâu đời.\n• Các dân tộc thiểu số phân bố chủ yếu ở miền núi, vùng sâu, vùng xa.\n• Trình độ phát triển không đồng đều giữa các dân tộc.\n• Mỗi dân tộc có bản sắc văn hóa riêng, tạo nên sự đa dạng văn hóa Việt Nam.',
  },
  sec1_3b: {
    id: 'sec1_3b',
    label: 'Quan điểm và\nchính sách của Đảng\nvề vấn đề dân tộc',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_3',
    detail: '• Bình đẳng, đoàn kết, tương trợ giữa các dân tộc.\n• Chống tư tưởng dân tộc lớn và dân tộc hẹp hòi.\n• Phát triển kinh tế-xã hội vùng đồng bào dân tộc thiểu số.\n• Bảo tồn và phát huy bản sắc văn hóa các dân tộc.',
  },
  sec2: {
    id: 'sec2',
    label: '2. Tôn giáo trong\nthời kỳ quá độ lên CNXH',
    category: 'tongiao',
    level: 1,
    parentId: 'root',
    detail: 'Phần này trình bày quan điểm Mác-Lênin về tôn giáo và thực tiễn tôn giáo tại Việt Nam.',
    children: ['sec2_1', 'sec2_2'],
  },
  sec2_1: {
    id: 'sec2_1',
    label: '2.1 Chủ nghĩa\nMác-Lênin\nvề tôn giáo',
    category: 'tongiao',
    level: 2,
    parentId: 'sec2',
    detail: 'Phân tích bản chất, nguồn gốc, tính chất tôn giáo và nguyên tắc giải quyết vấn đề tôn giáo.',
    children: ['sec2_1a', 'sec2_1b'],
  },
  sec2_1a: {
    id: 'sec2_1a',
    label: 'Bản chất, nguồn gốc\nvà tính chất\ncủa tôn giáo',
    category: 'tongiao',
    level: 3,
    parentId: 'sec2_1',
    detail: '• Bản chất: Tôn giáo là sản phẩm của con người, phản ánh hư ảo thế giới khách quan.\n• Nguồn gốc kinh tế-xã hội: Sự bất lực của con người trước tự nhiên và xã hội.\n• Nguồn gốc nhận thức: Sự hạn chế trong nhận thức.\n• Nguồn gốc tâm lý: Tâm lý sợ hãi, bất an.\n• Tính chất: tính lịch sử, tính quần chúng, tính chính trị.',
  },
  sec2_1b: {
    id: 'sec2_1b',
    label: 'Nguyên tắc\ngiải quyết vấn đề\ntôn giáo',
    category: 'tongiao',
    level: 3,
    parentId: 'sec2_1',
    detail: '• Tôn trọng và bảo đảm quyền tự do tín ngưỡng.\n• Khắc phục dần những ảnh hưởng tiêu cực thông qua phát triển kinh tế-xã hội.\n• Phân biệt mặt chính trị và tư tưởng; tín ngưỡng và lợi dụng tín ngưỡng.\n• Phải có quan điểm lịch sử cụ thể khi giải quyết vấn đề tôn giáo.',
  },
  sec2_2: {
    id: 'sec2_2',
    label: '2.2 Tôn giáo ở VN\nvà chính sách\ncủa Đảng, Nhà nước',
    category: 'tongiao',
    level: 2,
    parentId: 'sec2',
    detail: '• Việt Nam là quốc gia đa tôn giáo với hơn 26 triệu tín đồ.\n• Các tôn giáo lớn: Phật giáo, Công giáo, Tin Lành, Cao Đài, Hòa Hảo, Hồi giáo.\n• Chính sách: Tôn trọng tự do tín ngưỡng, bình đẳng giữa các tôn giáo, đoàn kết tôn giáo trong khối đại đoàn kết dân tộc.',
  },
  sec3: {
    id: 'sec3',
    label: '3. Quan hệ dân tộc\nvà tôn giáo ở VN',
    category: 'quanhe',
    level: 1,
    parentId: 'root',
    detail: 'Mối quan hệ giữa dân tộc và tôn giáo ở Việt Nam và hướng giải quyết.',
    children: ['sec3_a', 'sec3_b'],
  },
  sec3_a: {
    id: 'sec3_a',
    label: 'Đặc điểm\nquan hệ dân tộc\nvà tôn giáo ở VN',
    category: 'quanhe',
    level: 2,
    parentId: 'sec3',
    detail: '• Việt Nam là quốc gia đa dân tộc, đa tôn giáo.\n• Quan hệ dân tộc và tôn giáo gắn bó chặt chẽ trong suốt lịch sử.\n• Tín ngưỡng, tôn giáo đan xen với văn hóa dân tộc.\n• Các thế lực thù địch thường lợi dụng vấn đề dân tộc, tôn giáo để chống phá.',
  },
  sec3_b: {
    id: 'sec3_b',
    label: 'Định hướng giải quyết\nmối quan hệ\ndân tộc - tôn giáo',
    category: 'quanhe',
    level: 2,
    parentId: 'sec3',
    detail: '• Tăng cường mối quan hệ tốt đẹp giữa dân tộc và tôn giáo.\n• Phát huy giá trị tích cực của tôn giáo trong đời sống dân tộc.\n• Kiên quyết đấu tranh chống lợi dụng dân tộc, tôn giáo.\n• Nâng cao đời sống vật chất, tinh thần cho đồng bào.\n• Hoàn thiện hệ thống pháp luật về dân tộc và tôn giáo.',
  },
};

export const allNodeIds = Object.keys(nodeDataMap);
