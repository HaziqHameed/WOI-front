"use client"
import React from "react";
import StatsRow from "../sections/StatsRow";
import { statsData } from "@/data/statsData";
import WeeklyRegistrationsChart from "../charts/WeeklyRegistrationsChart";
import DailyLoginsChart from "../charts/DailyLoginsChart";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="max-w-7xl mx-auto">
          <StatsRow stats={statsData} />

          <div>
            <WeeklyRegistrationsChart/>
            <DailyLoginsChart/>
          </div>
        </div>
      </div>
    </div>
  );
}
