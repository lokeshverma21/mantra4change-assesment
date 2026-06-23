"use client";

import { useState } from "react";
import FilterBar from "@/components/dashboard/FilterBar";
import SectionHeader from "@/components/dashboard/SectionHeader";
import RankingTable from "@/components/dashboard/RankingTable";
import { useFilters } from "@/hooks/useFilters";
import { useRankings } from "@/hooks/useRankings";

export default function RankingsPage() {
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
  const { rankings, isLoading } = useRankings(activeFilters);

  const resetFilters = () => {
    setSelectedMonth("All");
    setSelectedDistrict("All");
    setSelectedBlock("All");
    setSelectedSubject("All");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeader
          title="Performance Rankings"
          subtitle="Comparative analysis across districts and administrative blocks."
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
          <div className="grid gap-8 lg:grid-cols-2">
            <RankingTable
              title="Top Performing Districts"
              variant="top"
              rows={rankings?.topDistricts ?? []}
            />
            <RankingTable
              title="Bottom Performing Districts"
              variant="bottom"
              rows={rankings?.bottomDistricts ?? []}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <RankingTable
              title="Top Performing Blocks"
              variant="top"
              rows={rankings?.topBlocks ?? []}
            />
            <RankingTable
              title="Bottom Performing Blocks"
              variant="bottom"
              rows={rankings?.bottomBlocks ?? []}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
