# API Spec - Mindmap Node Data

## Scope
Tai lieu nay dinh nghia contract du lieu cho mindmap de frontend render node, edge, popup/sidebar va content theo trang.

## Source files
- `src/data/mindmapTypes.ts`
- `src/data/mindmapData.ts`
- `src/data/nodes/*.ts`

## Type: MindmapNodeData

```ts
interface MindmapNodeData {
  id: string;
  label: string;
  category: 'root' | 'intro' | 'dantoc' | 'tongiao' | 'quanhe';
  level: number;
  parentId?: string;
  detailPages: NodeContentPage[];
  interaction?: NodeInteractionConfig;
  layout?: NodeLayoutConfig;
  children?: string[];
}
```

### Field semantics
- `id`: unique node id, duoc dung lam React Flow node id.
- `label`: text hien thi tren node.
- `category`: map sang theme mau node/edge.
- `level`: cap node (0 root, 1 branch, 2 sub, 3 leaf).
- `parentId`: id node cha.
- `detailPages`: danh sach trang noi dung theo thu tu.
- `interaction.mode`: `sidebar` hoac `popup`.
- `interaction.startPageId`: trang mac dinh khi mo.
- `layout`: override bo cuc radial theo node.
- `children`: danh sach node con.

## Type: NodeContentPage

```ts
interface NodeContentPage {
  id: string;
  title: string;
  blocks: NodeContentBlock[];
}
```

### Rules
- `id` unique trong pham vi 1 node.
- `blocks` render theo dung thu tu khai bao.

## Type: NodeContentBlock

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
      captionsSrc?: string;
      captionsLang?: string;
      captionsLabel?: string;
      caption?: string;
      controls?: boolean;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
    }
  | { type: 'iframe'; src: string; title: string; caption?: string; height?: number }
  | { type: 'pdf'; src: string; title: string; caption?: string; height?: number };
```

## Type: NodeLayoutConfig

```ts
interface NodeLayoutConfig {
  angle?: number;
  radius?: number;
  sectorSpread?: number;
  childSpread?: number;
}
```

## Type: NodeInteractionConfig

```ts
interface NodeInteractionConfig {
  mode?: 'sidebar' | 'popup';
  startPageId?: string;
}
```

## Validation checklist
- Node `id` khong trung.
- `parentId` ton tai trong graph.
- `children` tham chieu node ton tai.
- `startPageId` ton tai trong `detailPages`.
- Media path local phai nam trong `public/` neu dung duong dan `/...`.
