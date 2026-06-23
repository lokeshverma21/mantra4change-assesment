import { AlertTriangle } from "lucide-react";

export default function RiskList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
            <AlertTriangle className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-semibold text-slate-900">Risks</h3>
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">
          No risks identified.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
          <AlertTriangle className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-semibold text-slate-900">Risks</h3>
      </div>

      <ul className="divide-y divide-slate-50 px-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 py-3.5 transition hover:bg-slate-50/60"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <AlertTriangle className="h-3 w-3" />
            </span>
            <p className="text-sm leading-relaxed text-slate-700">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
