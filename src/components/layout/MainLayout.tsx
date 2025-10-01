"use client"
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayoutContent({ children }: MainLayoutProps) {
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
      <Header />
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
            {children}
          </div>
        </main>
      </div>
<div className={`${isAtBottom ? 'fixed bottom-0 left-0 right-0 z-50' : 'relative'}`}>
      <Footer />
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
