"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Home, MessageSquare, Server, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b p-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl font-bold">SaleAI</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                <Link href="/dashboard">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard/documents"}>
                <Link href="/dashboard/documents">
                  <FileText className="h-4 w-4" />
                  <span>Documents</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard/knowledge-base"}>
                <Link href="/dashboard/knowledge-base">
                  <Server className="h-4 w-4" />
                  <span>Knowledge Base</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard/chat-simulator"}>
                <Link href="/dashboard/chat-simulator">
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat Simulator</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname.startsWith("/dashboard/integrations")}>
                <Link href="/dashboard/integrations">
                  <Server className="h-4 w-4" />
                  <span>Integrations</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard/users"}>
                <Link href="/dashboard/users">
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <Button variant="outline" size="sm" className="w-full">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
