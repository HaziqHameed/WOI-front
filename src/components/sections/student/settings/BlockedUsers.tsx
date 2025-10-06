import React from 'react';
import { BlockedUsersSection } from "@/components/common/ui";
import { blockedUsersContent } from '@/data/student/SettingsData';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export default function BlockedUsers() {

  return (
    <BlockedUsersSection title="BLOCKED USERS">
      <h3 className={`text-white font-bold text-[13px] leading-[18px] mb-5 ${poppins.className}`}>
        {blockedUsersContent.title}
      </h3>

      <p className={`text-white font-normal text-[13px] leading-[17px] mb-5 ${poppins.className}`}>
        {blockedUsersContent.description}
      </p>

        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Enter username"
            className={`w-full max-w-[506px] h-8 bg-transparent border border-white rounded-lg px-4 text-white ${poppins.className} font-semibold text-base leading-none placeholder:text-white placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-white/50`}
          />
        </div>

      <p className={`text-white font-bold text-[13px] leading-[18px] ${poppins.className}`}>
        {blockedUsersContent.statusMessage.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < blockedUsersContent.statusMessage.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
    </BlockedUsersSection>
  );
}