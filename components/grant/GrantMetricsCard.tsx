import { CheckCircle2, Upload, Users, School } from "lucide-react";
import type { GrantMetrics } from "@/types/grant";

const METRICS_CONFIG = [
  {
    key: "pblCompletionRate" as const,
    label: "PBL Completion",
    icon: CheckCircle2,
    accent: "bg-indigo-50 text-indigo-600",
    suffix: "%",
  },
  {
    key: "evidenceSubmissionRate" as const,
    label: "Evidence Submitted",
    icon: Upload,
    accent: "bg-emerald-50 text-emerald-600",
    suffix: "%",
  },
  {
    key: "attendanceRate" as const,
    label: "Attendance",
    icon: Users,
    accent: "bg-cyan-50 text-cyan-600",
    suffix: "%",
  },
  {
    key: "sampledSchoolRecords" as const,
    label: "Sampled Schools",
    icon: School,
    accent: "bg-amber-50 text-amber-600",
    suffix: "",
  },
];

export default function GrantMetricsCard({ data }: { data: GrantMetrics }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-4">
        {METRICS_CONFIG.map((metric) => {
          const Icon = metric.icon;
          const value = data[metric.key];

          return (
            <div
              key={metric.key}
              className="group flex flex-col items-center gap-2 p-5 transition hover:bg-slate-50/60"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${metric.accent}`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {value}
                {metric.suffix}
              </p>

              <p className="text-xs font-medium text-slate-500">
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
