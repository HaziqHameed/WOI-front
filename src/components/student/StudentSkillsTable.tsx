"use client"
import React from "react";
import { Skill } from "@/types/dashboard";

interface StudentSkillsTableProps {
  title: string;
  subtitle: string;
  skills: Skill[];
  columns: Array<{
    key: string;
    label: string;
    width: string;
    align: "start" | "center" | "end";
  }>;
}

export default function StudentSkillsTable({
  title,
  subtitle,
  skills,
  columns,
}: StudentSkillsTableProps) {
  const getDemandColor = (demandColor: string) => {
    switch (demandColor) {
      case "high":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "low":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="bg-[#2a3441] rounded-lg p-4 sm:p-6 w-full mt-6 sm:mt-8">
      <div className="mb-6">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">
          {title}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          {subtitle}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-600">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`${column.width} py-3 px-2 sm:px-4 text-left text-gray-300 text-xs sm:text-sm font-medium`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr
                key={index}
                className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors"
              >
                <td className="py-4 px-2 sm:px-4">
                  <div className="text-white text-sm sm:text-base font-medium">
                    {skill.name}
                  </div>
                </td>
                <td className="py-4 px-2 sm:px-4">
                  <div className="text-gray-300 text-sm sm:text-base">
                    {skill.location}
                  </div>
                </td>
                <td className="py-4 px-2 sm:px-4">
                  <div className="text-gray-300 text-sm sm:text-base">
                    {skill.experience}
                  </div>
                </td>
                <td className="py-4 px-2 sm:px-4 text-right">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDemandColor(
                      skill.demandColor
                    )}`}
                  >
                    {skill.demand}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-gray-400 text-sm">
          Showing {skills.length} skills
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500/20 border border-green-500/30 rounded-full"></div>
            <span className="text-gray-400 text-sm">High Priority</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500/20 border border-yellow-500/30 rounded-full"></div>
            <span className="text-gray-400 text-sm">Medium Priority</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500/20 border border-red-500/30 rounded-full"></div>
            <span className="text-gray-400 text-sm">Low Priority</span>
          </div>
        </div>
      </div>
    </div>
  );
}
