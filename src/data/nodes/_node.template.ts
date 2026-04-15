import type { MindmapNodeData } from '@/data/mindmapTypes';

// Copy this file to create a new node quickly.
export const exampleNodeTemplate: MindmapNodeData = {
  id: 'replace_me_id',
  label: 'Tiêu đề\nNode',
  category: 'dantoc',
  level: 2,
  parentId: 'replace_parent_id',
  interaction: {
    // sidebar | popup
    mode: 'popup',
    // Optional start page when opening
    startPageId: 'page-1',
  },
  detailPages: [
    {
      id: 'page-1',
      title: 'Trang 1',
      blocks: [
        {
          type: 'text',
          text: 'Nội dung mô tả dạng văn bản.',
        },
        {
          type: 'list',
          items: ['Ý 1', 'Ý 2', 'Ý 3'],
        },
        {
          type: 'image',
          src: '/images/example.png',
          alt: 'Ảnh minh họa',
          caption: 'Chú thích ảnh',
        },
      ],
    },
    {
      id: 'page-2',
      title: 'Trang 2 - Media',
      blocks: [
        {
          type: 'video',
          src: '/media/example.mp4',
          title: 'Video minh họa',
          poster: '/images/video-cover.png',
          caption: 'Video local/static',
          controls: true,
        },
        {
          type: 'iframe',
          src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          title: 'Embed bên ngoài',
          caption: 'Iframe có thể là slide/video/web app',
          height: 360,
        },
        {
          type: 'pdf',
          src: '/docs/example.pdf',
          title: 'PDF tham khảo',
          caption: 'Có thể mở trực tiếp trong panel hoặc tab mới',
          height: 520,
        },
      ],
    },
  ],
  layout: {
    // Optional layout override
    angle: -20,
    radius: 620,
    sectorSpread: 58,
    childSpread: 32,
  },
  children: [],
};
