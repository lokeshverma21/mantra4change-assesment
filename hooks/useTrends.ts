"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export type TrendItem = {
  month: string;
  participationRate: number;
  evidenceRate: number;
  attendanceRate: number;
};

export function useTrends() {
  const { data, error, isLoading, mutate } =
    useSWR<TrendItem[]>(
      "/api/trends",
      fetcher
    );

  return {
    trends: data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}