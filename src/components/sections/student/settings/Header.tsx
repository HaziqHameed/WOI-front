import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export function Header() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
      <div className="col-span-1 sm:col-span-8">
        <h1 className={`w-full sm:w-[230px] h-[45px] font-medium text-[24px] sm:text-[30px] leading-[36px] sm:leading-[45px] capitalize text-white`}>
          Settings
        </h1>
      </div>

      <div className="col-span-1 sm:col-span-4 flex justify-start sm:justify-end">
        <div className="flex items-center gap-[20px] h-[43px]">
          <button
            className={`
          flex 
          justify-center 
          items-center 
          px-8 
          py-2.5 
          gap-[10px]
          w-[196.92px] 
          h-[42.02px]
          rounded-[8px]
          bg-gradient-to-r 
          from-[#CE2D52] 
          to-[#F05921]
          ${poppins.className}
          font-bold 
          text-[16px] 
          leading-[19px] 
          text-white
          cursor-pointer
        `}
          >
            Save Changes
          </button>

          <button
            className={`
          flex 
          justify-center 
          items-center 
          w-[89.89px] 
          h-[43px] 
          border 
          border-white 
          rounded-[8px]
          ${poppins.className}
          font-normal 
          text-[14px] 
          leading-[20px] 
          text-white
          cursor-pointer
        `}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
