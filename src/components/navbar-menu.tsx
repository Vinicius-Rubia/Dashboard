import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { selectMenu } from "@/redux/menuSlice";
import {
  AlignVerticalJustifyEnd,
  Bell,
  BookOpenText,
  Boxes,
  FileSearch,
  Grid2X2,
  LayoutDashboard,
  NotepadText,
  Palette,
  PieChart,
  Star,
  Type,
} from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import LogoOpen from "../assets/images/logo.svg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export const NavBar: React.FC = () => {
  const { isOpen } = useSelector(selectMenu);

  return (
    <div
      className={`bg-primary-foreground transition-all border-r ${
        isOpen ? "w-[250px]" : "w-[60px]"
      }`}
    >
      {isOpen ? (
        <img
          src={LogoOpen}
          className="mx-auto h-16 p-3 dark:brightness-0 dark:grayscale-[100%] dark:invert"
          alt="Negocie Online"
        />
      ) : (
        <img
          src="https://s3.amazonaws.com/cdn-101.negocieonline.com.br/Disparador/Icones/logoNegocieCollapsed.svg"
          className="mx-auto h-16 p-3 dark:brightness-0 dark:grayscale-[100%] dark:invert"
          alt="Negocie Online"
        />
      )}

      <ScrollArea className="h-[calc(100vh-64px)]">
        {isOpen ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="px-3 hover:no-underline hover:bg-muted"
                isCollapsed={false}
              >
                <div className="flex items-center gap-2 text-xs">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </div>
                <Badge className="scale-[.60] uppercase">new</Badge>
              </AccordionTrigger>
            </AccordionItem>

            <h3 className="uppercase text-xs font-mono px-3 pt-7 mb-1 font-bold">
              Theme
            </h3>

            <AccordionItem value="item-2">
              <AccordionTrigger
                className="px-3 hover:no-underline hover:bg-muted"
                isCollapsed={false}
              >
                <div className="flex items-center gap-2 text-xs">
                  <Palette className="w-4 h-4" />
                  Colors
                </div>
              </AccordionTrigger>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger
                className="px-3 hover:no-underline hover:bg-muted"
                isCollapsed={false}
              >
                <div className="flex items-center gap-2 text-xs">
                  <Type className="w-4 h-4" />
                  Typography
                </div>
              </AccordionTrigger>
            </AccordionItem>

            <h3 className="uppercase text-xs font-mono px-3 pt-7 mb-1 font-bold">
              Components
            </h3>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-3 hover:no-underline hover:bg-muted">
                <div className="flex items-center gap-2 text-xs">
                  <Boxes className="w-4 h-4" />
                  Base
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Accordion
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  BreadCrumb
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Cards
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Carousel
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Collapse
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  List group
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Navs & Tabs
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Pagination
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Placeholders
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Popovers
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Progress
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Scrollspy
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Spinners
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Tables
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Tooltips
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-3 hover:no-underline hover:bg-muted">
                <div className="flex items-center gap-2 text-xs">
                  <AlignVerticalJustifyEnd className="w-4 h-4" />
                  Buttons
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Form Control
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Select
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Checks and radios
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Range
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Input Group
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Floating labels
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Layout
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Validation
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger
                className="px-3 hover:no-underline hover:bg-muted"
                isCollapsed={false}
              >
                <div className="flex items-center gap-2 text-xs">
                  <PieChart className="w-4 h-4" />
                  Charts
                </div>
              </AccordionTrigger>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="px-3 hover:no-underline hover:bg-muted">
                <div className="flex items-center gap-2 text-xs">
                  <NotepadText className="w-4 h-4" />
                  Forms
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Form Control
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Select
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Checks and radios
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Range
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Input Group
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Floating labels
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Layout
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Validation
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="px-3 hover:no-underline hover:bg-muted">
                <div className="flex items-center gap-2 text-xs">
                  <Star className="w-4 h-4" />
                  Icons
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Form Control
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Select
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Checks and radios
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Range
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Input Group
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Floating labels
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Layout
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Validation
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="px-3 hover:no-underline hover:bg-muted">
                <div className="flex items-center gap-2 text-xs">
                  <Bell className="w-4 h-4" />
                  Notifications
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Form Control
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Select
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Checks and radios
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Range
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Input Group
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Floating labels
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Layout
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Validation
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger
                className="px-3 hover:no-underline hover:bg-muted"
                isCollapsed={false}
              >
                <div className="flex items-center gap-2 text-xs">
                  <Grid2X2 className="w-4 h-4" />
                  Widgets
                </div>
              </AccordionTrigger>
            </AccordionItem>

            <h3 className="uppercase text-xs font-mono px-3 pt-7 mb-1 font-bold">
              Extras
            </h3>

            <AccordionItem value="item-11">
              <AccordionTrigger className="px-3 hover:no-underline hover:bg-muted">
                <div className="flex items-center gap-2 text-xs">
                  <BookOpenText className="w-4 h-4" />
                  Pages
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Buttons
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Buttons Group
                </Button>
                <Button
                  className="w-full rounded-none justify-start text-xs pl-9"
                  variant="ghost"
                >
                  Dropdowns
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger
                className="px-3 hover:no-underline hover:bg-muted"
                isCollapsed={false}
              >
                <div className="flex items-center gap-2 text-xs">
                  <FileSearch className="w-4 h-4" />
                  Docs
                </div>
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        ) : (
          <Menubar className="flex-col bg-primary-foreground space-y-4 border-none p-0">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <LayoutDashboard className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
            </MenubarMenu>

            <Separator className="my-2" />

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Palette className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Type className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
            </MenubarMenu>

            <Separator className="my-2" />

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Boxes className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
              <MenubarContent side="right">
                <ScrollArea className="h-[360px]">
                  <MenubarItem>Accordion</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Breadcrumb</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Card</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Carousel</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Collapse</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>List group</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Navs & Tabs</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Pagination</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Placeholders</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Popovers</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Progress</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Scrollspy</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Spinners</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Tables</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Tooltips</MenubarItem>
                </ScrollArea>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <AlignVerticalJustifyEnd className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
              <MenubarContent side="right">
                <ScrollArea className="h-[360px]">
                  <MenubarItem>Accordion</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Breadcrumb</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Card</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Carousel</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Placeholders</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Popovers</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Progress</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Scrollspy</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Spinners</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Tables</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Tooltips</MenubarItem>
                </ScrollArea>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <PieChart className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <NotepadText className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
              <MenubarContent side="right">
                <ScrollArea className="h-[260px]">
                  <MenubarItem>Accordion</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Breadcrumb</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Card</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Carousel</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Collapse</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>List group</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Navs & Tabs</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Pagination</MenubarItem>
                </ScrollArea>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
              <MenubarContent side="right">
                <ScrollArea className="h-full">
                  <MenubarItem>Accordion</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Breadcrumb</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Card</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Carousel</MenubarItem>
                </ScrollArea>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
              <MenubarContent side="right">
                <ScrollArea className="h-full">
                  <MenubarItem>Accordion</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Breadcrumb</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Card</MenubarItem>
                </ScrollArea>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Grid2X2 className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
            </MenubarMenu>

            <Separator className="my-2" />

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <BookOpenText className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
              <MenubarContent side="right">
                <ScrollArea className="h-full">
                  <MenubarItem>Accordion</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Breadcrumb</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Card</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Carousel</MenubarItem>
                </ScrollArea>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <FileSearch className="h-4 w-4" />
                </Button>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        )}
      </ScrollArea>
    </div>
  );
};
