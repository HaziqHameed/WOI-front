"use client"
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayoutContent({ children }: MainLayoutProps) {
  const { isCollapsed, isMobile } = useSidebar();

  return (
    <div className="min-h-screen w-full bg-[#1a202e]">
      <Header />
      <div className="flex">
        <Sidebar />
        <main 
          className={`flex-1 mt-[78px] min-h-[calc(100vh-78px)] transition-all duration-300 ${
            isMobile 
              ? "ml-[80px]" // Always collapsed on mobile
              : isCollapsed 
                ? "ml-[80px]" 
                : "ml-[294px]"
          }`}
        >
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-[#1a202e]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <MainLayoutContent>{children}</MainLayoutContent>
    </SidebarProvider>
  );
}
