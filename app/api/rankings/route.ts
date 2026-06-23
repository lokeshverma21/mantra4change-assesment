import {
  getDistrictRankings,
  getBlockRankings,
} from "@/lib/analytics/rankings";

export async function GET(req: Request) {
  const { searchParams } =
    new URL(req.url);

  const month = searchParams.get("month") ?? undefined;
  const district = searchParams.get("district") ?? undefined;
  const block = searchParams.get("block") ?? undefined;
  const subject = searchParams.get("subject") ?? undefined;

  const districts = await getDistrictRankings({
    month,
    district,
    block,
    subject,
  });

  const blocks = await getBlockRankings({
    month,
    district,
    block,
    subject,
  });

  return Response.json({
    topDistricts: districts.slice(0, 5),
    bottomDistricts: [...districts]
      .sort((a, b) => a.performance - b.performance)
      .slice(0, 5),
    topBlocks: blocks.slice(0, 5),
    bottomBlocks: [...blocks]
      .sort((a, b) => a.performance - b.performance)
      .slice(0, 5),
  });
}