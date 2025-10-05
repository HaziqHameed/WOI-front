"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { FormInputProps } from '@/types/uiTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  ariaLabel,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={className}>
      <label className={`block ${poppins.className} font-bold text-[13px] leading-4 text-[#888888] mb-2 ${labelClassName}`}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="bg-[#1F2937] border border-[rgba(204,204,204,0.8)] rounded-sm px-4 py-3 h-[44px] flex items-center">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          className={`bg-transparent outline-none w-full ${poppins.className} font-medium text-[13px] leading-[13px] text-[#959595] ${inputClassName}`}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel || label}
        />
      </div>
    </div>
  );
};

export default FormInput;
