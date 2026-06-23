import type { RiskStatus } from "./dashboard";

export interface GrantSummary {
  grantName: string;
  donor: string;
  reportingMonth: string;
  reportStatus: string;
  riskStatus: RiskStatus;
}

export interface GrantMetrics {
  pblCompletionRate: number;
  evidenceSubmissionRate: number;
  attendanceRate: number;
  sampledSchoolRecords: number;
}

export interface GrantInfo {
  grantId: string;
  grantName: string;
  donor: string;
  reportingMonth: string;
  coveredDistricts: string | null;
  reportStatus?: string;
}

export interface GrantFinance {
  totalBudget: number;
  monthlyUtilized: number;
  cumulativeUtilized: number;
  utilizationRate: number;
  budgetLines: any[]; // Using any for deep drizzle rows if needed, or define it
}

export interface GrantPerformance {
  sampledSchoolRecords: number | null;
  schoolsCompletedPbl: number | null;
  pblCompletionRate: number | null;
  schoolsWithEvidence: number | null;
  evidenceSubmissionRate: number | null;
  totalEnrollment: number | null;
  totalAttendance: number | null;
  attendanceRate: number | null;
  riskStatus: string | null;
  milestoneSummary: string | null;
}

export interface GrantEvidence {
  id: number;
  title: string | null;
  caption: string | null;
  fileName: string | null;
  path: string | null;
  usageNote: string | null;
}

export interface GrantReportData {
  grantInfo: GrantInfo;
  finance: GrantFinance;
  performance: GrantPerformance;
  evidence: GrantEvidence[];
  reportText: string;
}