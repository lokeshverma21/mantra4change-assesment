"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export type Grant = {
  grantId: string;
  grantName: string;
};

export function useGrants() {
  const { data, error, isLoading } = useSWR<Grant[]>("/api/grants", fetcher);

  return {
    grants: data ?? [],
    isLoading,
    error,
  };
}
