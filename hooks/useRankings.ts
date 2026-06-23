"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export type RankingRow = {
  rank: number;
  name: string;
  performance: number;
  risk: "On Track" | "Behind" | "At Risk" | "Critical";
};

export type RankingsResponse = {
  topDistricts: RankingRow[];
  bottomDistricts: RankingRow[];
  topBlocks: RankingRow[];
  bottomBlocks: RankingRow[];
};

export function useRankings() {
  const { data, error, isLoading, mutate } =
    useSWR<RankingsResponse>(
      "/api/rankings",
      fetcher
    );

  return {
    rankings: data,
    isLoading,
    error,
    refresh: mutate,
  };
}