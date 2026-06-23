import RiskBadge from "./RiskBadge";
import type { RankingRow } from "@/types/dashboard";

type RankingTableProps = {
  title: string;
  subtitle?: string;
  rows: RankingRow[];
  variant?: "top" | "bottom";
};

export default function RankingTable({
  title,
  subtitle,
  rows,
  variant = "top",
}: RankingTableProps) {
  const accentDot = variant === "top" ? "bg-emerald-500" : "bg-rose-500";

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
        <span className={`h-2 w-2 rounded-full ${accentDot}`} />

        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            {title}
          </h3>

          {subtitle ? (
            <p className="text-xs text-slate-400">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
              <th className="px-5 py-3 font-medium">#</th>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 text-right font-medium">
                Performance
              </th>
              <th className="px-5 py-3 text-right font-medium">
                Risk
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {rows.map((row) => (
              <tr
                key={`${row.rank}-${row.name}`}
                className="transition hover:bg-slate-50/60"
              >
                <td className="px-5 py-3.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600">
                    {row.rank}
                  </span>
                </td>

                <td className="px-5 py-3.5 font-medium text-slate-800">
                  {row.name}
                </td>

                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    <div className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-slate-100 sm:block">
                      <div
                        className={`h-full rounded-full ${
                          variant === "top"
                            ? "bg-emerald-500"
                            : "bg-rose-400"
                        }`}
                        style={{
                          width: `${row.performance}%`,
                        }}
                      />
                    </div>

                    <span className="w-12 text-right font-semibold text-slate-900">
                      {row.performance.toFixed(1)}%
                    </span>
                  </div>
                </td>

                <td className="px-5 py-3.5 text-right">
                  <RiskBadge status={row.risk} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}