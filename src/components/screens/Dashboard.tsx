"use client"
import React from "react";
import StatsRow from "../sections/StatsRow";
import { statsData } from "@/data/statsData";

export default function Dashboard() {
  return (
    <>
     <div className="p-4 sm:p-6 lg:p-8">
      <StatsRow stats={statsData} />
    </div>
    </>
  );
}
