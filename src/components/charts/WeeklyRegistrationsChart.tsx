import React, { useState } from 'react';

export default function WeeklyRegistrationsChart() {
  const [showApplications, setShowApplications] = useState(true);
  const [showShortlisted, setShowShortlisted] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('Month');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Scale factor: new width/old width = 438.5/538.5 ≈ 0.814
  const scale = 0.814;

  const chartData = [
    { month: 'Jan', empty: 34.95, shortlisted: 34.95, applications: 87.35 },
    { month: 'Feb', empty: 55.91, shortlisted: 52.42, applications: 70.76 },
    { month: 'Mar', empty: 20.97, shortlisted: 69.01, applications: 25.34 },
    { month: 'Apr', empty: 37.56, shortlisted: 69.01, applications: 25.34 },
    { month: 'May', empty: 54.16, shortlisted: 24.46, applications: 76.87 },
    { month: 'Jun', empty: 38.44, shortlisted: 52.42, applications: 52.42 },
    { month: 'July', empty: 48.05, shortlisted: 52.42, applications: 69.88 },
  ];

  return (
    <div className="flex">
      <div className="relative flex flex-col items-start bg-[#111827] rounded-[8.7px] p-[17.5px_17.5px_17.5px_29.3px] gap-5 w-[438.5px] h-[329px]">
        <div className="flex flex-col items-start w-full gap-6">
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-semibold text-white m-0 text-[15.7px] leading-[23.2px]">
              Weekly Registrations
            </h2>
            <button 
              className="flex flex-row justify-center items-center border border-[#F0F0F0] rounded-[8.7px] px-[8.7px] py-[7px] gap-[5.2px] w-[66.5px] h-[29.9px] cursor-pointer hover:bg-[#1a1f2e] transition-colors relative"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-white font-medium text-[10.5px] leading-[15.9px]">
                {selectedPeriod}
              </span>
              <svg width="9.8" height="6.1" viewBox="0 0 8 5" fill="none" className="rotate-180">
                <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="#FFFFFF"/>
              </svg>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-[1.2px] bg-[#111827] border border-[#F0F0F0] rounded-[8.7px] overflow-hidden z-50">
                  {['Week', 'Month', 'Year'].map((period) => (
                    <button
                      key={period}
                      className="block w-full text-left text-white hover:bg-[#1a1f2e] transition-colors whitespace-nowrap text-[10.5px] px-[14.7px] py-[9.8px]"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPeriod(period);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              )}
            </button>
          </div>

          <div className="flex flex-col items-start w-full gap-[8.7px]">
            <div className="relative flex flex-row items-end w-full pl-[38.4px] gap-[33.2px] h-[220.2px]">
              <div className="absolute text-white font-normal text-[12.2px] leading-[14.7px] -rotate-90 origin-center pointer-events-none w-[75.7px] h-[14.7px] left-[-48.8px] top-1/2 -mt-[30.5px]">
                Registrations
              </div>

              <div className="absolute flex flex-col items-start gap-[25.3px] right-[-17.5px] bottom-[28.8px] w-[399.3px] h-[156.3px]">
                {[
                  { label: '200%', labelW: 'w-[28.1px]', gap: 'gap-[16.6px]' },
                  { label: '150%', labelW: 'w-[25.6px]', gap: 'gap-[21px]' },
                  { label: '100%', labelW: 'w-[25.6px]', gap: 'gap-[21px]' },
                  { label: '50%', labelW: 'w-[22px]', gap: 'gap-[21px]' },
                  { label: '0%', labelW: 'w-[15.9px]', gap: 'gap-[21px]' },
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-row items-end w-[399.3px] h-[11px] ${item.gap}`}>
                    <span className={`text-[#8F8F8F] font-medium text-[10.5px] leading-[11px] ${item.labelW} h-[11px]`}>
                      {item.label}
                    </span>
                    <div className="border-t border-[rgba(125,125,125,0.22)] flex-grow h-0"></div>
                  </div>
                ))}
              </div>

              {chartData.map((data, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center gap-[13.1px]"
                  style={{ 
                    width: data.month === 'Mar' || data.month === 'July' ? '20.8px' : data.month === 'May' ? '23.2px' : data.month === 'Apr' ? '18.3px' : '19.5px',
                    zIndex: idx + 1 
                  }}
                >
                  <div className="flex flex-col items-start gap-[6.1px] w-[5.2px]">
                    <div 
                      className="rounded-[8.7px] w-[5.2px]"
                      style={{ height: `${data.empty}px` }}
                    />
                    {showShortlisted && (
                      <div 
                        className="bg-[rgba(255,166,0,0.8)] rounded-[8.7px] w-[5.2px]"
                        style={{ height: `${data.shortlisted}px` }}
                      />
                    )}
                    {showApplications && (
                      <div 
                        className="bg-[#56CCF2] rounded-[8.7px] w-[5.2px]"
                        style={{ height: `${data.applications}px` }}
                      />
                    )}
                  </div>
                  <span className="text-white font-normal text-center text-[10.5px] leading-[15.9px] h-[15.9px]">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-row items-start gap-[13.1px] w-[291.8px] h-[15.9px]">
              <button 
                className="flex flex-row items-center gap-[3.5px] w-[88.6px] h-[15.9px] cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowApplications(!showApplications)}
              >
                <div className="flex flex-row justify-end items-center bg-[#56CCF2] p-[0.9px] rounded-[8.7px] w-[19.2px] h-[10.5px] transition-all">
                  <div 
                    className="bg-[#1F2937] rounded-[8.7px] w-[8.7px] h-[8.7px] transition-all"
                    style={{ 
                      marginRight: showApplications ? '0' : 'auto',
                      marginLeft: showApplications ? 'auto' : '0'
                    }}
                  />
                </div>
                <span className="text-white font-normal text-[10.5px] leading-[15.9px] w-[65.9px] h-[15.9px]">
                  Applications
                </span>
              </button>
              <button 
                className="flex flex-row items-center gap-[3.5px] w-[78.9px] h-[15.9px] cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowShortlisted(!showShortlisted)}
              >
                <div className="flex flex-row justify-end items-center bg-[#FFA600] p-[0.9px] rounded-[8.7px] w-[19.2px] h-[10.5px] transition-all">
                  <div 
                    className="bg-[#1F2937] rounded-[8.7px] w-[8.7px] h-[8.7px] transition-all"
                    style={{ 
                      marginRight: showShortlisted ? '0' : 'auto',
                      marginLeft: showShortlisted ? 'auto' : '0'
                    }}
                  />
                </div>
                <span className="text-white font-normal text-[10.5px] leading-[15.9px] w-[56.2px] h-[15.9px]">
                  Shortlisted
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}