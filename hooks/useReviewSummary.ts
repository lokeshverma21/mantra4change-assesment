"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export type ReviewSummaryResponse = {
  achievements: string[];
  risks: string[];
  priorityAreas: string[];
  discussionPoints: string[];
};

export function useReviewSummary() {
  const { data, error, isLoading, mutate } =
    useSWR<ReviewSummaryResponse>(
      "/api/review-summary",
      fetcher
    );

  return {
    summary: data,
    isLoading,
    error,
    refresh: mutate,
  };
}