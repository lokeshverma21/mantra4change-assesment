// app/api/dashboard/route.ts

import { getDashboardMetrics } from "@/lib/analytics/dashboard";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const month = searchParams.get("month") || undefined;
  const district = searchParams.get("district") || undefined;
  const block = searchParams.get("block") || undefined;

  const data = await getDashboardMetrics({
    month,
    district,
    block,
  });

  return Response.json(data);
}