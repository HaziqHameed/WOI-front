"use client";
import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  fullWidth = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-[#CE2D52] to-[#F05921] text-white hover:opacity-90';
      case 'secondary':
        return 'bg-[#1a202e] text-white border border-white hover:bg-white/10';
      case 'outline':
        return 'bg-transparent text-white border border-white hover:bg-white/10';
      case 'ghost':
        return 'bg-transparent text-white hover:bg-white/10';
      default:
        return 'bg-gradient-to-r from-[#CE2D52] to-[#F05921] text-white hover:opacity-90';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm h-8';
      case 'md':
        return 'px-4 py-1 text-base h-12';
      case 'lg':
        return 'px-6 py-2 text-lg h-14';
      default:
        return 'px-4 py-1 text-base h-12';
    }
  };

  const baseClasses = "flex flex-row justify-center items-center gap-4 rounded-lg font-inter font-medium leading-[19px] transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50";
  const disabledClasses = disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  const widthClasses = fullWidth ? "w-full" : "w-auto";
  
  const combinedClasses = `${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${disabledClasses} ${widthClasses} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
