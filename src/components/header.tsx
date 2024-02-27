import { setShowMenu } from "@/redux/menuSlice";
import {
  Bell,
  CheckSquare,
  CreditCard,
  FolderOpenDot,
  Lock,
  LogOut,
  MailOpen,
  Menu,
  MessageSquareMore,
  Settings,
  User
} from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-primary-foreground py-3 px-5 h-16">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(setShowMenu())}
        >
          <Menu />
        </Button>
        <Button asChild className="hover:text-blue-500" variant="link">
          <button>Dashboard</button>
        </Button>
        <Button asChild className="hover:text-blue-500" variant="link">
          <button>Users</button>
        </Button>
        <Button asChild className="hover:text-blue-500" variant="link">
          <button>Settings</button>
        </Button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <MailOpen />
        </Button> 
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
                <AvatarFallback>VR</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Updates</span>
                <DropdownMenuShortcut className="opacity-100"><Badge className="scale-75">42</Badge></DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MailOpen className="mr-2 h-4 w-4" />
                <span>Messages</span>
                <DropdownMenuShortcut className="opacity-100"><Badge className="scale-75">2</Badge></DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CheckSquare className="mr-2 h-4 w-4" />
                <span>Tasks</span>
                <DropdownMenuShortcut className="opacity-100"><Badge className="scale-75">17</Badge></DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquareMore className="mr-2 h-4 w-4" />
                <span>Comments</span>
                <DropdownMenuShortcut className="opacity-100"><Badge className="scale-75">29</Badge></DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Payments</span>
                <DropdownMenuShortcut className="opacity-100"><Badge className="scale-75">1</Badge></DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FolderOpenDot className="mr-2 h-4 w-4" />
                <span>Projects</span>
                <DropdownMenuShortcut className="opacity-100"><Badge className="scale-75">34</Badge></DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Lock className="mr-2 h-4 w-4" />
              <span>Lock Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
