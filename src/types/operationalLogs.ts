import React from "react";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  compact?: boolean;
  ariaLabel?: string;
}

export interface LogEntry {
  timestamp?: string;
  level?: 'INFO' | 'ERROR' | 'WARNING' | 'CRITICAL';
  levelColor?: string;
  service?: string;
  message?: string;
  userId?: string;
  actions?: string;
  name?: string;
  email?: string;
  university?: string;
  status?: string;
  joined?: string;
}

export interface LogsTableColumn {
  key: keyof LogEntry;
  label: string;
  sortable?: boolean;
  width?: string;
  className?: string;
  render?: (value: unknown, row: LogEntry, index: number) => React.ReactNode;
}

export interface LogsTableProps {
  logs: LogEntry[];
  columns: LogsTableColumn[];
  isLive?: boolean;
  totalEntries?: number;
  className?: string;
}
