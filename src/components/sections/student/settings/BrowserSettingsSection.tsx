"use client";
import { BrowserSettingsSectionProps } from '@/types/student/settings';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const BrowserSettingsSection: React.FC<BrowserSettingsSectionProps> = ({
  title,
  children,
  className = '',
  titleClassName = '',
  containerClassName = '',
}) => {
  return (
    <div className={`w-full mx-auto mt-full bg-[#111827] rounded-[3px] p-6 sm:p-8 lg:p-12 mt-5 ${containerClassName}`}>
      <h1 className={`text-white font-bold text-[11px] leading-4 uppercase tracking-wide mb-8 ${poppins.className} ${titleClassName}`}>
        {title}
      </h1>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default BrowserSettingsSection;
