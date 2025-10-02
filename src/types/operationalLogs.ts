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
  timestamp: string;
  level: 'INFO' | 'ERROR' | 'WARNING' | 'CRITICAL';
  levelColor: string;
  service: string;
  message: string;
  userId: string;
}

export interface LogsTableProps {
  logs: LogEntry[];
  isLive?: boolean;
  totalEntries?: number;
  className?: string;
}