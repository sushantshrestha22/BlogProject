"use client";
import {
  LayoutPanelTop,
  LayoutDashboard,
  Settings,
  Users,
  PanelsTopLeft,
} from "lucide-react";
import { FaJs } from "react-icons/fa6";
import { BiLogoJquery } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    url: "/user",
    icon: Users,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: LayoutPanelTop,
  },
  {
    title: "Web Design",
    url: "/web-design",
    icon: PanelsTopLeft,
  },
  {
    title: "JavaScript",
    url: "/javascript",
    icon: FaJs,
  },
  {
    title: "JQuery",
    url: "/jQuery",
    icon: BiLogoJquery,
  },
  {
    title: "CSS",
    url: "/css",
    icon: IoLogoCss3,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  let pathname = usePathname();
  pathname = pathname.toLowerCase().split("/")[1];
  console.log(pathname);
  
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Blog Management System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className={` ${
                       pathname === item.url.toLowerCase().split("/")[1]
                          ? "bg-black text-white hover:bg-black"
                          : ""
                      }`}
                      href={item.url}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
