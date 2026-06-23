"use client";

import { useMemo, useState } from "react";

import FilterBar from "@/components/dashboard/FilterBar";
import KPICards from "@/components/dashboard/KPICards";
import RankingTable from "@/components/dashboard/RankingTable";
import SectionHeader from "@/components/dashboard/SectionHeader";
import TrendChart from "@/components/dashboard/TrendChart";

import { useDashboard } from "@/hooks/useDashboard";
import { useFilters } from "@/hooks/useFilters";
import { useRankings } from "@/hooks/useRankings";
import { useTrends } from "@/hooks/useTrends";
import { KPI } from "@/types/dashboard";

export default function DashboardPage() {
  const [selectedMonth, setSelectedMonth] =
    useState("All");

  const [selectedDistrict, setSelectedDistrict] =
    useState("All");

  const [selectedBlock, setSelectedBlock] =
    useState("All");

  const [selectedSubject, setSelectedSubject] =
    useState("All");

  const activeFilters = {
    month: selectedMonth,
    district: selectedDistrict,
    block: selectedBlock,
    subject: selectedSubject,
  };

  const { dashboard, isLoading: dashboardLoading } =
    useDashboard(activeFilters);

  const { filters } = useFilters();

  const { rankings } = useRankings(activeFilters);

  const { trends } = useTrends(activeFilters);

  const resetFilters = () => {
    setSelectedMonth("All");
    setSelectedDistrict("All");
    setSelectedBlock("All");
    setSelectedSubject("All");
  };


  const kpis = useMemo<KPI[]>(() => {
  if (!dashboard) return [];

  return [
    {
      id: "schools",
      title: "Total Schools",
      value: dashboard.totalSchools.toLocaleString(),
      label: "Schools covered",
      icon: "school",
      accent: "indigo",
    },
    {
      id: "participation",
      title: "Participation Rate",
      value: `${dashboard.participationRate}%`,
      label: `${dashboard.participatingSchools} schools participating`,
      icon: "activity",
      accent: "emerald",
    },
    {
      id: "evidence",
      title: "Evidence Submission",
      value: `${dashboard.evidenceRate}%`,
      label: "Submission compliance",
      icon: "upload",
      accent: "blue",
    },
    {
      id: "attendance",
      title: "Attendance Rate",
      value: `${dashboard.attendanceRate}%`,
      label: `${dashboard.totalAttendance.toLocaleString()} attendees`,
      icon: "users",
      accent: "violet",
    },
  ];
}, [dashboard]);


  const participationTrend = trends.map((item) => ({
    month: item.month,
    value: item.participationRate,
  }));

  const attendanceTrend = trends.map((item) => ({
    month: item.month,
    value: item.attendanceRate,
  }));

  const evidenceTrend = trends.map((item) => ({
    month: item.month,
    value: item.evidenceRate,
  }));

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">

        <SectionHeader
          title="Program Monitoring Dashboard"
          subtitle="Track participation, attendance, evidence submission and district performance."
        />

        <FilterBar
          months={filters?.months ?? ["All"]}
          districts={filters?.districts ?? ["All"]}
          blocks={filters?.blocks ?? ["All"]}
          subjects={filters?.subjects ?? ["All"]}
          selectedMonth={selectedMonth}
          selectedDistrict={selectedDistrict}
          selectedBlock={selectedBlock}
          selectedSubject={selectedSubject}
          onMonthChange={setSelectedMonth}
          onDistrictChange={setSelectedDistrict}
          onBlockChange={setSelectedBlock}
          onSubjectChange={setSelectedSubject}
          onReset={resetFilters}
        />

        {!dashboardLoading && (
          <KPICards data={kpis} />
        )}

        <section className="space-y-5">
          <SectionHeader
            title="Performance Trends"
            subtitle="Month-over-month program performance"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <TrendChart
              title="Participation Rate"
              data={participationTrend}
              currentValue={
                trends.length
                  ? `${trends[trends.length - 1].participationRate}%`
                  : undefined
              }
              color="#10b981"
            />

            <TrendChart
              title="Attendance Rate"
              data={attendanceTrend}
              currentValue={
                trends.length
                  ? `${trends[trends.length - 1].attendanceRate}%`
                  : undefined
              }
              color="#6366f1"
            />
          </div>

          <TrendChart
            title="Evidence Submission Rate"
            data={evidenceTrend}
            currentValue={
              trends.length
                ? `${trends[trends.length - 1].evidenceRate}%`
                : undefined
            }
            color="#0ea5e9"
          />
        </section>

        <section className="space-y-5">
          <SectionHeader
            title="Rankings"
            subtitle="Performance comparison across districts and blocks"
          />

          <div className="grid gap-5 xl:grid-cols-2">
            <RankingTable
              title="Top Districts"
              variant="top"
              rows={rankings?.topDistricts ?? []}
            />

            <RankingTable
              title="Bottom Districts"
              variant="bottom"
              rows={rankings?.bottomDistricts ?? []}
            />

            <RankingTable
              title="Top Blocks"
              variant="top"
              rows={rankings?.topBlocks ?? []}
            />

            <RankingTable
              title="Bottom Blocks"
              variant="bottom"
              rows={rankings?.bottomBlocks ?? []}
            />
          </div>
        </section>
      </div>
    </main>
  );
}