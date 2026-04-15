import type { MindmapNodeData } from '@/data/mindmapTypes';

export const sec1_2Node: MindmapNodeData = {
  id: 'sec1_2',
  label: '1.2 CN Mác-Lênin\nvề vấn đề\ndân tộc',
  category: 'dantoc',
  level: 2,
  parentId: 'sec1',
  interaction: { mode: 'popup' },
  detailPages: [
    {
      id: 'sec1-2-main',
      title: 'Quan điểm Mác-Lênin',
      blocks: [
        {
          type: 'text',
          text: 'Quan điểm Mác-Lênin bao gồm hai xu hướng khách quan và Cương lĩnh dân tộc.',
        },
      ],
    },
    {
      id: 'sec1-2-structure',
      title: 'Cấu trúc nội dung',
      blocks: [
        {
          type: 'list',
          items: ['Hai xu hướng khách quan của dân tộc', 'Cương lĩnh dân tộc của chủ nghĩa Mác-Lênin'],
        },
      ],
    },
    {
      id: 'sec1-2-note',
      title: 'Lien ket node con',
      blocks: [
        {
          type: 'text',
          text: 'Chi tiet tung noi dung duoc trinh bay o hai node con: Hai xu huong khach quan va Cuong linh dan toc.',
        },
      ],
    },
  ],
  layout: {
    childSpread: 34,
  },
  children: ['sec1_2a', 'sec1_2b'],
};
