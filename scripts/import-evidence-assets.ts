import { db } from "../db";
import { evidenceAssets } from "../db/schema/evidence_assets";
import { readCsv } from "./utils/readCsv";

async function run() {
  await db.delete(evidenceAssets);

  const rows = await readCsv(
    "./data/grants/evidence-assets.csv"
  );

  const payload = rows.map((row) => ({
    recordId: row["Record ID"],

    recordType: row["Record Type"],

    grantId: row["Grant ID"],

    donor: row["Donor"],

    reportingMonth: row["Reporting Month"],

    district: row["District"],

    title: row["Title"],

    summaryOrCaption:
      row["Summary_Caption"],

    fileName: row["File Name"],

    relativePath: row["Relative Path"],

    usageNote: row["Usage Note"],
  }));

  await db.insert(evidenceAssets).values(payload);

  console.log(`Imported ${payload.length} assets`);
}

run();