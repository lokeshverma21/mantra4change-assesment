"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export type GrantReport = {
  grantId: string;
  donor: string;
  grantName: string;
  reportingMonth: string;
  reportStatus: string;
  riskStatus: string;
  pblCompletionRate: number;
  evidenceSubmissionRate: number;
  attendanceRate: number;
  draftReportText: string;
};

export function useGrantReport(
  grantId?: string,
  reportingMonth?: string
) {
  const shouldFetch =
    grantId && reportingMonth;

  const url = shouldFetch
    ? `/api/grant-report?grantId=${grantId}&reportingMonth=${reportingMonth}`
    : null;

  const { data, error, isLoading, mutate } =
    useSWR<GrantReport>(
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