"use client"
import React from "react";
import ProfileCard from "../common/student/ProfileCard";
import BannerCard from "../sections/student/home/BannerCard";

export default function Home() {

  return (
    <>
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
             <div className="col-span-1 lg:col-span-3 p-3 sm:p-4 rounded-lg">
              <div className="text-gray-300 text-sm sm:text-base">
               <ProfileCard home/>
              </div>
            </div>
        
           <div className="col-span-1 lg:col-span-9  rounded-lg">
            <BannerCard/>
           </div>
          </div>
    </>
  );

}