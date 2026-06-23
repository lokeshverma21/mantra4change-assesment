"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { Filters } from "@/types/filters";
import { buildQueryString } from "@/lib/query";

export type TrendData = {
  month: string;
  participationRate: number;
  evidenceRate: number;
  attendanceRate: number;
};

export function useTrends(filters: Filters = {}) {
  const queryString = buildQueryString(filters);
  const { data, error, isLoading, mutate } = useSWR<TrendData[]>(
    `/api/trends${queryString}`,
    fetcher
  );

  return {
    trends: data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}