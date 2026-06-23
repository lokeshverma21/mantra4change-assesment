// app/api/trends/route.ts

import { getMonthlyTrends } from "@/lib/analytics/trends";

export async function GET() {
  const data = await getMonthlyTrends();

  return Response.json(data);
}