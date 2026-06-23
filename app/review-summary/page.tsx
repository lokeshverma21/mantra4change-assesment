"use client";

import { useState } from "react";
import ReviewPageLayout from "@/components/review/ReviewPageLayout";
import FilterBar from "@/components/dashboard/FilterBar";
import { useReviewSummary } from "@/hooks/useReviewSummary";
import { useFilters } from "@/hooks/useFilters";
import ReviewSummarySkeleton from "@/components/review/ReviewSummarySkeleton";

export default function ReviewSummaryPage() {
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

  const { summary, isLoading } = useReviewSummary(activeFilters);
  const { filters } = useFilters();

  const resetFilters = () => {
    setSelectedMonth("All");
    setSelectedDistrict("All");
    setSelectedBlock("All");
    setSelectedSubject("All");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
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

        {isLoading ? (
          <ReviewSummarySkeleton />
        ) : summary ? (
          <ReviewPageLayout
            title="Review Summary"
            subtitle="Strategic highlights, risk assessment and discussion points."
            achievements={summary.achievements}
            risks={summary.risks}
            priorityDistricts={summary.priorityAreas}
            discussionPoints={summary.discussionPoints}
          />
        ) : (
          <div className="p-8 text-center text-slate-500">
            No data available for the selected filters.
          </div>
        )}
      </div>
    </main>
  );
}
