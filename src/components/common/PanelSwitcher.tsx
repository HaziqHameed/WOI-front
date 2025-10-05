"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PanelSwitcher() {
  const pathname = usePathname();
  
  const isAdmin = pathname.startsWith('/admin');
  const isStudent = pathname.startsWith('/student');

  return (
    // <div className="fixed top-4 left-4 z-50">
    //   <div className="bg-[#2a3441] rounded-lg p-2 shadow-lg border border-gray-600">
    //     <div className="flex items-center gap-2">
         <>
          <Link
            href="/admin"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isAdmin
                ? "bg-[#35A891] text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            Admin Panel
          </Link>
          <Link
            href="/student"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isStudent
                ? "bg-[#377DFF] text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            Student Panel
          </Link>
          </>
    //     </div>
    //   </div>
    // </div>
  );
}

