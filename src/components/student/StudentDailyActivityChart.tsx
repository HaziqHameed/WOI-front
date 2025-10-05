"use client"
import React from "react";
import { DailyChart } from "@/types/dashboard";

interface StudentDailyActivityChartProps {
  data?: DailyChart[];
}

export default function StudentDailyActivityChart({ 
  data = [
    { day: 'Mon', value: 2, x: 140.28, y: 175.19 },
    { day: 'Tue', value: 3, x: 226.57, y: 158.14 },
    { day: 'Wed', value: 4, x: 335.62, y: 120.34 },
    { day: 'Thu', value: 5, x: 441.05, y: 97.51 },
    { day: 'Fri', value: 3, x: 548.19, y: 108.15 },
    { day: 'Sat', value: 2, x: 651.61, y: 175.19 },
    { day: 'Sun', value: 1, x: 726.33, y: 189.44 },
  ]
}: StudentDailyActivityChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));

  return (
    <div className="bg-[#2a3441] rounded-lg p-4 sm:p-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
            Daily Study Activity
          </h3>
          <p className="text-gray-400 text-sm">
            Hours studied each day this week
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <div className="w-3 h-3 bg-[#35A891] rounded-full"></div>
          <span className="text-gray-300 text-sm">Study Hours</span>
        </div>
      </div>

      <div className="relative h-64 sm:h-72">
        <svg width="100%" height="100%" className="overflow-visible">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5].map((value, index) => (
            <g key={index}>
              <line
                x1="0"
                y1={`${100 - (value / maxValue) * 100}%`}
                x2="100%"
                y2={`${100 - (value / maxValue) * 100}%`}
                stroke="#374151"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <text
                x="-10"
                y={`${100 - (value / maxValue) * 100}%`}
                textAnchor="end"
                dominantBaseline="middle"
                className="text-xs fill-gray-500"
              >
                {value}h
              </text>
            </g>
          ))}

          {/* Line chart */}
          <path
            d={`M ${data.map((item, index) => {
              const x = `${(index * 100) / (data.length - 1)}%`;
              const y = `${100 - (item.value / maxValue) * 100}%`;
              return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}`}
            fill="none"
            stroke="#35A891"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {data.map((item, index) => {
            const x = `${(index * 100) / (data.length - 1)}%`;
            const y = `${100 - (item.value / maxValue) * 100}%`;

            return (
              <g key={index}>
                {/* Circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#35A891"
                  stroke="#1a202e"
                  strokeWidth="2"
                />
                
                {/* Value label */}
                <text
                  x={x}
                  y={`calc(${y} - 15px)`}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs fill-white font-semibold"
                >
                  {item.value}h
                </text>

                {/* Day labels */}
                <text
                  x={x}
                  y="105%"
                  textAnchor="middle"
                  dominantBaseline="hanging"
                  className="text-xs fill-gray-400"
                >
                  {item.day}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-white font-semibold text-lg">
            {data.reduce((sum, item) => sum + item.value, 0)}h
          </div>
          <div className="text-gray-400 text-sm">Total This Week</div>
        </div>
        <div>
          <div className="text-white font-semibold text-lg">
            {(data.reduce((sum, item) => sum + item.value, 0) / data.length).toFixed(1)}h
          </div>
          <div className="text-gray-400 text-sm">Daily Average</div>
        </div>
        <div>
          <div className="text-white font-semibold text-lg">
            {maxValue}h
          </div>
          <div className="text-gray-400 text-sm">Peak Day</div>
        </div>
        <div>
          <div className="text-white font-semibold text-lg">
            {minValue}h
          </div>
          <div className="text-gray-400 text-sm">Lowest Day</div>
        </div>
      </div>
    </div>
  );
}
