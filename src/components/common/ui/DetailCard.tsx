import { Details } from "@/types/student/companyDetails";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
const DetailsCard: React.FC<{ item: Details }> = ({ item }) => {

  return (
   <div
  className="flex flex-col items-start justify-start py-2 rounded-md"
>
  <div
    className={
      `${poppins.className} font-normal text-[16px] leading-[24px]
      text-[#C1C1C1]`
  }
  >
    {item.label}
  </div>
  <div
    className={
      `${poppins.className} font-normal text-[16px] leading-[24px]
      text-white mt-2`
    }
  >
   {item.detail}
  </div>
</div>

  );
};

export default DetailsCard;
