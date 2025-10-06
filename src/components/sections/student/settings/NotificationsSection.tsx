"use client";
import { NotificationsSectionProps } from '@/types/student/settings';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const NotificationsSection: React.FC<NotificationsSectionProps> = ({
  title,
  description,
  children,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  containerClassName = '',
}) => {
  return (
      <div className={`w-full mt-5 bg-[#111827] rounded-[3px] p-6 sm:p-8 ${containerClassName}`}>
        <div className={`mx-auto`}>
          <div className="mb-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <h2 className={`font-bold text-sm leading-5 tracking-[-0.006em] text-white ${poppins.className} ${titleClassName}`}>
                  {title}
                </h2>
              </div>
              <p className={`text-sm leading-[160%] text-white max-w-[260px] ${poppins.className} ${descriptionClassName}`}>
                {description}
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-4 sm:gap-6 md:gap-[16px] ${className}`}>
            {children}
          </div>
        </div>
      </div>
  );
};

export default NotificationsSection;
