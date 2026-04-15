export type Difficulty = 'easy' | 'medium' | 'hard';

export type MultipleChoiceQuestion = {
  id: string;
  type: 'mcq';
  difficulty: Exclude<Difficulty, 'hard'>;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation?: string;
};

export type ShortAnswerQuestion = {
  id: string;
  type: 'short';
  difficulty: 'hard';
  prompt: string;
  answer: string; // 1 word / short phrase
  explanation?: string;
};

export type Question = MultipleChoiceQuestion | ShortAnswerQuestion;

export type SpecialTile =
  | { kind: 'bonus'; id: string; points: 200; title: string; description?: string }
  | { kind: 'bomb'; id: string; points: -100; title: string; description?: string };

export type TileContent =
  | { kind: 'question'; questionId: string }
  | SpecialTile;

export type RevealResult =
  | { kind: 'correct'; points: number }
  | { kind: 'wrong'; points: number }
  | { kind: 'bonus'; points: 200 }
  | { kind: 'bomb'; points: -100 };

export type Tile = {
  index: number; // 1..24 shown to users
  content: TileContent;
  revealed: boolean;
  revealResult?: RevealResult;
};

export function pointsForDifficulty(d: Difficulty) {
  if (d === 'easy') return 100;
  if (d === 'medium') return 200;
  return 300;
}

