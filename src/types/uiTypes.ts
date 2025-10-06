import React from 'react';

export interface FormInputProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'url';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  ariaLabel?: string;
}

export interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

export interface AccountInformationData {
  companyName: string;
  website: string;
  location: string;
  phoneNumber: string;
  email: string;
}

export interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'url';
  ariaLabel: string;
  inputClassName?: string;
  required?: boolean;
}

export interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
  labelClassName?: string;
  fontWeight?: 'normal' | 'medium' | 'bold';
}

export interface DropdownButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  labelClassName?: string;
  icon?: React.ReactNode;
}

export interface PrivacySectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

export interface RadioGroup {
  id: string;
  title: string;
  name: string;
  options: RadioOption[];
  fontWeight?: 'normal' | 'medium' | 'bold';
}

export interface RadioOption {
  value: string;
  label: string;
}

export interface PrivacyDisplayData {
  messageOption: string;
  profileOption: string;
  timezone: string;
}
