"use client"
import React from "react";
import StatsRow from "../sections/StatsRow";
import { statsData } from "@/data/DashoardData";
import WeeklyRegistrationsChart from "../charts/WeeklyRegistrationsChart";
import DailyLoginsChart from "../charts/DailyLoginsChart";

export default function Dashboard() {

  const skills = [
    {
      name: "React.js",
      location: "San Fransisco, CA",
      experience: "3-5 years",
      demand: "High",
      demandColor: "high"
    },
    {
      name: "Python",
      location: "New York, NY",
      experience: "2-4 years",
      demand: "Medium",
      demandColor: "medium"
    },
    {
      name: "DevOps",
      location: "Seattle, WA",
      experience: "5+ years",
      demand: "High",
      demandColor: "high"
    },
    {
      name: "Machine Learning",
      location: "Austin, TX",
      experience: "3-6 years",
      demand: "High",
      demandColor: "high"
    },
    {
      name: "UI/UX Design",
      location: "Los Angles, CA",
      experience: "2-4 years",
      demand: "Low",
      demandColor: "low"
    }
  ];

  const getDemandStyle = (level: string) => {
    switch (level) {
      case "high":
        return "bg-[#FFBDBA] text-[#9B1F1F]";
      case "medium":
        return "bg-[#FF9933] text-[#9A3412]";
      case "low":
        return "bg-[#B4FFD1] text-[#166534]";
      default:
        return "";
    }
  };

  return (
    <div className="w-full">
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="max-w-7xl mx-auto">
          <StatsRow stats={statsData} />

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr] 2xl:grid-cols-[420px_1fr] gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="w-full">
              <WeeklyRegistrationsChart />
            </div>

            <div className="w-full">
              <DailyLoginsChart />
            </div>
          </div>

          {/* Table */}
          <div className="flex items-center justify-center mt-10">
            <div className="w-full">
              {/* Header Section */}
              <div className="w-full h-[100px] bg-[#111827] rounded-t-[8px] box-border px-4 flex flex-col justify-center items-start gap-2 mb-2">
                <div className="flex flex-row items-center gap-1 w-full h-[29px]">
                  <h1 className="font-semibold text-xl sm:text-2xl leading-[29px] text-center text-white">
                    Master Skill Gap Analysis
                  </h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <p className="font-medium text-xs leading-[15px] text-center text-white" >
                    Current skill demands and availability
                  </p>
                </div>
              </div>

              {/* Mobile View - Card Layout */}
              <div className="block md:hidden">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-[#111827] p-4 mb-2 rounded-lg border border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
                      <div className={`px-2 py-1 rounded-md ${getDemandStyle(skill.demandColor)}`}>
                        <span className="font-medium text-sm">
                          {skill.demand}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Location:</span>
                        <span className="text-white text-sm">{skill.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70 text-sm">Experience:</span>
                        <span className="text-white text-sm">{skill.experience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop/Tablet View - Table Layout */}
              <div className="hidden md:block overflow-x-auto">
                {/* Table Header */}
                <div className="flex flex-row items-center h-[52px] bg-[#111827] px-4 min-w-[800px]">
                  <div className="w-[200px] sm:w-[250px] flex justify-start">
                    <span className="font-bold text-sm leading-[21px] text-white/70">
                      SKILL NAME
                    </span>
                  </div>
                  <div className="w-[200px] sm:w-[280px] flex justify-start">
                    <span className="font-bold text-sm leading-[21px] text-white/70">
                      LOCATION
                    </span>
                  </div>
                  <div className="w-[200px] sm:w-[280px] flex justify-start">
                    <span className="font-bold text-sm leading-[21px] text-white/70">
                      EXPERIENCE REQUIRED
                    </span>
                  </div>
                  <div className="w-[120px] flex justify-end">
                    <span className="font-bold text-sm leading-[21px] text-white/70">
                      DEMAND LEVEL
                    </span>
                  </div>
                </div>

                {/* Table Rows */}
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-row items-center h-[52px] bg-[#111827] px-4 border-b border-white/10 min-w-[800px]">
                    <div className="w-[200px] sm:w-[250px] flex justify-start">
                      <span className="font-normal text-sm sm:text-base leading-[24px] text-white truncate">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-[200px] sm:w-[280px] flex justify-start">
                      <span className="font-normal text-sm sm:text-base leading-[24px] text-white truncate">
                        {skill.location}
                      </span>
                    </div>
                    <div className="w-[200px] sm:w-[280px] flex justify-start">
                      <span className="font-normal text-sm sm:text-base leading-[24px] text-white truncate">
                        {skill.experience}
                      </span>
                    </div>
                    <div className="w-[120px] flex justify-end">
                      <div className="w-[100px] justify-center h-[24px] flex">
                        <div className={`px-2 pb-1 rounded-md ${getDemandStyle(skill.demandColor)}`}>
                          <span className="font-medium text-sm sm:text-base leading-[24px]">
                            {skill.demand}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
