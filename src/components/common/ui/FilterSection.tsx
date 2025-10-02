"use client";
import React from 'react';
import { FilterSectionProps } from './types';

const FilterSection: React.FC<FilterSectionProps> = ({
  children,
  className = '',
  title,
  description,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full px-2 sm:px-4 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4 lg:gap-5 sm:px-5 py-0 rounded-t-2xl">
          {title && (
            <div className="w-full mb-4">
              <h2 className="font-inter font-bold text-lg sm:text-xl leading-[19px] text-white mb-2">
                {title}
              </h2>
              {description && (
                <p className="font-inter font-normal text-sm sm:text-base leading-[19px] text-white/70">
                  {description}
                </p>
              )}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-5 flex-1 w-full justify-between">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
