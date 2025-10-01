import { chartData } from '@/data/DashoardData';
import React, { useState } from 'react';

export default function WeeklyRegistrationsChart() {
  const [showApplications, setShowApplications] = useState(true);
  const [showShortlisted, setShowShortlisted] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('Month');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scale = 0.814;
  return (
    <div className="flex w-full">
      <div className="relative flex flex-col items-start bg-[#111827] rounded-[8.7px] p-[12px_12px_12px_20px] sm:p-[17.5px_17.5px_17.5px_29.3px] gap-3 sm:gap-5 w-full h-[280px] sm:h-[329px] max-w-[500px]">
        <div className="flex flex-col items-start w-full gap-4 sm:gap-6">
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-semibold text-white m-0 text-[14px] sm:text-[15.7px] leading-[20px] sm:leading-[23.2px]">
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

          <div className="flex flex-col items-start w-full gap-[6px] sm:gap-[8.7px]">
            <div className="relative flex flex-row items-end w-full pl-[30px] sm:pl-[38.4px] gap-[20px] sm:gap-[33.2px] h-[180px] sm:h-[220.2px] overflow-x-auto">
              <div className="absolute text-white font-normal text-[12.2px] leading-[14.7px] -rotate-90 origin-center pointer-events-none w-[75.7px] h-[14.7px] left-[-48.8px] top-1/2 -mt-[30.5px]">
                Registrations
              </div>

              <div className="absolute flex flex-col items-start gap-[20px] sm:gap-[25.3px] right-[-12px] sm:right-[-17.5px] bottom-[20px] sm:bottom-[28.8px] w-[calc(100%-40px)] sm:w-[399.3px] h-[120px] sm:h-[156.3px]">
                {[
                  { label: '200%', labelW: 'w-[28.1px]', gap: 'gap-[16.6px]' },
                  { label: '150%', labelW: 'w-[25.6px]', gap: 'gap-[21px]' },
                  { label: '100%', labelW: 'w-[25.6px]', gap: 'gap-[21px]' },
                  { label: '50%', labelW: 'w-[22px]', gap: 'gap-[21px]' },
                  { label: '0%', labelW: 'w-[15.9px]', gap: 'gap-[21px]' },
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-row items-end w-full h-[11px] ${item.gap}`}>
                    <span className={`text-[#8F8F8F] font-medium text-[9px] sm:text-[10.5px] leading-[11px] ${item.labelW} h-[11px]`}>
                      {item.label}
                    </span>
                    <div className="border-t border-[rgba(125,125,125,0.22)] flex-grow h-0"></div>
                  </div>
                ))}
              </div>

              {chartData.map((data, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center gap-[10px] sm:gap-[13.1px] flex-shrink-0"
                  style={{ 
                    width: data.month === 'Mar' || data.month === 'July' ? '16px' : data.month === 'May' ? '18px' : data.month === 'Apr' ? '14px' : '15px',
                    zIndex: idx + 1 
                  }}
                >
                  <div className="flex flex-col items-start gap-[4px] sm:gap-[6.1px] w-[4px] sm:w-[5.2px]">
                    <div 
                      className="rounded-[6px] sm:rounded-[8.7px] w-[4px] sm:w-[5.2px]"
                      style={{ height: `${data.empty * 0.8}px` }}
                    />
                    {showShortlisted && (
                      <div 
                        className="bg-[rgba(255,166,0,0.8)] rounded-[6px] sm:rounded-[8.7px] w-[4px] sm:w-[5.2px]"
                        style={{ height: `${data.shortlisted * 0.8}px` }}
                      />
                    )}
                    {showApplications && (
                      <div 
                        className="bg-[#56CCF2] rounded-[6px] sm:rounded-[8.7px] w-[4px] sm:w-[5.2px]"
                        style={{ height: `${data.applications * 0.8}px` }}
                      />
                    )}
                  </div>
                  <span className="text-white font-normal text-center text-[9px] sm:text-[10.5px] leading-[12px] sm:leading-[15.9px] h-[12px] sm:h-[15.9px]">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-row items-start gap-[10px] sm:gap-[13.1px] w-full sm:w-[291.8px] h-[12px] sm:h-[15.9px]">
              <button 
                className="flex flex-row items-center gap-[2px] sm:gap-[3.5px] w-[70px] sm:w-[88.6px] h-[12px] sm:h-[15.9px] cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowApplications(!showApplications)}
              >
                <div className="flex flex-row justify-end items-center bg-[#56CCF2] p-[0.6px] sm:p-[0.9px] rounded-[6px] sm:rounded-[8.7px] w-[15px] sm:w-[19.2px] h-[8px] sm:h-[10.5px] transition-all">
                  <div 
                    className="bg-[#1F2937] rounded-[6px] sm:rounded-[8.7px] w-[6px] sm:w-[8.7px] h-[6px] sm:h-[8.7px] transition-all"
                    style={{ 
                      marginRight: showApplications ? '0' : 'auto',
                      marginLeft: showApplications ? 'auto' : '0'
                    }}
                  />
                </div>
                <span className="text-white font-normal text-[8px] sm:text-[10.5px] leading-[12px] sm:leading-[15.9px] w-[50px] sm:w-[65.9px] h-[12px] sm:h-[15.9px]">
                  Applications
                </span>
              </button>
              <button 
                className="flex flex-row items-center gap-[2px] sm:gap-[3.5px] w-[60px] sm:w-[78.9px] h-[12px] sm:h-[15.9px] cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowShortlisted(!showShortlisted)}
              >
                <div className="flex flex-row justify-end items-center bg-[#FFA600] p-[0.6px] sm:p-[0.9px] rounded-[6px] sm:rounded-[8.7px] w-[15px] sm:w-[19.2px] h-[8px] sm:h-[10.5px] transition-all">
                  <div 
                    className="bg-[#1F2937] rounded-[6px] sm:rounded-[8.7px] w-[6px] sm:w-[8.7px] h-[6px] sm:h-[8.7px] transition-all"
                    style={{ 
                      marginRight: showShortlisted ? '0' : 'auto',
                      marginLeft: showShortlisted ? 'auto' : '0'
                    }}
                  />
                </div>
                <span className="text-white font-normal text-[8px] sm:text-[10.5px] leading-[12px] sm:leading-[15.9px] w-[40px] sm:w-[56.2px] h-[12px] sm:h-[15.9px]">
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