import React from 'react';

export const ExperienceSection = ({ job="", date="", description="" }:{job?:string, date?:string, description?:React.ReactNode}) => {
  return (
    <div className="w-full rounded-lg p-4 mb-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0 mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-base md:text-lg font-bold text-white">
            {job}
          </h3>
        </div>
        <p className="text-xs md:text-sm font-normal text-orange-500">
          {date}
        </p>
      </div>

      <p className="whitespace-pre-line text-xs md:text-sm font-normal text-white leading-relaxed mb-4 md:mb-0 line-clamp-4">
        {description}
      </p>

      
    </div>
  );
};