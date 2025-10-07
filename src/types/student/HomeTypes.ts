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
