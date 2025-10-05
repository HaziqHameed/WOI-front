"use client"
import React from "react";
import Analytics from "../sections/student/dashboard/Analytics";
import ProfileCard from "../common/student/ProfileCard";
import { About } from "../sections/student/details/About";



export default function CompanyProfile() {

  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
         <div className="col-span-1 lg:col-span-3 p-3 sm:p-4 rounded-lg">
          <div className="text-gray-300 text-sm sm:text-base">
           <ProfileCard company/>
          </div>
        </div>
    
       <div className="col-span-1 lg:col-span-9  rounded-lg">
      <About/>
       </div>
      </div>
    </>
  );
}
