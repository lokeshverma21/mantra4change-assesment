import { db } from "../db";
import { grantPerformance } from "../db/schema/grant_performance";
import { readCsv } from "./utils/readCsv";

function toNumber(value: number | string | null | undefined): number | null {
  if (!value || value === "") return null;

  const parsed = Number(value);

  return Number.isNaN(parsed) ? null : parsed;
}

async function run() {
  await db.delete(grantPerformance);

  const rows = await readCsv(
    "./data/grants/grant-performance.csv"
  );

  const payload = rows.map((row) => ({
    grantId: row["Grant ID"],

    donor: row["Donor"],

    grantName: row["Grant Name"],

    reportingMonth: row["Reporting Month"],

    periodEndDate: row["Period End Date"],

    reportDueDate: row["Report Due Date"],

    reportStatus: row["Report Status"],

    coveredDistricts: row["Covered Districts"],

    sampledSchoolRecords: toNumber(
      row["Sampled School Records"]
    ),

    schoolsCompletedPbl: toNumber(
      row["Schools Completed PBL"]
    ),

    pblCompletionRate: toNumber(
      row["PBL Completion Rate (%)"]
    ),

    schoolsWithEvidence: toNumber(
      row["Schools With Evidence"]
    ),

    evidenceSubmissionRate: toNumber(
      row["Evidence Submission Rate (%)"]
    ),

    totalEnrollment: toNumber(
      row["Total Enrollment"]
    ),

    totalAttendance: toNumber(
      row["Total Attendance"]
    ),

    attendanceRate: toNumber(
      row["Attendance Rate (%)"]
    ),

    riskStatus: row["Risk Status"],

    milestoneSummary:
      row["Milestone Summary"],

    draftReportText:
      row["Draft Report Text"],
  }));

  await db.insert(grantPerformance).values(payload);

  console.log(
    `Imported ${payload.length} performance rows`
  );
}

run();