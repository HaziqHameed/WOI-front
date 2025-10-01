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

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] xl:grid-cols-[420px_1fr] gap-6 mt-8">
  <div className="w-full">
    <WeeklyRegistrationsChart />
  </div>

  <div className="w-full">
    <DailyLoginsChart />
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
