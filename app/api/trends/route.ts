// app/api/trends/route.ts

import { getMonthlyTrends } from "@/lib/analytics/trends";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const month = searchParams.get("month") ?? undefined;
  const district = searchParams.get("district") ?? undefined;
  const block = searchParams.get("block") ?? undefined;
  const subject = searchParams.get("subject") ?? undefined;

  const data = await getMonthlyTrends({
    month,
    district,
    block,
    subject,
  });


  return Response.json(data);
}