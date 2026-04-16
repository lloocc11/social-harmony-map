import { useCallback, useEffect, useState, useMemo } from 'react';
import { useReactFlow } from '@xyflow/react';
import { Play, Pause, SkipForward, SkipBack, X, ChevronRight } from 'lucide-react';
import { nodeDataMap } from '@/data/mindmapData';

interface PresentationModeProps {
  active: boolean;
  onClose: () => void;
  onExpandNode: (id: string) => void;
}

/**
 * Build a presentation order: root → intro → sec1 (expand) → sec1 children → sec2 (expand) → sec2 children → sec3 → sec3 children
 * Each step focuses on a node (or group of nodes in a branch).
 */
interface PresentationStep {
  id: string;
  label: string;
  /** Node IDs to focus/zoom into */
  focusNodes: string[];
  /** Nodes that must be expanded before this step */
  expandIds: string[];
}

function buildPresentationSteps(): PresentationStep[] {
  const steps: PresentationStep[] = [];
  const root = nodeDataMap.root;
  if (!root) return steps;

  // Step 0: Root overview
  steps.push({
    id: 'root',
    label: root.label.replace(/\n/g, ' '),
    focusNodes: ['root'],
    expandIds: [],
  });

  // For each L1 branch
  const l1Children = root.children || [];
  for (const l1Id of l1Children) {
    const l1 = nodeDataMap[l1Id];
    if (!l1) continue;

    // Step: zoom to L1 node + root
    steps.push({
      id: l1Id,
      label: l1.label.replace(/\n/g, ' '),
      focusNodes: ['root', l1Id],
      expandIds: [],
    });

    const l2Children = l1.children || [];
    if (l2Children.length > 0) {
      // Step: expand L1 and show all L2 children
      steps.push({
        id: `${l1Id}-children`,
        label: `${l1.label.replace(/\n/g, ' ')} — Chi tiết`,
        focusNodes: [l1Id, ...l2Children],
        expandIds: [l1Id],
      });

      // For each L2 with children, show L3
      for (const l2Id of l2Children) {
        const l2 = nodeDataMap[l2Id];
        if (!l2 || !l2.children?.length) continue;

        steps.push({
          id: `${l2Id}-children`,
          label: l2.label.replace(/\n/g, ' '),
          focusNodes: [l2Id, ...l2.children],
          expandIds: [l1Id, l2Id],
        });
      }
    }
  }

  return steps;
}

export default function PresentationMode({ active, onClose, onExpandNode }: PresentationModeProps) {
  const { fitView } = useReactFlow();
  const steps = useMemo(() => buildPresentationSteps(), []);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goToStep = useCallback(
    (stepIndex: number) => {
      if (stepIndex < 0 || stepIndex >= steps.length) return;
      const step = steps[stepIndex];
      setCurrentStep(stepIndex);

      // Expand required nodes
      for (const expandId of step.expandIds) {
        onExpandNode(expandId);
      }

      // Zoom to focus nodes after a short delay for layout
      setTimeout(() => {
        fitView({
          nodes: step.focusNodes.map((id) => ({ id })),
          padding: 0.35,
          duration: 800,
          maxZoom: 1.8,
        });
      }, 150);
    },
    [steps, fitView, onExpandNode],
  );

  const next = useCallback(() => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentStep, steps.length, goToStep]);

  const prev = useCallback(() => {
    if (currentStep > 0) goToStep(currentStep - 1);
  }, [currentStep, goToStep]);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || !active) return;
    const timer = setTimeout(next, 4000);
    return () => clearTimeout(timer);
  }, [isPlaying, active, next, currentStep]);

  // Keyboard navigation
  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, next, prev, onClose]);

  // Start at step 0 when activated
  useEffect(() => {
    if (active) {
      setCurrentStep(0);
      goToStep(0);
    }
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!active) return null;

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      {/* Step label */}
      <div className="flex justify-center mb-3">
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl px-5 py-3 shadow-xl max-w-lg">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <ChevronRight size={12} />
            <span>Bước {currentStep + 1} / {steps.length}</span>
          </div>
          <p className="text-sm font-semibold text-foreground leading-snug">
            {step?.label}
          </p>
        </div>
      </div>

      {/* Controls bar */}
      <div className="bg-card/95 backdrop-blur-md border-t border-border px-5 py-3">
        {/* Progress bar */}
        <div className="w-full h-1 bg-muted rounded-full mb-3 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          {/* Step dots / timeline */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-[50%] scrollbar-hide">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goToStep(i)}
                className={[
                  'w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-300',
                  i === currentStep
                    ? 'bg-primary scale-125 ring-2 ring-primary/30'
                    : i < currentStep
                      ? 'bg-primary/50'
                      : 'bg-muted-foreground/30',
                ].join(' ')}
                title={s.label}
              />
            ))}
          </div>

          {/* Playback controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={currentStep === 0}
              className="p-2 rounded-lg bg-muted text-foreground disabled:opacity-30 hover:bg-accent transition-colors"
              title="Bước trước (←)"
            >
              <SkipBack size={16} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              title={isPlaying ? 'Tạm dừng' : 'Tự động trình chiếu'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className="p-2 rounded-lg bg-muted text-foreground disabled:opacity-30 hover:bg-accent transition-colors"
              title="Bước tiếp (→)"
            >
              <SkipForward size={16} />
            </button>

            <div className="w-px h-6 bg-border mx-1" />

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
              title="Thoát trình chiếu (Esc)"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
