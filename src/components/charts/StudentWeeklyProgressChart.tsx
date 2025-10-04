"use client"
import React from "react";
import { WeeklyChart } from "@/types/dashboard";

interface StudentWeeklyProgressChartProps {
  data?: WeeklyChart[];
}

export default function StudentWeeklyProgressChart({ 
  data = [
    { month: 'Jan', empty: 20, shortlisted: 30, applications: 50 },
    { month: 'Feb', empty: 35, shortlisted: 25, applications: 60 },
    { month: 'Mar', empty: 15, shortlisted: 40, applications: 55 },
    { month: 'Apr', empty: 25, shortlisted: 35, applications: 60 },
    { month: 'May', empty: 40, shortlisted: 20, applications: 60 },
    { month: 'Jun', empty: 30, shortlisted: 30, applications: 60 },
    { month: 'July', empty: 35, shortlisted: 25, applications: 60 },
  ]
}: StudentWeeklyProgressChartProps) {
  const maxValue = Math.max(...data.map(d => Math.max(d.empty, d.shortlisted, d.applications)));

  return (
    <div className="bg-[#2a3441] rounded-lg p-4 sm:p-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
            Weekly Study Progress
          </h3>
          <p className="text-gray-400 text-sm">
            Hours spent studying per week
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#35A891] rounded-full"></div>
            <span className="text-gray-300 text-sm">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FFA600] rounded-full"></div>
            <span className="text-gray-300 text-sm">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#377DFF] rounded-full"></div>
            <span className="text-gray-300 text-sm">Planned</span>
          </div>
        </div>
      </div>

      <div className="relative h-64 sm:h-72">
        <svg width="100%" height="100%" className="overflow-visible">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((value, index) => (
            <g key={index}>
              <line
                x1="0"
                y1={`${100 - value}%`}
                x2="100%"
                y2={`${100 - value}%`}
                stroke="#374151"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <text
                x="-10"
                y={`${100 - value}%`}
                textAnchor="end"
                dominantBaseline="middle"
                className="text-xs fill-gray-500"
              >
                {value}h
              </text>
            </g>
          ))}

          {/* Chart bars */}
          {data.map((item, index) => {
            const x = `${(index * 100) / (data.length - 1)}%`;
            const completedHeight = `${(item.empty / maxValue) * 100}%`;
            const inProgressHeight = `${(item.shortlisted / maxValue) * 100}%`;
            const plannedHeight = `${(item.applications / maxValue) * 100}%`;

            return (
              <g key={index}>
                {/* Completed (bottom) */}
                <rect
                  x={`calc(${x} - 8px)`}
                  y={`calc(100% - ${completedHeight})`}
                  width="16px"
                  height={completedHeight}
                  fill="#35A891"
                  rx="2"
                />
                
                {/* In Progress (middle) */}
                <rect
                  x={`calc(${x} - 8px)`}
                  y={`calc(100% - ${completedHeight} - ${inProgressHeight})`}
                  width="16px"
                  height={inProgressHeight}
                  fill="#FFA600"
                  rx="2"
                />
                
                {/* Planned (top) */}
                <rect
                  x={`calc(${x} - 8px)`}
                  y={`calc(100% - ${completedHeight} - ${inProgressHeight} - ${plannedHeight})`}
                  width="16px"
                  height={plannedHeight}
                  fill="#377DFF"
                  rx="2"
                />

                {/* Month labels */}
                <text
                  x={x}
                  y="105%"
                  textAnchor="middle"
                  dominantBaseline="hanging"
                  className="text-xs fill-gray-400"
                >
                  {item.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-white font-semibold text-lg">
            {data.reduce((sum, item) => sum + item.empty, 0)}h
          </div>
          <div className="text-gray-400 text-sm">Completed</div>
        </div>
        <div>
          <div className="text-white font-semibold text-lg">
            {data.reduce((sum, item) => sum + item.shortlisted, 0)}h
          </div>
          <div className="text-gray-400 text-sm">In Progress</div>
        </div>
        <div>
          <div className="text-white font-semibold text-lg">
            {data.reduce((sum, item) => sum + item.applications, 0)}h
          </div>
          <div className="text-gray-400 text-sm">Planned</div>
        </div>
      </div>
    </div>
  );
}
