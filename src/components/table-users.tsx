import { MoreVertical, Users } from "lucide-react";
import React from "react";
import AlemanhaIcon from "../assets/icons/alemanha.png";
import BrasilIcon from "../assets/icons/brasil.png";
import CroaciaIcon from "../assets/icons/croacia.png";
import EspanhaIcon from "../assets/icons/espanha.png";
import EuaIcon from "../assets/icons/eua.png";
import PortugalIcon from "../assets/icons/portugal.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Progress } from "./ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./ui/table";

export const TableUsers: React.FC = () => {
  return (
    <div className="mx-3 mb-3 rounded-lg border">
      <Table>
        <TableHeader className="bg-primary-foreground">
          <TableRow>
            <TableHead className="w-[50px]">
              <Users className="h-5 w-5" />
            </TableHead>
            <TableHead>User</TableHead>
            <TableHead className="text-center">Country</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead className="text-center">Payment Method</TableHead>
            <TableHead>Activity</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar className="overflow-visible relative w-7 h-7">
                  <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
                  <AvatarFallback>YA</AvatarFallback>
                  <span className="block w-2 h-2 rounded-full bg-green-500 absolute bottom-0 right-0" />
              </Avatar>
            </TableCell>
            <TableCell>
              <p className="font-medium">Yiorgos Avraamu</p>
              <p className="text-xs text-gray-400">
                New | Registered: Jan 1, 2020
              </p>
            </TableCell>
            <TableCell className="flex justify-center">
              <img src={EuaIcon} alt="Eua Icon" />
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-between">
                <span>50%</span>
                <span className="text-xs text-gray-500">
                  Jun 11, 2020 - Jul 10, 2020%
                </span>
              </div>
              <Progress
                value={50}
                className="h-1 w-full [&>div]:bg-green-500 mt-1"
              />
            </TableCell>
            <TableCell className="uppercase text-xs text-center font-mono">
              Pix
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">Last logon</p>
                <p className="text-sm">10 sec ago</p>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10"
                  >
                    <MoreVertical />
                    <span className="sr-only">More actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Info</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar className="overflow-visible relative w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
                <AvatarFallback>AT</AvatarFallback>
                <span className="block w-2 h-2 rounded-full bg-red-500 absolute bottom-0 right-0" />
              </Avatar>
            </TableCell>
            <TableCell>
              <p className="font-medium">Avram Tarasios</p>
              <p className="text-xs text-gray-400">
                Recurring | Registered: Jan 1, 2020
              </p>
            </TableCell>
            <TableCell className="flex justify-center">
              <img src={BrasilIcon} alt="Brazil Icon" />
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-between">
                <span>10%</span>
                <span className="text-xs text-gray-500">
                  Jun 11, 2020 - Jul 10, 2020%
                </span>
              </div>
              <Progress
                value={10}
                className="h-1 w-full [&>div]:bg-blue-500 mt-1"
              />
            </TableCell>
            <TableCell className="uppercase text-xs text-center font-mono">
              Cartão
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">Last logon</p>
                <p className="text-sm">5 minutes ago</p>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10"
                  >
                    <MoreVertical />
                    <span className="sr-only">More actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Info</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar className="overflow-visible relative w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
                <AvatarFallback>QE</AvatarFallback>
                <span className="block w-2 h-2 rounded-full bg-orange-500 absolute bottom-0 right-0" />
              </Avatar>
            </TableCell>
            <TableCell>
              <p className="font-medium">Quintin Ed</p>
              <p className="text-xs text-gray-400">
                New | Registered: Jan 1, 2020
              </p>
            </TableCell>
            <TableCell className="flex justify-center">
              <img src={CroaciaIcon} alt="Croácia Icon" />
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-between">
                <span>74%</span>
                <span className="text-xs text-gray-500">
                  Jun 11, 2020 - Jul 10, 2020
                </span>
              </div>
              <Progress
                value={74}
                className="h-1 w-full [&>div]:bg-orange-500 mt-1"
              />
            </TableCell>
            <TableCell className="uppercase text-xs text-center font-mono">
              Cartão
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">Last logon</p>
                <p className="text-sm">1 hour ago</p>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10"
                  >
                    <MoreVertical />
                    <span className="sr-only">More actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Info</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar className="overflow-visible relative w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
                <AvatarFallback>EK</AvatarFallback>
                <span className="block w-2 h-2 rounded-full bg-gray-500 absolute bottom-0 right-0" />
              </Avatar>
            </TableCell>
            <TableCell>
              <p className="font-medium">Enéas Kwadwo</p>
              <p className="text-xs text-gray-400">
                New | Registered: Jan 1, 2020
              </p>
            </TableCell>
            <TableCell className="flex justify-center">
              <img src={EspanhaIcon} alt="Espanha Icon" />
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-between">
                <span>98%</span>
                <span className="text-xs text-gray-500">
                  Jun 11, 2020 - Jul 10, 2020
                </span>
              </div>
              <Progress
                value={98}
                className="h-1 w-full [&>div]:bg-rose-500 mt-1"
              />
            </TableCell>
            <TableCell className="uppercase text-xs text-center font-mono">
              Boleto
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">Last logon</p>
                <p className="text-sm">Last Month</p>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10"
                  >
                    <MoreVertical />
                    <span className="sr-only">More actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Info</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar className="overflow-visible relative w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
                <AvatarFallback>AT</AvatarFallback>
                <span className="block w-2 h-2 rounded-full bg-green-500 absolute bottom-0 right-0" />
              </Avatar>
            </TableCell>
            <TableCell>
              <p className="font-medium">Agapetus Tadeáš</p>
              <p className="text-xs text-gray-400">
                New | Registered: Jan 1, 2020
              </p>
            </TableCell>
            <TableCell className="flex justify-center">
              <img src={PortugalIcon} alt="Portugal Icon" />
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-between">
                <span>22%</span>
                <span className="text-xs text-gray-500">
                  Jun 11, 2020 - Jul 10, 2020
                </span>
              </div>
              <Progress
                value={22}
                className="h-1 w-full [&>div]:bg-blue-500 mt-1"
              />
            </TableCell>
            <TableCell className="uppercase text-xs text-center font-mono">
              Pix
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">Last logon</p>
                <p className="text-sm">Last Week</p>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10"
                  >
                    <MoreVertical />
                    <span className="sr-only">More actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Info</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar className="overflow-visible relative w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
                <AvatarFallback>FD</AvatarFallback>
                <span className="block w-2 h-2 rounded-full bg-red-500 absolute bottom-0 right-0" />
              </Avatar>
            </TableCell>
            <TableCell>
              <p className="font-medium">Friderik Dávid</p>
              <p className="text-xs text-gray-400">
                New | Registered: Jan 1, 2020
              </p>
            </TableCell>
            <TableCell className="flex justify-center">
              <img src={AlemanhaIcon} alt="Alemanha Icon" />
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-between">
                <span>43%</span>
                <span className="text-xs text-gray-500">
                  Jun 11, 2020 - Jul 10, 2020
                </span>
              </div>
              <Progress
                value={43}
                className="h-1 w-full [&>div]:bg-green-500 mt-1"
              />
            </TableCell>
            <TableCell className="uppercase text-xs text-center font-mono">
              Boleto
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs">Last logon</p>
                <p className="text-sm">Yesterday</p>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10"
                  >
                    <MoreVertical />
                    <span className="sr-only">More actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Info</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
