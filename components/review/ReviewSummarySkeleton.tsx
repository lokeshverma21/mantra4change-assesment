export default function ReviewSummarySkeleton() {
  const chipWidths = [72, 88, 96, 78, 104];

  return (
    <div className="animate-pulse space-y-6">
      {/* Achievement skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
          <div className="h-8 w-8 rounded-lg bg-slate-200" />
          <div className="h-4 w-28 rounded bg-slate-200" />
        </div>
        <div className="space-y-0 divide-y divide-slate-50 px-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-start gap-3 py-3.5">
              <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-emerald-100" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 w-full rounded bg-slate-100" />
                <div className="h-3 w-3/4 rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
          <div className="h-8 w-8 rounded-lg bg-slate-200" />
          <div className="h-4 w-16 rounded bg-slate-200" />
        </div>
        <div className="space-y-0 divide-y divide-slate-50 px-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-start gap-3 py-3.5">
              <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-amber-100" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 w-full rounded bg-slate-100" />
                <div className="h-3 w-2/3 rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Priority areas skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
          <div className="h-8 w-8 rounded-lg bg-slate-200" />
          <div className="h-4 w-28 rounded bg-slate-200" />
        </div>
        <div className="flex flex-wrap gap-2 px-5 py-4">
          {chipWidths.map((width, i) => (
            <div
              key={i}
              className="h-6 rounded-full bg-slate-100"
              style={{ width }}
            />
          ))}
        </div>
      </div>

      {/* Discussion skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
          <div className="h-8 w-8 rounded-lg bg-slate-200" />
          <div className="h-4 w-36 rounded bg-slate-200" />
        </div>
        <div className="space-y-0 divide-y divide-slate-50 px-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-start gap-3 py-3.5">
              <div className="h-6 w-6 shrink-0 rounded-lg bg-slate-200" />
              <div className="flex-1 space-y-1.5">
                <div className="h-3 w-full rounded bg-slate-100" />
                <div className="h-3 w-4/5 rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
