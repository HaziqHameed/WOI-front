"use client"
import React from "react";
import { masterDataContent } from '@/data/admin/MasterDataContent';

export default function MasterData() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{masterDataContent.title}</h1>
        <p className="text-gray-600">
          {masterDataContent.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Categories</h3>
          <div className="space-y-2">
            {masterDataContent.dataCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                <span className="text-gray-700">{category.name}</span>
                <span className="text-sm text-gray-500">{category.recordCount}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <p className="font-medium text-blue-900">Import Data</p>
              <p className="text-sm text-blue-700">Upload new master data files</p>
            </button>
            <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <p className="font-medium text-green-900">Export Data</p>
              <p className="text-sm text-green-700">Download current master data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
