"use client"
import React from "react";
import StatsRow from "../sections/StatsRow";
import { studentSkills, studentStatsData } from "@/data/StudentDashboardData";
import StudentWeeklyProgressChart from "../charts/StudentWeeklyProgressChart";
import StudentDailyActivityChart from "../charts/StudentDailyActivityChart";
import StudentSkillsTable from "../common/StudentSkillsTable";

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
    <div className="w-full">
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Welcome back, Student! 👋
            </h1>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
              Track your learning progress and stay on top of your studies
            </p>
          </div>

          {/* Stats Row */}
          <StatsRow stats={studentStatsData} />

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr] 2xl:grid-cols-[420px_1fr] gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="w-full">
              <StudentWeeklyProgressChart />
            </div>

            <div className="w-full">
              <StudentDailyActivityChart />
            </div>
          </div>

          {/* Skills Table */}
          <StudentSkillsTable
            title="My Learning Skills"
            subtitle="Track your skill development and learning priorities"
            skills={studentSkills}
            columns={tableColumns}
          />

          {/* Quick Actions */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#2a3441] rounded-lg p-4 sm:p-6 hover:bg-[#374151] transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#35A891] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L12.5 7.5H20L15 12L17.5 19.5L10 15L2.5 19.5L5 12L0 7.5H7.5L10 0Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Start Learning</h3>
              </div>
              <p className="text-gray-400 text-sm">Begin a new course or lesson</p>
            </div>

            <div className="bg-[#2a3441] rounded-lg p-4 sm:p-6 hover:bg-[#374151] transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FFA600] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10S4.477 20 10 20 20 15.523 20 10 15.523 0 10 0ZM8 15L4 11L5.4 9.6L8 12.2L14.6 5.6L16 7L8 15Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">View Assignments</h3>
              </div>
              <p className="text-gray-400 text-sm">Check pending assignments</p>
            </div>

            <div className="bg-[#2a3441] rounded-lg p-4 sm:p-6 hover:bg-[#374151] transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#377DFF] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V4C18 2.9 17.1 2 16 2ZM16 16H4V4H16V16ZM6 6H14V8H6V6ZM6 10H14V12H6V10ZM6 14H11V16H6V14Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Study Schedule</h3>
              </div>
              <p className="text-gray-400 text-sm">Plan your study time</p>
            </div>

            <div className="bg-[#2a3441] rounded-lg p-4 sm:p-6 hover:bg-[#374151] transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#9142CE] rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L12.5 7.5H20L15 12L17.5 19.5L10 15L2.5 19.5L5 12L0 7.5H7.5L10 0Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Achievements</h3>
              </div>
              <p className="text-gray-400 text-sm">View your certificates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
