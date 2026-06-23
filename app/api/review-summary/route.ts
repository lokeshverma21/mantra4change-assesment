// app/api/review-summary/route.ts

import { generateReviewSummary } from "@/lib/analytics/review-summary";

export async function GET() {
  const data =
    await generateReviewSummary();

  return Response.json(data);
}