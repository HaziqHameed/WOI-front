import React, { useState } from 'react';

export default function WeeklyRegistrationsChart() {
  const [showApplications, setShowApplications] = useState(true);
  const [showShortlisted, setShowShortlisted] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('Month');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const chartData = [
    { month: 'Jan', empty: 28.62, shortlisted: 28.62, applications: 71.54 },
    { month: 'Feb', empty: 45.79, shortlisted: 42.93, applications: 57.95 },
    { month: 'Mar', empty: 17.17, shortlisted: 56.52, applications: 20.75 },
    { month: 'Apr', empty: 30.76, shortlisted: 56.52, applications: 20.75 },
    { month: 'May', empty: 44.36, shortlisted: 20.03, applications: 62.96 },
    { month: 'Jun', empty: 31.48, shortlisted: 42.93, applications: 42.93 },
    { month: 'July', empty: 39.35, shortlisted: 42.93, applications: 57.23 },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="relative flex flex-col items-start bg-[#111827] rounded-[7.15px] p-[14.31px] pl-6 gap-4 isolate w-[359px] h-[286px]">
        <div className="flex flex-col items-start gap-[21.46px] w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-semibold text-white m-0 text-[12.88px] leading-[19px]">
              Weekly Registrations
            </h2>
            <button 
              className="flex flex-row justify-center items-center px-[7.15px] py-[5.72px] gap-[4.29px] border border-[#F0F0F0] rounded-[7.15px] relative cursor-pointer hover:bg-[#1a1f2e] transition-colors w-[54.47px] h-[24.45px]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-white font-medium text-[8.59px] leading-[13px]">
                {selectedPeriod}
              </span>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="rotate-180">
                <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="#FFFFFF"/>
              </svg>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-[#111827] border border-[#F0F0F0] rounded-[7.15px] overflow-hidden z-50">
                  {['Week', 'Month', 'Year'].map((period) => (
                    <button
                      key={period}
                      className="block w-full px-3 py-2 text-left text-white hover:bg-[#1a1f2e] transition-colors whitespace-nowrap text-[8.59px]"
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

          <div className="flex flex-col items-start gap-[7.15px] w-full">
            <div className="relative flex flex-row items-end pl-[31.48px] gap-[27.19px] w-full isolate h-[180.41px]">
              <div className="absolute text-white font-normal pointer-events-none text-[10px] leading-[12px] -rotate-90 -left-10 top-1/2 w-[62px] h-3 -mt-[25px] origin-center">
                Registrations
              </div>

              <div className="absolute flex flex-col items-start gap-[20.75px] -right-[14.31px] bottom-[23.62px] w-[327px] h-[127.99px]">
                {[
                  { label: '200%', labelWidth: '23px', gap: '13.59px', lineWidth: '290.41px' },
                  { label: '150%', labelWidth: '21px', gap: '17.17px', lineWidth: '288.83px' },
                  { label: '100%', labelWidth: '21px', gap: '17.17px', lineWidth: '288.83px' },
                  { label: '50%', labelWidth: '18px', gap: '17.17px', lineWidth: '291.83px' },
                  { label: '0%', labelWidth: '13px', gap: '17.17px', lineWidth: '296.83px' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-row items-end w-[327px] h-[9px]" style={{ gap: item.gap }}>
                    <span className="text-[#8F8F8F] font-medium text-[8.59px] leading-[9px] h-[9px]" style={{ width: item.labelWidth }}>
                      {item.label}
                    </span>
                    <div className="border-t-[0.72px] border-[rgba(125,125,125,0.22)] flex-grow h-0" style={{ width: item.lineWidth }}></div>
                  </div>
                ))}
              </div>

              {chartData.map((data, idx) => (
                <div key={idx} className="flex flex-col items-center gap-[10.73px]" style={{ width: data.month === 'Mar' || data.month === 'July' ? '17px' : data.month === 'May' ? '19px' : data.month === 'Apr' ? '15px' : '16px', zIndex: idx + 1 }}>
                  <div className="flex flex-col items-start gap-[5.01px] w-[4.29px]">
                    <div className="rounded-[7.15px] w-[4.29px]" style={{ height: `${data.empty}px` }}></div>
                    {showShortlisted && (
                      <div className="bg-[rgba(255,166,0,0.8)] rounded-[7.15px] w-[4.29px]" style={{ height: `${data.shortlisted}px` }}></div>
                    )}
                    {showApplications && (
                      <div className="bg-[#56CCF2] rounded-[7.15px] w-[4.29px]" style={{ height: `${data.applications}px` }}></div>
                    )}
                  </div>
                  <span className="text-white font-normal text-center text-[8.59px] leading-[13px] h-[13px]">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-row items-start gap-[10.73px] w-[239px] h-[13px]">
              <button 
                className="flex flex-row items-center gap-[2.86px] cursor-pointer hover:opacity-80 transition-opacity w-[72.6px] h-[13px]"
                onClick={() => setShowApplications(!showApplications)}
              >
                <div className="flex flex-row justify-end items-center p-[0.72px] bg-[#56CCF2] rounded-[7.15px] transition-all w-[15.74px] h-[8.59px]">
                  <div className="bg-[#1F2937] rounded-[7.15px] transition-all w-[7.15px] h-[7.15px]" style={{ marginRight: showApplications ? '0' : 'auto', marginLeft: showApplications ? 'auto' : '0' }}></div>
                </div>
                <span className="text-white font-normal text-[8.59px] leading-[13px] w-[54px] h-[13px]">
                  Applications
                </span>
              </button>
              <button 
                className="flex flex-row items-center gap-[2.86px] cursor-pointer hover:opacity-80 transition-opacity w-[64.6px] h-[13px]"
                onClick={() => setShowShortlisted(!showShortlisted)}
              >
                <div className="flex flex-row justify-end items-center p-[0.72px] bg-[#FFA600] rounded-[7.15px] transition-all w-[15.74px] h-[8.59px]">
                  <div className="bg-[#1F2937] rounded-[7.15px] transition-all w-[7.15px] h-[7.15px]" style={{ marginRight: showShortlisted ? '0' : 'auto', marginLeft: showShortlisted ? 'auto' : '0' }}></div>
                </div>
                <span className="text-white font-normal text-[8.59px] leading-[13px] w-[46px] h-[13px]">
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