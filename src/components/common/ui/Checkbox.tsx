"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { CheckboxProps } from '@/types/uiTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  className = '',
  labelClassName = '',
  disabled = false,
}): React.JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className={`flex items-center gap-3 cursor-pointer ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
        <div className={`w-[14px] h-[14px] rounded-[3px] border border-white ${
          checked
            ? 'bg-gradient-to-b from-[#FFFFFF] to-[#F4F4F4] shadow-[inset_0px_1px_0px_#ECECEC]'
            : 'bg-gradient-to-b from-[#FFFFFF] to-[#F4F4F4] shadow-[inset_0px_1px_0px_#ECECEC]'
        }`}>
          {checked && (
            <svg className="w-full h-full p-0.5" viewBox="0 0 14 14" fill="none">
              <path d="M11 4L5.5 9.5L3 7" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
      <span className={`text-[13px] font-normal leading-[14px] ${poppins.className} ${labelClassName}`}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
