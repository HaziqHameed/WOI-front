"use client";
import { DeleteAccountSectionProps } from '@/types/student/settings';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const DeleteAccountSection: React.FC<DeleteAccountSectionProps> = ({
  title,
  children,
  className = '',
  titleClassName = '',
  containerClassName = '',
}) => {
  return (
    <div className={`w-full bg-[#111827] rounded-[3px] mt-5 p-6 sm:p-7 lg:p-8 relative ${containerClassName}`}>
      <h2 className={`font-bold text-[11px] leading-[16px] tracking-wide uppercase text-white mb-6 sm:mb-7 ${poppins.className} ${titleClassName}`}>
        {title}
      </h2>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default DeleteAccountSection;
