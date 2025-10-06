"use client"
import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import { Dropdown, OptionsBar, SearchInput } from "../common/ui";
import { StatusOptions, tabs, UserManagementTableColumns } from "@/data/admin/UserManagementData";
import LogsTable from "../common/LogsTable";
import { userManagementData } from "@/data/admin/OperationalLogsData";


export default function UserManagement() {
  const [activeTab, setActiveTab] = useState('students');
  const [searchQuery, setSearchQuery] = useState('');
  const [logLevel, setLogLevel] = useState('');

  return (
    <>
      <PageHeader
        title="User Management"
        ariaLabel="User management header"
      />

      <OptionsBar
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full mt-7 mb-10">
        <div className="w-full sm:w-auto sm:flex-1">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search students..."
          />
        </div>
        <div className="w-full sm:w-[219px] sm:flex-none">
          <Dropdown
            options={StatusOptions}
            value={logLevel}
            onChange={setLogLevel}
            placeholder="All Status"
          />
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <LogsTable
          logs={userManagementData} 
          columns={UserManagementTableColumns}
          isLive={false} 
          totalEntries={1247} 
        />
      </div>
    </>
  );
}
