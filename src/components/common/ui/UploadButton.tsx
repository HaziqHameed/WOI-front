"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { UploadButtonProps } from '@/types/student/HomeTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const UploadButton: React.FC<UploadButtonProps> = ({
  onClick,
  heading,
  className = '',
  ariaLabel = 'Upload new photo',
}): React.JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        px-4 py-2.5
        min-w-[120px] md:min-w-[147px]
        h-[40px] md:h-[44px]
        bg-gradient-to-r from-[#FFA844] to-[#FF6D68]
        rounded-[6px]
        font-bold text-[12px] md:text-[12px] leading-[120%]
        text-white
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB88A]
        ${poppins.className}
        ${className}
      `}
      aria-label={ariaLabel}
    >
      <span className="whitespace-nowrap">{heading}</span>
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM18.6271 10C18.6271 5.23536 14.7646 1.37287 10 1.37287C5.23536 1.37287 1.37287 5.23536 1.37287 10C1.37287 14.7646 5.23536 18.6271 10 18.6271C14.7646 18.6271 18.6271 14.7646 18.6271 10Z" fill="white"/>
<path d="M13.1111 6.88889V13.1111H6.88889V6.88889H13.1111ZM13.1111 6H6.88889C6.4 6 6 6.4 6 6.88889V13.1111C6 13.6 6.4 14 6.88889 14H13.1111C13.6 14 14 13.6 14 13.1111V6.88889C14 6.4 13.6 6 13.1111 6ZM10.9511 9.93778L9.61778 11.6578L8.66667 10.5067L7.33333 12.2222H12.6667L10.9511 9.93778Z" fill="white"/>
</svg>

    </button>
  );
};

export default UploadButton;
