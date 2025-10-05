export interface Activity {
  id: number;
  name: string;
  action: string;
  jobTitle: string;
  time: string;
  status: string;
  statusColor: string;
  statusBg: string;
  avatarBg: string;
  avatarBorder: string;
  emoji: React.ReactNode;
}

export interface Meeting {
  id: number;
  day: string;
  date: string;
  title: string;
  time: string;
}