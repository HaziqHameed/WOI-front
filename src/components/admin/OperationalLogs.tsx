"use client"
import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import LogsTable from "../common/LogsTable";
import {
  DateInput,
  Dropdown,
  SearchInput,
  Button,
  IconButton,
  FilterSection,
  DropdownOption
} from "../common/ui";
import { LogEntry } from "../../types/operationalLogs";
import { logLevelOptions, logs, logsTableColumns } from "@/data/OperationalLogsData";



export default function OperationalLogs() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [logLevel, setLogLevel] = useState('All Levels');


 

  return (
    <>
      <PageHeader
        title="Operational Logs"
        subtitle="System activity and audit trail"
        ariaLabel="Operational logs header"
      />

      <FilterSection>
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-5 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
            <DateInput
              value={startDate}
              onChange={setStartDate}
              label="Start Date"
              placeholder="dd-mm-yyyy"
            />
            <DateInput
              value={endDate}
              onChange={setEndDate}
              label="End Date"
              placeholder="dd-mm-yyyy"
            />
          </div>

          <Dropdown
            options={logLevelOptions}
            value={logLevel}
            onChange={setLogLevel}
            label="Log Level"
          />
        </div>

        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          label="Log Messages"
          placeholder="Search in log messages..."
        />

        <div className="flex items-end w-full sm:w-auto pt-0 sm:pt-7">
          <Button
            onClick={() => {
              console.log('Searching with:', { startDate, endDate, logLevel, searchQuery });
            }}
            className="w-full sm:w-[117px]"
          >
            Search
          </Button>
        </div>

        <div className="flex flex-row items-center gap-2 pt-0 lg:pt-7 w-full sm:w-auto justify-end lg:justify-start">
          <div className="p-[2px] rounded-md bg-gradient-to-r from-[#CE2D52] to-[#F05921]">
            <IconButton
              icon={
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[23px]"
                >
                  <path
                    d="M1 13.0601C1 17.5008 4.58172 21.1007 9 21.1007C13.4183 21.1007 17 17.5008 17 13.0601C17 8.61941 13.4183 5.01953 9 5.01953C7.4407 5.01953 5.98566 5.46788 4.75543 6.24333"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.23933 1.90088L4.49949 5.86208C4.27645 6.36989 4.50522 6.96327 5.01047 7.18744L8.95173 8.9361"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              variant="secondary"
              onClick={() => {
                console.log('Refreshing logs');
              }}
            />
          </div>

          <IconButton
            icon={
              <>
                <span className="ml-1">
                  <svg
                    width={10}
                    height={11}
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-1"
                  >
                    <path
                      d="M6.00002 0.970588C6.00002 0.434552 5.55228 0 5.00001 0C4.44775 0 4.00001 0.434552 4.00001 0.970588V7.68615L1.70711 5.46079C1.31659 5.08174 0.683413 5.08174 0.292891 5.46079C-0.0976304 5.83984 -0.0976304 6.45428 0.292891 6.83333L4.29295 10.7157C4.48041 10.8978 4.73481 11 5.00001 11C5.26522 11 5.51962 10.8978 5.70708 10.7157L9.7071 6.83333C10.0976 6.45428 10.0976 5.83984 9.7071 5.46079C9.31656 5.08174 8.68349 5.08174 8.29296 5.46079L6.00002 7.68615V0.970588Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width={15}
                    height={2}
                    viewBox="0 0 20 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"

                  >
                    <path
                      d="M1.68421 0C1.03019 0 0.5 0.447733 0.5 1C0.5 1.55227 1.03019 2 1.68421 2H14.3158C14.9698 2 15.5 1.55227 15.5 1C15.5 0.447733 14.9698 0 14.3158 0H1.68421Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </>
            }
            onClick={() => {
              console.log('Downloading logs');
            }}
          />
        </div>
      </FilterSection>

      <LogsTable 
        logs={logs} 
        columns={logsTableColumns}
        isLive={true} 
        totalEntries={1247} 
      />
    </>
  );
}