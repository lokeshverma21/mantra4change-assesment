"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export type TrendPoint = {
  month: string;
  value: number;
};

type TrendChartProps = {
  title: string;
  subtitle?: string;
  data: TrendPoint[];
  color?: string;
  unit?: string;
  currentValue?: string;
  delta?: string;
  deltaDirection?: "up" | "down" | "flat";
};

export default function TrendChart({
  title,
  subtitle,
  data,
  color = "#6366f1",
  unit = "%",
  currentValue,
  delta,
  deltaDirection = "up",
}: TrendChartProps) {
  const gradientId = `grad-${title.replace(/\s+/g, "-").toLowerCase()}`;

  const deltaColor =
    deltaDirection === "up"
      ? "text-emerald-600"
      : deltaDirection === "down"
        ? "text-rose-600"
        : "text-slate-500";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          {subtitle ? (
            <p className="mt-0.5 text-xs text-slate-400">{subtitle}</p>
          ) : null}
        </div>
        {currentValue ? (
          <div className="text-right">
            <p className="text-lg font-bold text-slate-900">{currentValue}</p>
            {delta ? (
              <p className={`text-xs font-medium ${deltaColor}`}>{delta}</p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="mt-4 h-44 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.28} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eef2f7"
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              tickLine={false}
              axisLine={false}
              width={40}
              domain={["dataMin - 5", "dataMax + 5"]}
            />
            <Tooltip
              cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "4 4" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
                fontSize: 12,
              }}
              formatter={(value) => [`${value}${unit}`, title]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2.5}
              fill={`url(#${gradientId})`}
              dot={{ r: 3, fill: color, strokeWidth: 0 }}
              activeDot={{ r: 5, strokeWidth: 2, stroke: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
