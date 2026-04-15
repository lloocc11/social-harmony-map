import HiddenBoxGame from '@/features/hiddenbox/HiddenBoxGame';

export default function HiddenBox() {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-lg font-bold">HiddenBox</h2>
        <div className="mt-6 rounded-xl border border-border bg-card p-5">
          <HiddenBoxGame />
        </div>
      </div>
    </div>
  );
}

