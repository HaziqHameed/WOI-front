import React from "react";
import { StatsRowProps } from "@/types/dashboard";
import StatCard from "../common/StatCard";

export default function StatsRow({ stats, className = "" }: StatsRowProps): React.JSX.Element {
  return (
    <section
      aria-label="Statistics"
      className={`
        ${className}
      `}
    >
      {stats.map((stat, index) => (
        <StatCard key={`${stat.title}-${index}`} stat={stat} />
      ))}
    </section>
  );
}