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