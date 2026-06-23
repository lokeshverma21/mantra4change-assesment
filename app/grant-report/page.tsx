"use client";

import { useState } from "react";
import GrantPageLayout from "@/components/grant/GrantPageLayout";
import { useGrantReport } from "@/hooks/useGrantReport";
import { useGrants } from "@/hooks/useGrants";
import { useFilters } from "@/hooks/useFilters";
import GrantReportSkeleton from "@/components/grant/GrantReportSkeleton";

export default function GrantReportPage() {
  const { grants } = useGrants();
  const { filters } = useFilters();

  const [selectedGrantId, setSelectedGrantId] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const { report, isLoading: reportLoading } = useGrantReport(
    selectedGrantId,
    selectedMonth
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Select Grant</label>
              <select
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                value={selectedGrantId}
                onChange={(e) => setSelectedGrantId(e.target.value)}
              >
                <option value="">Choose a grant...</option>
                {grants.map((g) => (
                  <option key={g.grantId} value={g.grantId}>
                    {g.grantName} ({g.grantId})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Select Month</label>
              <select
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="">Choose a month...</option>
                {filters?.months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {reportLoading ? (
          <GrantReportSkeleton />
        ) : report ? (
          <GrantPageLayout
            title="Grant Performance Report"
            subtitle="Detailed analysis of program impact and budget utilization."
            summary={report.grantInfo}
            metrics={report.performance}
            milestoneSummary={report.performance.milestoneSummary ?? "No summary available."}
            reportText={report.reportText}
            evidence={report.evidence}
          />
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-slate-900">No Report Selected</h3>
            <p className="mt-2 text-slate-500">
              Please select a grant and a reporting month to view the performance report.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
