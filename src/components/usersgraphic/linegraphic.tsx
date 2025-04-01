import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const data = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 80 },
  { month: "Mar", users: 90 },
  { month: "Apr", users: 150 },
  { month: "May", users: 130 },
  { month: "Jun", users: 140 },
];

export function StyledLineChart() {
  const [timeframe, setTimeframe] = useState("Week");

  return (
    <Card className="w-340 bg-[#3F3F3F] text-white p-4 shadow-lg border-none">
      <CardHeader className="flex justify-between">
        <div className="flex gap-8 mt-5">
        <CardTitle className="text-purple-400">Users</CardTitle>
        <CardTitle className="text-gray-400">Projects</CardTitle>
        <CardTitle className="text-gray-400">Operating Status</CardTitle>
        </div>
        <div className="flex gap-5">
          <Button variant="outline" onClick={() => setTimeframe("Week")}>Week</Button>
          <Button variant="outline" onClick={() => setTimeframe("Month")}>Month</Button>
          <Button variant="outline" onClick={() => setTimeframe("Month")}>Month</Button>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ left: 12, right: 12 }}>
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis stroke="#8884d8" hide />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} dot={{ fill: "#fff", stroke: "#8884d8", r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
