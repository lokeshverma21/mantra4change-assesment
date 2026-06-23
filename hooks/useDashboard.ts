"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export type DashboardResponse = {
  totalSchools: number;
  participatingSchools: number;
  participationRate: number;
  evidenceRate: number;
  totalEnrollment: number;
  totalAttendance: number;
  attendanceRate: number;
};

export function useDashboard() {
  const { data, error, isLoading, mutate } =
    useSWR<DashboardResponse>(
      "/api/dashboard",
      fetcher
    );

  return {
    dashboard: data,
    isLoading,
    error,
    refresh: mutate,
  };
}