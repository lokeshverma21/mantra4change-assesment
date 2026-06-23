import {
  School,
  Building2,
  Users,
  Upload,
} from "lucide-react";

type GrantFactPanelProps = {
  schoolsCovered: number;
  districtsCovered: number;
  attendanceRate: number;
  evidenceRate: number;
};

const FACTS = [
  {
    key: "schoolsCovered",
    label: "Schools Covered",
    icon: School,
    accent: "bg-indigo-50 text-indigo-600",
  },
  {
    key: "districtsCovered",
    label: "Districts Covered",
    icon: Building2,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    key: "attendanceRate",
    label: "Attendance",
    icon: Users,
    accent: "bg-cyan-50 text-cyan-600",
    suffix: "%",
  },
  {
    key: "evidenceRate",
    label: "Evidence",
    icon: Upload,
    accent: "bg-emerald-50 text-emerald-600",
    suffix: "%",
  },
] as const;

export default function GrantFactPanel({
  schoolsCovered,
  districtsCovered,
  attendanceRate,
  evidenceRate,
}: GrantFactPanelProps) {
  const values = {
    schoolsCovered,
    districtsCovered,
    attendanceRate,
    evidenceRate,
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-4">
        <h3 className="text-sm font-semibold text-slate-900">
          Grant Facts
        </h3>
      </div>

      <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-4">
        {FACTS.map((fact) => {
          const Icon = fact.icon;

          return (
            <div
              key={fact.key}
              className="flex flex-col items-center gap-2 p-5 transition hover:bg-slate-50/60"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${fact.accent}`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {values[fact.key]}
                {fact.accent ?? ""}
              </p>

              <p className="text-xs font-medium text-slate-500">
                {fact.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}