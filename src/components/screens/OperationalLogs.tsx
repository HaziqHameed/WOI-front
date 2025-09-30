"use client"
import React from "react";

export default function OperationalLogs() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Operational Logs</h1>
        <p className="text-gray-600">
          Monitor and analyze operational activities and system logs.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Logs</h3>
          <div className="flex gap-2">
            <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              <option>All Levels</option>
              <option>Error</option>
              <option>Warning</option>
              <option>Info</option>
            </select>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
              Filter
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 border-l-4 border-red-500 bg-red-50">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-red-900">ERROR</span>
                <span className="text-xs text-gray-500">2024-01-15 14:30:25</span>
              </div>
              <p className="text-sm text-red-800">Database connection failed: Connection timeout</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 border-l-4 border-yellow-500 bg-yellow-50">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-yellow-900">WARNING</span>
                <span className="text-xs text-gray-500">2024-01-15 14:25:10</span>
              </div>
              <p className="text-sm text-yellow-800">High memory usage detected: 85%</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-blue-50">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-blue-900">INFO</span>
                <span className="text-xs text-gray-500">2024-01-15 14:20:45</span>
              </div>
              <p className="text-sm text-blue-800">User login successful: admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
