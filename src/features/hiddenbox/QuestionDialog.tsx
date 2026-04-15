import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { questionById } from './questions';
import type { RevealResult, TileContent } from './types';
import { pointsForDifficulty } from './types';

type Props = {
  open: boolean;
  content: TileContent | null;
  onOpenChange: (open: boolean) => void;
  onRevealDone: (result: RevealResult) => void;
};

function normalizeAnswer(s: string) {
  return s.trim().toLocaleLowerCase();
}

export default function QuestionDialog({ open, content, onOpenChange, onRevealDone }: Props) {
  const [picked, setPicked] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [shortAnswer, setShortAnswer] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(25);
  const [revealResult, setRevealResult] = useState<RevealResult | null>(null);

  const view = useMemo(() => {
    if (!content) return null;
    if (content.kind === 'question') return questionById.get(content.questionId) ?? null;
    return content;
  }, [content]);

  const contentKey = useMemo(() => {
    if (!content) return 'none';
    if (content.kind === 'question') return `q:${content.questionId}`;
    return `${content.kind}:${content.id}`;
  }, [content]);

  const pointsText = useMemo(() => {
    if (!view) return null;
    if ('kind' in view) return `${view.points > 0 ? '+' : ''}${view.points} điểm`;
    return `+${pointsForDifficulty(view.difficulty)} điểm`;
  }, [view]);

  const title = useMemo(() => {
    if (!view) return '';
    if ('kind' in view) return view.title;
    const lvl = view.difficulty === 'easy' ? 'Dễ' : view.difficulty === 'medium' ? 'Trung bình' : 'Khó';
    return `Câu hỏi (${lvl})`;
  }, [view]);

  const isQuestion = !!view && !('kind' in view);

  useEffect(() => {
    if (!open) return;
    // Reset state every time a new tile/question is opened
    setPicked(null);
    setSubmitted(false);
    setShortAnswer('');
    setSecondsLeft(25);
    setRevealResult(null);
  }, [open, contentKey]);

  useEffect(() => {
    if (!open) return;
    if (!isQuestion) return;
    if (submitted) return;

    const handle = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) return 0;
        return s - 1;
      });
    }, 1000);

    return () => window.clearInterval(handle);
  }, [open, isQuestion, submitted, contentKey]);

  useEffect(() => {
    if (!open) return;
    if (!isQuestion) return;
    if (submitted) return;
    if (secondsLeft !== 0) return;
    // Time up: lock in and show the result UI (no effect on other questions).
    setSubmitted(true);
    setRevealResult({ kind: 'wrong', points: 0 });
  }, [open, isQuestion, submitted, secondsLeft]);

  function finalizeResult(result: RevealResult) {
    setRevealResult(result);
    onRevealDone(result);
    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) {
          setPicked(null);
          setSubmitted(false);
          setShortAnswer('');
          setSecondsLeft(25);
        }
      }}
    >
      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="px-7 pt-7 pb-3">
          <DialogTitle className="flex items-center justify-between gap-4">
            <span>{title}</span>
            <span className="flex items-center gap-3">
              {isQuestion && (
                <span className="text-base font-semibold text-muted-foreground tabular-nums">
                  {submitted ? 'Hết giờ' : `Còn ${secondsLeft}s`}
                </span>
              )}
              {pointsText && <span className="text-base font-semibold text-muted-foreground">Điểm ô: {pointsText}</span>}
            </span>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[72vh] px-7 pb-7">
          {!view && <div className="text-base text-muted-foreground">Không có nội dung.</div>}

          {view && 'kind' in view && (
            <div className="space-y-4">
              <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">{view.description ?? ''}</p>
              <div className="pt-2">
                <Button
                  type="button"
                  onClick={() => {
                    const result: RevealResult =
                      view.kind === 'bonus'
                        ? { kind: 'bonus', points: 200 }
                        : { kind: 'bomb', points: -100 };
                    finalizeResult(result);
                  }}
                >
                  OK
                </Button>
              </div>
            </div>
          )}

          {view && !('kind' in view) && view.type === 'mcq' && (
            <div className="space-y-4">
              <p className="text-lg text-foreground/85 leading-relaxed whitespace-pre-line">{view.prompt}</p>

              <div className="grid gap-2">
                {view.options.map((opt, idx) => {
                  const isSelected = picked === idx;
                  const isCorrect = submitted && idx === view.correctIndex;
                  const isWrongSelected = submitted && isSelected && idx !== view.correctIndex;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => !submitted && setPicked(idx)}
                      className={[
                        'text-left rounded-lg border px-4 py-3 text-base transition-colors',
                        isSelected ? 'border-primary' : 'border-border',
                        submitted && isCorrect ? 'bg-green-500/10 border-green-500/40' : '',
                        submitted && isWrongSelected ? 'bg-red-500/10 border-red-500/40' : '',
                        !submitted ? 'hover:bg-muted' : '',
                      ].join(' ')}
                      aria-pressed={isSelected}
                    >
                      <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {!submitted ? (
                <div className="flex items-center gap-2 pt-2">
                  <Button
                    type="button"
                    disabled={picked === null}
                    onClick={() => {
                      setSubmitted(true);
                      const base = pointsForDifficulty(view.difficulty);
                      const isCorrect = picked === view.correctIndex;
                      setRevealResult(isCorrect ? { kind: 'correct', points: base } : { kind: 'wrong', points: 0 });
                    }}
                  >
                    Trả lời
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(true);
                      setRevealResult({ kind: 'wrong', points: 0 });
                    }}
                  >
                    Bỏ qua
                  </Button>
                </div>
              ) : (
                <div className="space-y-2 pt-2">
                  <div className="text-base text-foreground/85">
                    Đáp án đúng: <b>{String.fromCharCode(65 + view.correctIndex)}</b>
                  </div>
                  <div className="text-base text-foreground/85">
                    Điểm của ô này: <b>{revealResult ? (revealResult.points > 0 ? `+${revealResult.points}` : `${revealResult.points}`) : pointsText}</b>
                  </div>
                  {view.explanation && (
                    <div className="text-base text-muted-foreground whitespace-pre-line">{view.explanation}</div>
                  )}
                  <Button
                    type="button"
                    onClick={() => {
                      finalizeResult(revealResult ?? { kind: 'wrong', points: 0 });
                    }}
                  >
                    Đóng
                  </Button>
                </div>
              )}
            </div>
          )}

          {view && !('kind' in view) && view.type === 'short' && (
            <div className="space-y-4">
              <p className="text-lg text-foreground/85 leading-relaxed whitespace-pre-line">{view.prompt}</p>

              <div className="grid gap-2">
                <input
                  value={shortAnswer}
                  onChange={(e) => setShortAnswer(e.target.value)}
                  placeholder="Nhập 1 từ / cụm từ ngắn..."
                  className="h-12 rounded-md border border-input bg-background px-3 text-base"
                  disabled={submitted}
                />
                {!submitted ? (
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      disabled={normalizeAnswer(shortAnswer).length === 0}
                      onClick={() => {
                        setSubmitted(true);
                        const base = pointsForDifficulty(view.difficulty);
                        const ok = normalizeAnswer(shortAnswer) === normalizeAnswer(view.answer);
                        setRevealResult(ok ? { kind: 'correct', points: base } : { kind: 'wrong', points: 0 });
                      }}
                    >
                      Trả lời
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(true);
                        setRevealResult({ kind: 'wrong', points: 0 });
                      }}
                    >
                      Bỏ qua
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-base">
                      Kết quả:{' '}
                      {normalizeAnswer(shortAnswer) === normalizeAnswer(view.answer) ? (
                        <b className="text-green-500">Đúng</b>
                      ) : (
                        <b className="text-red-500">Sai</b>
                      )}
                    </div>
                    <div className="text-base text-foreground/85">
                      Điểm của ô này: <b>{revealResult ? (revealResult.points > 0 ? `+${revealResult.points}` : `${revealResult.points}`) : pointsText}</b>
                    </div>
                    <div className="text-base text-foreground/85">
                      Đáp án: <b>{view.answer}</b>
                    </div>
                    {view.explanation && (
                      <div className="text-base text-muted-foreground whitespace-pre-line">{view.explanation}</div>
                    )}
                    <Button
                      type="button"
                      onClick={() => {
                        finalizeResult(revealResult ?? { kind: 'wrong', points: 0 });
                      }}
                    >
                      Đóng
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

