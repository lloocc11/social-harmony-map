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
          text: 'Quan hệ dân tộc - tôn giáo ở Việt Nam có tính lịch sử lâu dài, gắn với cộng đồng cư dân cụ thể và đời sống văn hóa bản địa.',
        },
      ],
    },
    {
      id: 'sec3-a-points',
      title: 'Đặc điểm tiêu biểu',
      blocks: [
        {
          type: 'list',
          items: [
            'Đa dân tộc, đa tôn giáo.',
            'Quan hệ gắn bó chặt chẽ trong lịch sử.',
            'Tín ngưỡng đan xen với văn hóa dân tộc.',
          ],
        },
      ],
    },
    {
      id: 'sec3-a-full-legacy',
      title: 'Nội dung đầy đủ (legacy)',
      blocks: [
        {
          type: 'text',
          text: `Quan hệ dân tộc và tôn giáo là sự liên kết, tác động qua lại và chi phối lẫn nhau giữa dân tộc với tôn giáo trong nội bộ một quốc gia hoặc giữa các quốc gia trên mọi lĩnh vực của đời sống xã hội.

Ở Việt Nam hiện nay, quan hệ dân tộc và tôn giáo có những đặc điểm cơ bản:
1) Được thiết lập và củng cố trên cơ sở cộng đồng quốc gia - dân tộc thống nhất.
2) Chịu sự chi phối mạnh mẽ của tín ngưỡng truyền thống.
3) Có sự xuất hiện và phát triển của các hiện tượng tôn giáo mới trong bối cảnh hội nhập.

Việc quản lý tốt mối quan hệ này có ý nghĩa trực tiếp đối với ổn định chính trị, trật tự xã hội và khối đại đoàn kết toàn dân tộc.`,
        },
      ],
    },
  ],
};
