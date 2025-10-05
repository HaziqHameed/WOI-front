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
