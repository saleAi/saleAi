import type React from "react";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import UserInfoDropdown from "@/components/user-info-dropdown";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1">
        <nav className="flex justify-end border-b border-sidebar-border bg-sidebar p-2 sticky top-0 z-10">
          <UserInfoDropdown />
        </nav>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
