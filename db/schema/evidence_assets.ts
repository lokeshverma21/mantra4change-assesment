import {sqliteTable, integer, text} from "drizzle-orm/sqlite-core";

export const evidenceAssets = sqliteTable(
  "evidence_assets",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),

    recordId: text("record_id").notNull(),

    recordType: text("record_type"),

    grantId: text("grant_id"),

    donor: text("donor"),

    reportingMonth: text("reporting_month"),

    district: text("district"),

    title: text("title"),

    summaryOrCaption: text(
      "summary_or_caption"
    ),

    fileName: text("file_name"),

    relativePath: text("relative_path"),

    usageNote: text("usage_note"),
  }
);