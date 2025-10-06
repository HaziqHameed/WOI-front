"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { EmailSettingsSectionProps } from '@/types/uiTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const EmailSettingsSection: React.FC<EmailSettingsSectionProps> = ({
  title,
  children,
  className = '',
  titleClassName = '',
  containerClassName = '',
}) => {
  return (
    <div className={`w-full mx-auto mt-5 ${className}`}>
      <div className={`bg-[#111827] rounded-[3px] p-6 md:p-8 ${containerClassName}`}>
        <h1 className={`text-[11px] font-bold uppercase tracking-wide mb-6 md:mb-8 ${poppins.className} ${titleClassName}`}>
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default EmailSettingsSection;
