"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { Filters } from "@/types/filters";
import { buildQueryString } from "@/lib/query";

export type DashboardResponse = {
  totalSchools: number;
  participatingSchools: number;
  participationRate: number;
  evidenceRate: number;
  totalEnrollment: number;
  totalAttendance: number;
  attendanceRate: number;
};

export function useDashboard(filters: Filters = {}) {
  const queryString = buildQueryString(filters);
  const { data, error, isLoading, mutate } =
    useSWR<DashboardResponse>(
      `/api/dashboard${queryString}`,
      fetcher
    );

  return {
    dashboard: data,
    isLoading,
    error,
    refresh: mutate,
  };
}