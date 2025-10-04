"use client"
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";

interface StudentLayoutProps {
  children: React.ReactNode;
}

function StudentLayoutContent({ children }: StudentLayoutProps) {
  const { isCollapsed, isMobile } = useSidebar();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const isBottom = windowHeight + scrollTop >= documentHeight - 10;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#1a202e] relative">
      {/* Student-specific header styling */}
      <div className="relative">
        <Header />
        {/* Student badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-[#35A891] to-[#377DFF] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0L7.5 4.5H12L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5H4.5L6 0Z" fill="white" />
            </svg>
            Student Portal
          </div>
        </div>
      </div>
      
      <div className="flex pb-[61px]">
        <Sidebar />
        <main 
          className={`flex-1 mt-[78px] min-h-[calc(100vh-78px-61px)] transition-all duration-300 ${
            isMobile 
              ? "ml-[80px]" 
              : isCollapsed 
                ? "ml-[80px]" 
                : "ml-[294px]"
          }`}
        >
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-[#1a202e]">
            {/* Student-specific background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-20 left-20 w-32 h-32 bg-[#35A891] rounded-full blur-3xl"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-[#377DFF] rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-[#FFA600] rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </main>
      </div>
      
      <div className={`${isAtBottom ? 'fixed bottom-0 left-0 right-0 z-50' : 'relative'}`}>
        <Footer />
      </div>
    </div>
  );
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <SidebarProvider>
      <StudentLayoutContent>{children}</StudentLayoutContent>
    </SidebarProvider>
  );
}
