"use client";
import React, { useEffect, useRef, useState } from 'react';
import { DropdownProps } from './types';

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }): React.JSX.Element => (
  <svg
    width="17"
    height="10"
    viewBox="0 0 17 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-[17px] h-[10px] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
  >
    <path
      d="M1 1.5L8.5 8.5L16 1.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  label,
  required = false,
  searchable = false,
}): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = searchable 
    ? options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  const baseClasses = "flex flex-row items-center justify-between px-4 py-1 w-full sm:w-[152px] h-12 border border-white rounded-lg cursor-pointer hover:bg-white/5 transition-colors";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`;

  return (
    <div ref={dropdownRef} className="flex flex-col items-start gap-2 w-full sm:w-auto relative">
      {label && (
        <label className="font-inter font-bold text-sm sm:text-base leading-[19px] text-white">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <button 
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={combinedClasses}
      >
        <span className="font-inter font-medium text-sm sm:text-base leading-[19px] text-white">
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+0.25rem)] left-0 w-full sm:w-[152px] bg-[#1a202e] border border-white rounded-lg shadow-xl z-50">
          {searchable && (
            <div className="p-2 border-b border-white/20">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full px-2 py-1 bg-transparent border border-white/30 rounded text-white text-sm placeholder:text-white/70 focus:outline-none focus:border-white/50"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <button
                key={option.value}
                type="button"
                onClick={() => !option.disabled && handleOptionClick(option.value)}
                disabled={option.disabled}
                className={`w-full text-left px-4 py-3 font-inter font-medium text-sm sm:text-base cursor-pointer transition-colors ${
                  index === 0 ? 'rounded-t-lg' : ''
                } ${
                  index === filteredOptions.length - 1 ? 'rounded-b-lg' : ''
                } ${
                  option.disabled 
                    ? 'opacity-50 cursor-not-allowed text-white/50'
                    : value === option.value 
                      ? 'bg-gradient-to-r from-[#CE2D52] to-[#F05921] text-white' 
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))
          ) : (
            <div className="px-4 py-3 text-white/70 text-sm text-center">
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
