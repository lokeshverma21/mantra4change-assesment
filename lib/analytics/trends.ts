import { db } from "@/db";
import { schoolResponses } from "@/db/schema/school_responses";
import { Filters } from "@/types/filters";
import { and, eq } from "drizzle-orm";

export async function getMonthlyTrends(filters: Filters = {}) {
  const conditions = [];

  if (filters.district) {
    conditions.push(
      eq(
        schoolResponses.district,
        filters.district
      )
    );
  }

  if (filters.block) {
    conditions.push(
      eq(
        schoolResponses.blockDetails,
        filters.block
      )
    );
  }

  if (filters.subject) {
    conditions.push(
      eq(
        schoolResponses.subject,
        filters.subject
      )
    );
  }

  const rows = conditions.length
    ? await db
        .select()
        .from(schoolResponses)
        .where(and(...conditions))
    : await db
        .select()
        .from(schoolResponses);

  // Group by month
  const monthlyData = new Map<string, typeof rows>();
  rows.forEach(row => {
    if (!monthlyData.has(row.reportingMonth)) {
      monthlyData.set(row.reportingMonth, []);
    }
    monthlyData.get(row.reportingMonth)?.push(row);
  });

  const sortedMonths = Array.from(monthlyData.keys()).sort((a, b) => {
    // Simple sort for "Month Year" format
    // In production we'd parse these, but for this project we'll assume standard format
    return a.localeCompare(b);
  });

  return sortedMonths.map((month) => {
    const monthRows = monthlyData.get(month) || [];

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
        total === 0 ? 0 : (participation / total) * 100,

      evidenceRate:
        total === 0 ? 0 : (evidence / total) * 100,

      attendanceRate:
        enrollment === 0
          ? 0
          : (attendance /
              (enrollment * 2)) *
            100,
    };
  });
}