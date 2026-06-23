import { db } from "@/db";
import { schoolResponses } from "@/db/schema/school_responses";

export async function getMonthlyTrends() {
  const rows = await db
    .select()
    .from(schoolResponses);

  const months = [
    "July 2025",
    "August 2025",
    "September 2025",
  ];

  return months.map((month) => {
    const monthRows = rows.filter(
      (r) => r.reportingMonth === month
    );

    const total = monthRows.length;

    const participation =
      monthRows.filter(
        (r) => r.projectConducted === "Yes"
      ).length;

    const evidence =
      monthRows.filter(
        (r) => r.evidenceSubmitted === "Yes"
      ).length;

    const enrollment = monthRows.reduce(
      (sum, r) =>
        sum + (r.derivedTotalEnrollment ?? 0),
      0
    );

    const attendance = monthRows.reduce(
      (sum, r) =>
        sum + (r.derivedTotalAttendance ?? 0),
      0
    );

    return {
      month,

      participationRate:
        (participation / total) * 100,

      evidenceRate:
        (evidence / total) * 100,

      attendanceRate:
        (attendance /
          (enrollment * 2)) *
        100,
    };
  });
}