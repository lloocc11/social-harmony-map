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
    detail: 'Dân tộc là cộng đồng người ổn định, hình thành trong lịch sử, dựa trên cơ sở cộng đồng về ngôn ngữ, lãnh thổ, kinh tế, văn hóa và ý thức tự giác tộc người.',
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
    detail: '• Xu hướng 1: Các cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập.\n• Xu hướng 2: Các dân tộc muốn liên hiệp lại với nhau.',
  },
  sec1_2b: {
    id: 'sec1_2b',
    label: 'Cương lĩnh\ndân tộc',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_2',
    detail: '• Các dân tộc hoàn toàn bình đẳng\n• Các dân tộc được quyền tự quyết\n• Liên hiệp công nhân tất cả các dân tộc',
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
    detail: '• 54 dân tộc, Kinh chiếm ~86%.\n• Truyền thống đoàn kết lâu đời.\n• Dân tộc thiểu số ở miền núi, vùng sâu.\n• Phát triển không đồng đều.',
  },
  sec1_3b: {
    id: 'sec1_3b',
    label: 'Chính sách\ncủa Đảng',
    category: 'dantoc',
    level: 3,
    parentId: 'sec1_3',
    detail: '• Bình đẳng, đoàn kết, tương trợ giữa các dân tộc.\n• Chống tư tưởng dân tộc lớn và dân tộc hẹp hòi.\n• Phát triển kinh tế-xã hội vùng dân tộc thiểu số.',
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
    detail: '• Bản chất: phản ánh hư ảo thế giới khách quan.\n• Nguồn gốc: kinh tế-xã hội, nhận thức, tâm lý.\n• Tính chất: lịch sử, quần chúng, chính trị.',
  },
  sec2_1b: {
    id: 'sec2_1b',
    label: 'Nguyên tắc\ngiải quyết',
    category: 'tongiao',
    level: 3,
    parentId: 'sec2_1',
    detail: '• Tôn trọng quyền tự do tín ngưỡng.\n• Khắc phục ảnh hưởng tiêu cực qua phát triển KT-XH.\n• Phân biệt mặt chính trị và tư tưởng.',
  },
  sec2_2: {
    id: 'sec2_2',
    label: '2.2 Tôn giáo VN\nvà chính sách\ncủa Đảng',
    category: 'tongiao',
    level: 2,
    parentId: 'sec2',
    detail: '• Việt Nam đa tôn giáo, hơn 26 triệu tín đồ.\n• Phật giáo, Công giáo, Tin Lành, Cao Đài, Hòa Hảo, Hồi giáo.\n• Chính sách: tôn trọng, bình đẳng, đoàn kết.',
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
    detail: '• Đa dân tộc, đa tôn giáo.\n• Quan hệ gắn bó chặt chẽ trong lịch sử.\n• Tín ngưỡng đan xen với văn hóa dân tộc.',
  },
  sec3_b: {
    id: 'sec3_b',
    label: 'Định hướng\ngiải quyết\nDT - TG',
    category: 'quanhe',
    level: 2,
    parentId: 'sec3',
    detail: '• Tăng cường mối quan hệ tốt đẹp.\n• Phát huy giá trị tích cực của tôn giáo.\n• Kiên quyết chống lợi dụng dân tộc, tôn giáo.\n• Hoàn thiện pháp luật về dân tộc và tôn giáo.',
  },
};

export const allNodeIds = Object.keys(nodeDataMap);
