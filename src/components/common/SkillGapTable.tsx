import React from "react";
import { SkillGapTableProps } from "@/types/dashboard";

export default function SkillGapTable({ title, subtitle, skills, columns, className = "" }: SkillGapTableProps) {
  const getDemandStyle = (level: string) => {
    switch (level) {
      case "high":
        return "bg-[#FFBDBA] text-[#9B1F1F]";
      case "medium":
        return "bg-[#FF9933] text-[#9A3412]";
      case "low":
        return "bg-[#B4FFD1] text-[#166534]";
      default:
        return "";
    }
  };

  return (
    <div className={`flex items-center justify-center mt-10 ${className}`}>
      <div className="w-full">
        <div className="w-full h-[100px] bg-[#111827] rounded-t-[8px] box-border px-4 flex flex-col justify-center items-start gap-2 mb-2">
          <div className="flex flex-row items-center gap-1 w-full h-[29px]">
            <h1 className="font-semibold text-xl sm:text-2xl leading-[29px] text-center text-white">
              {title}
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center">
            <p className="font-medium text-xs leading-[15px] text-center text-white">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#111827] p-4 mb-2 rounded-lg border border-white/10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
                <div className={`px-2 py-1 rounded-md ${getDemandStyle(skill.demandColor)}`}>
                  <span className="font-medium text-sm">
                    {skill.demand}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Location:</span>
                  <span className="text-white text-sm">{skill.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-sm">Experience:</span>
                  <span className="text-white text-sm">{skill.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet View */}
        <div className="hidden md:block overflow-x-auto">
          <div className="flex flex-row items-center h-[52px] bg-[#111827] px-4 min-w-[700px] lg:min-w-[800px] xl:min-w-[900px]">
            {columns.map((column, index) => (
              <div 
                key={column.key} 
                className={`${column.width} flex ${column.align === 'end' ? 'justify-end' : column.align === 'center' ? 'justify-center' : 'justify-start'}`}
              >
                <span className="font-bold text-sm leading-[21px] text-white/70">
                  {column.label}
                </span>
              </div>
            ))}
          </div>

          {skills.map((skill, index) => (
            <div key={index} className="flex flex-row items-center h-[52px] bg-[#111827] px-4 border-b border-white/10 min-w-[700px] lg:min-w-[800px] xl:min-w-[900px] mb-2">
              {columns.map((column) => (
                <div 
                  key={column.key} 
                  className={`${column.width} flex ${column.align === 'end' ? 'justify-end' : column.align === 'center' ? 'justify-center' : 'justify-start'}`}
                >
                  {column.key === 'demand' ? (
                    <div className="w-[80px] lg:w-[100px] justify-center h-[24px] flex">
                      <div className={`px-2 pb-1 rounded-md ${getDemandStyle(skill.demandColor)}`}>
                        <span className="font-medium text-sm sm:text-base leading-[24px]">
                          {skill[column.key as keyof typeof skill]}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <span className="font-normal text-sm sm:text-base leading-[24px] text-white truncate">
                      {skill[column.key as keyof typeof skill]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
