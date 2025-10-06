import React from 'react';
import { DeleteAccountSection, Button } from "@/components/common/ui";
import { deleteAccountContent, deleteAccountData } from '@/data/student/SettingsData';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export default function DeleteAccount() {
  const totalContent = deleteAccountData.projectCount + deleteAccountData.draftCount;

  return (
    <DeleteAccountSection title="DELETE ACCOUNT">
      <p className={`font-bold text-[12px] leading-[18px] text-white mb-4 ${poppins.className}`}>
        {deleteAccountContent.mainQuestion}{' '}
        <span className="text-[#0057FF]">{deleteAccountData.username}</span>?
      </p>

      <p className={`font-normal text-[13px] leading-[17px] text-white mb-6 max-w-[690px] ${poppins.className}`}>
        {deleteAccountContent.description}{' '}
        <span className="font-bold">{totalContent} projects and drafts</span>. Deleting your
        account will remove all of your content and data associated with it.
      </p>

      
       <button 
        onClick={() => console.log('Delete account clicked')}
          className={`${poppins.className} font-bold text-[12px] leading-[17px] text-[#0057FF] hover:text-[#0046CC] transition-colors cursor-pointer bg-transparent border-none p-0`}
        >
          I want to delete my account
        </button>
    </DeleteAccountSection>
  );
}