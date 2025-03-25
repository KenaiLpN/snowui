"use client"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, Bar, BarChart } from "recharts"
import { Card, CardContent, CardDescription, CardFooter,  CardHeader, CardTitle,} from "@/components/ui/card"
import {  ChartConfig,  ChartContainer,  ChartLegend,  ChartLegendContent,  ChartTooltip,  ChartTooltipContent,} from "@/components/ui/chart"




const chartData = [
  { month: "Linux", desktop: 186},
  { month: "Mac", desktop: 305},
  { month: "iOS", desktop: 237},
  { month: "Windows", desktop: 73},
  { month: "Android", desktop: 243},
  { month: "Other", desktop: 214},
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },

} satisfies ChartConfig

export function UsersGraphic() {
  return (
    <div className="w-100 rounded-2xl bg-[#383838]">
    <ChartContainer config={chartConfig} className="min-h-[50px] h-50 w-100">
      <BarChart accessibilityLayer data={chartData}>
      
      <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 10)}
    />
    
       <ChartTooltip content={<ChartTooltipContent />} />
       
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[8, 8, 8, 8]} />
        
      </BarChart>
    </ChartContainer>
    </div>  
  )
}