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
