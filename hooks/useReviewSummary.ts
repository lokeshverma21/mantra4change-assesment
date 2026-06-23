"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { Filters } from "@/types/filters";
import { buildQueryString } from "@/lib/query";

export type ReviewSummaryResponse = {
  achievements: string[];
  risks: string[];
  priorityAreas: string[];
  discussionPoints: string[];
};

export function useReviewSummary(filters: Filters = {}) {
  const queryString = buildQueryString(filters);
  const { data, error, isLoading, mutate } =
    useSWR<ReviewSummaryResponse>(
      `/api/review-summary${queryString}`,
      fetcher
    );

  return {
    summary: data,
    isLoading,
    error,
    refresh: mutate,
  };
}