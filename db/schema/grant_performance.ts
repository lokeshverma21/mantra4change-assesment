import {
  sqliteTable,
  integer,
  text,
  real,
} from "drizzle-orm/sqlite-core";

export const grantPerformance = sqliteTable(
  "grant_performance",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),

    grantId: text("grant_id").notNull(),

    donor: text("donor").notNull(),

    grantName: text("grant_name").notNull(),

    reportingMonth: text("reporting_month"),

    periodEndDate: text("period_end_date"),

    reportDueDate: text("report_due_date"),

    reportStatus: text("report_status"),

    coveredDistricts: text("covered_districts"),

    sampledSchoolRecords: integer(
      "sampled_school_records"
    ),

    schoolsCompletedPbl: integer(
      "schools_completed_pbl"
    ),

    pblCompletionRate: real(
      "pbl_completion_rate"
    ),

    schoolsWithEvidence: integer(
      "schools_with_evidence"
    ),

    evidenceSubmissionRate: real(
      "evidence_submission_rate"
    ),

    totalEnrollment: integer(
      "total_enrollment"
    ),

    totalAttendance: integer(
      "total_attendance"
    ),

    attendanceRate: real(
      "attendance_rate"
    ),

    riskStatus: text("risk_status"),

    milestoneSummary: text(
      "milestone_summary"
    ),

    draftReportText: text(
      "draft_report_text"
    ),
  }
);