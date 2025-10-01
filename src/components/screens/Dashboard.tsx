"use client"
import React from "react";
import StatsRow from "../sections/StatsRow";
import { statsData } from "@/data/DashoardData";
import WeeklyRegistrationsChart from "../charts/WeeklyRegistrationsChart";
import DailyLoginsChart from "../charts/DailyLoginsChart";
import SkillGapTable from "../common/SkillGapTable";

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

  const tableColumns = [
    {
      key: "name",
      label: "SKILL NAME",
      width: "w-[150px] sm:w-[200px] lg:w-[250px]",
      align: "start" as const
    },
    {
      key: "location",
      label: "LOCATION",
      width: "w-[150px] sm:w-[200px] lg:w-[280px]",
      align: "start" as const
    },
    {
      key: "experience",
      label: "EXPERIENCE REQUIRED",
      width: "w-[150px] sm:w-[200px] lg:w-[280px]",
      align: "start" as const
    },
    {
      key: "demand",
      label: "DEMAND LEVEL",
      width: "flex-1",
      align: "end" as const
    }
  ];


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

          <SkillGapTable
            title="Master Skill Gap Analysis"
            subtitle="Current skill demands and availability"
            skills={skills}
            columns={tableColumns}
          />
        </div>
      </div>
    </div>
  );
}
