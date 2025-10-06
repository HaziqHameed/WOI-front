import { AccountInformationData, FormField, RadioGroup, PrivacyDisplayData, EmailNotificationData, NotificationSection} from "@/types/uiTypes";

export const accountInformationData: AccountInformationData = {
  companyName: "ACME Corp",
  website: "https://example.com",
  location: "Mumbai",
  phoneNumber: "+92 300 0000000",
  email: "floyd.miles@example.com",
};

export const accountInformationFields: FormField[] = [
  {
    id: "companyName",
    label: "Company Name",
    placeholder: "ACME Corp",
    type: "text",
    ariaLabel: "Company Name",
  },
  {
    id: "website",
    label: "Website",
    placeholder: "https://example.com",
    type: "url",
    ariaLabel: "Website",
    inputClassName: "text-[13px] leading-[20px]",
  },
  {
    id: "location",
    label: "Location",
    placeholder: "Mumbai",
    type: "text",
    ariaLabel: "Location",
    inputClassName: "text-[16px] leading-[16px] text-white",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    placeholder: "+92 300 0000000",
    type: "tel",
    ariaLabel: "Phone Number",
  },
  {
    id: "email",
    label: "Email id",
    placeholder: "floyd.miles@example.com",
    type: "email",
    ariaLabel: "Email id",
    inputClassName: "font-bold",
  },
];

export const privacyDisplayData: PrivacyDisplayData = {
  messageOption: "anyone",
  profileOption: "anyone",
  timezone: "UTC+5",
};

export const privacyDisplayGroups: RadioGroup[] = [
  {
    id: "message",
    title: "Users who can message you directly",
    name: "message",
    fontWeight: "bold",
    options: [
      { value: "anyone", label: "Anyone" },
      { value: "only-people", label: "Only People You" },
    ],
  },
  {
    id: "profile",
    title: "Users who can see your Profile",
    name: "profile",
    fontWeight: "normal",
    options: [
      { value: "anyone", label: "Anyone" },
      { value: "only-people-know", label: "Only People You Know" },
      { value: "no-one", label: "No One" },
    ],
  },
];

export const emailNotificationData: EmailNotificationData = {
  summaryEnabled: false,
  networkActivity: true,
  linkedinUrl: "X_AE_A-22",
};

export const emailNotificationSections: NotificationSection[] = [
  {
    id: "summary",
    title: "Notification Summary",
    description: "Receive an email summary of notifications instead of individual emails",
    type: "radio",
    options: [
      { value: "on", label: "On" },
      { value: "off", label: "Off" },
    ],
  },
  {
    id: "network",
    title: "Network Activity",
    description: "New Activity on projects and moodboards by my network",
    type: "checkbox",
  },
  {
    id: "social",
    title: "Social Media Links",
    description: "Links for your social media.",
    type: "social",
    socialPlatform: "LinkedIn",
  },
];
