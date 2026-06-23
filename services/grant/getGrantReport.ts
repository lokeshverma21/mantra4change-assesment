import type { GrantReportData } from "@/types/grant";

export async function getGrantReport(): Promise<GrantReportData> {
  return {
    summary: {
      grantName: "PBL Innovation Grant",
      donor: "Education Foundation",
      reportingMonth: "May 2026",
      reportStatus: "Draft",
      riskStatus: "Behind",
    },

    metrics: {
      pblCompletionRate: 78,
      evidenceSubmissionRate: 65,
      attendanceRate: 58,
      sampledSchoolRecords: 245,
    },

    milestoneSummary:
      "Most schools completed planned PBL activities, however evidence submission remains below target.",

    reportText:
      "This month the programme reached 245 schools. Attendance remained stable while evidence submission requires additional follow-up from district coordinators.",
  };
}