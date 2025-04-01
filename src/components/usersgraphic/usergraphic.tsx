"use client";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import { CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  
} from "@/components/ui/chart";
import { useState } from "react";

interface CustomBarProps {
  x: number
  y: number
  width: number
  height: number
  index: number
  activeIndex: number | null
}

const CustomBar = ({ x, y, width, height, index, activeIndex }: CustomBarProps) => {
  const isActive = index === activeIndex;
  const fillColor = isActive ? "#2563eb" : "#515151";

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={9}
        ry={9}
        fill={fillColor}
      />
    </g>
  );
};

const chartData = [
  { month: "Linux", desktop: 186 },
  { month: "Mac", desktop: 305 },
  { month: "iOS", desktop: 237 },
  { month: "Windows", desktop: 73 },
  { month: "Android", desktop: 243 },
  { month: "Other", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb", // Azul quando ativado
  },
} satisfies ChartConfig;

export function UsersGraphic() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-168 rounded-2xl bg-[#3F3F3F]">
      <CardHeader className="mt-5 gap-5 text-[#2563EB]">
        <CardTitle>Device Tracking</CardTitle>
      </CardHeader>

      <ChartContainer config={chartConfig} className="min-h-[50px] h-60 w-168">
        <BarChart
          data={chartData}
          onMouseMove={(e) => {
            if (e.activeTooltipIndex !== undefined) {
              setActiveIndex(e.activeTooltipIndex);
            }
          }}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 10)}
          />

          <Tooltip
            content={({ payload, label }) => (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "8px",
                  borderRadius: "8px",
                  transform: "translateY(-40px)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <p style={{ color: "#2563eb", fontWeight: "bold" }}>{label}</p>
                <p>{payload?.[0]?.value}</p>
              </div>
            )}
            cursor={{ fill: "transparent" }}
          />

          <Bar
            dataKey="desktop"
            shape={(props: any) => <CustomBar {...props} activeIndex={activeIndex} />}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
