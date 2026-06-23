import {
  CheckCircle2,
  AlertTriangle,
  MapPin,
  MessageSquare,
} from "lucide-react";

type ReviewSummaryCardProps = {
  achievementCount: number;
  riskCount: number;
  priorityAreaCount: number;
  discussionPointCount: number;
};

const SUMMARY_ITEMS = [
  {
    key: "achievementCount",
    label: "Achievements",
    icon: CheckCircle2,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    key: "riskCount",
    label: "Risks",
    icon: AlertTriangle,
    accent: "bg-amber-50 text-amber-600",
  },
  {
    key: "priorityAreaCount",
    label: "Priority Areas",
    icon: MapPin,
    accent: "bg-rose-50 text-rose-600",
  },
  {
    key: "discussionPointCount",
    label: "Discussion Points",
    icon: MessageSquare,
    accent: "bg-indigo-50 text-indigo-600",
  },
] as const;

export default function ReviewSummaryCard({
  achievementCount,
  riskCount,
  priorityAreaCount,
  discussionPointCount,
}: ReviewSummaryCardProps) {
  const values = {
    achievementCount,
    riskCount,
    priorityAreaCount,
    discussionPointCount,
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-4">
        <h3 className="text-sm font-semibold text-slate-900">
          Review Overview
        </h3>
      </div>

      <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-4">
        {SUMMARY_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.key}
              className="group flex flex-col items-center gap-2 p-5 transition hover:bg-slate-50/60"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.accent}`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {values[item.key]}
              </p>

              <p className="text-xs font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}