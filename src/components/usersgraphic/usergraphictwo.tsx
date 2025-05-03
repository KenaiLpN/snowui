"use client"

import {  XAxis, Bar, BarChart } from "recharts"
import { CardHeader, CardTitle,} from "@/components/ui/card"
import {  ChartConfig,  ChartContainer, ChartTooltip,  ChartTooltipContent,} from "@/components/ui/chart"




const chartData = [
  { month: "Linux", desktop: 186},
  { month: "Mac", desktop: 305},
  { month: "iOS", desktop: 237},
  { month: "Windows", desktop: 73},
  { month: "Android", desktop: 243},
  { month: "Other", desktop: 214},
]

const chartConfig2 = {
  desktop: {
    label: "Desktop",
    color: "#00C951",
  },

} satisfies ChartConfig

export function UsersGraphicTwo() {
  return (
    <div className="w-168 rounded-2xl bg-[#3F3F3F]">
       <CardHeader  className="mt-5 gap-5 text-green-500"> 
        <CardTitle>Line Chart</CardTitle>
        
      </CardHeader>
    <ChartContainer config={chartConfig2} className="min-h-[50px] h-60 w-168">
      
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