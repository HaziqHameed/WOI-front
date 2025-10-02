import { DropdownOption } from "@/components/common/ui";
import { LogEntry, LogsTableColumn } from "@/types/operationalLogs";
import Image from "next/image";

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

// Column configuration for dynamic headers and rows with exact original positioning
export const logsTableColumns: LogsTableColumn[] = [
  { 
    key: 'timestamp', 
    label: 'TIMESTAMP', 
    sortable: true,
    width: 'w-[133px]',
    className: 'flex items-center gap-1',
    render: (value) => (
      <div className="flex items-center gap-1">
        <span className="text-white text-sm font-medium w-[133px]">{String(value)}</span>
      </div>
    )
  },
  { 
    key: 'level', 
    label: 'LEVEL', 
    sortable: true,
    width: 'w-[68px]',
    className: 'flex items-center gap-1 ml-[85px]',
    render: (value, row) => (
      <div className="flex items-center w-[68px]">
        <span className={`${row.levelColor} px-2 py-1 rounded-md text-sm font-medium w-fit ml-[100px]`}>
          {String(value)}
        </span>
      </div>
    )
  },
  { 
    key: 'service', 
    label: 'SERVICE', 
    sortable: true,
    width: 'w-[93px]',
    className: 'flex items-center gap-1 ml-[83px]',
    render: (value) => (
      <div className="flex items-center gap-1">
        <span className="text-white text-sm font-medium w-[125px] ml-52">{String(value)}</span>
      </div>
    )
  },
  { 
    key: 'message', 
    label: 'MESSAGE', 
    sortable: false,
    width: 'w-[83px]',
    className: 'ml-[107px]',
    render: (value) => (
      <div className="w-88 ml-24">
        <span className="text-white text-sm font-medium flex-1">{String(value)}</span>
      </div>
    )
  },
  { 
    key: 'userId', 
    label: 'User ID', 
    sortable: true,
    width: '',
    className: 'flex items-center gap-1 ml-auto mr-[98px]',
    render: (value) => (
      <div className="flex items-center gap-1 ml-auto mr-46">
        <span className="text-white text-sm font-medium w-[77px]">{String(value)}</span>
      </div>
    )
  },
  { 
    key: 'actions', 
    label: 'Actions', 
    sortable: false,
    width: '',
    className: '',
    render: () => (
      <div className="cursor-pointer">
        <svg width={32} height={20} viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 9.98277C0.0426667 10.0681 0.096 10.1854 0.16 10.3347C0.224 10.484 0.384 10.7933 0.64 11.2626C0.896 11.7319 1.17333 12.1798 1.472 12.6064C1.77067 13.0331 2.18667 13.545 2.72 14.1423C3.25333 14.7395 3.808 15.3048 4.384 15.8381C4.96 16.3713 5.67467 16.8939 6.528 17.4059C7.38133 17.9178 8.256 18.3657 9.152 18.7497C10.048 19.1336 11.0933 19.4323 12.288 19.6456C13.4827 19.8589 14.72 19.9762 16 19.9975C17.28 20.0189 18.5173 19.9015 19.712 19.6456C20.9067 19.3896 21.9627 19.0803 22.88 18.7177C23.7973 18.3551 24.6613 17.9178 25.472 17.4059C26.2827 16.8939 26.9973 16.3607 27.616 15.8061C28.2347 15.2515 28.7893 14.7075 29.28 14.1743C29.7707 13.641 30.1867 13.1077 30.528 12.5745C30.8693 12.0412 31.1467 11.6039 31.36 11.2626C31.5733 10.9213 31.7333 10.612 31.84 10.3347L32 9.98277C31.9787 9.89745 31.9253 9.78013 31.84 9.63081C31.7547 9.4815 31.5947 9.18287 31.36 8.73493C31.1253 8.28698 30.848 7.83904 30.528 7.39109C30.208 6.94315 29.792 6.42054 29.28 5.82328C28.768 5.22602 28.2133 4.67142 27.616 4.15949C27.0187 3.64755 26.304 3.12495 25.472 2.59168C24.64 2.05841 23.7653 1.61047 22.848 1.24785C21.9307 0.885225 20.8853 0.586595 19.712 0.351957C18.5387 0.117319 17.3013 0 16 0C14.6987 0 13.4613 0.117319 12.288 0.351957C11.1147 0.586595 10.0587 0.885225 9.12 1.24785C8.18133 1.61047 7.31733 2.05841 6.528 2.59168C5.73867 3.12495 5.024 3.64755 4.384 4.15949C3.744 4.67142 3.18933 5.22602 2.72 5.82328C2.25067 6.42054 1.83467 6.94315 1.472 7.39109C1.10933 7.83904 0.832 8.28698 0.64 8.73493C0.448 9.18287 0.288 9.49217 0.16 9.66281L0 9.98277ZM10.016 9.98277C10.016 8.34031 10.592 6.93248 11.744 5.75929C12.896 4.5861 14.3147 3.99951 16 3.99951C17.6853 3.99951 19.104 4.5861 20.256 5.75929C21.408 6.93248 21.9947 8.34031 22.016 9.98277C22.0373 11.6252 21.4507 13.0437 20.256 14.2382C19.0613 15.4328 17.6427 16.0194 16 15.998C14.3573 15.9767 12.9387 15.3901 11.744 14.2382C10.5493 13.0864 9.97333 11.6679 10.016 9.98277ZM12 9.98277C12 11.092 12.3947 12.0412 13.184 12.8304C13.9733 13.6197 14.912 14.0036 16 13.9823C17.088 13.9609 18.0267 13.577 18.816 12.8304C19.6053 12.0838 20 11.1346 20 9.98277C20 8.83091 19.6053 7.89236 18.816 7.16712C18.0267 6.44187 17.088 6.04726 16 5.98326C14.912 5.91927 13.9733 6.31389 13.184 7.16712L16 9.98277H12Z" fill="#5088FF" />
        </svg>
      </div>
    )
  }
];


export const userManagementData: LogEntry[] = [
  {
    name: 'John Smith',
    email: 'john.smith@university.edu',
    university: 'MIT',
    status: 'Active',
    joined: '2024-01-15',
  },
  {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@stanford.edu',
    university: 'Stanford',
    status: 'Active',
    joined: '2024-02-10',
  },
];