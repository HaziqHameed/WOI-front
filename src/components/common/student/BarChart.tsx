import { gridLines, months, periods } from '@/data/student/StudentDashboardData';
import { Poppins } from 'next/font/google';
import React, { useState } from 'react';

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
const StatisticsChart = () => {
  const [showApplications, setShowApplications] = useState(true);
  const [showShortlisted, setShowShortlisted] = useState(true);
  const [showRejected, setShowRejected] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('Month');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 

  const handleToggleApplications = () => {
    setShowApplications(!showApplications);
  };

  const handleToggleShortlisted = () => {
    setShowShortlisted(!showShortlisted);
  };

  const handleToggleRejected = () => {
    setShowRejected(!showRejected);
  };

  return (
    <div className="w-full h-auto min-h-[274px] flex flex-col items-start bg-gray-900  sm:p-[14.3084px] gap-[7.15px] rounded-[7.1542px]">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-[21.46px]">
        <h2 className={`text-white font-semibold ${poppins.className} text-[10px] sm:text-[12.8776px] leading-[15px] sm:leading-[19px] flex-shrink-0`}>
          Statistics of active Applications
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-[10.73px] w-full sm:w-auto">
          <div className="flex flex-row items-center gap-2 sm:gap-[10.73px] flex-wrap">
            <div className="flex flex-row items-center gap-[2.86px] min-w-[72.6px] h-[13px]">
              <div
                onClick={handleToggleApplications}
                className={`flex flex-row items-center bg-cyan-400 cursor-pointer transition-all p-[0.71542px] w-[15.74px] h-[8.59px] rounded-[7.1542px] ${
                  showApplications ? 'opacity-100 justify-end' : 'opacity-50 justify-start'
                }`}
              >
                <div className="bg-gray-800 w-[7.15px] h-[7.15px] rounded-[7.1542px]" />
              </div>
              <span className={`text-white ${poppins.className} text-[7px] sm:text-[8.58504px] leading-[10px] sm:leading-[13px] font-normal`}>
                Applications
              </span>
            </div>

            <div className="flex flex-row items-center gap-[2.86px] min-w-[64.6px] h-[13px]">
              <div
                onClick={handleToggleShortlisted}
                className={`flex flex-row items-center cursor-pointer transition-all p-[0.71542px] w-[15.74px] h-[8.59px] rounded-[7.1542px] ${
                  showShortlisted ? 'opacity-100 justify-end' : 'opacity-50 justify-start'
                }`}
                style={{ background: '#FFA600' }}
              >
                <div className="bg-gray-800 w-[7.15px] h-[7.15px] rounded-[7.1542px]" />
              </div>
              <span className={`text-white ${poppins.className} text-[7px] sm:text-[8.58504px] leading-[10px] sm:leading-[13px] font-normal`}>
                Shortlisted
              </span>
            </div>

            <div className="flex flex-row items-center gap-[2.86px] min-w-[56.6px] h-[13px]">
              <div
                onClick={handleToggleRejected}
                className={`flex flex-row items-center cursor-pointer transition-all p-[0.71542px] w-[15.74px] h-[8.59px] rounded-[7.1542px] ${
                  showRejected ? 'opacity-100 justify-end' : 'opacity-50 justify-start'
                }`}
                style={{ background: '#FF5630' }}
              >
                <div className="bg-gray-800 w-[7.15px] h-[7.15px] rounded-[7.1542px]" />
              </div>
              <span className={`text-white ${poppins.className} text-[7px] sm:text-[8.58504px] leading-[10px] sm:leading-[13px] font-normal`}>
                Rejected
              </span>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex flex-row justify-center items-center border border-gray-100 cursor-pointer hover:bg-gray-800 transition-colors p-[5.72336px_7.1542px] gap-[4.29px] w-[54.47px] h-[24.45px] rounded-[7.1542px]"
              style={{ borderWidth: '0.71542px' }}
            >
              <span className={`text-white ${poppins.className} text-[7px] sm:text-[8.58504px] leading-[10px] sm:leading-[13px] font-medium`}>
                {selectedPeriod}
              </span>
              <svg 
                className={`transition-transform w-[7.87px] h-[5.01px] ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                viewBox="0 0 8 5"
                fill="none"
              >
                <path d="M1 1L4 4L7 1" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {isDropdownOpen && (
              <div className="absolute bg-gray-800 border border-gray-100 z-50 overflow-hidden w-[54.47px] rounded-[7.1542px] right-0 mt-[2px]" style={{ borderWidth: '0.71542px' }}>
                {periods.map((period) => (
                  <div
                    key={period}
                    onClick={() => {
                      setSelectedPeriod(period);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-white ${poppins.className} hover:bg-gray-700 transition-colors cursor-pointer p-[5.72336px_7.1542px] text-[7px] sm:text-[8.58504px] leading-[10px] sm:leading-[13px] font-medium ${
                      selectedPeriod === period ? 'bg-gray-600' : 'bg-transparent'
                    }`}
                  >
                    {period}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start gap-[7.15px] min-h-[180px]">
        <div className="relative flex flex-row items-end w-full h-[180px] pl-[35px] sm:pl-[55.4785px] gap-[15px] sm:gap-[25.19px] isolate justify-between">
          <div className="absolute flex flex-col items-start gap-[20.75px] w-full h-[157.74px] right-0 bottom-[23.73px] z-0">
            {gridLines.map((label, index) => (
              <div key={index} className="flex flex-row items-end w-full h-[9px] gap-[13.59px] sm:gap-[17.17px]">
                <span className={`${poppins.className} text-[7px] sm:text-[8.58504px] leading-[9px] font-medium text-[#8F8F8F] w-[18px] sm:w-[21px] flex-shrink-0`}>
                  {label}
                </span>
                <div className="flex-grow h-0 border-t border-[rgba(125,125,125,0.22)]" style={{ borderWidth: '0.71542px' }} />
              </div>
            ))}
          </div>

          {months.map((month, index) => (
            <div key={index} className="flex flex-col items-center gap-[10.73px] z-10 flex-1 min-w-0">
              <div className="flex flex-col items-start gap-[5.01px] w-[3px] sm:w-[4.29px]">
                {showRejected && (
                  <div 
                    className="w-full rounded-[7.1542px]"
                    style={{ 
                      height: `${month.rejected}px`,
                      background: 'rgba(255, 86, 48, 0.8)'
                    }}
                  />
                )}
                {showShortlisted && (
                  <div 
                    className="w-full rounded-[7.1542px]"
                    style={{ 
                      height: `${month.shortlisted}px`,
                      background: 'rgba(255, 166, 0, 0.8)'
                    }}
                  />
                )}
                {showApplications && (
                  <div 
                    className="bg-cyan-400 w-full rounded-[7.1542px]"
                    style={{ height: `${month.applications}px` }}
                  />
                )}
              </div>

              <span className={`text-white ${poppins.className} text-center text-[6px] sm:text-[8.58504px] leading-[9px] sm:leading-[13px] font-normal h-[13px] truncate`}>
                {month.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;