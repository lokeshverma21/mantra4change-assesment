import { db } from "@/db";
import { schoolResponses } from "@/db/schema/school_responses";
import { classifyRisk } from "./risk";

export async function getDistrictRankings() {
  const rows = await db
    .select()
    .from(schoolResponses);

  const map = new Map();

  for (const row of rows) {
    const district = row.district;

    if (!map.has(district)) {
      map.set(district, []);
    }

    map.get(district).push(row);
  }

  return [...map.entries()]
    .map(([district, districtRows]) => {
      const avgRate =
        districtRows.reduce(
          (sum: number, row: { derivedAttendanceRate: number | null | undefined }) =>
            sum +
            (row.derivedAttendanceRate ?? 0),
          0
        ) / districtRows.length;

      return {
        district,
        attendanceRate: avgRate * 100,
        risk: classifyRisk(avgRate),
      };
    })
    .sort(
      (a, b) =>
        b.attendanceRate -
        a.attendanceRate
    );
}