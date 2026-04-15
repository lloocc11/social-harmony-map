import { Button } from '@/components/ui/button';
import type { Tile } from './types';

type Props = {
  tiles: Tile[];
  onPick: (index: number) => void;
};

function pointsLabel(points: number) {
  if (points > 0) return `+${points}`;
  return `${points}`;
}

export default function TileGrid({ tiles, onPick }: Props) {
  return (
    <div className="grid grid-cols-6 gap-4">
      {tiles.map((t) => (
        <Button
          key={t.index}
          type="button"
          variant={t.revealed ? 'secondary' : 'outline'}
          className={[
            'h-16 text-lg font-bold',
            t.revealed && t.revealResult?.kind === 'correct' ? '!bg-green-600/20 !text-green-200 !border-green-500/40' : '',
            t.revealed && t.revealResult?.kind === 'wrong' ? '!bg-red-600/20 !text-red-200 !border-red-500/40' : '',
            t.revealed && t.revealResult?.kind === 'bonus' ? '!bg-sky-600/20 !text-sky-200 !border-sky-500/40' : '',
            t.revealed && t.revealResult?.kind === 'bomb' ? '!bg-orange-600/20 !text-orange-200 !border-orange-500/40' : '',
          ].join(' ')}
          onClick={() => onPick(t.index)}
          disabled={t.revealed}
          aria-label={`Ô số ${t.index}${t.revealed ? ' (đã mở)' : ''}`}
        >
          {t.revealed && t.revealResult ? pointsLabel(t.revealResult.points) : t.index}
        </Button>
      ))}
    </div>
  );
}

