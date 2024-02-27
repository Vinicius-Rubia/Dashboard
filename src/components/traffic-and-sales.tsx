import { getRandomInt } from "@/utils/get-random-int";
import { Facebook, Linkedin, Search, Twitter, User } from "lucide-react";
import React from "react";
import { TableUsers } from "./table-users";
import { Progress } from "./ui/progress";

export const TrafficAndSales: React.FC = () => {
  return (
    <div className="rounded-lg border mt-4">
      <h1 className="border-b p-3">Traffic & Sales</h1>

      <div className="grid grid-cols-2 p-3 space-x-4 mb-8">
        <div className="grid grid-cols-2">
          <div className="col-span-2 grid grid-cols-2 border-b pb-3 h-[70px]">
            <div className="border-l-2 border-blue-600 px-3">
              <h5 className="text-sm text-gray-500">New Clients</h5>
              <p className="text-lg font-semibold">9.123</p>
            </div>

            <div className="border-l-2 border-rose-600 px-3">
              <h5 className="text-sm text-gray-500">Recuring Clients</h5>
              <p className="text-lg font-semibold">22.643</p>
            </div>
          </div>

          <div className="col-span-2 space-y-4 mt-4">
            <div className="flex items-center">
              <h4 className="w-[150px]">Monday</h4>
              <div className="space-y-1 w-full">
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-blue-500" />
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-rose-600" />
              </div>
            </div>

            <div className="flex items-center">
              <h4 className="w-[150px]">Tuesday</h4>
              <div className="space-y-1 w-full">
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-blue-500" />
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-rose-600" />
              </div>
            </div>

            <div className="flex items-center">
              <h4 className="w-[150px]">Wednesday</h4>
              <div className="space-y-1 w-full">
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-blue-500" />
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-rose-600" />
              </div>
            </div>

            <div className="flex items-center">
              <h4 className="w-[150px]">Thursday</h4>
              <div className="space-y-1 w-full">
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-blue-500" />
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-rose-600" />
              </div>
            </div>

            <div className="flex items-center">
              <h4 className="w-[150px]">Friday</h4>
              <div className="space-y-1 w-full">
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-blue-500" />
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-rose-600" />
              </div>
            </div>

            <div className="flex items-center">
              <h4 className="w-[150px]">Saturday</h4>
              <div className="space-y-1 w-full">
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-blue-500" />
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-rose-600" />
              </div>
            </div>

            <div className="flex items-center">
              <h4 className="w-[150px]">Sunday</h4>
              <div className="space-y-1 w-full">
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-blue-500" />
                <Progress value={getRandomInt(5, 100)} className="h-1 [&>div]:bg-rose-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-2 grid grid-cols-2 border-b pb-3 h-[70px]">
            <div className="border-l-2 border-orange-600 px-3">
              <h5 className="text-sm text-gray-500">Pageviews</h5>
              <p className="text-lg font-semibold">78.623</p>
            </div>

            <div className="border-l-2 border-green-600 px-3">
              <h5 className="text-sm text-gray-500">Organic</h5>
              <p className="text-lg font-semibold">49.123</p>
            </div>
          </div>

          <div className="col-span-2 space-y-4 mt-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <User />
                  <p>Male</p>
                </div>
                <span className="text-sm">43%</span>
              </div>
              <Progress
                value={43}
                className="h-1 w-full [&>div]:bg-orange-500"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <User />
                  <p>Female</p>
                </div>
                <span className="text-sm">37%</span>
              </div>
              <Progress
                value={37}
                className="h-1 w-full [&>div]:bg-orange-500"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Search />
                  <p>Organic Search</p>
                </div>
                <p className="text-sm">
                  191.235 <span className="text-xs">(56%)</span>
                </p>
              </div>
              <Progress
                value={56}
                className="h-1 w-full [&>div]:bg-green-500"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Facebook />
                  <p>Facebook</p>
                </div>
                <p className="text-sm">
                  51.223 <span className="text-xs">(15%)</span>
                </p>
              </div>
              <Progress
                value={15}
                className="h-1 w-full [&>div]:bg-green-500"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Twitter />
                  <p>Twitter</p>
                </div>
                <p className="text-sm">
                  37.564 <span className="text-xs">(11%)</span>
                </p>
              </div>
              <Progress
                value={11}
                className="h-1 w-full [&>div]:bg-green-500"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Linkedin />
                  <p>Linkedin</p>
                </div>
                <p className="text-sm">
                  27.319 <span className="text-xs">(8%)</span>
                </p>
              </div>
              <Progress value={8} className="h-1 w-full [&>div]:bg-green-500" />
            </div>
          </div>
        </div>
      </div>

      <TableUsers />
    </div>
  );
};
