import type { ReviewSummary } from "@/types/review";

export async function getReviewSummary(): Promise<ReviewSummary> {
  return {
    achievements: [
      "Attendance improved in 12 districts.",
      "Evidence submissions increased compared to previous month.",
      "PBL completion crossed 75%."
    ],

    risks: [
      "Low attendance in high-risk districts.",
      "Evidence submission backlog remains."
    ],

    priorityDistricts: [
      "District AF",
      "District AG",
      "District AC"
    ],

    discussionPoints: [
      "How can attendance be improved in critical districts?",
      "What support is required for evidence collection?",
      "Should additional monitoring visits be scheduled?"
    ]
  };
}