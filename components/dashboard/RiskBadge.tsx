import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  OctagonAlert,
} from "lucide-react";

import type { RiskStatus } from "@/types/dashboard";

const STYLES = {
  "On Track": {
    wrapper: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    dot: "bg-emerald-500",
    icon: CheckCircle2,
  },
  Behind: {
    wrapper: "bg-amber-50 text-amber-700 ring-amber-600/20",
    dot: "bg-amber-500",
    icon: Clock,
  },
  "At Risk": {
    wrapper: "bg-orange-50 text-orange-700 ring-orange-600/20",
    dot: "bg-orange-500",
    icon: AlertTriangle,
  },
  Critical: {
    wrapper: "bg-rose-50 text-rose-700 ring-rose-600/20",
    dot: "bg-rose-500",
    icon: OctagonAlert,
  },
};

export default function RiskBadge({
  status,
  showIcon = false,
}: {
  status: RiskStatus;
  showIcon?: boolean;
}) {
  const style = STYLES[status];
  const Icon = style.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${style.wrapper}`}
    >
      {showIcon ? (
        <Icon className="h-3.5 w-3.5" />
      ) : (
        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      )}

      {status}
    </span>
  );
}