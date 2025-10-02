"use client"
import React, { useState } from "react";
import { LogsTableProps, LogEntry } from "../../types/operationalLogs";
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';

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
          </div>
        ))}
      </div>

      {/* Desktop/Tablet View */}
      <div className="hidden md:block overflow-x-auto">
        <div className="min-w-[800px] lg:min-w-[1318px] overflow-hidden">
          {/* Column Headers */}
          <div className="bg-white/10 gap-5 flex-row justify-between px-8 py-3.5 flex items-center">
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
                  <React.Fragment key={column.key}>
                    {renderCellValue(column, log, index)}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
