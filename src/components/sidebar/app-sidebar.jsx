import {LayoutPanelTop, LayoutDashboard, Settings, Users, PanelsTopLeft } from "lucide-react"
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
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard ,
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
]

export function AppSidebar() {
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
