// app/api/review-summary/route.ts

import { generateReviewSummary } from "@/lib/analytics/review-summary";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const month = searchParams.get("month") || undefined;
  const district = searchParams.get("district") || undefined;
  const block = searchParams.get("block") || undefined;
  const subject = searchParams.get("subject") || undefined;

  const data = await generateReviewSummary({
    month,
    district,
    block,
    subject,
  });

  return Response.json(data);
}