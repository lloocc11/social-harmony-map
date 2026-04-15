export type NodeCategory = 'root' | 'intro' | 'dantoc' | 'tongiao' | 'quanhe';

export type NodeContentBlock =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
    }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
    }
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
  | {
      type: 'iframe';
      src: string;
      title: string;
      caption?: string;
      height?: number;
    }
  | {
      type: 'pdf';
      src: string;
      title: string;
      caption?: string;
      height?: number;
    };

export interface NodeContentPage {
  id: string;
  title: string;
  blocks: NodeContentBlock[];
}

export interface NodeLayoutConfig {
  // Degrees in radial layout. Useful for level-1 branch tuning.
  angle?: number;
  // Optional ring radius override.
  radius?: number;
  // Sector spread for children around node direction.
  sectorSpread?: number;
  // Spread for deeper child fan-out.
  childSpread?: number;
}

export interface NodeInteractionConfig {
  mode?: 'sidebar' | 'popup';
  startPageId?: string;
}

export interface MindmapNodeData {
  id: string;
  label: string;
  category: NodeCategory;
  level: number;
  parentId?: string;
  detailPages: NodeContentPage[];
  interaction?: NodeInteractionConfig;
  layout?: NodeLayoutConfig;
  children?: string[];
}
