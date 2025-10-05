
import { DescriptionProps } from "@/types/student/companyDetails";
import { Poppins } from "next/font/google";
import React from "react";



const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export default function Description({
  className = "",
  heading = "",
  body = "",
}: DescriptionProps) {
  return (
    <section className={`w-full mt-3 ${className}`}>

      <div className="w-full border-t border-white/30" />

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">

          <h2 className={`${poppins.className} font-bold text-xl sm:text-2xl md:text-[24px] leading-7 sm:leading-[36px] text-white`}>
            {heading}
          </h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM22.3526 12C22.3526 6.28244 17.7176 1.64744 12 1.64744C6.28244 1.64744 1.64744 6.28244 1.64744 12C1.64744 17.7176 6.28244 22.3526 12 22.3526C17.7176 22.3526 22.3526 17.7176 22.3526 12Z" fill="#F05921" />
            <path d="M7.33333 16.6667H8.28333L14.8 10.15L13.85 9.2L7.33333 15.7167V16.6667ZM6 18V15.1667L14.8 6.38333C14.9333 6.26111 15.0806 6.16667 15.2417 6.1C15.4028 6.03333 15.5722 6 15.75 6C15.9278 6 16.1 6.03333 16.2667 6.1C16.4333 6.16667 16.5778 6.26667 16.7 6.4L17.6167 7.33333C17.75 7.45556 17.8472 7.6 17.9083 7.76667C17.9694 7.93333 18 8.1 18 8.26667C18 8.44444 17.9694 8.61389 17.9083 8.775C17.8472 8.93611 17.75 9.08333 17.6167 9.21667L8.83333 18H6ZM14.3167 9.68333L13.85 9.2L14.8 10.15L14.3167 9.68333Z" fill="#F05921" />
          </svg>

        </div>


      </div>


      <div className="mt-4">
        <p className={`${poppins.className} whitespace-pre-line text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 text-white font-medium`}>
          {body}
        </p>

      </div>

      <button
        type="button"
        className={`
        relative
        w-[123px] h-[29px]
        flex flex-row items-start justify-start
        py-[4px] 
        rounded-md
        bg-transparent
        cursor-pointer mt-5
      `}
      >

        <span
          className={`
          ${poppins.className} font-normal text-[14px] leading-[21px]
          text-[#F05921]
          flex-none
        `}
        >
          Read More
        </span>

        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1.5 ml-2">
          <path d="M9 9L0 0H18L9 9Z" fill="#F05921" />
        </svg>

      </button>

      <div className="mt-10">
        <div className="w-full border-t border-white/30 rotate-[0.25deg]" />
      </div>

    </section>
  );
}
