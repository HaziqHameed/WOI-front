import { BrowserNotificationData, BrowserNotificationSection, LinksType, NotificationOption, NotificationsData } from "@/types/student/settings";

export const linksData: LinksType[] = [
  { id: 1, label: "Account Info", variant: "accent" },
  { id: 2, label: "HR details name" },
  { id: 3, label: "Verification details" },
  { id: 4, label: "Browser Notifications" },
  { id: 5, label: "Blocked Users" },
  { id: 6, label: "Delete Account" },
];


export const browserNotificationData: BrowserNotificationData = {
  notificationsOn: true,
  newProjects: true,
};

export const browserNotificationSections: BrowserNotificationSection[] = [
  {
    id: "browser",
    title: "Browser Notifications",
    description: "Get notifications to stay up to date with Jobs",
    type: "radio",
    options: [
      { value: "on", label: "On" },
      { value: "off", label: "Off" },
    ],
    maxWidth: "max-w-[418px]",
  },
  {
    id: "creatives",
    title: "Creatives You Follow",
    description: "When you turn on notifications from people you follow, you'll get a notification directly from your browser when your favorite creators publish new work or Conversation",
    type: "checkbox",
    maxWidth: "max-w-[619px]",
  },
];

export const notificationsData: NotificationsData = {
  reports: true,
  sound: true,
  vibrations: false,
};

export const notificationOptions: NotificationOption[] = [
  {
    id: "reports",
    title: "Reports",
    description: "Enable reports notifications",
    defaultChecked: true,
  },
  {
    id: "sound",
    title: "Sound",
    description: "Enable sound notifications",
    defaultChecked: true,
  },
  {
    id: "vibrations",
    title: "Vibrations",
    description: "Enable vibrations effect",
    defaultChecked: false,
  },
];

