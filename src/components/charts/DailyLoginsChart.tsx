import React from 'react';

export default function DailyLoginsChart() {
  const chartData = [
    { day: 'Mon', value: 700, x: 122.5, y: 152.34 },
    { day: 'Tue', value: 850, x: 197.79, y: 137.49 },
    { day: 'Wed', value: 1150, x: 293.12, y: 104.65 },
    { day: 'Thu', value: 1400, x: 385.11, y: 84.8 },
    { day: 'Fri', value: 1300, x: 478.77, y: 94.04 },
    { day: 'Sat', value: 700, x: 569.09, y: 152.34 },
    { day: 'Sun', value: 600, x: 634.35, y: 164.74 },
  ];

  const pathD = "M122.5,152.34 L197.79,137.49 L293.12,104.65 L385.11,84.8 L478.77,94.04 L569.09,152.34 L634.35,164.74";

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a202e] p-8">
      <div className="relative flex flex-col items-start p-0 gap-1 w-[688px] h-[286px]">
        <div className="w-[688px] h-[286px]">
          <div className="absolute w-[688px] h-[286px] left-0 top-0 bg-[#111827] rounded-2xl"></div>

          <div className="absolute w-[50px] h-6 left-[10px] top-[113.79px] -rotate-90 text-white font-normal text-base leading-6 origin-center">
            Logins
          </div>

          <div className="absolute w-[25px] h-6 left-[126px] top-[238px] text-white font-normal text-xs leading-6">
            Mon
          </div>

          <div className="absolute w-[21px] h-6 left-[210px] top-[238px] text-white font-normal text-xs leading-6">
            Tue
          </div>

          <div className="absolute w-[26px] h-6 left-[290px] top-[238px] text-white font-normal text-xs leading-6">
            Wed
          </div>

          <div className="absolute w-[22px] h-6 left-[375px] top-[238px] text-white font-normal text-xs leading-6">
            Thu
          </div>

          <div className="absolute w-[15px] h-6 left-[456px] top-[238px] text-white font-normal text-xs leading-6">
            Fri
          </div>

          <div className="absolute w-[19px] h-6 left-[530px] top-[238px] text-white font-normal text-xs leading-6">
            Sat
          </div>

          <div className="absolute w-[22px] h-6 left-[608px] top-[238px] text-white font-normal text-xs leading-6">
            Sun
          </div>

          <div className="absolute w-[567.5px] h-6 left-[67.5px] top-[61.84px]">
            <div className="absolute w-7 h-6 left-0 top-0 text-white font-normal text-xs leading-6">
              1500
            </div>
            <div className="absolute w-[513px] h-0 left-[54.5px] top-3 border-t border-white/20"></div>
          </div>

          <div className="absolute w-[567.5px] h-6 left-[67.5px] top-[113.74px]">
            <div className="absolute w-[29px] h-6 left-0 top-0 text-white font-normal text-xs leading-6">
              1000
            </div>
            <div className="absolute w-[513px] h-0 left-[54.5px] top-3 border-t border-white/20"></div>
          </div>

          <div className="absolute w-[564.17px] h-6 left-[70.84px] top-[177.66px]">
            <div className="absolute w-[23px] h-6 left-0 top-0 text-white font-normal text-xs leading-6">
              500
            </div>
            <div className="absolute w-[513px] h-0 left-[51.16px] top-3 border-t border-white/20"></div>
          </div>

          <div className="absolute w-[560px] h-6 left-[75px] top-[219.55px]">
            <div className="absolute w-2 h-6 left-0 top-0 text-white font-normal text-xs leading-6">
              0
            </div>
            <div className="absolute w-[513px] h-0 left-[47px] top-3 border-t border-white/50"></div>
          </div>

          <div className="absolute h-6 left-10 top-[26.61px] text-white font-semibold text-base leading-6 z-10">
            Daily Logins
          </div>

          <svg className="absolute left-0 top-0 w-[688px] h-[286px]" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
              </linearGradient>
            </defs>

            <path
              d={`${pathD} L634.35,230 L122.5,230 Z`}
              fill="url(#areaGradient)"
            />

            <path
              d={pathD}
              stroke="#8B5CF6"
              strokeWidth="3"
              fill="none"
            />

            {chartData.map((point, idx) => (
              <circle
                key={idx}
                cx={point.x}
                cy={point.y}
                r="6.655"
                fill="#8B5CF6"
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}