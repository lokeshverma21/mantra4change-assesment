import { Filters } from "@/types/filters";

export function buildQueryString(filters: Filters): string {
  const params = new URLSearchParams();

  if (filters.month && filters.month !== "All") {
    params.append("month", filters.month);
  }

  if (filters.district && filters.district !== "All") {
    params.append("district", filters.district);
  }

  if (filters.block && filters.block !== "All") {
    params.append("block", filters.block);
  }

  if (filters.subject && filters.subject !== "All") {
    params.append("subject", filters.subject);
  }

  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
