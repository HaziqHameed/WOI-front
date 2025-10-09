"use client";
import { Poppins } from 'next/font/google';
import React from 'react';
import { RadioButtonProps } from '@/types/uiTypes';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
  className = '',
  labelClassName = '',
  fontWeight = 'medium',
}): React.JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const getFontWeightClass = () => {
    switch (fontWeight) {
      case 'normal':
        return 'font-normal';
      case 'medium':
        return 'font-medium';
      case 'bold':
        return 'font-bold';
      default:
        return 'font-medium';
    }
  };

  return (
    <label className={`flex items-center cursor-pointer group ${className}`}>
      <div className="relative mr-2">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          className="sr-only"
        />
        <div className={`w-3.5 h-3.5 rounded-full border transition-all ${
          checked
            ? 'bg-white border-white shadow-inner'
            : 'bg-gradient-to-b from-white to-gray-100 border-white shadow-inner'
        }`}>
          {checked && (
            <div className="absolute top-[3px] left-[3px] w-2 h-2 rounded-full bg-gradient-to-b from-[#3CA7FC] to-[#2F74E2]"></div>
          )}
        </div>
      </div>
      <span className={`text-white text-xs ${getFontWeightClass()} ${poppins.className} select-none ${labelClassName}`}>
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
