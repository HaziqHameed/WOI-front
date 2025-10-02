"use client";
import React from 'react';
import { DateInputProps } from './types';

const CalendarIcon = () => (
  <svg
    width={15}
    height={16}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pointer-events-none flex-shrink-0"
  >
    <g clipPath="url(#clip0_1264_52302)">
      <path
        d="M3.8571 1.32109C3.90666 0.716975 4.03745 0.498456 4.35692 0.507561C4.47 0.511955 4.5792 0.5537 4.67014 0.627291C4.75417 0.709611 4.8156 0.815847 4.84757 0.934129C4.88173 1.0484 4.8709 1.17905 4.88048 1.31153H10.1348C10.1348 1.22959 10.1323 1.14719 10.1348 1.06479C10.1469 0.730632 10.3622 0.495269 10.648 0.502098C10.925 0.508471 11.127 0.74611 11.1332 1.07434C11.1332 1.14764 11.1332 1.22094 11.1332 1.32109H11.3069C11.8276 1.32109 12.3482 1.32109 12.8688 1.32109C14.0684 1.32564 14.9985 2.3363 14.9997 3.64741C15.0022 6.82232 15.0022 9.99738 14.9997 13.1726C14.9997 14.4873 14.0755 15.4989 12.8755 15.4998C9.29347 15.5026 5.71143 15.5026 2.12939 15.4998C0.926906 15.4998 0.0051558 14.4855 0.0051558 13.1703C0.00348973 10.0009 0.00348973 6.83158 0.0051558 3.66244C0.00140715 2.32992 0.929403 1.32109 2.15063 1.32109C2.661 1.32109 3.17123 1.32109 3.68133 1.32109H3.8571ZM1.00105 6.01016V6.19817C1.00105 8.50871 1.00105 10.819 1.00105 13.1289C1.00105 13.9265 1.45921 14.4309 2.18895 14.4309H12.8101C13.539 14.4309 13.9989 13.9274 13.9989 13.1293C13.9989 10.8191 13.9989 8.50887 13.9989 6.19863V6.01016H1.00105ZM1.00479 4.89662H14.0001C14.0001 4.46868 14.0026 4.05395 14.0001 3.63922C13.9947 2.93313 13.5182 2.41551 12.8697 2.41005C12.3386 2.40732 11.8076 2.41005 11.2761 2.41005C11.2319 2.41005 11.1874 2.41733 11.1332 2.42188C11.1332 2.50929 11.1332 2.58259 11.1332 2.65588C11.127 2.98366 10.925 3.22176 10.648 3.22858C10.371 3.23541 10.1482 2.99732 10.1348 2.66499C10.1319 2.58259 10.1348 2.50019 10.1348 2.41961H4.87465C4.86965 2.53615 4.87465 2.6445 4.85882 2.75012C4.84342 2.88688 4.78104 3.01213 4.68431 3.10049C4.58759 3.18886 4.46375 3.23374 4.33788 3.22605C4.21201 3.21835 4.09352 3.15865 4.00641 3.05904C3.91931 2.95942 3.8701 2.82735 3.86876 2.68957C3.86584 2.59852 3.86876 2.51157 3.86876 2.41642C3.22857 2.41642 2.6088 2.39184 1.9911 2.4237C1.46754 2.45102 1.0402 2.93358 1.00979 3.50355C0.985635 3.96153 1.00521 4.42452 1.00521 4.89753L1.00479 4.89662Z"
        fill="#E8EAED"
      />
    </g>
    <defs>
      <clipPath id="clip0_1264_52302">
        <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  placeholder = 'dd-mm-yyyy',
  className = '',
  disabled = false,
  label,
  required = false,
}) => {
  const baseClasses = "relative flex flex-row items-center px-2 py-1 gap-3 w-full sm:w-[143px] h-12 border border-white rounded-lg";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`;

  return (
    <div className="flex flex-col items-start gap-2 w-full sm:w-auto">
      {label && (
        <label className="font-inter font-bold text-sm sm:text-base leading-[19px] text-white">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className={combinedClasses}>
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
        <span className="font-inter font-medium text-sm sm:text-base leading-[19px] text-white flex-1 pointer-events-none truncate">
          {value || placeholder}
        </span>
        <CalendarIcon />
      </div>
    </div>
  );
};

export default DateInput;
