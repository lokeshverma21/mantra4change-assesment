import { db } from "../db";
import { schoolResponses } from "../db/schema/school_responses";
import { readCsv } from "./utils/readCsv";
import { chunkArray } from "./utils/chunk";

const files = [
  {
    month: "July 2025",
    path: "./data/pbl/july.csv",
  },
  {
    month: "August 2025",
    path: "./data/pbl/august.csv",
  },
  {
    month: "September 2025",
    path: "./data/pbl/september.csv",
  },
];

function toNumber(value: number | string | null | undefined): number | null {
  if (!value || value === "") return null;

  const parsed = Number(value);

  return Number.isNaN(parsed) ? null : parsed;
}

async function run() {
  console.log("Deleting existing school data...");

  await db.delete(schoolResponses);

  let totalImported = 0;

  for (const file of files) {
    const rows = await readCsv(file.path);
    console.log(Object.keys(rows[0]))

    const payload = rows.map((row) => ({
      reportingMonth: file.month,

      timestamp: row["Timestamp"],

      schoolName: row["School Name"],

      schoolCode: row["School Code"],

      district: row["District"],

      blockDetails: row["Block Details"],

      projectConducted:
        row[
          "Was the PBL project conducted in your school this month?"
        ],

      evidenceSubmitted:
        row[
          "Was evidence submitted for the completed PBL project?"
        ],

      conductedClasses:
        row[
          "Which classes conducted the PBL project?"
        ],

      subject: row["Subject"],

      class6Enrollment: toNumber(
        row["Class 6 Enrollment"]
      ),

      class6ScienceAttendance: toNumber(
        row["Class 6 Science Attendance"]
      ),

      class6MathAttendance: toNumber(
        row["Class 6 Math Attendance"]
      ),

      class7Enrollment: toNumber(
        row["Class 7 Enrollment"]
      ),

      class7ScienceAttendance: toNumber(
        row["Class 7 Science Attendance"]
      ),

      class7MathAttendance: toNumber(
        row["Class 7 Math Attendance"]
      ),

      class8Enrollment: toNumber(
        row["Class 8 Enrollment"]
      ),

      class8ScienceAttendance: toNumber(
        row["Class 8 Science Attendance"]
      ),

      class8MathAttendance: toNumber(
        row["Class 8 Math Attendance"]
      ),

      derivedTotalEnrollment: toNumber(
        row["Derived: Total Enrollment"]
      ),

      derivedTotalAttendance: toNumber(
        row["Derived: Total Attendance"]
      ),

      derivedAttendanceRate: toNumber(
        row["Derived: Attendance Rate (%)"]
      ),

      derivedRiskStatus:
        row["Derived: Risk Status"],
    }));

    const chunks = chunkArray(payload, 100);

    for (const chunk of chunks) {
      await db.insert(schoolResponses).values(chunk);
    }

    totalImported += payload.length;

    console.log(
      `${file.month}: ${payload.length} rows imported`
    );
  }

  console.log(`Done. Imported ${totalImported} rows`);
}

run();