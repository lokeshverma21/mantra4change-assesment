import { FileText, Copy } from "lucide-react";

export default function DraftReportCard({
  reportText,
}: {
  reportText: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <FileText className="h-4 w-4" />
          </span>

          <h3 className="text-sm font-semibold text-slate-900">
            Draft Report
          </h3>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <Copy className="h-3.5 w-3.5" />
          Copy
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto px-5 py-4">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-600">
          {reportText}
        </pre>
      </div>
    </div>
  );
}
