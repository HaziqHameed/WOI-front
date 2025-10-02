"use client"
import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import { Dropdown, OptionsBar, SearchInput } from "../common/ui";
import { StatusOptions, tabs, UserManagementTableColumns } from "@/data/UserManagementData";
import UserManagementTable from "../common/UserManagementTable";
import { logs, logsTableColumns, userManagementData } from "@/data/OperationalLogsData";


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

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center p-0 gap-4 sm:gap-6 w-full max-w-[659px] mt-7 ml-0 sm:ml-6 px-4 sm:px-0 mb-10">
        <div className="w-full sm:w-auto sm:flex-1 sm:max-w-[416px]">
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

      <UserManagementTable
              logs={userManagementData} 
              columns={UserManagementTableColumns}
              totalEntries={1247} 
            />
    </>
  );
}
