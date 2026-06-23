import { FileText } from "lucide-react";

type ReportPreviewProps = {
  title?: string;
  content: string;
};

export default function ReportPreview({
  title = "Report Preview",
  content,
}: ReportPreviewProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <FileText className="h-4 w-4" />
        </span>

        <h3 className="text-sm font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="prose prose-sm max-w-none px-5 py-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="whitespace-pre-wrap leading-relaxed text-slate-700">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}