"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { RankingRow } from "@/types/dashboard";
import { Filters } from "@/types/filters";
import { buildQueryString } from "@/lib/query";

export type RankingsResponse = {
  topDistricts: RankingRow[];
  bottomDistricts: RankingRow[];
  topBlocks: RankingRow[];
  bottomBlocks: RankingRow[];
};

export function useRankings(filters: Filters = {}) {
  const queryString = buildQueryString(filters);
  const {
    data,
    error,
    isLoading,
  } = useSWR<RankingsResponse>(
    `/api/rankings${queryString}`,
    fetcher
  );

  return {
    rankings: data,
    isLoading,
    error,
  };
}