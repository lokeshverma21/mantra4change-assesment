// app/api/rankings/route.ts

import { getDistrictRankings } from "@/lib/analytics/rankings";

export async function GET() {
  const districts =
    await getDistrictRankings();

  return Response.json(districts);
}