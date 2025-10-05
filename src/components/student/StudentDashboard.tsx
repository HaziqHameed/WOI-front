"use client"
import React from "react";
import { studentSkills, studentStatsData } from "@/data/student/StudentDashboardData";
import StudentWeeklyProgressChart from "./StudentWeeklyProgressChart";
import StudentDailyActivityChart from "./StudentDailyActivityChart";
import StudentSkillsTable from "./StudentSkillsTable";
import { Poppins } from 'next/font/google';
import { statsData } from "@/data/student/StatsData";
import StatsRow from "../sections/student/StatsRow";
import StatisticsChart from "../common/student/BarChart";
import RecentAddedJobs from "../common/student/RecentJos";
import Analytics from "../sections/student/dashboard/Analytics";
import ProfileCard from "../common/student/ProfileCard";



export default function StudentDashboard() {
  const tableColumns = [
    {
      key: "name",
      label: "SKILL NAME",
      width: "w-[150px] sm:w-[200px] lg:w-[250px]",
      align: "start" as const
    },
    {
      key: "location",
      label: "LEARNING SOURCE",
      width: "w-[150px] sm:w-[200px] lg:w-[280px]",
      align: "start" as const
    },
    {
      key: "experience",
      label: "PROFICIENCY LEVEL",
      width: "w-[150px] sm:w-[200px] lg:w-[280px]",
      align: "start" as const
    },
    {
      key: "demand",
      label: "PRIORITY LEVEL",
      width: "flex-1",
      align: "end" as const
    }
  ];

  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
    <div className="col-span-1 lg:col-span-9  p-3 sm:p-4 rounded-lg">
      <Analytics/>
       </div>
       

        {/* Right Sidebar - Responsive across all screens */}
        <div className="col-span-1 lg:col-span-3 p-3 sm:p-4 rounded-lg">
          <div className="text-gray-300 text-sm sm:text-base">
           <ProfileCard/>
          </div>
        </div>
      </div>
    </>
  );
}
