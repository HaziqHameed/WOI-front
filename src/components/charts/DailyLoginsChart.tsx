import { dailyChartData } from '@/data/DashoardData';
import React from 'react';

export default function DailyLoginsChart() {
 
  const pathD = "M140.28,175.19 L226.57,158.14 L335.62,120.34 L441.05,97.51 L548.19,108.15 L651.61,175.19 L726.33,189.44";

  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex flex-col items-start p-0 gap-1 w-full">
        <div className="w-full h-[280px] sm:h-[329px] relative max-w-[900px] overflow-x-auto no-scrollbar">
          <div className="absolute w-full h-full left-0 top-0 bg-[#111827] rounded-2xl"></div>

          <div className="absolute w-[45px] sm:w-[57.3px] h-[20px] sm:h-[27.5px] left-[8px] sm:left-[11.5px] top-[50%] -translate-y-1/2 -rotate-90 text-white font-normal text-[12.2px] leading-[14.7px] origin-center">
            Logins
          </div>

          <div className="absolute w-[28.6px] h-[20px] sm:h-[27.5px] left-[18.3%] top-[calc(100%-20px)] sm:top-[273.6px] text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
            Mon
          </div>

          <div className="absolute w-[24px] h-[20px] sm:h-[27.5px] left-[30.5%] top-[calc(100%-20px)] sm:top-[273.6px] text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
            Tue
          </div>

          <div className="absolute w-[29.8px] h-[20px] sm:h-[27.5px] left-[42.1%] top-[calc(100%-20px)] sm:top-[273.6px] text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
            Wed
          </div>

          <div className="absolute w-[25.2px] h-[20px] sm:h-[27.5px] left-[54.5%] top-[calc(100%-20px)] sm:top-[273.6px] text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
            Thu
          </div>

          <div className="absolute w-[17.2px] h-[20px] sm:h-[27.5px] left-[66.2%] top-[calc(100%-20px)] sm:top-[273.6px] text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
            Fri
          </div>

          <div className="absolute w-[21.8px] h-[20px] sm:h-[27.5px] left-[77%] top-[calc(100%-20px)] sm:top-[273.6px] text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
            Sat
          </div>

          <div className="absolute w-[25.2px] h-[20px] sm:h-[27.5px] left-[88.3%] top-[calc(100%-20px)] sm:top-[273.6px] text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
            Sun
          </div>

          <div className="absolute w-[83.6%] h-[20px] sm:h-[27.5px] left-[9.7%] top-[15%] sm:top-[71.11px]">
            <div className="absolute w-[32px] h-[20px] sm:h-[27.5px] left-0 top-0 text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
              1500
            </div>
            <div className="absolute w-[90%] h-0 left-[10%] top-[10px] sm:top-[13.7px] border-t border-white/20"></div>
          </div>

          <div className="absolute w-[83.6%] h-[20px] sm:h-[27.5px] left-[9.7%] top-[35%] sm:top-[130.79px]">
            <div className="absolute w-[33.2px] h-[20px] sm:h-[27.5px] left-0 top-0 text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
              1000
            </div>
            <div className="absolute w-[90%] h-0 left-[10%] top-[10px] sm:top-[13.7px] border-t border-white/20"></div>
          </div>

          <div className="absolute w-[83.6%] h-[20px] sm:h-[27.5px] left-[9.7%] top-[55%] sm:top-[204.24px]">
            <div className="absolute w-[26.3px] h-[20px] sm:h-[27.5px] left-0 top-0 text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
              500
            </div>
            <div className="absolute w-[90%] h-0 left-[10%] top-[10px] sm:top-[13.7px] border-t border-white/20"></div>
          </div>

          <div className="absolute w-[83.6%] h-[20px] sm:h-[27.5px] left-[9.7%] top-[75%] sm:top-[252.55px]">
            <div className="absolute w-[9.2px] h-[20px] sm:h-[27.5px] left-0 top-0 text-white font-normal text-[11px] sm:text-[13.7px] leading-[20px] sm:leading-[27.5px]">
              0
            </div>
            <div className="absolute w-[90%] h-0 left-[10%] top-[10px] sm:top-[13.7px] border-t border-white/50"></div>
          </div>

          <div className="absolute h-[20px] sm:h-[27.5px] left-[5.8%] top-[8%] sm:top-[30.59px] text-white font-semibold text-[14px] sm:text-[18.3px] leading-[20px] sm:leading-[27.5px] z-10">
            Daily Logins
          </div>

          <svg 
  className="absolute left-0 top-0 w-full h-full" 
  viewBox="0 0 778 329" 
  preserveAspectRatio="none"
><defs>
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
      </div>
    </div>
  );
}