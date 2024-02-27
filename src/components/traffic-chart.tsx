import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRandomInt } from "@/utils/get-random-int";
import { Download } from "lucide-react";
import React, { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import colors from "tailwindcss/colors";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const dataChartMonth = [
  { legend: "January", revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: "February", revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: "March", revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: "April", revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: "May", revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: "June", revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: "July", revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
];

const dataChartDay = [
  { legend: 1, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 2, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 3, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 4, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 5, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 6, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 7, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 8, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 9, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 10, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 11, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 12, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 13, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 14, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 15, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 16, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 17, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 18, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 19, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 20, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 21, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 22, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 23, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 24, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 25, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 26, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 27, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 28, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 29, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 30, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 31, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
];

const dataChartYear = [
  { legend: 2018, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 2019, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 2020, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 2021, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 2022, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 2023, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
  { legend: 2024, revenue: getRandomInt(10, 90), visits: getRandomInt(10, 90), newUsers: getRandomInt(10, 90) },
];

type ChartTypes = "month" | "year" | "day";

export const TrafficChart: React.FC = () => {
  const [typeChart, setTypeChart] = useState<ChartTypes>("month");

  const chartSelected = typeChart === "month" ? dataChartMonth : typeChart === "day" ? dataChartDay : dataChartYear;

  return (
    <>
      <Card className="col-span-6 rounded-b-none">
        <CardHeader className="flex-row items-center justify-between pb-8">
          <div className="flex items-center justify-between w-full">
            <div className="space-y-1">
              <CardTitle className="font-medium">Traffic</CardTitle>
              <CardDescription>January - July 2022</CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <ToggleGroup type="single" defaultValue={typeChart} onValueChange={(value: ChartTypes) => setTypeChart(value)} className="border rounded-lg">
                <ToggleGroupItem value="day" aria-label="Toggle day">
                  Day
                </ToggleGroupItem>
                <ToggleGroupItem value="month" aria-label="Toggle month">
                  Month
                </ToggleGroupItem>
                <ToggleGroupItem value="year" aria-label="Toggle year">
                  Year
                </ToggleGroupItem>
              </ToggleGroup>
              <Button variant="outline" size="icon" className="rounded-lg">
                <Download />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer className="select-none" width="100%" height={240}>
            <LineChart data={chartSelected} style={{ fontSize: 12 }}>
              <XAxis dataKey="legend" tickLine={false} axisLine={false} dy={16} />

              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
              />

              <CartesianGrid vertical={false} className="stroke-muted" />
              <Tooltip
                labelClassName="hidden"
                contentStyle={{ background: colors.black, borderRadius: 6 }}
              />
              <Line
                type="natural"
                strokeWidth={2}
                dataKey="revenue"
                stroke="#0080ff"
              />
              <Line
                type="natural"
                strokeWidth={2}
                dataKey="visits"
                stroke="#2EB85C"
              />
              <Line
                type="natural"
                strokeWidth={2}
                dataKey="newUsers"
                stroke="#E55353"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-5 space-x-4 p-4 border border-t-0 rounded-b-lg">
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">Visits</p>
          <p><strong>29.703 Users (40%)</strong></p>
          <Progress value={40} className="h-1 [&>div]:bg-green-500" />
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">Unique</p>
          <p><strong>24.093 Users (20%)</strong></p>
          <Progress value={20} className="h-1 [&>div]:bg-blue-500" />
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">Pageviews</p>
          <p><strong>78.706 Views (60%)</strong></p>
          <Progress value={60} className="h-1 [&>div]:bg-orange-500" />
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">New Users</p>
          <p><strong>22.123 Users (80%)</strong></p>
          <Progress value={80} className="h-1 [&>div]:bg-rose-500" />
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">Bounce Rate</p>
          <p><strong>40.15%</strong></p>
          <Progress value={40.15} className="h-1 [&>div]:bg-blue-800" />
        </div>
      </div>
    </>
  );
};
