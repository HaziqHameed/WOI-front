import { jobs } from '@/data/student/StudentDashboardData';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
const RecentAddedJobs = () => {

  return (
    <div className="flex flex-row items-start justify-center p-[14.31px] gap-[7.15px] w-full bg-[#111827] h-full rounded-[7.15px]">
      <div className="flex flex-col items-start gap-[21.46px] w-[203.89px]">
        <h2 className={`font-${poppins.className} font-semibold text-[12.88px] leading-[19px] text-white`}>
          Recent Added Jobs
        </h2>
        
        <div className="flex flex-col items-start gap-[5.72px] w-full">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="flex flex-col items-start p-[7.15px] gap-[7.15px] w-full bg-[#1F2937] rounded-[7.15px]"
            >
              <div className="flex flex-row items-center gap-[7.15px] w-full">
                {job.icon}
                
                <div className="flex flex-col items-start gap-[2.86px] flex-1">
                  <h3 className={`${poppins.className} font-medium text-[11.45px] leading-[13px] text-white w-full`}>
                    {job.title}
                  </h3>
                  <p className={`${poppins.className} font-normal text-[8.59px] leading-[11px] text-[#8F8F8F] w-full`}>
                    {job.company} - {job.timeAgo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentAddedJobs;