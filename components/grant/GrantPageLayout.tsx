import type { ReactNode } from "react";
import SectionHeader from "@/components/dashboard/SectionHeader";
import GrantSummaryCard from "./GrantSummaryCard";
import GrantMetricsCard from "./GrantMetricsCard";
import GrantMilestoneCard from "./GrantMilestoneCard";
import DraftReportCard from "./DraftReportCard";
import EvidenceGallery from "./EvidenceGallery";
import type { GrantInfo, GrantPerformance, GrantEvidence } from "@/types/grant";
import type { RiskStatus } from "@/types/dashboard";

type GrantPageLayoutProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  summary: GrantInfo;
  metrics: GrantPerformance;
  milestoneSummary: string;
  reportText: string;
  evidence: GrantEvidence[];
};

export default function GrantPageLayout({
  title,
  subtitle,
  action,
  summary,
  metrics,
  milestoneSummary,
  reportText,
  evidence,
}: GrantPageLayoutProps) {
  // Transform evidence paths
  const imagePaths = evidence
    .map((e) => e.path)
    .filter((path): path is string => !!path)
    .map((path) => (path.startsWith("/") ? path : `/${path}`));

  return (
    <div className="space-y-6">
      <SectionHeader title={title} subtitle={subtitle} action={action} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GrantSummaryCard
          data={{
            grantName: summary.grantName,
            donor: summary.donor,
            reportingMonth: summary.reportingMonth,
            reportStatus: summary.reportStatus ?? "Generated",
            riskStatus: (metrics.riskStatus as RiskStatus) ?? "On Track",
          }}
        />

        <div className="lg:col-span-2">
          <GrantMetricsCard
            data={{
              pblCompletionRate: metrics.pblCompletionRate ?? 0,
              evidenceSubmissionRate: metrics.evidenceSubmissionRate ?? 0,
              attendanceRate: metrics.attendanceRate ?? 0,
              sampledSchoolRecords: metrics.sampledSchoolRecords ?? 0,
            }}
          />
        </div>
      </div>

      <GrantMilestoneCard milestoneSummary={milestoneSummary} />

      <EvidenceGallery images={imagePaths} />

      <DraftReportCard reportText={reportText} />
    </div>
  );
}

