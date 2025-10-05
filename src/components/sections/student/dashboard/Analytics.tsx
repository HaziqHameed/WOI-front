import { Poppins } from 'next/font/google'
import React from 'react'
import StatsRow from '../StatsRow';
import { statsData } from '@/data/student/StatsData';
import StatisticsChart from '@/components/common/student/BarChart';
import RecentAddedJobs from '@/components/common/student/RecentJos';
import ActivityCard from '@/components/common/student/ActivityCard';
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
function Analytics() {
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
        <div className="col-span-1 sm:col-span-8">
          <h1 className={`w-full sm:w-[230px] h-[45px] font-medium text-[24px] sm:text-[30px] leading-[36px] sm:leading-[45px] capitalize text-white ${poppins.className}`}>
            Welcome, Arun
          </h1>
        </div>

        <div className="col-span-1 sm:col-span-4 flex justify-start sm:justify-end">
          <button
            className="w-full sm:w-[118px] h-[43px] flex items-center justify-center gap-[7.15px] px-[22.8934px] py-[7.1542px] rounded-[5.72336px] bg-gradient-to-r from-[#CE2D52] to-[#F05921] shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Post Job"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <g clipPath="url(#clip0_1264_50474)">
                <path
                  d="M12.6973 16.3701H4.15135C4.11775 16.3592 4.08353 16.3503 4.04888 16.3435C2.41389 16.1041 1.31173 15.2052 0.752658 13.6539C0.651419 13.3731 0.619038 13.0673 0.554688 12.7734V4.22752C0.564525 4.18326 0.577232 4.1394 0.58379 4.09472C0.825207 2.50399 1.69988 1.41905 3.20208 0.853832C3.50375 0.740296 3.83411 0.702998 4.15135 0.630859H12.6973C12.7307 0.642187 12.765 0.650957 12.7997 0.657092C13.5787 0.742785 14.314 1.06035 14.9105 1.56867C15.5069 2.07699 15.937 2.75265 16.1451 3.50819C16.2107 3.74346 16.2452 3.98775 16.2939 4.22752V12.7734C16.2822 12.8123 16.2729 12.8519 16.2661 12.8919C16.0894 14.4576 14.961 15.7918 13.4457 16.2139C13.2006 16.282 12.9469 16.3189 12.6973 16.3701ZM1.86875 8.4931C1.86875 9.7741 1.86875 11.055 1.86875 12.3357C1.86454 12.4892 1.87249 12.6429 1.89252 12.7952C2.10894 14.1478 3.16847 15.0532 4.53868 15.0552C7.12582 15.0582 9.7131 15.0582 12.3005 15.0552C12.5001 15.0576 12.6994 15.0394 12.8952 15.0007C14.1433 14.7314 14.9758 13.6891 14.9774 12.3902C14.9807 9.79788 14.9807 7.20541 14.9774 4.61281C14.9804 4.47962 14.9728 4.34641 14.9549 4.21441C14.7385 2.85321 13.6806 1.94861 12.2997 1.94738C9.71747 1.94492 7.13525 1.94492 4.55303 1.94738C4.34845 1.94481 4.14416 1.96377 3.94354 2.00394C2.70654 2.27364 1.87367 3.31186 1.86875 4.58903C1.86629 5.89039 1.86916 7.19175 1.86875 8.4931Z"
                  fill="#D1D5DB"
                />
                <path
                  d="M9.07756 7.84843H9.28496C10.0891 7.84843 10.8929 7.84434 11.6971 7.85048C12.1652 7.85417 12.4726 8.29274 12.3205 8.72188C12.2242 8.99322 11.9844 9.15348 11.6622 9.1543C10.8683 9.15635 10.0748 9.1543 9.28086 9.1543H9.07592V9.34735C9.07592 10.1564 9.08002 10.9655 9.07346 11.7746C9.06978 12.2374 8.64391 12.5423 8.21641 12.4022C7.94221 12.312 7.77129 12.0706 7.77047 11.7546C7.76801 10.9557 7.77047 10.156 7.77047 9.3576V9.15266H7.57742C6.76832 9.15266 5.95881 9.15676 5.14972 9.1502C4.68738 9.14651 4.38243 8.72106 4.52261 8.29315C4.61237 8.01853 4.85338 7.84803 5.1698 7.84721C5.96865 7.84475 6.76832 7.84721 7.56635 7.84721H7.77129V7.65456C7.77129 6.84547 7.76719 6.03596 7.77375 5.22687C7.77703 4.75879 8.21518 4.45138 8.64473 4.60385C8.91607 4.69977 9.07633 4.93872 9.07715 5.26171C9.0792 6.05564 9.07715 6.84916 9.07715 7.64309L9.07756 7.84843Z"
                  fill="#D1D5DB"
                />
              </g>
              <defs>
                <clipPath id="clip0_1264_50474">
                  <rect
                    width="15.7392"
                    height="15.7392"
                    fill="white"
                    transform="translate(0.554688 0.630859)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className={`${poppins.className} font-bold text-[11.4467px] leading-[17px] text-white flex-none`}>
              Post Job
            </span>
          </button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-5">
        <StatsRow className="col-span-1" stats={statsData} />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mt-4 sm:mt-5">
        <div className="col-span-1 lg:col-span-8 rounded-lg ">
          <StatisticsChart />
        </div>
        <div className="col-span-1 lg:col-span-4 rounded-lg">
          <RecentAddedJobs />
        </div>
      </div>

     <div className="grid grid-cols-12 gap-4 mt-5">
  <div className="col-span-12 md:col-span-6 rounded-lg bg-gray-700">
    <ActivityCard/>
  </div>
  <div className="col-span-12 md:col-span-6 rounded-lg bg-gray-700">
   <ActivityCard meetingFlag={true}/>
  </div>
</div>
    </>
  )
}

export default Analytics