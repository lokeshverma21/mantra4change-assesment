import { db } from "@/db";
import { grantFinance } from "@/db/schema/grant_finance";
import { grantPerformance } from "@/db/schema/grant_performance";
import { evidenceAssets } from "@/db/schema/evidence_assets";
import { and, eq } from "drizzle-orm";

type GrantReportParams = {
  grantId: string;
  reportingMonth: string;
};

export async function generateGrantReport({
  grantId,
  reportingMonth,
}: GrantReportParams) {
  const financeRows = await db
    .select()
    .from(grantFinance)
    .where(
      and(
        eq(grantFinance.grantId, grantId),
        eq(grantFinance.reportingMonth, reportingMonth)
      )
    );

  const performanceRows = await db
    .select()
    .from(grantPerformance)
    .where(
      and(
        eq(grantPerformance.grantId, grantId),
        eq(grantPerformance.reportingMonth, reportingMonth)
      )
    );

  const evidenceRows = await db
    .select()
    .from(evidenceAssets)
    .where(
      and(
        eq(evidenceAssets.grantId, grantId),
        eq(evidenceAssets.reportingMonth, reportingMonth)
      )
    );

  if (!performanceRows.length) {
    return null;
  }

  const performance = performanceRows[0];

  const totalBudget = financeRows.reduce(
    (sum, row) => sum + (row.approvedBudgetUnits ?? 0),
    0
  );

  const monthlyUtilized = financeRows.reduce(
    (sum, row) => sum + (row.monthlyUtilizedUnits ?? 0),
    0
  );

  const cumulativeUtilized = financeRows.reduce(
    (sum, row) => sum + (row.cumulativeUtilizedUnits ?? 0),
    0
  );

  const utilizationRate =
    totalBudget === 0
      ? 0
      : (cumulativeUtilized / totalBudget) * 100;

  const reportText = `
Grant ${performance.grantName} (${grantId}) reported for ${reportingMonth}.

Program completion rate was ${performance.pblCompletionRate}%.

Attendance rate was ${performance.attendanceRate}%.

Evidence submission rate was ${performance.evidenceSubmissionRate}%.

A total of ${performance.schoolsCompletedPbl} schools completed PBL activities.

Budget utilization stands at ${utilizationRate.toFixed(
    1
  )}% with cumulative expenditure of ${cumulativeUtilized} units.

Current risk classification is ${
    performance.riskStatus
  }.

Milestone summary:
${performance.milestoneSummary}
`.trim();

  return {
    grantInfo: {
      grantId,
      grantName: performance.grantName,
      donor: performance.donor,
      reportingMonth,
      coveredDistricts:
        performance.coveredDistricts,
    },

    finance: {
      totalBudget,
      monthlyUtilized,
      cumulativeUtilized,
      utilizationRate,
      budgetLines: financeRows,
    },

    performance: {
      sampledSchoolRecords:
        performance.sampledSchoolRecords,

      schoolsCompletedPbl:
        performance.schoolsCompletedPbl,

      pblCompletionRate:
        performance.pblCompletionRate,

      schoolsWithEvidence:
        performance.schoolsWithEvidence,

      evidenceSubmissionRate:
        performance.evidenceSubmissionRate,

      totalEnrollment:
        performance.totalEnrollment,

      totalAttendance:
        performance.totalAttendance,

      attendanceRate:
        performance.attendanceRate,

      riskStatus:
        performance.riskStatus,

      milestoneSummary:
        performance.milestoneSummary,
    },

    evidence: evidenceRows.map((asset) => ({
      id: asset.id,
      title: asset.title,
      caption: asset.summaryOrCaption,
      fileName: asset.fileName,
      path: asset.relativePath,
      usageNote: asset.usageNote,
    })),

    reportText,
  };
}