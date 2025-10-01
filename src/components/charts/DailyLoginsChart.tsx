import React from 'react';

export default function DailyLoginsChart() {
  // Scale factor: new width/old width = 788/688 ≈ 1.145
  const scaleX = 788 / 688;
  const scaleY = 329 / 286;
  
  const chartData = [
    { day: 'Mon', value: 700, x: 140.28, y: 175.19 },
    { day: 'Tue', value: 850, x: 226.57, y: 158.14 },
    { day: 'Wed', value: 1150, x: 335.62, y: 120.34 },
    { day: 'Thu', value: 1400, x: 441.05, y: 97.51 },
    { day: 'Fri', value: 1300, x: 548.19, y: 108.15 },
    { day: 'Sat', value: 700, x: 651.61, y: 175.19 },
    { day: 'Sun', value: 600, x: 726.33, y: 189.44 },
  ];

  const pathD = "M140.28,175.19 L226.57,158.14 L335.62,120.34 L441.05,97.51 L548.19,108.15 L651.61,175.19 L726.33,189.44";

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col items-start p-0 gap-1">
        <div className="w-[788px] h-[329px] relative">
          <div className="absolute w-[788px] h-[329px] left-0 top-0 bg-[#111827] rounded-2xl"></div>

          <div className="absolute w-[57.3px] h-[27.5px] left-[11.5px] top-[130.85px] -rotate-90 text-white font-normal text-[18.3px] leading-[27.5px] origin-center">
            Logins
          </div>

          <div className="absolute w-[28.6px] h-[27.5px] left-[144.3px] top-[273.6px] text-white font-normal text-[13.7px] leading-[27.5px]">
            Mon
          </div>

          <div className="absolute w-[24px] h-[27.5px] left-[240.5px] top-[273.6px] text-white font-normal text-[13.7px] leading-[27.5px]">
            Tue
          </div>

          <div className="absolute w-[29.8px] h-[27.5px] left-[332px] top-[273.6px] text-white font-normal text-[13.7px] leading-[27.5px]">
            Wed
          </div>

          <div className="absolute w-[25.2px] h-[27.5px] left-[429.4px] top-[273.6px] text-white font-normal text-[13.7px] leading-[27.5px]">
            Thu
          </div>

          <div className="absolute w-[17.2px] h-[27.5px] left-[522.1px] top-[273.6px] text-white font-normal text-[13.7px] leading-[27.5px]">
            Fri
          </div>

          <div className="absolute w-[21.8px] h-[27.5px] left-[606.9px] top-[273.6px] text-white font-normal text-[13.7px] leading-[27.5px]">
            Sat
          </div>

          <div className="absolute w-[25.2px] h-[27.5px] left-[696.2px] top-[273.6px] text-white font-normal text-[13.7px] leading-[27.5px]">
            Sun
          </div>

          <div className="absolute w-[649.9px] h-[27.5px] left-[77.3px] top-[71.11px]">
            <div className="absolute w-[32px] h-[27.5px] left-0 top-0 text-white font-normal text-[13.7px] leading-[27.5px]">
              1500
            </div>
            <div className="absolute w-[587.4px] h-0 left-[62.4px] top-[13.7px] border-t border-white/20"></div>
          </div>

          <div className="absolute w-[649.9px] h-[27.5px] left-[77.3px] top-[130.79px]">
            <div className="absolute w-[33.2px] h-[27.5px] left-0 top-0 text-white font-normal text-[13.7px] leading-[27.5px]">
              1000
            </div>
            <div className="absolute w-[587.4px] h-0 left-[62.4px] top-[13.7px] border-t border-white/20"></div>
          </div>

          <div className="absolute w-[645.9px] h-[27.5px] left-[81.1px] top-[204.24px]">
            <div className="absolute w-[26.3px] h-[27.5px] left-0 top-0 text-white font-normal text-[13.7px] leading-[27.5px]">
              500
            </div>
            <div className="absolute w-[587.4px] h-0 left-[58.6px] top-[13.7px] border-t border-white/20"></div>
          </div>

          <div className="absolute w-[641.2px] h-[27.5px] left-[85.9px] top-[252.55px]">
            <div className="absolute w-[9.2px] h-[27.5px] left-0 top-0 text-white font-normal text-[13.7px] leading-[27.5px]">
              0
            </div>
            <div className="absolute w-[587.4px] h-0 left-[53.8px] top-[13.7px] border-t border-white/50"></div>
          </div>

          <div className="absolute h-[27.5px] left-[45.7px] top-[30.59px] text-white font-semibold text-[18.3px] leading-[27.5px] z-10">
            Daily Logins
          </div>

          <svg className="absolute left-0 top-0 w-[788px] h-[329px]" style={{ pointerEvents: 'none' }}>
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

            {chartData.map((point, idx) => (
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