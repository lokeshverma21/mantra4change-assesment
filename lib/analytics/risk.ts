export type RiskStatus =
  | "On Track"
  | "Behind"
  | "At Risk"
  | "Critical";

export function classifyRisk(rate: number): RiskStatus {
  const percentage = rate * 100;

  if (percentage >= 75) return "On Track";
  if (percentage >= 60) return "Behind";
  if (percentage >= 35) return "At Risk";

  return "Critical";
}