"use client"
import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState('students');

  const tabs = [
    { id: 'students', label: 'Students' },
    { id: 'recruiters', label: 'Recruiters' },
    { id: 'admin', label: 'Admin Users' }
  ];

  return (
    <>
      <PageHeader
        title="User Management"
        ariaLabel="User management header"
      />

{/* Options bar */}
      <div
        className="w-full px-4 sm:px-9 gap-2 sm:gap-6 md:gap-10 h-[42px] bg-[#111827] rounded-[5px] flex items-center md:-mt-4 overflow-x-auto"
      >
        <div
          className={`flex items-center px-3 sm:px-[15px] py-[6px] gap-[10px] min-w-[75px] sm:w-[85px] h-[30px] rounded-[5px] cursor-pointer transition-colors ${activeTab === 'students' ? 'bg-[#1F2937]' : ''
            }`}
          onClick={() => setActiveTab('students')}
        >
          <span
            className={`text-[11px] sm:text-[12px] leading-[18px] font-semibold whitespace-nowrap ${activeTab === 'students' ? 'text-[#F05921]' : 'text-white'
              }`}
          >
            Students
          </span>
        </div>

        <div
          className={`flex items-center px-3 sm:px-[15px] py-[6px] gap-[10px] min-w-[80px] sm:w-[90px] h-[30px] rounded-[5px] cursor-pointer transition-colors ${activeTab === 'recruiters' ? 'bg-[#1F2937]' : ''
            }`}
          onClick={() => setActiveTab('recruiters')}
        >
          <span
            className={`text-[11px] sm:text-[12px] leading-[18px] whitespace-nowrap ${activeTab === 'recruiters' ? 'font-semibold text-[#F05921]' : 'font-normal text-white'
              }`}
          >
            Recruiters
          </span>
        </div>

        <div
          className={`flex items-center px-3 sm:px-[15px] py-[6px] gap-[10px] min-w-[90px] sm:w-[105px] h-[30px] rounded-[5px] cursor-pointer transition-colors ${activeTab === 'admin' ? 'bg-[#1F2937]' : ''
            }`}
          onClick={() => setActiveTab('admin')}
        >
          <span
            className={`text-[11px] sm:text-[12px] leading-[18px] whitespace-nowrap ${activeTab === 'admin' ? 'font-semibold text-[#F05921]' : 'font-normal text-white'
              }`}
          >
            Admin Users
          </span>
        </div>
      </div>
    </>
  );
}
