// src/components/AssessedBadge.tsx
import React from "react";

type Props = {
  label?: string;
  className?: string;
};

export default function Badge({ label = "Assessed", className = "" }: Props) {
  return (
    <div
      className={`
        inline-flex items-center justify-center gap-[10px]
        px-4 py-2
        w-full max-w-[145px] h-[32px]
         border 
        rounded-[17px]
        ${className}
      `}
      role="status"
      aria-label={label}
    >
      <span
        className="
          font-poppins font-normal text-[12px] leading-[15px]
          text-white/80
          whitespace-nowrap
        "
      >
        {label}
      </span>
    </div>
  );
}
