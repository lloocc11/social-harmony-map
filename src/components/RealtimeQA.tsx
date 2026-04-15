import { useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  limit,
  type Timestamp,
} from 'firebase/firestore';
import { MessageSquarePlus, Send } from 'lucide-react';
import { db, isFirebaseConfigured, missingFirebaseEnvKeys } from '@/lib/firebase';

interface QAQuestion {
  id: string;
  author: string;
  text: string;
  createdAt: Timestamp | null;
}

interface QAAnswer {
  id: string;
  questionId: string;
  author: string;
  text: string;
  createdAt: Timestamp | null;
}

function formatDate(ts: Timestamp | null) {
  if (!ts) return 'vừa xong';
  return ts.toDate().toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function RealtimeQA() {
  const [displayName, setDisplayName] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [answerDraftByQuestion, setAnswerDraftByQuestion] = useState<Record<string, string>>({});
  const [questions, setQuestions] = useState<QAQuestion[]>([]);
  const [answers, setAnswers] = useState<QAAnswer[]>([]);
  const [savingQuestion, setSavingQuestion] = useState(false);
  const [savingAnswerId, setSavingAnswerId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!db || !isFirebaseConfigured) return;

    const questionsQuery = query(
      collection(db, 'qa_questions'),
      orderBy('createdAt', 'desc'),
      limit(80),
    );

    const answersQuery = query(
      collection(db, 'qa_answers'),
      orderBy('createdAt', 'asc'),
      limit(500),
    );

    const unsubscribeQuestions = onSnapshot(questionsQuery, (snapshot) => {
      const next = snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<QAQuestion, 'id'>;
        return {
          id: doc.id,
          author: data.author || 'Ẩn danh',
          text: data.text || '',
          createdAt: data.createdAt ?? null,
        } satisfies QAQuestion;
      });
      setQuestions(next);
    });

    const unsubscribeAnswers = onSnapshot(answersQuery, (snapshot) => {
      const next = snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<QAAnswer, 'id'>;
        return {
          id: doc.id,
          questionId: data.questionId,
          author: data.author || 'Ẩn danh',
          text: data.text || '',
          createdAt: data.createdAt ?? null,
        } satisfies QAAnswer;
      });
      setAnswers(next);
    });

    return () => {
      unsubscribeQuestions();
      unsubscribeAnswers();
    };
  }, []);

  const answersByQuestion = useMemo(() => {
    return answers.reduce<Record<string, QAAnswer[]>>((acc, answer) => {
      const list = acc[answer.questionId] ?? [];
      list.push(answer);
      acc[answer.questionId] = list;
      return acc;
    }, {});
  }, [answers]);

  const createQuestion = async () => {
    if (!db) return;

    const text = questionText.trim();
    if (!text) return;

    setSavingQuestion(true);
    setErrorMessage(null);

    try {
      await addDoc(collection(db, 'qa_questions'), {
        author: displayName.trim() || 'Ẩn danh',
        text,
        createdAt: serverTimestamp(),
      });
      setQuestionText('');
    } catch {
      setErrorMessage('Không thể gửi câu hỏi. Kiểm tra Firebase rules và kết nối mạng.');
    } finally {
      setSavingQuestion(false);
    }
  };

  const createAnswer = async (questionId: string) => {
    if (!db) return;

    const raw = answerDraftByQuestion[questionId] ?? '';
    const text = raw.trim();
    if (!text) return;

    setSavingAnswerId(questionId);
    setErrorMessage(null);

    try {
      await addDoc(collection(db, 'qa_answers'), {
        questionId,
        author: displayName.trim() || 'Ẩn danh',
        text,
        createdAt: serverTimestamp(),
      });

      setAnswerDraftByQuestion((prev) => ({
        ...prev,
        [questionId]: '',
      }));
    } catch {
      setErrorMessage('Không thể gửi trả lời. Kiểm tra Firebase rules và kết nối mạng.');
    } finally {
      setSavingAnswerId(null);
    }
  };

  if (!isFirebaseConfigured || !db) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-lg font-bold">Q&A Realtime</h2>
          <div className="mt-4 rounded-xl border border-border bg-card p-5 text-sm text-foreground/80 leading-relaxed">
            <p className="font-semibold text-foreground">Chưa cấu hình Firebase.</p>
            <p className="mt-2">Thêm các biến môi trường sau vào file .env.local:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              {missingFirebaseEnvKeys.map((key) => (
                <li key={key}>{key}</li>
              ))}
            </ul>
            <p className="mt-3">Sau đó restart dev server để kích hoạt Q&A realtime.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3">
          <MessageSquarePlus className="text-primary" size={20} />
          <h2 className="text-lg font-bold">Q&A Realtime (No Auth)</h2>
        </div>

        <div className="mt-5 rounded-xl border border-border bg-card p-5">
          <p className="text-sm text-muted-foreground">Mọi người có thể đặt câu hỏi và trả lời công khai theo thời gian thực.</p>

          <div className="mt-4 grid gap-3 md:grid-cols-[220px_1fr_auto]">
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Tên hiển thị (tùy chọn)"
              className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
            />
            <input
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  void createQuestion();
                }
              }}
              placeholder="Nhập câu hỏi của bạn..."
              className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
            />
            <button
              type="button"
              onClick={() => void createQuestion()}
              disabled={savingQuestion || !questionText.trim()}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground disabled:opacity-50"
            >
              <Send size={14} />
              Gửi hỏi
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="mt-4 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {errorMessage}
          </div>
        )}

        <div className="mt-5 space-y-4">
          {questions.length === 0 && (
            <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
              Chưa có câu hỏi nào. Hãy là người mở đầu cuộc thảo luận.
            </div>
          )}

          {questions.map((question) => {
            const questionAnswers = answersByQuestion[question.id] ?? [];
            const answerDraft = answerDraftByQuestion[question.id] ?? '';
            const isSavingAnswer = savingAnswerId === question.id;

            return (
              <article key={question.id} className="rounded-xl border border-border bg-card p-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{question.author}</span>
                  <span>{formatDate(question.createdAt)}</span>
                  <span>{`${questionAnswers.length} trả lời`}</span>
                </div>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">{question.text}</p>

                <div className="mt-4 space-y-2 border-l-2 border-border pl-3">
                  {questionAnswers.length === 0 && (
                    <p className="text-xs text-muted-foreground">Chưa có trả lời.</p>
                  )}
                  {questionAnswers.map((answer) => (
                    <div key={answer.id} className="rounded-lg border border-border/80 bg-background/50 px-3 py-2">
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="font-medium text-foreground">{answer.author}</span>
                        <span>{formatDate(answer.createdAt)}</span>
                      </div>
                      <p className="mt-1 whitespace-pre-wrap text-sm text-foreground/85">{answer.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-2 md:grid-cols-[1fr_auto]">
                  <input
                    value={answerDraft}
                    onChange={(e) =>
                      setAnswerDraftByQuestion((prev) => ({
                        ...prev,
                        [question.id]: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        void createAnswer(question.id);
                      }
                    }}
                    placeholder="Viết câu trả lời..."
                    className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => void createAnswer(question.id)}
                    disabled={isSavingAnswer || !answerDraft.trim()}
                    className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium hover:bg-muted disabled:opacity-50"
                  >
                    Trả lời
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
