import { MapPin } from "lucide-react";

export default function PriorityAreasCard({
  districts,
}: {
  districts: string[];
}) {
  if (districts.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
            <MapPin className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-semibold text-slate-900">
            Priority Areas
          </h3>
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">
          No priority areas identified.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
          <MapPin className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-semibold text-slate-900">
          Priority Areas
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 px-5 py-4">
        {districts.map((district) => (
          <span
            key={district}
            className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-600/20"
          >
            <MapPin className="h-3 w-3" />
            {district}
          </span>
        ))}
      </div>
    </div>
  );
}
