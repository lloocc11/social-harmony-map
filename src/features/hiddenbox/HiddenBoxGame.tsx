import { useCallback, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import TileGrid from './TileGrid';
import QuestionDialog from './QuestionDialog';
import { createTiles } from './gameUtils';
import type { RevealResult, Tile, TileContent } from './types';

export default function HiddenBoxGame() {
  const [tiles, setTiles] = useState<Tile[]>(() => createTiles());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeTile = useMemo(() => {
    if (activeIndex === null) return null;
    return tiles.find((t) => t.index === activeIndex) ?? null;
  }, [activeIndex, tiles]);

  const activeContent: TileContent | null = activeTile?.content ?? null;

  const pickTile = useCallback(
    (index: number) => {
      const t = tiles.find((x) => x.index === index);
      if (!t || t.revealed) return;
      setActiveIndex(index);
    },
    [tiles],
  );

  const markRevealed = useCallback((revealResult: RevealResult) => {
    if (activeIndex === null) return;
    setTiles((prev) =>
      prev.map((t) => (t.index === activeIndex ? { ...t, revealed: true, revealResult } : t)),
    );
    setActiveIndex(null);
  }, [activeIndex]);

  const reset = useCallback(() => {
    setTiles(createTiles());
    setActiveIndex(null);
  }, []);

  const revealedCount = tiles.filter((t) => t.revealed).length;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold">Trò chơi: Hãy chọn ô đúng</div>
          <div className="text-xs text-muted-foreground mt-0.5">
            24 ô (18 câu hỏi + 3 ô cộng điểm + 3 ô ném bom). Điểm hiển thị theo từng lượt, không cộng tổng.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-muted-foreground">{revealedCount}/24 đã mở</div>
          <Button type="button" variant="outline" onClick={reset}>
            Chơi lại (xáo ô)
          </Button>
        </div>
      </div>

      <TileGrid tiles={tiles} onPick={pickTile} />

      <QuestionDialog
        open={activeIndex !== null}
        content={activeContent}
        onOpenChange={(open) => (!open ? setActiveIndex(null) : undefined)}
        onRevealDone={markRevealed}
      />
    </div>
  );
}

