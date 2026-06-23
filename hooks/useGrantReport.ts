"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { GrantReportData } from "@/types/grant";

export function useGrantReport(
  grantId?: string,
  reportingMonth?: string
) {
  const shouldFetch =
    grantId && reportingMonth && grantId !== "" && reportingMonth !== "";

  const url = shouldFetch
    ? `/api/grant-report?grantId=${grantId}&month=${reportingMonth}`
    : null;

  const { data, error, isLoading, mutate } =
    useSWR<GrantReportData>(
      url,
      fetcher
    );

  return {
    report: data,
    isLoading,
    error,
    refresh: mutate,
  };
}