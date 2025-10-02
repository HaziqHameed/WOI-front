"use client";
import React from 'react';
import { IconButtonProps } from './types';

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  tooltip,
  ariaLabel,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-[#CE2D52] to-[#F05921] hover:opacity-90';
      case 'secondary':
        return 'bg-[#1a202e] hover:bg-white/10';
      case 'outline':
        return 'bg-transparent hover:bg-white/10';
      case 'ghost':
        return 'bg-transparent hover:bg-white/10';
      default:
        return 'bg-gradient-to-r from-[#CE2D52] to-[#F05921] hover:opacity-90';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'md':
        return 'w-10 h-10';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-10 h-10';
    }
  };

  const baseClasses = "flex justify-center items-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white/50";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  const combinedClasses = `${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${disabledClasses} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      title={tooltip}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;
