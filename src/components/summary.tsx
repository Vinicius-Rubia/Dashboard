import { getRandomInt } from "@/utils/get-random-int";
import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
} from "recharts";
import colors from "tailwindcss/colors";
import { DropdownMenuSummary } from "./dropdown-menu-summary";

const dataSessions = [
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
  { pv: getRandomInt(1000, 9000) },
];

const dataUsers = [
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
];

const dataIncome = [
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
];

const dataConversionRate = [
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
  { value: getRandomInt(10, 100) },
];

export const Summary: React.FC = () => {
  return (
    <div className="grid grid-cols-4 space-x-4 my-6">
      <div className="bg-[#321FDB] rounded-lg p-4 text-white h-[160px]">
        <div className="flex justify-between">
          <div>
            <p className="text-2xl font-semibold">
              26k <span className="text-base font-normal">(-12.4%)</span>
            </p>
            <p className="font-medium">Users</p>
          </div>
          <DropdownMenuSummary />
        </div>
        <div>
          <LineChart
            width={270}
            height={80}
            data={dataUsers}
            style={{ fontSize: 12 }}
          >
            <Tooltip
              cursor={false}
              labelClassName="hidden"
              contentStyle={{ background: colors.black, border: 0, borderRadius: 6 }}
              itemStyle={{ color: "#FFF" }}
            />
            <Line
              type="natural"
              dataKey="value"
              r={4}
              dot={{
                fill: "#321FDB",
              }}
              stroke="#A39AEF"
            />
          </LineChart>
        </div>
      </div>

      <div className="bg-[#3399FF] rounded-lg p-4 text-white h-[160px]">
        <div className="flex justify-between">
          <div>
            <p className="text-2xl font-semibold">
              $6.200 <span className="text-base font-normal">(40.9%)</span>
            </p>
            <p className="font-medium">Income</p>
          </div>
          <DropdownMenuSummary />
        </div>
        <div>
          <LineChart
            width={270}
            height={80}
            data={dataIncome}
            style={{ fontSize: 12 }}
          >
            <Tooltip
              cursor={false}
              labelClassName="hidden"
              contentStyle={{ background: colors.black, border: 0, borderRadius: 6 }}
              itemStyle={{ color: "#FFF" }}
            />
            <Line
              type="natural"
              dataKey="value"
              r={4}
              dot={{
                fill: "#3399FF",
              }}
              stroke="#A3D1FF"
            />
          </LineChart>
        </div>
      </div>

      <div className="bg-[#F9B115] rounded-lg text-white h-[160px]">
        <div className="flex justify-between px-4 pt-4">
          <div>
            <p className="text-2xl font-semibold">
              2.49% <span className="text-base font-normal">(84.7%)</span>
            </p>
            <p className="font-medium">Conversion Rate</p>
          </div>
          <DropdownMenuSummary />
        </div>
        <div>
          <AreaChart
            width={317}
            height={90}
            data={dataConversionRate}
            style={{ fontSize: 12, marginLeft: "-5px" }}
          >
            <Tooltip
              cursor={false}
              labelClassName="hidden"
              contentStyle={{ background: colors.black, border: 0, borderRadius: 6 }}
              itemStyle={{ color: "#FFF" }}
            />
            <Area
              type="natural"
              dataKey="value"
              stroke="#FFF"
              fillOpacity={1}
              fill="#FAC144"
            />
          </AreaChart>
        </div>
      </div>

      <div className="bg-[#E55353] rounded-lg p-4 text-white h-[160px]">
        <div className="flex justify-between">
          <div>
            <p className="text-2xl font-semibold">
              44k <span className="text-base font-normal">(-23.6%)</span>
            </p>
            <p className="font-medium">Sessions</p>
          </div>
          <DropdownMenuSummary />
        </div>
        <div>
          <BarChart width={270} height={80} data={dataSessions}>
            <Tooltip
              labelClassName="hidden"
              contentStyle={{ background: colors.black, border: 0, borderRadius: 6 }}
              itemStyle={{ color: "#FFF" }}
            />
            <Bar dataKey="pv" fill="#EA7575" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};
