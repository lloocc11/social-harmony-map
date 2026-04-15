# Social Harmony Map - Dev Page Structure Guide

## 1) Muc tieu tai lieu
Tai lieu nay mo ta cau truc trang, luong du lieu node, va cach mo rong noi dung (text/list/image/video/iframe/pdf) trong mindmap.

## 2) Kien truc tong quan
- Entrypoint page: `src/pages/Index.tsx`
- Main flow canvas: `src/components/MindmapFlow.tsx`
- Custom node UI: `src/components/RadialNode.tsx`
- Custom edge UI: `src/components/MindmapEdge.tsx`
- Detail panel/popup renderer: `src/components/DetailSidebar.tsx`
- Node schema types: `src/data/mindmapTypes.ts`
- Node registry map: `src/data/mindmapData.ts`
- Node files (modular): `src/data/nodes/*.ts`

## 3) Cac lop trach nhiem
### 3.1 Page shell
`Index.tsx` chi quan ly page-level concerns (theme, header, layout container).

### 3.2 Canvas + Layout
`MindmapFlow.tsx` chiu trach nhiem:
- Build radial layout (position node, tao edge)
- Xu ly collapse/expand/reset
- Dieu huong click node -> mo detail panel/popup

### 3.3 Node presentation
`RadialNode.tsx` chi render hinh dang node + hover + toggle children.
Khong chua business data phuc tap.

### 3.4 Detail presentation
`DetailSidebar.tsx` render noi dung theo `detailPages` cua node.
Ho tro 2 mode tu node config:
- `sidebar`: panel ben phai
- `popup`: dialog giua man hinh

### 3.5 Data layer
- `mindmapTypes.ts`: schema chuan
- `nodes/*.ts`: moi node 1 file rieng
- `nodes/index.ts`: registry list
- `mindmapData.ts`: convert list -> map cho runtime lookup

## 4) Data contract (node content API spec)
Day la "API spec" noi bo cho du lieu node:

```ts
interface MindmapNodeData {
  id: string;
  label: string;
  category: 'root' | 'intro' | 'dantoc' | 'tongiao' | 'quanhe';
  level: number;
  parentId?: string;
  detailPages: NodeContentPage[];
  interaction?: {
    mode?: 'sidebar' | 'popup';
    startPageId?: string;
  };
  layout?: {
    angle?: number;
    radius?: number;
    sectorSpread?: number;
    childSpread?: number;
  };
  children?: string[];
}
```

```ts
type NodeContentBlock =
  | { type: 'text'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | {
      type: 'video';
      src: string;
      title: string;
      poster?: string;
      caption?: string;
      controls?: boolean;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
    }
  | { type: 'iframe'; src: string; title: string; caption?: string; height?: number }
  | { type: 'pdf'; src: string; title: string; caption?: string; height?: number };
```

## 5) Workflow them node moi
1. Copy template: `src/data/nodes/_node.template.ts`
2. Doi ten file theo node id, vi du: `sec4.ts`
3. Sua `id`, `parentId`, `label`, `detailPages`, `layout`, `children`
4. Import node moi vao `src/data/nodes/index.ts` va them vao mang `nodes`
5. Neu co node con, tao file rieng cho tung node con va lap lai buoc 3-4
6. Build va test nhanh

## 6) Quy uoc dat ten
- File node: cung ten voi id node, vi du `sec1_2a.ts`
- Export constant: `<id>Node`, vi du `sec1_2aNode`
- `detailPages[].id`: unique trong pham vi node

## 7) Asset media
- Image/video/pdf local nen dat trong `public/` de truy cap qua `/...`
- Iframe url can trusted source (youtube, docs hosting, etc.)
- Khuyen nghi toi uu dung luong media de tranh panel lag

## 8) Checklist review truoc khi merge
- Khong duplicate node id
- Parent-child relation hop le
- `children` khop voi cac file node da khai bao
- `startPageId` ton tai trong `detailPages`
- Build thanh cong

## 9) Mo rong de xuat tiep theo
- Ho tro block `quiz`/`timeline`
- Keyboard navigation cho page trai/phai trong popup
- Validation script kiem tra duplicate id va parent graph
