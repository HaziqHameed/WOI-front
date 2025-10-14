export interface BannerCardProps {
  backgroundSrc?: string;
  heading?: string;
  onFileSelect?: (file: File | null) => void;
  className?: string;
}

export interface BannerCardData {
  defaultBackgroundSrc: string;
  defaultHeading: string;
}

export interface UploadButtonProps {
  onClick: () => void;
  heading: string;
  className?: string;
  ariaLabel?: string;
}

export interface RoleLineProps {
  text?: string;
  className?: string;
  onClick?: () => void;
};

export interface Experience {
  id: string;
  job: string;
  date: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  date: string;
  university: string;
}

export interface Certification {
  id: string;
  job: string;
  date: string;
  tagDescription?: React.ReactNode;
}
