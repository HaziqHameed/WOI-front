"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { BlockedUsersSectionProps } from '@/types/uiTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const BlockedUsersSection: React.FC<BlockedUsersSectionProps> = ({
  title,
  children,
  className = '',
  titleClassName = '',
  containerClassName = '',
  contentMaxWidth = 'max-w-[595.7px]',
  contentMarginLeft = 'ml-14',
}) => {
  return (
    <div className={`w-full mt-5 bg-[#111827] rounded-[3px] p-6 sm:p-8 ${containerClassName}`}>
      <div className="mb-4 sm:mb-7">
        <h2 className={`text-white font-bold text-[11px] leading-4 uppercase tracking-wide ${poppins.className} ${titleClassName}`}>
          {title}
        </h2>
      </div>

      <div className={`${contentMaxWidth} ${contentMarginLeft} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default BlockedUsersSection;
