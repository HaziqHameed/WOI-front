"use client"
import React, { useState } from 'react';
import { DataTableProps, DataTableColumn } from './types';

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  headerInfo,
  className = '',
  onRowClick,
  loading = false,
  emptyMessage = 'No data available',
  mobileCardClassName = '',
  desktopTableClassName = ''
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === columnKey && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: columnKey, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const SortIcon = ({ column }: { column?: DataTableColumn<T> }) => {
    if (!column?.sortable) return null;

    return (
      <div 
        className="relative w-4 h-5 cursor-pointer"
        onClick={() => handleSort(column.key)}
      >
        <svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M7.26545 0.795177C7.66137 0.366578 8.33863 0.366579 8.73455 0.795177L13.3776 5.82145C13.9693 6.46193 13.515 7.5 12.6431 7.5H3.35693C2.485 7.5 2.03073 6.46193 2.62238 5.82145L7.26545 0.795177Z" 
            fill="white" 
          />
          <path 
            d="M8.73455 19.2048C8.33863 19.6334 7.66137 19.6334 7.26545 19.2048L2.62237 14.1786C2.03072 13.5381 2.485 12.5 3.35693 12.5L12.6431 12.5C13.515 12.5 13.9693 13.5381 13.3776 14.1786L8.73455 19.2048Z" 
            fill="white" 
          />
        </svg>
      </div>
    );
  };

  const renderCellValue = (column: DataTableColumn<T> | undefined, row: T, index: number) => {
    if (!column) return null;
    const value = row[column.key];
    if (column.render) {
      return column.render(value, row, index);
    }
    return value;
  };

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="w-full bg-[#111827] px-4 py-5 rounded-t-xl flex items-center justify-center">
          <span className="text-white/70 text-base font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      {headerInfo && (
        <div className="w-full bg-[#111827] px-4 py-5 rounded-t-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-2">
          <div className="sm:pl-4">
            {headerInfo.title && (
              <h1 className="text-white/70 text-base font-medium font-['Inter']">
                {headerInfo.title}
              </h1>
            )}
            {headerInfo.subtitle && (
              <p className="text-white/50 text-sm mt-1">
                {headerInfo.subtitle}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {headerInfo.isLive !== undefined && (
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${headerInfo.isLive ? 'bg-[#22C55E]' : 'bg-gray-500'}`}></div>
                <span className="text-white text-lg font-medium">
                  {headerInfo.isLive ? 'Live' : 'Offline'}
                </span>
              </div>
            )}
            {headerInfo.totalEntries !== undefined && (
              <>
                <div className="w-px h-7 bg-white"></div>
                <span className="text-white text-lg font-medium">
                  {headerInfo.totalEntries.toLocaleString()} entries
                </span>
              </>
            )}
            {headerInfo.customStatus && headerInfo.customStatus}
          </div>
        </div>
      )}

      {/* Empty State */}
      {sortedData.length === 0 && (
        <div className="bg-[#111827] p-8 rounded-xl text-center">
          <span className="text-white/70 text-base">{emptyMessage}</span>
        </div>
      )}

      {/* Mobile View */}
      {sortedData.length > 0 && (
        <div className="block md:hidden">
          {sortedData.map((row, index) => (
            <div 
              key={index} 
              className={`bg-[#111827] p-4 mb-2 rounded-lg border border-white/10 ${mobileCardClassName} ${
                onRowClick ? 'cursor-pointer hover:bg-[#1f2937] transition-colors' : ''
              }`}
              onClick={() => onRowClick?.(row, index)}
            >
              {columns.map((column) => {
                if (column.mobileRender) {
                  return (
                    <div key={column.key}>
                      {column.mobileRender(row, index)}
                    </div>
                  );
                }
                
                const value = renderCellValue(column, row, index);
                if (!value && value !== 0) return null;
                
                return (
                  <div key={column.key} className="mb-2 last:mb-0">
                    <div className="flex justify-between items-start">
                      <span className="text-white/70 text-xs font-medium">{column.label}:</span>
                      <div className="text-white text-sm ml-2 flex-1 text-right">
                        {value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* Desktop/Tablet View */}
      {sortedData.length > 0 && (
        <div className="hidden md:block overflow-x-auto">
          <div className={`min-w-[800px] lg:min-w-[1318px] rounded-xl overflow-hidden ${desktopTableClassName}`}>
            {/* Column Headers */}
            <div className="bg-white/10 px-8 py-3.5 flex items-center">
              {columns.map((column, index) => (
                <div 
                  key={column.key} 
                  className={`flex items-center gap-1 ${column.width || 'flex-1'} ${column.className || ''}`}
                >
                  <span className="text-white/70 text-lg font-medium">
                    {column.label.toUpperCase()}
                  </span>
                  <SortIcon column={column} />
                </div>
              ))}
            </div>

            {/* Data Rows */}
            <div className="gap-[2px] flex flex-col">
              {sortedData.map((row, index) => (
                <div 
                  key={index} 
                  className={`bg-[#111827] px-8 py-3.5 flex items-center ${
                    onRowClick ? 'cursor-pointer hover:bg-[#1f2937] transition-colors' : ''
                  }`}
                  onClick={() => onRowClick?.(row, index)}
                >
                  {columns.map((column) => (
                    <div 
                      key={column.key} 
                      className={`${column.width || 'flex-1'} ${column.className || ''}`}
                    >
                      {renderCellValue(column, row, index)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;
