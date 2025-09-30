import React from "react";
import { StatsRowProps } from "@/types/stats";
import StatCard from "../common/StatCard";

export default function StatsRow({ stats, className = "" }: StatsRowProps) {
  return (
    <section
      aria-label="Statistics"
      className={`
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2
        lg:grid-cols-3 
        xl:grid-cols-4
        2xl:grid-cols-6 
        gap-3 
        sm:gap-4 
        lg:gap-5 
        xl:gap-6
        w-full
        ${className}
      `}
    >
      {stats.map((stat, index) => (
        <StatCard key={`${stat.title}-${index}`} stat={stat} />
      ))}
    </section>
  );
}