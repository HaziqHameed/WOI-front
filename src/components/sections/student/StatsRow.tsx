import React from "react";
import { StatsRowProps } from "@/types/dashboard";
import StatCard from "@/components/common/StatCard";

export default function StatsRow({ stats, className = "" }: StatsRowProps) {
  return (
    <>
      {stats.map((stat, index) => (
        <div
          key={`${stat.title}-${index}`}
          className={`
            ${className}
          `}
        >
          <StatCard stat={stat} />
        </div>
      ))}
    </>
  );
}