import { db } from "../db";
import { grantFinance } from "../db/schema/grant_finance";
import { readCsv } from "./utils/readCsv";

function toNumber(value: number | string | null | undefined): number | null {
  if (!value || value === "") return null;

  const parsed = Number(value);

  return Number.isNaN(parsed) ? null : parsed;
}

async function run() {
  await db.delete(grantFinance);

  const rows = await readCsv(
    "./data/grants/grant-finance.csv"
  );

  const payload = rows.map((row) => ({
    grantId: row["Grant ID"],

    donor: row["Donor"],

    grantName: row["Grant Name"],

    periodStart: row["Period Start"],

    periodEnd: row["Period End"],

    coveredDistricts: row["Covered Districts"],

    reportingMonth: row["Reporting Month"],

    budgetLine: row["Budget Line"],

    approvedBudgetUnits: toNumber(
      row["Approved Budget"]
    ),

    monthlyUtilizedUnits: toNumber(
      row["Monthly Utilized"]
    ),

    cumulativeUtilizedUnits: toNumber(
      row["Cumulative Utilized"]
    ),

    cumulativeUtilizationRate: toNumber(
      row["Cumulative Utilization Rate (%)"]
    ),

    financeNote: row["Finance Note"],
  }));

  await db.insert(grantFinance).values(payload);

  console.log(`Imported ${payload.length} finance rows`);
}

run();