import {  LinkProps, LinksType } from "@/types/student/settings";
import { Poppins } from "next/font/google";
import React, { useState } from "react";

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function SettingsMenu({ items = []}:LinkProps) {
  return (
    <div
      className={`w-full relative mt-5`}
    >
      <div className="w-full rounded-[5px] bg-[#111827] p-3">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`w-full m-auto flex items-center gap-[10px] text-center py-[6px] rounded-[5px] transition
                ${
                  item.variant === "accent"
                    ? "bg-[#1F2937]"
                    : "bg-transparent hover:bg-white/5"
                }`}
            >
              <span
                className={`${poppins.className} m-auto text-[12px] leading-[18px] text-center ${
                  item.variant === "accent"
                    ? "font-semibold text-[#F05921]"
                    : "font-normal text-white" 
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
