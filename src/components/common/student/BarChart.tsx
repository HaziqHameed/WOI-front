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
    <div 
      className="flex flex-col items-start bg-gray-900"
      style={{ 
        padding: '14.3084px',
        gap: '7.15px',
        width: '561.6px',
        height: '274.01px',
        borderRadius: '7.1542px'
      }}
    >
      <div 
        className="flex flex-col items-start self-stretch"
        style={{ 
          padding: '0px',
          gap: '21.46px',
          width: '532.99px',
          height: '226.32px'
        }}
      >
        <div 
          className="flex flex-row justify-between items-center self-stretch"
          style={{ 
            padding: '0px',
            gap: '46.5px',
            width: '532.99px',
            height: '24.45px'
          }}
        >
          <h2 
            className={`text-white font-semibold ${poppins.className}`}
            style={{ 
              // width: '206px',
              height: '19px',
              fontSize: '12.8776px',
              lineHeight: '19px',
              margin: '0 auto'
            }}
          >
            Statistics of active Applications
          </h2>

          <div 
            className="flex flex-row items-start"
            style={{ 
              padding: '0px',
              gap: '10.73px',
              width: '215.27px',
              height: '13px',
              margin: '0 auto'
            }}
          >
            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '0px',
                gap: '2.86px',
                width: '72.6px',
                height: '13px'
              }}
            >
              <div
                onClick={handleToggleApplications}
                className="flex flex-row items-center bg-cyan-400 cursor-pointer transition-all"
                style={{ 
                  padding: '0.71542px',
                  width: '15.74px',
                  height: '8.59px',
                  borderRadius: '7.1542px',
                  opacity: showApplications ? 1 : 0.5,
                  justifyContent: showApplications ? 'flex-end' : 'flex-start'
                }}
              >
                <div 
                  className="bg-gray-800"
                  style={{ 
                    width: '7.15px',
                    height: '7.15px',
                    borderRadius: '7.1542px'
                  }}
                />
              </div>
              <span 
                className={`text-white ${poppins.className}`}
                style={{ 
                  width: '54px',
                  height: '13px',
                  fontWeight: 400,
                  fontSize: '8.58504px',
                  lineHeight: '13px'
                }}
              >
                Applications
              </span>
            </div>

            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '0px',
                gap: '2.86px',
                width: '64.6px',
                height: '13px'
              }}
            >
              <div
                onClick={handleToggleShortlisted}
                className="flex flex-row items-center cursor-pointer transition-all"
                style={{ 
                  padding: '0.71542px',
                  width: '15.74px',
                  height: '8.59px',
                  background: '#FFA600',
                  borderRadius: '7.1542px',
                  opacity: showShortlisted ? 1 : 0.5,
                  justifyContent: showShortlisted ? 'flex-end' : 'flex-start'
                }}
              >
                <div 
                  className="bg-gray-800"
                  style={{ 
                    width: '7.15px',
                    height: '7.15px',
                    borderRadius: '7.1542px'
                  }}
                />
              </div>
              <span 
                className={`text-white ${poppins.className}`}
                style={{ 
                  width: '46px',
                  height: '13px',
                  fontWeight: 400,
                  fontSize: '8.58504px',
                  lineHeight: '13px'
                }}
              >
                Shortlisted
              </span>
            </div>

            <div 
              className="flex flex-row items-center"
              style={{ 
                padding: '0px',
                gap: '2.86px',
                width: '56.6px',
                height: '13px'
              }}
            >
              <div
                onClick={handleToggleRejected}
                className="flex flex-row items-center cursor-pointer transition-all"
                style={{ 
                  padding: '0.71542px',
                  width: '15.74px',
                  height: '8.59px',
                  background: '#FF5630',
                  borderRadius: '7.1542px',
                  opacity: showRejected ? 1 : 0.5,
                  justifyContent: showRejected ? 'flex-end' : 'flex-start'
                }}
              >
                <div 
                  className="bg-gray-800"
                  style={{ 
                    width: '7.15px',
                    height: '7.15px',
                    borderRadius: '7.1542px'
                  }}
                />
              </div>
              <span 
                className={`text-white ${poppins.className}`}
                style={{ 
                  width: '38px',
                  height: '13px',
                  fontWeight: 400,
                  fontSize: '8.58504px',
                  lineHeight: '13px'
                }}
              >
                Rejected
              </span>
            </div>
          </div>

          <div className="relative" style={{ margin: '0 auto' }}>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex flex-row justify-center items-center border border-gray-100 cursor-pointer hover:bg-gray-800 transition-colors"
              style={{ 
                padding: '5.72336px 7.1542px',
                gap: '4.29px',
                width: '54.47px',
                height: '24.45px',
                borderRadius: '7.1542px',
                borderWidth: '0.71542px'
              }}
            >
              <span 
                className={`text-white ${poppins.className}`}
                style={{ 
                  width: '28px',
                  height: '13px',
                  fontWeight: 500,
                  fontSize: '8.58504px',
                  lineHeight: '13px'
                }}
              >
                {selectedPeriod}
              </span>
              <svg 
                className="transition-transform"
                style={{ 
                  width: '7.87px',
                  height: '5.01px',
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
                viewBox="0 0 8 5"
                fill="none"
              >
                <path d="M1 1L4 4L7 1" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {isDropdownOpen && (
              <div 
                className="absolute bg-gray-800 border border-gray-100 z-50 overflow-hidden"
                style={{
                  width: '54.47px',
                  borderRadius: '7.1542px',
                  borderWidth: '0.71542px',
                  right: 0,
                  marginTop: '2px'
                }}
              >
                {periods.map((period) => (
                  <div
                    key={period}
                    onClick={() => {
                      setSelectedPeriod(period);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-white ${poppins.className} hover:bg-gray-700 transition-colors cursor-pointer`}
                    style={{
                      padding: '5.72336px 7.1542px',
                      fontWeight: 500,
                      fontSize: '8.58504px',
                      lineHeight: '13px',
                      backgroundColor: selectedPeriod === period ? '#374151' : 'transparent'
                    }}
                  >
                    {period}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div 
          className="flex flex-col items-start self-stretch"
          style={{ 
            padding: '0px',
            gap: '7.15px',
            width: '532.99px',
            height: '180.41px'
          }}
        >
          <div 
            className="relative flex flex-row items-end self-stretch"
            style={{ 
              padding: '0px 0px 0px 55.4785px',
              gap: '25.19px',
              width: '532.99px',
              height: '180.41px',
              isolation: 'isolate'
            }}
          >
            <div 
              className="absolute flex flex-col items-start"
              style={{ 
                padding: '0px',
                gap: '20.75px',
                width: '507.95px',
                height: '157.74px',
                right: '0px',
                bottom: '23.73px',
                zIndex: 0
              }}
            >
              {gridLines.map((label, index) => (
                <div 
                  key={index}
                  className="flex flex-row items-end self-stretch"
                  style={{ 
                    padding: '0px',
                    gap: index === 0 ? '13.59px' : '17.17px',
                    width: '507.95px',
                    height: '9px'
                  }}
                >
                  <span 
                    className={`${poppins.className}`}
                    style={{ 
                      width: index === 0 ? '21px' : '18px',
                      height: '9px',
                      fontWeight: 500,
                      fontSize: '8.58504px',
                      lineHeight: '9px',
                      color: '#8F8F8F'
                    }}
                  >
                    {label}
                  </span>
                  <div 
                    className="flex-grow"
                    style={{ 
                      height: '0px',
                      border: '0.71542px solid rgba(125, 125, 125, 0.22)'
                    }}
                  />
                </div>
              ))}
            </div>

            {months.map((month, index) => (
              <div 
                key={index}
                className="flex flex-col items-center"
                style={{ 
                  padding: '0px',
                  gap: '10.73px',
                  zIndex: index + 1
                }}
              >
                <div 
                  className="flex flex-col items-start"
                  style={{ 
                    padding: '0px',
                    gap: '5.01px',
                    width: '4.29px'
                  }}
                >
                  {showRejected && (
                    <div 
                      style={{ 
                        width: '4.29px',
                        height: `${month.rejected}px`,
                        background: 'rgba(255, 86, 48, 0.8)',
                        borderRadius: '7.1542px'
                      }}
                    />
                  )}
                  {showShortlisted && (
                    <div 
                      style={{ 
                        width: '4.29px',
                        height: `${month.shortlisted}px`,
                        background: 'rgba(255, 166, 0, 0.8)',
                        borderRadius: '7.1542px'
                      }}
                    />
                  )}
                  {showApplications && (
                    <div 
                      className="bg-cyan-400"
                      style={{ 
                        width: '4.29px',
                        height: `${month.applications}px`,
                        borderRadius: '7.1542px'
                      }}
                    />
                  )}
                </div>

                <span 
                  className={`text-white ${poppins.className} text-center`}
                  style={{ 
                    height: '13px',
                    fontWeight: 400,
                    fontSize: '8.58504px',
                    lineHeight: '13px'
                  }}
                >
                  {month.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;