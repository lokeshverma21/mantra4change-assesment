import Link from "next/link";
import SectionHeader from "@/components/dashboard/SectionHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-indigo-600 text-sm mb-6">
              <Link href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}`}>{process.env.NEXT_PUBLIC_NAME}</Link> <br />
              <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</Link>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Educational Program <span className="text-indigo-600">Monitoring</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A comprehensive data-driven dashboard for tracking school performance, attendance trends, and grant reporting across multiple districts and blocks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard"
                className="rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95"
              >
                Go to Dashboard
              </Link>
              <Link href="/analytics" className="text-sm font-semibold leading-6 text-slate-900 hover:text-indigo-600 transition-colors">
                View Trends <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overview & Instructions */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Platform Overview</h2>
              <p className="text-slate-600">Our analytics engine processes thousands of school-level responses to provide actionable insights for program administrators and donors.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Real-time KPIs</h3>
                <p className="mt-2 text-sm text-slate-500">Track participation, evidence submission, and attendance rates instantly across the dashboard.</p>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8V7" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Grant Reporting</h3>
                <p className="mt-2 text-sm text-slate-500">Generate automated monthly reports for donors with detailed budget utilization and impact metrics.</p>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Advanced Analytics</h3>
                <p className="mt-2 text-sm text-slate-500">Visualize month-over-month trends to identify patterns and areas for improvement.</p>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 0h6" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Comparative Rankings</h3>
                <p className="mt-2 text-sm text-slate-500">Compare performance across districts and blocks to recognize top performers and triage risks.</p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
            <h2 className="text-2xl font-bold tracking-tight">How to use this Dashboard</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-slate-50">Filter the Data</h4>
                  <p className="mt-1 text-sm text-slate-400">Use the filter bar at the top of any page to narrow down data by month, district, block, or subject.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-slate-50">Toggle Views</h4>
                  <p className="mt-1 text-sm text-slate-400">Switch between different specialized pages using the top navigation bar to see summaries, reports, or raw analytics.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-slate-50">Review and Report</h4>
                  <p className="mt-1 text-sm text-slate-400">Use the Review Summary to get strategic talking points, and Grant Report to generate final documents for stakeholders.</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-300">Data is refreshed automatically every time filters are changed using SWR.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
