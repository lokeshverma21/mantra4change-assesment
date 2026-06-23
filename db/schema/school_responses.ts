import {
  sqliteTable,
  integer,
  text,
  real,
} from "drizzle-orm/sqlite-core";


export const schoolResponses = sqliteTable(
  "school_responses",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),

    reportingMonth: text("reporting_month").notNull(),

    timestamp: text("timestamp"),

    schoolName: text("school_name").notNull(),

    schoolCode: text("school_code").notNull(),

    district: text("district").notNull(),

    blockDetails: text("block_details"),

    projectConducted: text("project_conducted"),

    evidenceSubmitted: text("evidence_submitted"),

    conductedClasses: text("conducted_classes"),

    subject: text("subject"),

    class6Enrollment: integer("class6_enrollment"),

    class6ScienceAttendance: integer(
      "class6_science_attendance"
    ),

    class6MathAttendance: integer(
      "class6_math_attendance"
    ),

    class7Enrollment: integer("class7_enrollment"),

    class7ScienceAttendance: integer(
      "class7_science_attendance"
    ),

    class7MathAttendance: integer(
      "class7_math_attendance"
    ),

    class8Enrollment: integer("class8_enrollment"),

    class8ScienceAttendance: integer(
      "class8_science_attendance"
    ),

    class8MathAttendance: integer(
      "class8_math_attendance"
    ),

    derivedTotalEnrollment: integer(
      "derived_total_enrollment"
    ),

    derivedTotalAttendance: integer(
      "derived_total_attendance"
    ),

    derivedAttendanceRate: real(
      "derived_attendance_rate"
    ),

    derivedRiskStatus: text(
      "derived_risk_status"
    ),
  }
);