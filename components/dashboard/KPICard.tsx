import {
  Activity,
  Building2,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  School,
  TrendingDown,
  TrendingUp,
  Upload,
  Users,
  type LucideIcon,
} from "lucide-react";

import type { KPI } from "@/types/dashboard";

const ICONS: Record<string, LucideIcon> = {
  school: School,
  building: Building2,
  activity: Activity,
  upload: Upload,
  users: Users,
  check: CheckCircle2,
  calendar: Calendar,
  "calendar-check": CalendarCheck,
};

const ACCENTS: Record<string, string> = {
  indigo: "bg-indigo-50 text-indigo-600",
  blue: "bg-blue-50 text-blue-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  violet: "bg-violet-50 text-violet-600",
  cyan: "bg-cyan-50 text-cyan-600",
  rose: "bg-rose-50 text-rose-600",
};

export default function KPICard({ kpi }: { kpi: KPI }) {
  const Icon = ICONS[kpi.icon] ?? Activity;
  const accent = ACCENTS[kpi.accent] ?? ACCENTS.indigo;

  const trendColor =
    kpi.trend?.direction === "up"
      ? "text-emerald-600 bg-emerald-50"
      : kpi.trend?.direction === "down"
      ? "text-rose-600 bg-rose-50"
      : "text-slate-500 bg-slate-100";

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}
        >
          <Icon className="h-5 w-5" />
        </span>

        {kpi.trend ? (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${trendColor}`}
          >
            {kpi.trend.direction === "up" ? (
              <TrendingUp className="h-3 w-3" />
            ) : kpi.trend.direction === "down" ? (
              <TrendingDown className="h-3 w-3" />
            ) : null}

            {kpi.trend.value}
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm font-medium text-slate-500">
        {kpi.title}
      </p>

      <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
        {kpi.value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {kpi.label}
      </p>
    </div>
  );
}