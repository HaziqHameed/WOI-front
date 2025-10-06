"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { DropdownButtonProps } from '@/types/uiTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  onClick,
  className = '',
  labelClassName = '',
  icon,
}) => {
  const defaultIcon = (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.95906 4.97461L6.69906 8.23461C6.31406 8.61961 5.68406 8.61961 5.29906 8.23461L2.03906 4.97461" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <button 
      className={`inline-flex items-center gap-2 px-3 py-1 border border-white/60 rounded-lg hover:bg-white/5 transition-colors ${className}`}
      onClick={onClick}
    >
      <span className={`text-white text-[10px] font-medium leading-6 ${poppins.className} ${labelClassName}`}>
        {label}
      </span>
      {icon || defaultIcon}
    </button>
  );
};

export default DropdownButton;
