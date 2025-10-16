import { RoleLineProps } from "@/types/student/HomeTypes";
import React, { useEffect, useState } from "react";

export default function RoleLine({
  text = "",
  className = "",
  onClick,
}: RoleLineProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(text);
  };

  const handleSave = () => {
    setIsEditing(false);
     setEditText(editText);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(text);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

 
  if (isEditing) {
    return (
      <div className={`w-full mx-auto mt-3 ${className}`}>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          {/* Input Field Container */}
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              value={editText}
              onChange={handleInputChange}
              className="
                w-full
                font-poppins text-sm sm:text-base md:text-[16px]
                leading-6 md:leading-8
                rounded-md
                px-3 py-2 md:py-3
                focus:outline-none focus:border-blue-600
                transition-colors duration-200
                placeholder-gray-400
                text-white
              "
              placeholder="Enter text..."
            />
           
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 md:gap-4 ml-0 md:ml-4">
            {/* Cancel Button (X) */}
            <button
              onClick={handleCancel}
              type="button"
              aria-label="cancel"
              className="
                w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                rounded-full
                flex items-center justify-center
                transition-transform hover:scale-110
                focus:outline-none
              "
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FFFFFF" opacity="0.9" />
                <rect
                  x="9"
                  y="14.5"
                  width="14"
                  height="3"
                  rx="1.5"
                  fill="#333333"
                  transform="rotate(45 16 16)"
                />
                <rect
                  x="9"
                  y="14.5"
                  width="14"
                  height="3"
                  rx="1.5"
                  fill="#333333"
                  transform="rotate(-45 16 16)"
                />
              </svg>
            </button>

            {/* Confirm Button (Checkmark) */}
            <button
              onClick={handleSave}
              type="button"
              aria-label="confirm"
              className="
                w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                rounded-full
                flex items-center justify-center
                transition-transform hover:scale-110
                focus:outline-none
              "
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FFFFFF" opacity="0.9" />
                <path
                  d="M9 16.5L13.5 21L23 10"
                  stroke="#52B447"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full mx-auto mt-3 ${className}`}>
      <div
        className="
          flex flex-col items-start gap-4 
          md:flex-row md:items-center md:justify-between
        "
      >
        <p
          className={`font-poppins ${className} text-sm sm:text-base md:text-[16px] leading-6 md:leading-8 text-white break-words text-left`}
        >
          {editText}
        </p>

        <button
          onClick={handleEdit}
          type="button"
          aria-label="edit"
          className="
            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
            rounded-full
            flex items-center justify-center
            shadow-sm
            transition-transform hover:scale-110
            focus:outline-none
          "
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM29.8034 16C29.8034 8.37659 23.6234 2.19658 16 2.19658C8.37659 2.19658 2.19658 8.37659 2.19658 16C2.19658 23.6234 8.37659 29.8034 16 29.8034C23.6234 29.8034 29.8034 23.6234 29.8034 16Z"
              fill="url(#paint0_linear_1264_70513)"
            />
            <path
              d="M9.77778 22.2222H11.0444L19.7333 13.5333L18.4667 12.2667L9.77778 20.9556V22.2222ZM8 24V20.2222L19.7333 8.51111C19.9111 8.34815 20.1074 8.22222 20.3222 8.13333C20.537 8.04444 20.763 8 21 8C21.237 8 21.4667 8.04444 21.6889 8.13333C21.9111 8.22222 22.1037 8.35556 22.2667 8.53333L23.4889 9.77778C23.6667 9.94074 23.7963 10.1333 23.8778 10.3556C23.9593 10.5778 24 10.8 24 11.0222C24 11.2593 23.9593 11.4852 23.8778 11.7C23.7963 11.9148 23.6667 12.1111 23.4889 12.2889L11.7778 24H8ZM19.0889 12.9111L18.4667 12.2667L19.7333 13.5333L19.0889 12.9111Z"
              fill="url(#paint1_linear_1264_70513)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1264_70513"
                x1="-6.04897e-07"
                y1="16.0894"
                x2="32"
                y2="15.9106"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CE2D52" />
                <stop offset="1" stopColor="#F05921" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1264_70513"
                x1="24"
                y1="15.9062"
                x2="8"
                y2="16.0938"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CE2D52" />
                <stop offset="1" stopColor="#F05921" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}