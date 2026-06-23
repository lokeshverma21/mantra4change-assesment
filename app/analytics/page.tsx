"use client";

import { useMemo, useState } from "react";
import FilterBar from "@/components/dashboard/FilterBar";
import SectionHeader from "@/components/dashboard/SectionHeader";
import TrendChart from "@/components/dashboard/TrendChart";
import { useFilters } from "@/hooks/useFilters";
import { useTrends } from "@/hooks/useTrends";

export default function AnalyticsPage() {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [selectedBlock, setSelectedBlock] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const activeFilters = {
    month: selectedMonth,
    district: selectedDistrict,
    block: selectedBlock,
    subject: selectedSubject,
  };

  const { filters } = useFilters();
  const { trends, isLoading } = useTrends(activeFilters);

  const resetFilters = () => {
    setSelectedMonth("All");
    setSelectedDistrict("All");
    setSelectedBlock("All");
    setSelectedSubject("All");
  };

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
          title="Advanced Analytics"
          subtitle="Deep dive into program performance metrics over time."
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

        <div className="grid gap-8">
          <TrendChart
            title="Participation Trend"
            subtitle="Percentage of schools conducting PBL projects"
            data={participationTrend}
            color="#10b981"
          />

          <TrendChart
            title="Attendance Trend"
            subtitle="Percentage of students attending PBL sessions"
            data={attendanceTrend}
            color="#6366f1"
          />

          <TrendChart
            title="Evidence Submission Trend"
            subtitle="Percentage of schools submitting project evidence"
            data={evidenceTrend}
            color="#0ea5e9"
          />
        </div>
      </div>
    </main>
  );
}
