import React from 'react';

export interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
}

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  searchable?: boolean;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  onSearch?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  tooltip?: string;
  ariaLabel?: string;
}

export interface FilterSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

// DataTable Types
export interface DataTableColumn<T = unknown> {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  className?: string;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
  mobileRender?: (row: T, index: number) => React.ReactNode;
}

export interface DataTableHeaderInfo {
  title?: string;
  subtitle?: string;
  isLive?: boolean;
  totalEntries?: number;
  customStatus?: React.ReactNode;
}

export interface DataTableProps<T = unknown> {
  data: T[];
  columns: DataTableColumn<T>[];
  headerInfo?: DataTableHeaderInfo;
  className?: string;
  onRowClick?: (row: T, index: number) => void;
  loading?: boolean;
  emptyMessage?: string;
  mobileCardClassName?: string;
  desktopTableClassName?: string;
}
