import { RadioOption } from "../uiTypes";

export type LinksType = {
  id: string | number;
  label: string;
  variant?: "accent" | "default";
};

export interface LinkProps {
  items: LinksType[];
}

export interface BrowserSettingsSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

export interface BrowserNotificationData {
  notificationsOn: boolean;
  newProjects: boolean;
}

export interface BrowserNotificationSection {
  id: string;
  title: string;
  description: string;
  type: 'radio' | 'checkbox';
  options?: RadioOption[];
  maxWidth?: string;
}


export interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export interface NotificationsSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  maxWidth?: string;
}

export interface NotificationsData {
  reports: boolean;
  sound: boolean;
  vibrations: boolean;
}

export interface NotificationOption {
  id: string;
  title: string;
  description: string;
  defaultChecked: boolean;
}
