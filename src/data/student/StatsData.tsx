import {  Stat } from "@/types/dashboard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
const donut = ({size, label}: {size: string, label: string}) => {
    return (
   <div className="relative mx-auto w-12 h-12 flex-shrink-0 top-2 ">
      {/* Background circle with 30% opacity */}
      <svg
        className="absolute -rotate-90 w-10 h-10 left-0.5 top-0.5"
        viewBox="0 0 41.49 41.49"
      >
       
        <circle
          cx="20.745"
          cy="20.745"
          r="18.6"
          fill="none"
          className="stroke-white/30"
          strokeWidth="4.29252"
        />
        
        
        <circle
          cx="20.745"
          cy="20.745"
          r="18.6"
          fill="none"
          className="stroke-white"
          strokeWidth="4.29252"
          strokeDasharray="116.86"
          strokeDashoffset="30.38"
          strokeLinecap="round"
        />
      </svg>
      
      <div className={`absolute left-[22px] top-[23px] -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-center text-[8px] leading-tight ${poppins.className} ${size}`}>
        {label}
      </div>
    </div>
    )
}

export const statsData: Stat[] = [
    {
        title: "Jobs Posted",
        value: "5672",
        percentage: "+14% Inc",
        bgColor: "bg-[#35A891]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: <div className="bg-none">
          {donut({ label: "+74%", size: "" })}
        </div>,
    },
    {
        title: "Shotlisted Candidates",
        value: "234",
        percentage: "+14% Inc",
        bgColor: "bg-[#FFA600]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: <div className="bg-none">
          {donut({ label: "+74%", size: "" })}
        </div>,
    },
   {
        title: "Upcoming Interviews",
        value: "3567",
        percentage: "+14% Inc",
        bgColor: "bg-[#FF5630]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: <div className="bg-none">
          {donut({ label: "+74%", size: "" })}
        </div>,
    },
    {
        title: "Candidates In-Review",
        value: "2145",
        percentage: "+14% Inc",
        bgColor: "bg-[#377DFF]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: <div className="bg-none">
          {donut({ label: "+74%", size: "" })}
        </div>,
    },
];




// export const chartData: WeeklyChart[] = [
//     { month: 'Jan', empty: 34.95, shortlisted: 34.95, applications: 87.35 },
//     { month: 'Feb', empty: 55.91, shortlisted: 52.42, applications: 70.76 },
//     { month: 'Mar', empty: 20.97, shortlisted: 69.01, applications: 25.34 },
//     { month: 'Apr', empty: 37.56, shortlisted: 69.01, applications: 25.34 },
//     { month: 'May', empty: 54.16, shortlisted: 24.46, applications: 76.87 },
//     { month: 'Jun', empty: 38.44, shortlisted: 52.42, applications: 52.42 },
//     { month: 'July', empty: 48.05, shortlisted: 52.42, applications: 69.88 },
// ];

// export const dailyChartData: DailyChart[] = [
//     { day: 'Mon', value: 700, x: 140.28, y: 175.19 },
//     { day: 'Tue', value: 850, x: 226.57, y: 158.14 },
//     { day: 'Wed', value: 1150, x: 335.62, y: 120.34 },
//     { day: 'Thu', value: 1400, x: 441.05, y: 97.51 },
//     { day: 'Fri', value: 1300, x: 548.19, y: 108.15 },
//     { day: 'Sat', value: 700, x: 651.61, y: 175.19 },
//     { day: 'Sun', value: 600, x: 726.33, y: 189.44 },
// ];

// export const skills: Skill[] = [
//     {
//       name: "React.js",
//       location: "San Fransisco, CA",
//       experience: "3-5 years",
//       demand: "High",
//       demandColor: "high"
//     },
//     {
//       name: "Python",
//       location: "New York, NY",
//       experience: "2-4 years",
//       demand: "Medium",
//       demandColor: "medium"
//     },
//     {
//       name: "DevOps",
//       location: "Seattle, WA",
//       experience: "5+ years",
//       demand: "High",
//       demandColor: "high"
//     },
//     {
//       name: "Machine Learning",
//       location: "Austin, TX",
//       experience: "3-6 years",
//       demand: "High",
//       demandColor: "high"
//     },
//     {
//       name: "UI/UX Design",
//       location: "Los Angles, CA",
//       experience: "2-4 years",
//       demand: "Low",
//       demandColor: "low"
//     }
//   ];