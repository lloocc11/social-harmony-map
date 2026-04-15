import { Button } from '@/components/ui/button';
import type { Tile } from './types';

type Props = {
  tiles: Tile[];
  onPick: (index: number) => void;
};

function tileVariant(revealed: boolean) {
  return revealed ? 'secondary' : 'outline';
}

export default function TileGrid({ tiles, onPick }: Props) {
  return (
    <div className="grid grid-cols-6 gap-3">
      {tiles.map((t) => (
        <Button
          key={t.index}
          type="button"
          variant={tileVariant(t.revealed)}
          className="h-12"
          onClick={() => onPick(t.index)}
          disabled={t.revealed}
          aria-label={`Ô số ${t.index}${t.revealed ? ' (đã mở)' : ''}`}
        >
          {t.index}
        </Button>
      ))}
    </div>
  );
}

