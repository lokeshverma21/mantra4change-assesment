import { db } from "@/db";
import { schoolResponses } from "@/db/schema/school_responses";
import { and, eq } from "drizzle-orm";

import { Filters } from "@/types/filters";

export async function getDashboardMetrics(
  filters: Filters = {}
) {
  const conditions = [];

  if (filters.month) {
    conditions.push(
      eq(
        schoolResponses.reportingMonth,
        filters.month
      )
    );
  }

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


  const rows =
    conditions.length > 0
      ? await db
          .select()
          .from(schoolResponses)
          .where(and(...conditions))
      : await db
          .select()
          .from(schoolResponses);

  const totalSchools = rows.length;

  const participatingSchools = rows.filter(
    (row) => row.projectConducted === "Yes"
  ).length;

  const evidenceSchools = rows.filter(
    (row) => row.evidenceSubmitted === "Yes"
  ).length;

  const totalEnrollment = rows.reduce(
    (sum, row) =>
      sum + (row.derivedTotalEnrollment ?? 0),
    0
  );

  const totalAttendance = rows.reduce(
    (sum, row) =>
      sum + (row.derivedTotalAttendance ?? 0),
    0
  );

  const participationRate =
    totalSchools === 0
      ? 0
      : (participatingSchools / totalSchools) * 100;

  const evidenceRate =
    totalSchools === 0
      ? 0
      : (evidenceSchools / totalSchools) * 100;

  const attendanceRate =
    totalEnrollment === 0
      ? 0
      : (totalAttendance /
          (totalEnrollment * 2)) *
        100;

  return {
    totalSchools,
    participatingSchools,
    participationRate,
    evidenceRate,
    totalEnrollment,
    totalAttendance,
    attendanceRate,
  };
}