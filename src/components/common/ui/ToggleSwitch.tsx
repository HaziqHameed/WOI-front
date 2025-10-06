"use client";
import { ToggleSwitchProps } from '@/types/student/settings';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  disabled = false,
  ariaLabel,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <div className="pt-[2px]">
        <button
          onClick={handleClick}
          disabled={disabled}
          className={`w-4 h-4 rounded-[6px] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#111827] ${
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
          style={{
            backgroundColor: checked ? '#4F46E5' : '#FFFFFF',
            border: checked ? 'none' : '1px solid #CBD5E1'
          }}
          aria-label={ariaLabel || `Toggle ${title}`}
        >
          {checked && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M1.5625 5.46875L3.59375 7.5L8.4375 2.65625" 
                stroke="white" 
                strokeWidth="1.67" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <p className={`text-sm font-semibold leading-5 tracking-[-0.006em] text-white ${poppins.className} ${titleClassName}`}>
          {title}
        </p>
        <p className={`text-sm leading-[160%] text-white ${poppins.className} ${descriptionClassName}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ToggleSwitch;
