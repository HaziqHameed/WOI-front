import { dailyChartData } from '@/data/admin/DashoardData';
import React from 'react';

interface DailyLoginsChartProps {
  className?: string;
}

export default function DailyLoginsChart({ className = "" }: DailyLoginsChartProps): React.JSX.Element {
 
  const pathD = "M140.28,175.19 L226.57,158.14 L335.62,120.34 L441.05,97.51 L548.19,108.15 L651.61,175.19 L726.33,189.44";

  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <div className="flex flex-col items-start p-0 gap-1 w-full">
        <div className="w-full h-[280px] sm:h-[329px] max-w-[900px] overflow-x-auto no-scrollbar">
          {/* Chart Container with CSS Grid */}
          <div className="relative w-full h-full bg-[#111827] rounded-2xl grid grid-cols-[60px_1fr] grid-rows-[40px_1fr_30px] gap-0">
            
            {/* Top Title Area */}
            <div className="col-span-2 flex items-center justify-start px-3 pt-2">
              <h3 className="text-white font-semibold text-[14px] sm:text-[18.3px] leading-[20px] sm:leading-[27.5px]">
                Daily Logins
              </h3>
            </div>

            {/* Y-axis Label */}
            <div className="row-start-2 flex items-center justify-center">
              <div className="w-[45px] sm:w-[57.3px] h-[20px] sm:h-[27.5px] text-white font-normal text-[12.2px] leading-[14.7px] -rotate-90 origin-center">
                Logins
              </div>
            </div>

            {/* Chart Area with Grid Lines */}
            <div className="row-start-2 relative flex flex-col justify-between py-4 px-2">
              {/* Y-axis Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {/* 1500 line */}
                <div className="flex items-center">
                  <span className="text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px] w-8">
                    1500
                  </span>
                  <div className="flex-1 h-0 border-t border-white/20 ml-2"></div>
                </div>
                
                {/* 1000 line */}
                <div className="flex items-center">
                  <span className="text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px] w-8">
                    1000
                  </span>
                  <div className="flex-1 h-0 border-t border-white/20 ml-2"></div>
                </div>
                
                {/* 500 line */}
                <div className="flex items-center">
                  <span className="text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px] w-8">
                    500
                  </span>
                  <div className="flex-1 h-0 border-t border-white/20 ml-2"></div>
                </div>
                
                {/* 0 line */}
                <div className="flex items-center">
                  <span className="text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px] w-8">
                    0
                  </span>
                  <div className="flex-1 h-0 border-t border-white/50 ml-2"></div>
                </div>
              </div>

              {/* SVG Chart */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 778 329" 
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
                  </linearGradient>
                </defs>

                <path
                  d={`${pathD} L726.33,264.35 L140.28,264.35 Z`}
                  fill="url(#areaGradient)"
                />

                <path
                  d={pathD}
                  stroke="#8B5CF6"
                  strokeWidth="3.44"
                  fill="none"
                />

                {dailyChartData.map((point, idx) => (
                  <circle
                    key={idx}
                    cx={point.x}
                    cy={point.y}
                    r="7.62"
                    fill="#8B5CF6"
                  />
                ))}
              </svg>
            </div>

            {/* X-axis Day Labels */}
            <div className="col-span-2 flex justify-between items-center px-2 pb-2">
              {dailyChartData.map((day, idx) => (
                <div 
                  key={day.day}
                  className="text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px] text-center"
                  style={{ 
                    flex: '1',
                    transform: `translateX(${idx === 0 ? '0' : idx === dailyChartData.length - 1 ? '0' : '0'})`
                  }}
                >
                  {day.day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}