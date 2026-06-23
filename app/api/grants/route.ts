// app/api/grants/route.ts

import { db } from "@/db";
import { grantPerformance } from "@/db/schema";

export async function GET() {
  const grants = await db
    .select({
      grantId: grantPerformance.grantId,
      grantName: grantPerformance.grantName,
    })
    .from(grantPerformance);

  const unique = Array.from(
    new Map(
      grants.map((g) => [g.grantId, g])
    ).values()
  );

  return Response.json(unique);
}