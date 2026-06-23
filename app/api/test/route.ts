// app/api/debug/route.ts

import { db } from "@/db";
import { schoolResponses } from "@/db/schema/school_responses";

export async function GET() {
  const rows = await db
    .select()
    .from(schoolResponses)
    .limit(3);

  return Response.json(rows);
}