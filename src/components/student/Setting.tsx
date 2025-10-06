"use client"
import { Poppins } from "next/font/google";
import React from "react";
import { Header } from "../sections/student/settings/Header";
import SettingsMenu from "../sections/student/settings/SettingsMenu";
import { linksData } from "@/data/student/SettingsData";
import AccountInformation from "../sections/student/settings/AccountInformation";
import PrivacyDisplay from "../sections/student/settings/PrivacyDisplay";
import EmailNotificationsSettings from "../sections/student/settings/EmailNotificationsSetting";

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export default function Setting() {

  return (
    <>
      <div className="w-full">
        <Header />
        <SettingsMenu items={linksData}/>
        <AccountInformation/>
        <PrivacyDisplay/>
        <EmailNotificationsSettings/>
      </div>
    </>
  );
}
