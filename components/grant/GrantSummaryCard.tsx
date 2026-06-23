import { FileText, Building2, Calendar, ClipboardCheck } from "lucide-react";
import RiskBadge from "@/components/dashboard/RiskBadge";
import type { GrantSummary } from "@/types/grant";

export default function GrantSummaryCard({ data }: { data: GrantSummary }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <FileText className="h-5 w-5" />
        </span>

        <RiskBadge status={data.riskStatus} showIcon />
      </div>

      <p className="mt-4 text-lg font-bold tracking-tight text-slate-900">
        {data.grantName}
      </p>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Building2 className="h-3.5 w-3.5 text-slate-400" />
          <span>{data.donor}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <span>{data.reportingMonth}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <ClipboardCheck className="h-3.5 w-3.5 text-slate-400" />
          <span>{data.reportStatus}</span>
        </div>
      </div>
    </div>
  );
}
