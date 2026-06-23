import { MessageSquare } from "lucide-react";

export default function DiscussionPointsCard({
  points,
}: {
  points: string[];
}) {
  if (points.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <MessageSquare className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-semibold text-slate-900">
            Discussion Points
          </h3>
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">
          No discussion points available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <MessageSquare className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-semibold text-slate-900">
          Discussion Points
        </h3>
      </div>

      <ol className="divide-y divide-slate-50 px-5">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3 py-3.5 transition hover:bg-slate-50/60"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-slate-700">{point}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
