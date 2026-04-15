import type { Tile, TileContent } from './types';

export function shuffleInPlace<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function buildDefaultDeck(): TileContent[] {
  const questionTiles: TileContent[] = Array.from({ length: 18 }, (_, i) => ({
    kind: 'question',
    questionId: `q${i + 1}`,
  }));

  const bonusTiles: TileContent[] = Array.from({ length: 3 }, (_, i) => ({
    kind: 'bonus',
    id: `bonus-${i + 1}`,
    points: 200,
    title: 'Ô cộng điểm',
    description: 'Bạn nhận thêm 200 điểm cho lượt này.',
  }));

  const bombTiles: TileContent[] = Array.from({ length: 3 }, (_, i) => ({
    kind: 'bomb',
    id: `bomb-${i + 1}`,
    points: -100,
    title: 'Ô ném bom',
    description: 'Bạn bị trừ 100 điểm cho lượt này.',
  }));

  return [...questionTiles, ...bonusTiles, ...bombTiles];
}

export function createTiles(): Tile[] {
  const deck = shuffleInPlace(buildDefaultDeck());
  return deck.map((content, idx) => ({
    index: idx + 1,
    content,
    revealed: false,
  }));
}

