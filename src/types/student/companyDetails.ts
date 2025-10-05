export type Details = {
  id: number;
  label: string;
  detail?: string;
};

export type GridMapProps = {
  data?: Details[];
  className?: string;
};

export type DescriptionProps = {
  className?: string;
  heading?: string;
  body?: string;
};

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}