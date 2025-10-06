"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { PrivacySectionProps } from '@/types/uiTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const PrivacySection: React.FC<PrivacySectionProps> = ({
  title,
  children,
  className = '',
  titleClassName = '',
  containerClassName = '',
}) => {
  return (
    <div className={`w-full mt-5 bg-gray-900 rounded-md p-6 sm:p-8 lg:p-10 ${containerClassName}`}>
      <h2 className={`text-white font-bold text-xs uppercase tracking-wider mb-6 ${poppins.className} ${titleClassName}`}>
        {title}
      </h2>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default PrivacySection;
