"use client";
import React from 'react';
import { FormSectionProps } from '@/types/uiTypes';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
  className = '',
  titleClassName = '',
  containerClassName = '',
}) => {
  return (
    <section className={`w-full mx-auto mt-2 ${className}`}>
      <div className={`bg-[#111827] rounded-sm p-6 md:p-8 ${containerClassName}`}>
        <div className="mb-4">
          <h3 className={`${poppins.className} font-bold text-[11px] leading-4 text-white uppercase ${titleClassName}`}>
            {title}
          </h3>
        </div>
        {children}
      </div>
    </section>
  );
};

export default FormSection;
