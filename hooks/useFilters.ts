"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export type FiltersResponse = {
  months: string[];
  districts: string[];
  blocks: string[];
  subjects: string[];
};

export function useFilters() {
  const { data, error, isLoading, mutate } =
    useSWR<FiltersResponse>(
      "/api/filters",
      fetcher
    );

  return {
    filters: data,
    isLoading,
    error,
    refresh: mutate,
  };
}