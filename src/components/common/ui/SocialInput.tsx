"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { SocialInputProps } from '@/types/uiTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const SocialInput: React.FC<SocialInputProps> = ({
  platform,
  value,
  onChange,
  placeholder = `Enter ${platform} URL`,
  className = '',
  maxWidth = 'max-w-[520px]',
}): React.JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`flex flex-col flex-row items-stretch sm:items-center ${maxWidth} ${className}`}>
      <div className="flex items-center bg-[#1E2839] border border-[#CBD5E1] rounded-l-full sm:rounded-l-full rounded-r-full sm:rounded-r-none border-r sm:border-r-[#CBD5E1] px-3 h-12 min-w-[90px]">
        <span className={`text-base font-medium leading-[22px] tracking-[-0.007em] ${poppins.className} whitespace-nowrap`}>
          {platform}
        </span>
      </div>
      <div className="flex-1 bg-[#1E2839] border border-[#CBD5E1] border-t-0 sm:border-t sm:border-l-0 rounded-l-full sm:rounded-l-none rounded-r-full sm:rounded-r-full px-3 h-12 flex items-center mt-[-1px] sm:mt-0">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={`w-full bg-transparent text-base font-medium leading-[22px] tracking-[-0.007em] ${poppins.className} text-white outline-none border-none`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SocialInput;
