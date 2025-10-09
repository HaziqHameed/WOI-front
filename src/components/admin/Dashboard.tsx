"use client"
import React from "react";
import StatsRow from "../sections/StatsRow";
import { skills, statsData } from "@/data/admin/DashoardData";
import WeeklyRegistrationsChart from "./WeeklyRegistrationsChart";
import DailyLoginsChart from "./DailyLoginsChart";
import SkillGapTable from "./GapTable";
import { TableColumn } from "@/types/dashboard";

interface DashboardProps {
  className?: string;
}

export default function Dashboard({ className = "" }: DashboardProps): React.JSX.Element {

  

  const tableColumns: TableColumn[] = [
    {
      key: "name",
      label: "SKILL NAME",
      width: "w-[150px] sm:w-[200px] lg:w-[250px]",
      align: "start"
    },
    {
      key: "location",
      label: "LOCATION",
      width: "w-[150px] sm:w-[200px] lg:w-[280px]",
      align: "start"
    },
    {
      key: "experience",
      label: "EXPERIENCE REQUIRED",
      width: "w-[150px] sm:w-[200px] lg:w-[280px]",
      align: "start"
    },
    {
      key: "demand",
      label: "DEMAND LEVEL",
      width: "flex-1",
      align: "end"
    }
  ];


  return (
    <div className={`w-full ${className}`}>
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="max-w-7xl mx-auto">
          <StatsRow className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3
        lg:grid-cols-4 
        xl:grid-cols-5
        2xl:grid-cols-5 
        gap-3 
        sm:gap-4 
        md:gap-4
        lg:gap-5 
        xl:gap-6
        w-full" stats={statsData} />

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
