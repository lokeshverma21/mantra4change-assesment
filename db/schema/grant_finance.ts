import {
  sqliteTable,
  integer,
  text,
  real,
} from "drizzle-orm/sqlite-core";


export const grantFinance = sqliteTable(
  "grant_finance",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),

    grantId: text("grant_id").notNull(),

    donor: text("donor").notNull(),

    grantName: text("grant_name").notNull(),

    periodStart: text("period_start"),

    periodEnd: text("period_end"),

    coveredDistricts: text("covered_districts"),

    reportingMonth: text("reporting_month"),

    budgetLine: text("budget_line"),

    approvedBudgetUnits: real(
      "approved_budget_units"
    ),

    monthlyUtilizedUnits: real(
      "monthly_utilized_units"
    ),

    cumulativeUtilizedUnits: real(
      "cumulative_utilized_units"
    ),

    cumulativeUtilizationRate: real(
      "cumulative_utilization_rate"
    ),

    financeNote: text("finance_note"),
  }
);