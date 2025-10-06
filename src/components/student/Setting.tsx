"use client"
import React from "react";
import { Header } from "../sections/student/settings/Header";
import SettingsMenu from "../sections/student/settings/SettingsMenu";
import { linksData } from "@/data/student/SettingsData";
import AccountInformation from "../sections/student/settings/AccountInformation";
import PrivacyDisplay from "../sections/student/settings/PrivacyDisplay";
import EmailNotificationsSettings from "../sections/student/settings/EmailNotificationsSetting";
import BrowserNotifications from "../sections/student/settings/BrowserNotifiations";
import NotificationsSettings from "../sections/student/settings/NotificationsSetting";
import BlockedUsers from "../sections/student/settings/BlockedUsers";
import DeleteAccount from "../sections/student/settings/DeleteAccount";

export default function Setting() {

  return (
    <>
      <div className="w-full">
        <Header />
        <SettingsMenu items={linksData}/>
        <AccountInformation/>
        <PrivacyDisplay/>
        <EmailNotificationsSettings/>
        <BrowserNotifications/>
        <NotificationsSettings/>
        <BlockedUsers/>
        <DeleteAccount/>
      </div>
    </>
  );
}
