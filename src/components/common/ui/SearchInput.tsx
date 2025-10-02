"use client";
import React from 'react';
import { SearchInputProps } from './types';

const SearchIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[15px] h-[15px] text-white flex-shrink-0"
  >
    <path
      d="M12.3938 12.3677L16 16M14.3333 7.66667C14.3333 11.3486 11.3486 14.3333 7.66667 14.3333C3.98477 14.3333 1 11.3486 1 7.66667C1 3.98477 3.98477 1 7.66667 1C11.3486 1 14.3333 3.98477 14.3333 7.66667Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  disabled = false,
  label,
  required = false,
  icon,
  onSearch,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  const baseClasses = "w-full h-12 pl-[45px] sm:pl-[50px] pr-4 py-4 bg-transparent border border-white rounded-lg font-inter font-normal text-sm sm:text-base leading-none text-white placeholder:text-white placeholder:text-sm sm:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-white/50";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`;

  return (
    <div className="flex flex-col items-start gap-2 w-full lg:flex-1 lg:max-w-[571px]">
      {label && (
        <label className="font-inter font-bold text-sm sm:text-base leading-[19px] text-white">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative w-full">
        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
          {icon || <SearchIcon />}
        </div>
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          className={combinedClasses}
        />
      </div>
    </div>
  );
};

export default SearchInput;
