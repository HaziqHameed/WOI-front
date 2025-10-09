"use client";
import React from 'react';
import { OptionsBarProps } from './types';

const OptionsBar: React.FC<OptionsBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}): React.JSX.Element => {
  const baseClasses = "w-full px-4 sm:px-9 gap-2 sm:gap-6 md:gap-10 h-[42px] bg-[#111827] rounded-[5px] flex items-center md:-mt-4 overflow-x-auto";
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isDisabled = tab.disabled;
        
        return (
          <div
            key={tab.id}
            className={`flex items-center px-3 sm:px-[15px] py-[6px] gap-[10px] min-w-[75px] sm:w-auto h-[30px] rounded-[5px] transition-colors ${
              isDisabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'cursor-pointer'
            } ${
              isActive ? 'bg-[#1F2937]' : ''
            }`}
            onClick={() => !isDisabled && onTabChange(tab.id)}
          >
            <span
              className={`text-[11px] sm:text-[12px] leading-[18px] whitespace-nowrap ${
                isActive 
                  ? 'font-semibold text-[#F05921]' 
                  : 'font-normal text-white'
              } ${
                isDisabled ? 'text-white/50' : ''
              }`}
            >
              {tab.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default OptionsBar;
