import { RoleLineProps } from "@/types/student/HomeTypes";
import React from "react";


export default function RoleLine({
  text = "",
  className = "",
  onClick,
}: RoleLineProps) {
  return (
    <div
      className={`w-full  mx-auto mt-3 ${className}`}
    >
      <div
        className="
          flex flex-col items-start gap-4 
          md:flex-row md:items-center md:justify-between
        "
      >
        <p className={`font-poppins ${className} text-sm sm:text-base md:text-[16px] leading-6 md:leading-8 text-white break-words text-left `}>
          {text}
        </p>

        <button
          onClick={onClick}
          type="button"
          aria-label="action"
          className="
            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
            rounded-full
            flex items-center justify-center
            shadow-sm
          "
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM29.8034 16C29.8034 8.37659 23.6234 2.19658 16 2.19658C8.37659 2.19658 2.19658 8.37659 2.19658 16C2.19658 23.6234 8.37659 29.8034 16 29.8034C23.6234 29.8034 29.8034 23.6234 29.8034 16Z" fill="url(#paint0_linear_1264_70513)" />
            <path d="M9.77778 22.2222H11.0444L19.7333 13.5333L18.4667 12.2667L9.77778 20.9556V22.2222ZM8 24V20.2222L19.7333 8.51111C19.9111 8.34815 20.1074 8.22222 20.3222 8.13333C20.537 8.04444 20.763 8 21 8C21.237 8 21.4667 8.04444 21.6889 8.13333C21.9111 8.22222 22.1037 8.35556 22.2667 8.53333L23.4889 9.77778C23.6667 9.94074 23.7963 10.1333 23.8778 10.3556C23.9593 10.5778 24 10.8 24 11.0222C24 11.2593 23.9593 11.4852 23.8778 11.7C23.7963 11.9148 23.6667 12.1111 23.4889 12.2889L11.7778 24H8ZM19.0889 12.9111L18.4667 12.2667L19.7333 13.5333L19.0889 12.9111Z" fill="url(#paint1_linear_1264_70513)" />
            <defs>
              <linearGradient id="paint0_linear_1264_70513" x1="-6.04897e-07" y1="16.0894" x2="32" y2="15.9106" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE2D52" />
                <stop offset="1" stop-color="#F05921" />
              </linearGradient>
              <linearGradient id="paint1_linear_1264_70513" x1="24" y1="15.9062" x2="8" y2="16.0938" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CE2D52" />
                <stop offset="1" stop-color="#F05921" />
              </linearGradient>
            </defs>
          </svg>

        </button>
      </div>
    </div>
  );
}
