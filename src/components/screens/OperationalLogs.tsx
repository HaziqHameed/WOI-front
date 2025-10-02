"use client"
import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../common/PageHeader";

export default function OperationalLogs() {
const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [logLevel, setLogLevel] = useState('All Levels');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const logLevels = ['All Levels', 'Info', 'Error', 'Critical'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <PageHeader
        title="Operational Logs"
        subtitle="System activity and audit trail"
        ariaLabel="Operational logs header"
      />

     <div className="w-full">
      <div className="w-full px-2 sm:px-4 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4 lg:gap-5 sm:px-5 py-0 rounded-t-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-5 flex-1 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="flex flex-col items-start gap-2 w-full sm:w-auto">
                <label className="font-inter font-bold text-sm sm:text-base leading-[19px] text-white">
                  Date Range
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
                  <div className="relative flex flex-row items-center px-2 py-1 gap-3 w-full sm:w-[143px] h-12 border border-white rounded-lg">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <span className="font-inter font-medium text-sm sm:text-base leading-[19px] text-white flex-1 pointer-events-none truncate">
                      {startDate || 'dd-mm-yyyy'}
                    </span>
                    <svg
                      width={15}
                      height={16}
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none flex-shrink-0"
                    >
                      <g clipPath="url(#clip0_1264_52302)">
                        <path
                          d="M3.8571 1.32109C3.90666 0.716975 4.03745 0.498456 4.35692 0.507561C4.47 0.511955 4.5792 0.5537 4.67014 0.627291C4.75417 0.709611 4.8156 0.815847 4.84757 0.934129C4.88173 1.0484 4.8709 1.17905 4.88048 1.31153H10.1348C10.1348 1.22959 10.1323 1.14719 10.1348 1.06479C10.1469 0.730632 10.3622 0.495269 10.648 0.502098C10.925 0.508471 11.127 0.74611 11.1332 1.07434C11.1332 1.14764 11.1332 1.22094 11.1332 1.32109H11.3069C11.8276 1.32109 12.3482 1.32109 12.8688 1.32109C14.0684 1.32564 14.9985 2.3363 14.9997 3.64741C15.0022 6.82232 15.0022 9.99738 14.9997 13.1726C14.9997 14.4873 14.0755 15.4989 12.8755 15.4998C9.29347 15.5026 5.71143 15.5026 2.12939 15.4998C0.926906 15.4998 0.0051558 14.4855 0.0051558 13.1703C0.00348973 10.0009 0.00348973 6.83158 0.0051558 3.66244C0.00140715 2.32992 0.929403 1.32109 2.15063 1.32109C2.661 1.32109 3.17123 1.32109 3.68133 1.32109H3.8571ZM1.00105 6.01016V6.19817C1.00105 8.50871 1.00105 10.819 1.00105 13.1289C1.00105 13.9265 1.45921 14.4309 2.18895 14.4309H12.8101C13.539 14.4309 13.9989 13.9274 13.9989 13.1293C13.9989 10.8191 13.9989 8.50887 13.9989 6.19863V6.01016H1.00105ZM1.00479 4.89662H14.0001C14.0001 4.46868 14.0026 4.05395 14.0001 3.63922C13.9947 2.93313 13.5182 2.41551 12.8697 2.41005C12.3386 2.40732 11.8076 2.41005 11.2761 2.41005C11.2319 2.41005 11.1874 2.41733 11.1332 2.42188C11.1332 2.50929 11.1332 2.58259 11.1332 2.65588C11.127 2.98366 10.925 3.22176 10.648 3.22858C10.371 3.23541 10.1482 2.99732 10.1348 2.66499C10.1319 2.58259 10.1348 2.50019 10.1348 2.41961H4.87465C4.86965 2.53615 4.87465 2.6445 4.85882 2.75012C4.84342 2.88688 4.78104 3.01213 4.68431 3.10049C4.58759 3.18886 4.46375 3.23374 4.33788 3.22605C4.21201 3.21835 4.09352 3.15865 4.00641 3.05904C3.91931 2.95942 3.8701 2.82735 3.86876 2.68957C3.86584 2.59852 3.86876 2.51157 3.86876 2.41642C3.22857 2.41642 2.6088 2.39184 1.9911 2.4237C1.46754 2.45102 1.0402 2.93358 1.00979 3.50355C0.985635 3.96153 1.00521 4.42452 1.00521 4.89753L1.00479 4.89662Z"
                          fill="#E8EAED"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1264_52302">
                          <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="relative flex flex-row items-center px-2 py-1 gap-3 w-full sm:w-[143px] h-12 border border-white rounded-lg">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <span className="font-inter font-medium text-sm sm:text-base leading-[19px] text-white flex-1 pointer-events-none truncate">
                      {endDate || 'dd-mm-yyyy'}
                    </span>
                    <svg
                      width={15}
                      height={16}
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none flex-shrink-0"
                    >
                      <g clipPath="url(#clip0_1264_52302_2)">
                        <path
                          d="M3.8571 1.32109C3.90666 0.716975 4.03745 0.498456 4.35692 0.507561C4.47 0.511955 4.5792 0.5537 4.67014 0.627291C4.75417 0.709611 4.8156 0.815847 4.84757 0.934129C4.88173 1.0484 4.8709 1.17905 4.88048 1.31153H10.1348C10.1348 1.22959 10.1323 1.14719 10.1348 1.06479C10.1469 0.730632 10.3622 0.495269 10.648 0.502098C10.925 0.508471 11.127 0.74611 11.1332 1.07434C11.1332 1.14764 11.1332 1.22094 11.1332 1.32109H11.3069C11.8276 1.32109 12.3482 1.32109 12.8688 1.32109C14.0684 1.32564 14.9985 2.3363 14.9997 3.64741C15.0022 6.82232 15.0022 9.99738 14.9997 13.1726C14.9997 14.4873 14.0755 15.4989 12.8755 15.4998C9.29347 15.5026 5.71143 15.5026 2.12939 15.4998C0.926906 15.4998 0.0051558 14.4855 0.0051558 13.1703C0.00348973 10.0009 0.00348973 6.83158 0.0051558 3.66244C0.00140715 2.32992 0.929403 1.32109 2.15063 1.32109C2.661 1.32109 3.17123 1.32109 3.68133 1.32109H3.8571ZM1.00105 6.01016V6.19817C1.00105 8.50871 1.00105 10.819 1.00105 13.1289C1.00105 13.9265 1.45921 14.4309 2.18895 14.4309H12.8101C13.539 14.4309 13.9989 13.9274 13.9989 13.1293C13.9989 10.8191 13.9989 8.50887 13.9989 6.19863V6.01016H1.00105ZM1.00479 4.89662H14.0001C14.0001 4.46868 14.0026 4.05395 14.0001 3.63922C13.9947 2.93313 13.5182 2.41551 12.8697 2.41005C12.3386 2.40732 11.8076 2.41005 11.2761 2.41005C11.2319 2.41005 11.1874 2.41733 11.1332 2.42188C11.1332 2.50929 11.1332 2.58259 11.1332 2.65588C11.127 2.98366 10.925 3.22176 10.648 3.22858C10.371 3.23541 10.1482 2.99732 10.1348 2.66499C10.1319 2.58259 10.1348 2.50019 10.1348 2.41961H4.87465C4.86965 2.53615 4.87465 2.6445 4.85882 2.75012C4.84342 2.88688 4.78104 3.01213 4.68431 3.10049C4.58759 3.18886 4.46375 3.23374 4.33788 3.22605C4.21201 3.21835 4.09352 3.15865 4.00641 3.05904C3.91931 2.95942 3.8701 2.82735 3.86876 2.68957C3.86584 2.59852 3.86876 2.51157 3.86876 2.41642C3.22857 2.41642 2.6088 2.39184 1.9911 2.4237C1.46754 2.45102 1.0402 2.93358 1.00979 3.50355C0.985635 3.96153 1.00521 4.42452 1.00521 4.89753L1.00479 4.89662Z"
                          fill="#E8EAED"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1264_52302_2">
                          <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div ref={dropdownRef} className="flex flex-col items-start gap-2 w-full sm:w-auto relative">
                <label className="font-inter font-bold text-sm sm:text-base leading-[19px] text-white">
                  Log Level
                </label>
                <button 
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex flex-row items-center justify-between px-4 py-1 w-full sm:w-[152px] h-12 border border-white rounded-lg cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-inter font-medium text-sm sm:text-base leading-[19px] text-white">
                    {logLevel}
                  </span>
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-[17px] h-[10px] flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path
                      d="M1 1.5L8.5 8.5L16 1.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-[calc(100%+0.25rem)] left-0 w-full sm:w-[152px] bg-[#1a202e] border border-white rounded-lg shadow-xl z-50">
                    {logLevels.map((level, index) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => {
                          setLogLevel(level);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 font-inter font-medium text-sm sm:text-base cursor-pointer transition-colors ${
                          index === 0 ? 'rounded-t-lg' : ''
                        } ${
                          index === logLevels.length - 1 ? 'rounded-b-lg' : ''
                        } ${
                          logLevel === level 
                            ? 'bg-gradient-to-r from-[#CE2D52] to-[#F05921] text-white' 
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full lg:flex-1 lg:max-w-[571px]">
              <label className="font-inter font-bold text-sm sm:text-base leading-[19px] text-white">
                Log Messages
              </label>
              <div className="relative w-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-white flex-shrink-0"
                >
                  <path
                    d="M12.3938 12.3677L16 16M14.3333 7.66667C14.3333 11.3486 11.3486 14.3333 7.66667 14.3333C3.98477 14.3333 1 11.3486 1 7.66667C1 3.98477 3.98477 1 7.66667 1C11.3486 1 14.3333 3.98477 14.3333 7.66667Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search in log messages..."
                  className="w-full h-12 pl-[45px] sm:pl-[50px] pr-4 py-4 bg-transparent border border-white rounded-lg font-inter font-normal text-sm sm:text-base leading-none text-white placeholder:text-white placeholder:text-sm sm:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>

            <div className="flex items-end w-full sm:w-auto pt-0 sm:pt-7">
              <button className="flex flex-row justify-center items-center px-4 py-1 gap-4 w-full sm:w-[117px] h-12 bg-gradient-to-r from-[#CE2D52] to-[#F05921] rounded-lg font-inter font-medium text-sm sm:text-base leading-[19px] text-white hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2 pt-0 lg:pt-7 w-full sm:w-auto justify-end lg:justify-start">
            <div className="p-[2px] rounded-md bg-gradient-to-r from-[#CE2D52] to-[#F05921]">
              <button className="flex justify-center items-center w-10 h-10 rounded-md bg-[#1a202e] hover:bg-black/80 transition-colors">
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[23px]"
                >
                  <path
                    d="M1 13.0601C1 17.5008 4.58172 21.1007 9 21.1007C13.4183 21.1007 17 17.5008 17 13.0601C17 8.61941 13.4183 5.01953 9 5.01953C7.4407 5.01953 5.98566 5.46788 4.75543 6.24333"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.23933 1.90088L4.49949 5.86208C4.27645 6.36989 4.50522 6.96327 5.01047 7.18744L8.95173 8.9361"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <button className="flex flex-col justify-center items-center gap-0.5 w-10 h-10 bg-gradient-to-r from-[#CE2D52] to-[#F05921] rounded-md hover:opacity-90 transition-opacity">
              <svg
                width={10}
                height={11}
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00002 0.970588C6.00002 0.434552 5.55228 0 5.00001 0C4.44775 0 4.00001 0.434552 4.00001 0.970588V7.68615L1.70711 5.46079C1.31659 5.08174 0.683413 5.08174 0.292891 5.46079C-0.0976304 5.83984 -0.0976304 6.45428 0.292891 6.83333L4.29295 10.7157C4.48041 10.8978 4.73481 11 5.00001 11C5.26522 11 5.51962 10.8978 5.70708 10.7157L9.7071 6.83333C10.0976 6.45428 10.0976 5.83984 9.7071 5.46079C9.31656 5.08174 8.68349 5.08174 8.29296 5.46079L6.00002 7.68615V0.970588Z"
                  fill="white"
                />
              </svg>
              <svg
                width={15}
                height={2}
                viewBox="0 0 16 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.68421 0C1.03019 0 0.5 0.447733 0.5 1C0.5 1.55227 1.03019 2 1.68421 2H14.3158C14.9698 2 15.5 1.55227 15.5 1C15.5 0.447733 14.9698 0 14.3158 0H1.68421Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}