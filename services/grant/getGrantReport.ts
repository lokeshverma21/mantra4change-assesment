import type { GrantReportData } from "@/types/grant";

export async function getGrantReport(): Promise<GrantReportData> {
  const info = {
    grantId: "GRANT_CC_2025",
    grantName: "PBL Innovation Grant",
    donor: "Education Foundation",
    reportingMonth: "May 2026",
    coveredDistricts: "District A, District B",
  };

  const performance = {
    sampledSchoolRecords: 245,
    schoolsCompletedPbl: 190,
    pblCompletionRate: 78,
    schoolsWithEvidence: 160,
    evidenceSubmissionRate: 65,
    totalEnrollment: 5000,
    totalAttendance: 2900,
    attendanceRate: 58,
    riskStatus: "Behind",
    milestoneSummary:
      "Most schools completed planned PBL activities, however evidence submission remains below target.",
  };

  return {
    grantInfo: info,
    finance: {
      totalBudget: 1000,
      monthlyUtilized: 100,
      cumulativeUtilized: 500,
      utilizationRate: 50,
      budgetLines: [],
    },
    performance: performance,
    evidence: [],
    reportText:
      "This month the programme reached 245 schools. Attendance remained stable while evidence submission requires additional follow-up from district coordinators.",
  };
}