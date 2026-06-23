export interface KPI {
  title: string;
  value: string | number;
  label: string;

  icon: string;

  accent:
    | "indigo"
    | "blue"
    | "emerald"
    | "amber"
    | "violet"
    | "cyan"
    | "rose";

  trend?: {
    direction: "up" | "down" | "neutral";
    value: string;
  };
}

export type RiskStatus =
  | "On Track"
  | "Behind"
  | "At Risk"
  | "Critical";

export interface KPI {
  id: string;
  title: string;
  value: string | number;
  label: string;
  icon: string;
  accent:
    | "indigo"
    | "blue"
    | "emerald"
    | "amber"
    | "violet"
    | "cyan"
    | "rose";

  trend?: {
    direction: "up" | "down" | "neutral";
    value: string;
  };
}

export interface RankingRow {
  rank: number;
  name: string;
  performance: number;
  risk: RiskStatus;
}

export type TrendPoint = {
  month: string;
  value: number;
};