import { db } from "@/db";
import { schoolResponses } from "@/db/schema/school_responses";
import { classifyRisk } from "./risk";
import { and, eq } from "drizzle-orm";
import { Filters } from "@/types/filters";
import { RankingRow } from "@/types/dashboard";

type SchoolResponse = typeof schoolResponses.$inferSelect;

function buildRankings(
  rows: SchoolResponse[],
  groupBy: "district" | "blockDetails"
): RankingRow[] {
  const map = new Map<
    string,
    SchoolResponse[]
  >();

  for (const row of rows) {
    const key = row[groupBy];

    if (!key) continue;

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)?.push(row);
  }

  const results = [...map.entries()]
    .map(([name, groupedRows]) => {
      const avgRate =
        groupedRows.reduce(
          (sum, row) =>
            sum +
            (row.derivedAttendanceRate ?? 0),
          0
        ) / groupedRows.length;

      return {
        name,
        performance: Number((avgRate * 100).toFixed(1)),
        risk: classifyRisk(avgRate),
      };
    })
    .sort(
      (a, b) =>
        b.performance -
        a.performance
    );

  return results.map((r, index) => ({
    rank: index + 1,
    ...r,
  }));
}

async function getFilteredRows(
  filters: Filters
): Promise<SchoolResponse[]> {
  const conditions = [];

  if (filters.month) {
    conditions.push(
      eq(
        schoolResponses.reportingMonth,
        filters.month
      )
    );
  }

  if (filters.district) {
    conditions.push(
      eq(
        schoolResponses.district,
        filters.district
      )
    );
  }

  if (filters.block) {
    conditions.push(
      eq(
        schoolResponses.blockDetails,
        filters.block
      )
    );
  }

  if (filters.subject) {
    conditions.push(
      eq(
        schoolResponses.subject,
        filters.subject
      )
    );
  }

  return conditions.length
    ? db
        .select()
        .from(schoolResponses)
        .where(and(...conditions))
    : db
        .select()
        .from(schoolResponses);
}

export async function getDistrictRankings(
  filters: Filters = {}
) {
  const rows =
    await getFilteredRows(filters);

  return buildRankings(
    rows,
    "district"
  );
}

export async function getBlockRankings(
  filters: Filters = {}
) {
  const rows =
    await getFilteredRows(filters);

  return buildRankings(
    rows,
    "blockDetails"
  );
}