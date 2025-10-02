import { DropdownOption } from "@/components/common/ui";
import { LogEntry } from "@/types/operationalLogs";

export const logs: LogEntry[] = [
  {
    timestamp: '2024-01-15 14:32:15',
    level: 'ERROR',
    levelColor: 'bg-[#FF6C67] text-[#D00000]',
    service: 'Authentication',
    message: 'Failed login attempt from IP 192.168.1.100',
    userId: 'USR_12847'
  },
  {
    timestamp: '2024-01-15 14:31:42',
    level: 'INFO',
    levelColor: 'bg-[#92ABFF] text-[#1E40AF]',
    service: 'API Gateway',
    message: 'API request processed successfully - GET /api/jobs',
    userId: 'USR_15632'
  },
  {
    timestamp: '2024-01-15 14:32:15',
    level: 'WARNING',
    levelColor: 'bg-[#FFBDBA] text-[#9B1F1F]',
    service: 'Database',
    message: 'High connection pool usage detected - 85% capacity',
    userId: 'SYSTEM'
  },
  {
    timestamp: '2024-01-15 14:32:15',
    level: 'INFO',
    levelColor: 'bg-[#92ABFF] text-[#1E40AF]',
    service: 'User Service',
    message: 'New user registration completed successfully',
    userId: 'USR_18940'
  },
  {
    timestamp: '2024-01-15 14:32:15',
    level: 'CRITICAL',
    levelColor: 'bg-[#DFB8FF] text-[#6B21A8]',
    service: 'Job Service',
    message: 'Service temporarily unavailable - high load detected',
    userId: 'SYSTEM'
  },
  {
    timestamp: '2024-01-15 14:32:15',
    level: 'INFO',
    levelColor: 'bg-[#92ABFF] text-[#1E40AF]',
    service: 'Authentication',
    message: 'User session started - successful login',
    userId: 'USR_12847'
  },
  {
    timestamp: '2024-01-15 14:32:15',
    level: 'WARNING',
    levelColor: 'bg-[#FFBDBA] text-[#9B1F1F]',
    service: 'API Gateway',
    message: 'Rate limit exceeded for IP 10.0.0.25',
    userId: 'USR_19823'
  },
  {
    timestamp: '2024-01-15 14:32:15',
    level: 'INFO',
    levelColor: 'bg-[#92ABFF] text-[#1E40AF]',
    service: 'Database',
    message: 'Backup process completed successfully',
    userId: ''
  }
];

export const logLevelOptions: DropdownOption[] = [
  { value: 'All Levels', label: 'All Levels' },
  { value: 'Info', label: 'Info' },
  { value: 'Error', label: 'Error' },
  { value: 'Critical', label: 'Critical' }
];
