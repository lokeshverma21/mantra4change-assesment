"use client";
import { ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";
import type {KPI} from "@/types/dashboard";

type FilterSelectProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function FilterSelect({
  label,
  options,
  value,
  onChange,
}: FilterSelectProps) {
  return (
    <label className="flex w-full flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </span>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 pr-9 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </label>
  );
}

type FilterBarProps = {
  months: string[];
  districts: string[];
  blocks: string[];
  subjects: string[];

  selectedMonth: string;
  selectedDistrict: string;
  selectedBlock: string;
  selectedSubject: string;

  onMonthChange: (value: string) => void;
  onDistrictChange: (value: string) => void;
  onBlockChange: (value: string) => void;
  onSubjectChange: (value: string) => void;

  onReset: () => void;
};

export default function FilterBar({
  months,
  districts,
  blocks,
  subjects,
  selectedMonth,
  selectedDistrict,
  selectedBlock,
  selectedSubject,
  onMonthChange,
  onDistrictChange,
  onBlockChange,
  onSubjectChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <SlidersHorizontal className="h-4 w-4 text-indigo-500" />
          Filters
        </div>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FilterSelect
          label="Reporting Month"
          options={months}
          value={selectedMonth}
          onChange={onMonthChange}
        />

        <FilterSelect
          label="District"
          options={districts}
          value={selectedDistrict}
          onChange={onDistrictChange}
        />

        <FilterSelect
          label="Block"
          options={blocks}
          value={selectedBlock}
          onChange={onBlockChange}
        />

        <FilterSelect
          label="Subject"
          options={subjects}
          value={selectedSubject}
          onChange={onSubjectChange}
        />
      </div>
    </div>
  );
}