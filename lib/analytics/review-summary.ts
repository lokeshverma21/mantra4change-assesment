import { getMonthlyTrends } from "./trends";
import { getDistrictRankings } from "./rankings";

export async function generateReviewSummary() {
  const trends =
    await getMonthlyTrends();

  const districts =
    await getDistrictRankings();

  const july = trends[0];
  const september = trends[2];

  return {
    achievements: [
      `Attendance moved from ${july.attendanceRate.toFixed(
        1
      )}% to ${september.attendanceRate.toFixed(
        1
      )}%`,
      `Evidence submission reached ${september.evidenceRate.toFixed(
        1
      )}%`,
    ],

    risks: districts
      .slice(-3)
      .map(
        (d) =>
          `${d.district} classified as ${d.risk}`
      ),

    priorityAreas: districts
      .slice(-3)
      .map((d) => d.district),

    discussionPoints: [
      "Which districts require additional program support?",
      "How can evidence submission be improved?",
      "What explains attendance variation between districts?",
    ],
  };
}