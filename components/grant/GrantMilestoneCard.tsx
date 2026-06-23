import { Milestone } from "lucide-react";

export default function GrantMilestoneCard({
  milestoneSummary,
}: {
  milestoneSummary: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
          <Milestone className="h-4 w-4" />
        </span>

        <h3 className="text-sm font-semibold text-slate-900">
          Milestone Summary
        </h3>
      </div>

      <div className="px-5 py-4">
        <p className="text-sm leading-relaxed text-slate-600">
          {milestoneSummary}
        </p>
      </div>
    </div>
  );
}
