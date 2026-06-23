import { getMonthlyTrends } from "./trends";
import { getDistrictRankings } from "./rankings";
import { Filters } from "@/types/filters";

export async function generateReviewSummary(filters: Filters = {}) {
  const trends =
    await getMonthlyTrends(filters);

  const districts =
    await getDistrictRankings(filters);

  if (trends.length === 0) {
    return {
      achievements: ["Insufficient data for trends"],
      risks: [],
      priorityAreas: [],
      discussionPoints: ["No data available for discussion"],
    };
  }

  const firstMonth = trends[0];
  const lastMonth = trends[trends.length - 1];

  return {
    achievements: [
      `Attendance moved from ${firstMonth.attendanceRate.toFixed(
        1
      )}% (Initial) to ${lastMonth.attendanceRate.toFixed(
        1
      )}% (Current)`,
      `Evidence submission reached ${lastMonth.evidenceRate.toFixed(
        1
      )}% in ${lastMonth.month}`,
    ],

    risks: districts
      .filter(d => d.risk === "Critical" || d.risk === "At Risk")
      .slice(0, 3)
      .map(
        (d) =>
          `${d.name} classified as ${d.risk} (${d.performance}% attendance)`
      ),

    priorityAreas: districts
      .filter(d => d.risk === "Critical" || d.risk === "At Risk")
      .slice(0, 3)
      .map((d) => d.name),

    discussionPoints: [
      "Which districts require additional program support?",
      "How can evidence submission be improved?",
      "What explains attendance variation between districts?",
    ],
  };
}