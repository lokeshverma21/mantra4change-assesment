export default function GrantReportSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Summary skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="h-10 w-10 rounded-xl bg-slate-200" />
          <div className="h-6 w-20 rounded-full bg-slate-200" />
        </div>
        <div className="mt-4 h-5 w-48 rounded bg-slate-200" />
        <div className="mt-3 space-y-2">
          <div className="h-4 w-36 rounded bg-slate-100" />
          <div className="h-4 w-32 rounded bg-slate-100" />
          <div className="h-4 w-28 rounded bg-slate-100" />
        </div>
      </div>

      {/* Metrics skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-5">
              <div className="h-10 w-10 rounded-xl bg-slate-200" />
              <div className="h-7 w-16 rounded bg-slate-200" />
              <div className="h-3 w-20 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Milestone skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
          <div className="h-8 w-8 rounded-lg bg-slate-200" />
          <div className="h-4 w-32 rounded bg-slate-200" />
        </div>
        <div className="space-y-2 px-5 py-4">
          <div className="h-3 w-full rounded bg-slate-100" />
          <div className="h-3 w-5/6 rounded bg-slate-100" />
          <div className="h-3 w-4/6 rounded bg-slate-100" />
        </div>
      </div>

      {/* Report skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-200" />
            <div className="h-4 w-24 rounded bg-slate-200" />
          </div>
          <div className="h-7 w-16 rounded-lg bg-slate-100" />
        </div>
        <div className="space-y-2 px-5 py-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-3 rounded bg-slate-100"
              style={{ width: `${75 + Math.random() * 25}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
