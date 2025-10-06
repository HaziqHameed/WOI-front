"use client"
import React, { useState } from "react";
import { LogsTableProps, LogEntry } from "../../types/operationalLogs";
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function LogsTable({
  logs,
  columns,
  isLive = true,
  totalEntries = 0,
  className = "",
}: LogsTableProps) {
  // Detect if this is UserManagement data based on the presence of 'name' field
  const isUserManagement = logs.length > 0 && logs[0].name !== undefined;
  const [sortConfig, setSortConfig] = useState<{
    key: keyof LogEntry;
    direction: 'asc' | 'desc';
  } | null>(null);

  const handleSort = (columnKey: keyof LogEntry) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === columnKey && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: columnKey, direction });
  };

  const sortedLogs = React.useMemo(() => {
    if (!sortConfig) return logs;

    return [...logs].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }

      const aStr = String(aValue);
      const bStr = String(bValue);
      const comparison = aStr.localeCompare(bStr);
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [logs, sortConfig]);

  const SortIcon = ({ columnKey }: { columnKey: keyof LogEntry }) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return null;

    return (
      <div
        className="relative w-4 h-5 cursor-pointer"
        onClick={() => handleSort(columnKey)}
      >
        <svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.26545 0.795177C7.66137 0.366578 8.33863 0.366579 8.73455 0.795177L13.3776 5.82145C13.9693 6.46193 13.515 7.5 12.6431 7.5H3.35693C2.485 7.5 2.03073 6.46193 2.62238 5.82145L7.26545 0.795177Z" fill="white" />
          <path d="M8.73455 19.2048C8.33863 19.6334 7.66137 19.6334 7.26545 19.2048L2.62237 14.1786C2.03072 13.5381 2.485 12.5 3.35693 12.5L12.6431 12.5C13.515 12.5 13.9693 13.5381 13.3776 14.1786L8.73455 19.2048Z" fill="white" />
        </svg>
      </div>
    );
  };

  const renderCellValue = (column: typeof columns[0], log: LogEntry, index: number) => {
    const value = log[column.key];

    if (column.render) {
      return column.render(value, log, index);
    }

    return value == null ? null : String(value);
  };
  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      {isLive && (
        <div className="w-full bg-[#111827] px-4 py-5 rounded-t-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="sm:pl-4">
            <h1 className={`${inter.className} text-white/70 text-base font-medium`}>
              Real-time system activity monitoring
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-[#22C55E]' : 'bg-gray-500'}`}></div>
              <span className={`${poppins.className} text-white text-lg font-medium`}>{isLive ? 'Live' : 'Offline'}</span>
            </div>
            <div className="w-px h-7 bg-white"></div>
            <span className="text-white text-lg font-medium">{totalEntries.toLocaleString()} entries</span>
          </div>
        </div>
      )}

      {/* Mobile View */}
      <div className="block md:hidden">
        {sortedLogs.map((log, index) => (
          <div key={index} className="bg-[#111827] p-4 mb-2 rounded-lg border border-white/10">
            {isUserManagement ? (
              // UserManagement Mobile Layout
              <>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D9D9D9] overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/avatar-1.png"
                        alt="User Avatar"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-white text-sm font-medium">{log.name}</span>
                      <span className="text-white/70 text-xs">{log.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-[#B4FFD1] text-[#166534]">
                      {log.status}
                    </span>
                    <div className="flex gap-1">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                      >
                        <path
                          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM29.8034 16C29.8034 8.37659 23.6234 2.19658 16 2.19658C8.37659 2.19658 2.19658 8.37659 2.19658 16C2.19658 23.6234 8.37659 29.8034 16 29.8034C23.6234 29.8034 29.8034 23.6234 29.8034 16Z"
                          fill="url(#paint0_linear)"
                        />
                        <path
                          d="M9.77778 22.2222H11.0444L19.7333 13.5333L18.4667 12.2667L9.77778 20.9556V22.2222ZM8 24V20.2222L19.7333 8.51111C19.9111 8.34815 20.1074 8.22222 20.3222 8.13333C20.537 8.04444 20.763 8 21 8C21.237 8 21.4667 8.04444 21.6889 8.13333C21.9111 8.22222 22.1037 8.35556 22.2667 8.53333L23.4889 9.77778C23.6667 9.94074 23.7963 10.1333 23.8778 10.3556C23.9593 10.5778 24 10.8 24 11.0222C24 11.2593 23.9593 11.4852 23.8778 11.7C23.7963 11.9148 23.6667 12.1111 23.4889 12.2889L11.7778 24H8ZM19.0889 12.9111L18.4667 12.2667L19.7333 13.5333L19.0889 12.9111Z"
                          fill="url(#paint1_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="-6.04897e-07"
                            y1="16.0894"
                            x2="32"
                            y2="15.9106"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#CE2D52" />
                            <stop offset="1" stopColor="#F05921" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear"
                            x1="24"
                            y1="15.9062"
                            x2="8"
                            y2="16.0938"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#CE2D52" />
                            <stop offset="1" stopColor="#F05921" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                      >
                        <path
                          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM29.8034 16C29.8034 8.37659 23.6234 2.19658 16 2.19658C8.37659 2.19658 2.19658 8.37659 2.19658 16C2.19658 23.6234 8.37659 29.8034 16 29.8034C23.6234 29.8034 29.8034 23.6234 29.8034 16Z"
                          fill="white"
                        />
                        <g clipPath="url(#clip0_1264_52650)">
                          <path
                            d="M11.673 24.6446C11.3695 24.5185 11.1506 24.3251 11.1228 23.9756C11.0998 23.6842 11.0795 23.3924 11.0608 23.1006C10.9163 20.9555 10.7718 18.8107 10.6272 16.6661C10.5607 15.6885 10.4927 14.7108 10.423 13.7329C10.4161 13.6423 10.4399 13.6145 10.5245 13.6245C10.5515 13.6262 10.5785 13.6262 10.6055 13.6245C14.1974 13.6245 17.7893 13.6232 21.3811 13.6206C21.5407 13.6206 21.5754 13.657 21.5628 13.8144C21.4626 15.0991 21.3712 16.3847 21.2775 17.6699C21.2081 18.6203 21.1392 19.5709 21.0707 20.5216C20.9857 21.6822 20.899 22.8431 20.8105 24.0042C20.7841 24.3511 20.5573 24.5323 20.2555 24.6442L11.673 24.6446ZM17.1992 18.8731C17.1992 19.9614 17.1992 21.0496 17.1992 22.1376C17.1992 22.4845 17.471 22.7043 17.7867 22.6271C18.0087 22.5729 18.1374 22.3783 18.1374 22.0904C18.1374 19.9513 18.1374 17.8123 18.1374 15.6732C18.1387 15.6353 18.1375 15.5974 18.134 15.5596C18.1222 15.4422 18.0665 15.3336 17.9781 15.2554C17.8897 15.1773 17.775 15.1354 17.657 15.1382C17.3873 15.1421 17.1979 15.3441 17.1974 15.6394C17.1974 16.7182 17.198 17.7961 17.1992 18.8731ZM13.8523 18.8731V20.9357C13.8523 21.342 13.8488 21.7478 13.8523 22.1541C13.8562 22.4854 14.1315 22.7022 14.4415 22.6258C14.6583 22.5725 14.7884 22.38 14.7884 22.1055C14.7884 19.9564 14.7884 17.8071 14.7884 15.6576C14.7895 15.6251 14.7886 15.5925 14.7858 15.5601C14.7734 15.4374 14.713 15.3247 14.6178 15.2464C14.5226 15.1681 14.4003 15.1306 14.2776 15.1421C14.0175 15.1625 13.8497 15.3615 13.8492 15.6576C13.8504 16.7297 13.8514 17.8019 13.8523 18.874V18.8731Z"
                            fill="white"
                          />
                          <path
                            d="M18.4055 8C18.6704 8.10016 18.7827 8.28877 18.7701 8.57321C18.7563 8.87672 18.7641 9.18023 18.7701 9.48375C18.7701 9.57046 18.7511 9.60428 18.6552 9.60428C16.8853 9.6011 15.1156 9.6011 13.3459 9.60428C13.2497 9.60428 13.2302 9.57046 13.2315 9.48331C13.2358 9.1798 13.244 8.87629 13.2315 8.57277C13.2185 8.2879 13.3321 8.10016 13.5961 8H18.4055Z"
                            fill="white"
                          />
                          <path
                            d="M15.999 12.6856C13.8428 12.6856 11.687 12.683 9.53073 12.6903C9.35729 12.6903 9.32478 12.6409 9.33388 12.4839C9.35426 12.1371 9.30396 11.7902 9.35816 11.4464C9.44054 10.9226 9.86156 10.5614 10.3914 10.541C10.44 10.541 10.489 10.541 10.5375 10.541H21.4584C22.2206 10.541 22.6598 10.9785 22.6603 11.7373C22.6603 11.9974 22.649 12.2576 22.6642 12.5178C22.6733 12.6704 22.6182 12.6912 22.4834 12.6912C20.3212 12.684 18.1598 12.6821 15.999 12.6856Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1264_52650">
                            <rect width="13.3333" height="16.6447" fill="white" transform="translate(9.33203 8)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70 text-xs">University:</span>
                    <span className="text-white text-xs">{log.university}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-xs">Joined:</span>
                    <span className="text-white text-xs">{log.joined}</span>
                  </div>
                </div>
              </>
            ) : (
              // OperationalLogs Mobile Layout
              <>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-sm font-medium">{log.timestamp}</span>
                    <span className="text-white/70 text-xs">{log.service}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`${log.levelColor} px-2 py-1 rounded-md text-xs font-medium`}>
                      {log.level}
                    </span>
                    <div className="w-6 h-5 flex items-center justify-center cursor-pointer">
                      <svg width={24} height={16} viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.98277C0.0426667 10.0681 0.096 10.1854 0.16 10.3347C0.224 10.484 0.384 10.7933 0.64 11.2626C0.896 11.7319 1.17333 12.1798 1.472 12.6064C1.77067 13.0331 2.18667 13.545 2.72 14.1423C3.25333 14.7395 3.808 15.3048 4.384 15.8381C4.96 16.3713 5.67467 16.8939 6.528 17.4059C7.38133 17.9178 8.256 18.3657 9.152 18.7497C10.048 19.1336 11.0933 19.4323 12.288 19.6456C13.4827 19.8589 14.72 19.9762 16 19.9975C17.28 20.0189 18.5173 19.9015 19.712 19.6456C20.9067 19.3896 21.9627 19.0803 22.88 18.7177C23.7973 18.3551 24.6613 17.9178 25.472 17.4059C26.2827 16.8939 26.9973 16.3607 27.616 15.8061C28.2347 15.2515 28.7893 14.7075 29.28 14.1743C29.7707 13.641 30.1867 13.1077 30.528 12.5745C30.8693 12.0412 31.1467 11.6039 31.36 11.2626C31.5733 10.9213 31.7333 10.612 31.84 10.3347L32 9.98277C31.9787 9.89745 31.9253 9.78013 31.84 9.63081C31.7547 9.4815 31.5947 9.18287 31.36 8.73493C31.1253 8.28698 30.848 7.83904 30.528 7.39109C30.208 6.94315 29.792 6.42054 29.28 5.82328C28.768 5.22602 28.2133 4.67142 27.616 4.15949C27.0187 3.64755 26.304 3.12495 25.472 2.59168C24.64 2.05841 23.7653 1.61047 22.848 1.24785C21.9307 0.885225 20.8853 0.586595 19.712 0.351957C18.5387 0.117319 17.3013 0 16 0C14.6987 0 13.4613 0.117319 12.288 0.351957C11.1147 0.586595 10.0587 0.885225 9.12 1.24785C8.18133 1.61047 7.31733 2.05841 6.528 2.59168C5.73867 3.12495 5.024 3.64755 4.384 4.15949C3.744 4.67142 3.18933 5.22602 2.72 5.82328C2.25067 6.42054 1.83467 6.94315 1.472 7.39109C1.10933 7.83904 0.832 8.28698 0.64 8.73493C0.448 9.18287 0.288 9.49217 0.16 9.66281L0 9.98277ZM10.016 9.98277C10.016 8.34031 10.592 6.93248 11.744 5.75929C12.896 4.5861 14.3147 3.99951 16 3.99951C17.6853 3.99951 19.104 4.5861 20.256 5.75929C21.408 6.93248 21.9947 8.34031 22.016 9.98277C22.0373 11.6252 21.4507 13.0437 20.256 14.2382C19.0613 15.4328 17.6427 16.0194 16 15.998C14.3573 15.9767 12.9387 15.3901 11.744 14.2382C10.5493 13.0864 9.97333 11.6679 10.016 9.98277ZM12 9.98277C12 11.092 12.3947 12.0412 13.184 12.8304C13.9733 13.6197 14.912 14.0036 16 13.9823C17.088 13.9609 18.0267 13.577 18.816 12.8304C19.6053 12.0838 20 11.1346 20 9.98277C20 8.83091 19.6053 7.89236 18.816 7.16712C18.0267 6.44187 17.088 6.04726 16 5.98326C14.912 5.91927 13.9733 6.31389 13.184 7.16712L16 9.98277H12Z" fill="#5088FF" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-white text-sm">{log.message}</span>
                  </div>
                  {log.userId && (
                    <div className="flex justify-between">
                      <span className="text-white/70 text-xs">User ID:</span>
                      <span className="text-white text-xs">{log.userId}</span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Desktop/Tablet View */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-[1100px] lg:min-w-[1318px] overflow-hidden">
          {/* Column Headers */}
          <div className="bg-white/10 px-8 py-3.5 flex items-center">
            {columns.map((column) => (
              <div
                key={column.key}
                className={`${column.width || ''} ${column.className || ''}`}
              >
                <span className="text-white/70 text-14 font-medium">
                  {column.label.toUpperCase()}
                </span>
                <SortIcon columnKey={column.key} />
              </div>
            ))}
          </div>

          {/* Log Rows */}
          <div className="gap-[2px] flex flex-col">
            {sortedLogs.map((log, index) => (
              <div key={index} className="bg-[#111827] px-8 py-3.5 flex items-center">
                {columns.map((column) => (
                  <div
                    key={column.key}
                    className={`${column.width || ''} ${column.className || ''}`}
                  >
                    {renderCellValue(column, log, index)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
