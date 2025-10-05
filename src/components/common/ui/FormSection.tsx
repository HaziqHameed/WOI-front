"use client";
import React from 'react';

export interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

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
          <h3 className={`font-poppins font-bold text-[11px] leading-4 text-white uppercase ${titleClassName}`}>
            {title}
          </h3>
        </div>
        {children}
      </div>
    </section>
  );
};

export default FormSection;
