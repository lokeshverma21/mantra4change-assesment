import type { ReactNode } from "react";
import SectionHeader from "@/components/dashboard/SectionHeader";
import GrantSummaryCard from "./GrantSummaryCard";
import GrantMetricsCard from "./GrantMetricsCard";
import GrantMilestoneCard from "./GrantMilestoneCard";
import DraftReportCard from "./DraftReportCard";
import type { GrantSummary, GrantMetrics } from "@/types/grant";

type GrantPageLayoutProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  summary: GrantSummary;
  metrics: GrantMetrics;
  milestoneSummary: string;
  reportText: string;
};

export default function GrantPageLayout({
  title,
  subtitle,
  action,
  summary,
  metrics,
  milestoneSummary,
  reportText,
}: GrantPageLayoutProps) {
  return (
    <div className="space-y-6">
      <SectionHeader title={title} subtitle={subtitle} action={action} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GrantSummaryCard data={summary} />

        <div className="lg:col-span-2">
          <GrantMetricsCard data={metrics} />
        </div>
      </div>

      <GrantMilestoneCard milestoneSummary={milestoneSummary} />

      <DraftReportCard reportText={reportText} />
    </div>
  );
}
