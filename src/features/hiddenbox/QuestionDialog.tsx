import { useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { questionById } from './questions';
import type { TileContent } from './types';
import { pointsForDifficulty } from './types';

type Props = {
  open: boolean;
  content: TileContent | null;
  onOpenChange: (open: boolean) => void;
  onRevealDone: () => void;
};

function normalizeAnswer(s: string) {
  return s.trim().toLocaleLowerCase();
}

export default function QuestionDialog({ open, content, onOpenChange, onRevealDone }: Props) {
  const [picked, setPicked] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [shortAnswer, setShortAnswer] = useState('');

  const view = useMemo(() => {
    if (!content) return null;
    if (content.kind === 'question') return questionById.get(content.questionId) ?? null;
    return content;
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

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) {
          setPicked(null);
          setSubmitted(false);
          setShortAnswer('');
        }
      }}
    >
      <DialogContent className="max-w-3xl p-0">
        <DialogHeader className="px-6 pt-6 pb-3">
          <DialogTitle className="flex items-center justify-between gap-4">
            <span>{title}</span>
            {pointsText && <span className="text-sm font-medium text-muted-foreground">{pointsText}</span>}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh] px-6 pb-6">
          {!view && <div className="text-sm text-muted-foreground">Không có nội dung.</div>}

          {view && 'kind' in view && (
            <div className="space-y-4">
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{view.description ?? ''}</p>
              <div className="pt-2">
                <Button
                  type="button"
                  onClick={() => {
                    onRevealDone();
                    onOpenChange(false);
                  }}
                >
                  OK
                </Button>
              </div>
            </div>
          )}

          {view && !('kind' in view) && view.type === 'mcq' && (
            <div className="space-y-4">
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{view.prompt}</p>

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
                        'text-left rounded-lg border px-3 py-2 text-sm transition-colors',
                        isSelected ? 'border-primary' : 'border-border',
                        submitted && isCorrect ? 'bg-green-500/10 border-green-500/40' : '',
                        submitted && isWrongSelected ? 'bg-red-500/10 border-red-500/40' : '',
                        !submitted ? 'hover:bg-muted' : '',
                      ].join(' ')}
                      aria-pressed={isSelected}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
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
                    onClick={() => setSubmitted(true)}
                  >
                    Trả lời
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      onRevealDone();
                      onOpenChange(false);
                    }}
                  >
                    Bỏ qua
                  </Button>
                </div>
              ) : (
                <div className="space-y-2 pt-2">
                  <div className="text-sm text-foreground/80">
                    Đáp án đúng: <b>{String.fromCharCode(65 + view.correctIndex)}</b>
                  </div>
                  {view.explanation && (
                    <div className="text-sm text-muted-foreground whitespace-pre-line">{view.explanation}</div>
                  )}
                  <Button
                    type="button"
                    onClick={() => {
                      onRevealDone();
                      onOpenChange(false);
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
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{view.prompt}</p>

              <div className="grid gap-2">
                <input
                  value={shortAnswer}
                  onChange={(e) => setShortAnswer(e.target.value)}
                  placeholder="Nhập 1 từ / cụm từ ngắn..."
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                  disabled={submitted}
                />
                {!submitted ? (
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      disabled={normalizeAnswer(shortAnswer).length === 0}
                      onClick={() => setSubmitted(true)}
                    >
                      Trả lời
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        onRevealDone();
                        onOpenChange(false);
                      }}
                    >
                      Bỏ qua
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-sm">
                      Kết quả:{' '}
                      {normalizeAnswer(shortAnswer) === normalizeAnswer(view.answer) ? (
                        <b className="text-green-500">Đúng</b>
                      ) : (
                        <b className="text-red-500">Sai</b>
                      )}
                    </div>
                    <div className="text-sm text-foreground/80">
                      Đáp án: <b>{view.answer}</b>
                    </div>
                    {view.explanation && (
                      <div className="text-sm text-muted-foreground whitespace-pre-line">{view.explanation}</div>
                    )}
                    <Button
                      type="button"
                      onClick={() => {
                        onRevealDone();
                        onOpenChange(false);
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

