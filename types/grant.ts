import type { RiskStatus } from "./dashboard";

export type GrantSummary = {
  grantName: string;
  donor: string;
  reportingMonth: string;
  reportStatus: string;
  riskStatus: RiskStatus;
};

export type GrantMetrics = {
  pblCompletionRate: number;
  evidenceSubmissionRate: number;
  attendanceRate: number;
  sampledSchoolRecords: number;
};

export type GrantReportData = {
  summary: GrantSummary;
  metrics: GrantMetrics;
  milestoneSummary: string;
  reportText: string;
};