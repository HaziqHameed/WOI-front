export interface Stat {
  titleIcon?: React.ReactNode;
  title: string;
  value: string;
  percentage?: string;
  bgColor: string;
  gradient?: string;
  icon?: React.ReactNode;
  label?: string;
  size?: string;
  background?: string;
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

export interface Skill {
  name: string;
  location: string;
  experience: string;
  demand: string;
  demandColor: string;
}

export interface TableColumn {
  key: string;
  label: string;
  width: string;
  align?: 'start' | 'end' | 'center';
}

export interface SkillGapTableProps {
  title: string;
  subtitle: string;
  skills: Skill[];
  columns: TableColumn[];
  className?: string;
}