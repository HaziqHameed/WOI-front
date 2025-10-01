export interface Stat {
  titleIcon?: React.ReactNode;
  title: string;
  value: string;
  percentage?: string;
  bgColor: string;
  gradient?: string;
  icon?: React.ReactNode;
}

export interface StatCardProps {
  stat: Stat;
}

export interface StatsRowProps {
  stats: Stat[];
  className?: string;
}

export interface WeeklyChart {
  month: string;
  empty: number;
  shortlisted: number;
  applications: number;
}

export interface DailyChart {
  day: string;
  value: number;
  x: number;
  y: number;
}