import KPICard from "./KPICard";
import type { KPI } from "@/types/dashboard";

export default function KPICards({ data }: { data: KPI[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((kpi) => (
        <KPICard key={kpi.id} kpi={kpi} />
      ))}
    </div>
  );
}