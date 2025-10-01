import React from "react";
import { StatsRowProps } from "@/types/dashboard";
import StatCard from "../common/StatCard";

export default function StatsRow({ stats, className = "" }: StatsRowProps) {
  return (
    <section
      aria-label="Statistics"
      className={`
        grid 
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