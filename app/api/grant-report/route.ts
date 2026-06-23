import { generateGrantReport } from "@/lib/analytics/grant-report";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const grantId = searchParams.get("grantId");
  const reportingMonth = searchParams.get("month");

  if (!grantId || !reportingMonth) {
    return Response.json(
      {
        error: "grantId and month are required",
      },
      {
        status: 400,
      }
    );
  }

  const report = await generateGrantReport({
    grantId,
    reportingMonth,
  });

  return Response.json(report);
}

//http://localhost:3000/api/grant-report?grantId=GRANT_CC_2025&month=2025-09