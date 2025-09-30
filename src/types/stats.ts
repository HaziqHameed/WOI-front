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