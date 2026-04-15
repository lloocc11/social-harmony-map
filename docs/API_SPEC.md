# API Spec - Mindmap Node Data

## Scope
Tai lieu nay dinh nghia contract du lieu cho mindmap de frontend render node, edge va content theo trang.

Current UI behavior:
- Detail content dang duoc render theo popup mode cho tat ca node.
- Popup duoc mount qua portal vao `document.body` va canh giua viewport.

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
- `interaction.mode`: `sidebar` hoac `popup` (giu de tuong thich schema; hien tai UI dang ep popup cho tat ca node).
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

## Content paging note
- Muc noi dung ly thuyet dai nen tach thanh nhieu `detailPages` theo logic bai hoc.
- Mau dang ap dung: node `sec1_1` duoc tach 4 trang (khai quat, nghia rong, nghia hep, moi quan he) de popup de doc va dieu huong.
- Phan `sec1_2` duoc cap nhat theo cau truc: node tong quan + 2 node con (`sec1_2a`, `sec1_2b`) de trinh bay sau noi dung "hai xu huong khach quan" va "cuong linh dan toc".
- Phan `sec1_3` duoc to chuc tuong tu: node tong quan (`sec1_3`) va 2 node con (`sec1_3a`, `sec1_3b`) cho "dac diem dan toc Viet Nam" va "quan diem, chinh sach cua Dang/Nha nuoc".
- Phan `sec2_1` duoc to chuc theo mau: node tong quan (`sec2_1`) + 2 node con (`sec2_1a`, `sec2_1b`) cho "ban chat, nguon goc, tinh chat ton giao" va "4 nguyen tac giai quyet van de ton giao".
- Phan `sec2_2` duoc to chuc: node tong quan (`sec2_2`) + 2 node con (`sec2_2a`, `sec2_2b`) cho "6 dac diem ton giao o Viet Nam" va "5 noi dung chinh sach ton giao cua Dang, Nha nuoc".
- Phan `sec3` duoc to chuc: node tong quan (`sec3`) + 2 node con (`sec3_a`, `sec3_b`) cho "3 dac diem quan he dan toc - ton giao" va "3 dinh huong giai quyet hien nay".

## Node rendering note
- Node renderer dang ap dung kich thuoc lon hon theo level va co co che font/adaptive line-height cho nhan dai, giup han che tran chu ra ngoai hinh tron.
