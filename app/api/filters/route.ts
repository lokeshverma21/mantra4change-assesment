// app/api/filters/route.ts

import { db } from "@/db";
import { schoolResponses } from "@/db/schema";

export async function GET() {
  const rows = await db
    .select()
    .from(schoolResponses);

  return Response.json({
    months: [
      ...new Set(
        rows.map((r) => r.reportingMonth)
      ),
    ],

    districts: [
      ...new Set(
        rows.map((r) => r.district)
      ),
    ],

    blocks: [
      ...new Set(
        rows.map((r) => r.blockDetails)
      ),
    ],

    subjects: [
      ...new Set(
        rows.map((r) => r.subject)
      ),
    ],
  });
}