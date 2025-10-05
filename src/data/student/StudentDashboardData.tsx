import { DailyChart, Skill, Stat, WeeklyChart } from "@/types/dashboard";

export const studentStatsData: Stat[] = [
    {
        title: "Courses Enrolled",
        value: "8",
        percentage: "+2 this month",
        bgColor: "bg-[#35A891]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: (
            <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.5 0L13.5 7.5H21L15 12L18 19.5L10.5 15L3 19.5L6 12L0 7.5H7.5L10.5 0Z" fill="white" />
            </svg>
        ),
    },
    {
        title: "Certificates Earned",
        value: "5",
        percentage: "+1 this week",
        bgColor: "bg-[#FFA600]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: (
            <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 0C4.701 0 0 4.701 0 10.5S4.701 21 10.5 21 21 16.299 21 10.5 16.299 0 10.5 0ZM8.4 15.75L4.2 11.55L5.6 10.15L8.4 12.95L15.4 5.95L16.8 7.35L8.4 15.75Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        title: "Study Hours",
        value: "127",
        percentage: "+15 this week",
        bgColor: "bg-[#FF5630]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: (
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C4.701 0 0 4.701 0 10.5S4.701 21 10.5 21 21 16.299 21 10.5 16.299 0 10.5 0ZM10.5 2C5.813 2 2 5.813 2 10.5S5.813 19 10.5 19 19 15.187 19 10.5 15.187 2 10.5 2ZM10.5 5V10.5L14 12.5L13 14L9 11.5V5H10.5Z" fill="white" />
            </svg>
        ),
    },
    {
        title: "Assignments Due",
        value: "3",
        percentage: "Due this week",
        bgColor: "bg-[#377DFF]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: (
            <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.5 2H4.5C3.4 2 2.5 2.9 2.5 4V18C2.5 19.1 3.4 20 4.5 20H16.5C17.6 20 18.5 19.1 18.5 18V4C18.5 2.9 17.6 2 16.5 2ZM16.5 18H4.5V4H16.5V18ZM6.5 6H14.5V8H6.5V6ZM6.5 10H14.5V12H6.5V10ZM6.5 14H11.5V16H6.5V14Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        title: "Grade Average",
        value: "87%",
        percentage: "+3% improvement",
        bgColor: "bg-[#9142CE]",
        gradient: "bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent",
        icon: (
            <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.5 0L13.5 7.5H21L15 12L18 19.5L10.5 15L3 19.5L6 12L0 7.5H7.5L10.5 0Z"
                    fill="white"
                />
            </svg>
        ),
    },
];

export const studentChartData: WeeklyChart[] = [
    { month: 'Jan', empty: 20, shortlisted: 30, applications: 50 },
    { month: 'Feb', empty: 35, shortlisted: 25, applications: 60 },
    { month: 'Mar', empty: 15, shortlisted: 40, applications: 55 },
    { month: 'Apr', empty: 25, shortlisted: 35, applications: 60 },
    { month: 'May', empty: 40, shortlisted: 20, applications: 60 },
    { month: 'Jun', empty: 30, shortlisted: 30, applications: 60 },
    { month: 'July', empty: 35, shortlisted: 25, applications: 60 },
];

export const studentDailyChartData: DailyChart[] = [
    { day: 'Mon', value: 2, x: 140.28, y: 175.19 },
    { day: 'Tue', value: 3, x: 226.57, y: 158.14 },
    { day: 'Wed', value: 4, x: 335.62, y: 120.34 },
    { day: 'Thu', value: 5, x: 441.05, y: 97.51 },
    { day: 'Fri', value: 3, x: 548.19, y: 108.15 },
    { day: 'Sat', value: 2, x: 651.61, y: 175.19 },
    { day: 'Sun', value: 1, x: 726.33, y: 189.44 },
];

export const studentSkills: Skill[] = [
    {
        name: "JavaScript Fundamentals",
        location: "Online Course",
        experience: "Beginner",
        demand: "High",
        demandColor: "high"
    },
    {
        name: "React Development",
        location: "Bootcamp",
        experience: "Intermediate",
        demand: "High",
        demandColor: "high"
    },
    {
        name: "Python Programming",
        location: "University Course",
        experience: "Intermediate",
        demand: "Medium",
        demandColor: "medium"
    },
    {
        name: "Data Structures",
        location: "Online Course",
        experience: "Advanced",
        demand: "High",
        demandColor: "high"
    },
    {
        name: "Web Design",
        location: "Self Study",
        experience: "Beginner",
        demand: "Low",
        demandColor: "low"
    }
];

export const periods = ['Day', 'Week', 'Month', 'Year'];

export const months = [
    { name: 'Jan', rejected: 28.62, shortlisted: 28.62, applications: 71.54 },
    { name: 'Feb', rejected: 45.79, shortlisted: 42.93, applications: 57.95 },
    { name: 'Mar', rejected: 17.17, shortlisted: 56.52, applications: 20.75 },
    { name: 'Apr', rejected: 30.76, shortlisted: 56.52, applications: 20.75 },
    { name: 'May', rejected: 44.36, shortlisted: 20.03, applications: 62.96 },
    { name: 'Jun', rejected: 31.48, shortlisted: 42.93, applications: 42.93 },
    { name: 'July', rejected: 39.35, shortlisted: 42.93, applications: 57.23 },
    { name: 'Aug', rejected: 28.62, shortlisted: 28.62, applications: 71.54 },
    { name: 'Sep', rejected: 45.79, shortlisted: 42.93, applications: 57.23 },
    { name: 'Oct', rejected: 37.2, shortlisted: 21.46, applications: 23.61 },
    { name: 'Nov', rejected: 22.18, shortlisted: 57.23, applications: 60.1 },
    { name: 'Dec', rejected: 21.46, shortlisted: 56.52, applications: 21.46 },
];

export const gridLines = ['100%', '90%', '80%', '60%', '40%', '20%'];

export const jobs = [
    {
        id: 1,
        title: 'Jr. Frontend Engineer',
        company: 'Spotify, Singapore',
        timeAgo: '2 Days ago',
        icon: (
            <div className="relative w-[27.19px] h-[27.19px]">
                <div className="absolute w-full h-full rounded-full bg-white" />
                <svg className="absolute left-[2.86px] top-[2.86px] w-[21.46px] h-[21.46px]" viewBox="0 0 21 21" fill="none">
                    <path d="M10.73 2.68L5.36 2.68L5.36 10.39L10.73 10.39L10.73 2.68Z" fill="#1ABCFE" />
                    <path d="M5.36 13.25L5.36 18.78L10.73 18.78L10.73 13.25L5.36 13.25Z" fill="#0ACF83" />
                    <path d="M10.73 2.68L16.1 2.68L16.1 8.05L10.73 8.05L10.73 2.68Z" fill="#FF7262" />
                    <path d="M5.36 2.68L10.73 2.68L10.73 8.05L5.36 8.05L5.36 2.68Z" fill="#F24E1E" />
                    <path d="M5.36 8.05L10.73 8.05L10.73 13.42L5.36 13.42L5.36 8.05Z" fill="#A259FF" />
                </svg>
            </div>
        )
    },
    {
        id: 2,
        title: 'Product Designer',
        company: 'Spotify, Singapore',
        timeAgo: '6 hours ago',
        icon: (
            <div className="relative w-[27.19px] h-[27.19px]">
                <div className="absolute w-full h-full rounded-full bg-white" />
                <div className="absolute left-[1.16px] top-[1.16px] w-[16.28px] h-[16.28px] rounded-full bg-[#1ED760]" />
                <svg className="absolute left-[5.95px] top-[8.5px] w-[10.86px] h-[10.22px]" viewBox="0 0 11 11" fill="none">
                    <path d="M8.28 4.14C8.28 4.14 6.18 3.01 3.58 3.53C3.58 3.53 3.26 3.59 3.26 3.93C3.26 4.27 3.56 4.31 3.56 4.31C3.56 4.31 6.04 3.88 8.04 4.91C8.04 4.91 8.28 5.05 8.48 4.82C8.68 4.59 8.54 4.27 8.28 4.14ZM8.28 5.79C8.28 5.79 6.48 4.86 4.28 5.26C4.28 5.26 4.04 5.31 4.04 5.57C4.04 5.83 4.26 5.86 4.26 5.86C4.26 5.86 6.26 5.53 7.88 6.34C7.88 6.34 8.08 6.44 8.24 6.27C8.4 6.1 8.3 5.88 8.28 5.79ZM8.08 7.25C8.08 7.25 6.58 6.51 4.78 6.85C4.78 6.85 4.6 6.89 4.6 7.09C4.6 7.29 4.76 7.31 4.76 7.31C4.76 7.31 6.36 7.06 7.7 7.72C7.7 7.72 7.84 7.79 7.96 7.66C8.08 7.53 8.02 7.31 8.08 7.25Z" fill="#1F2937" />
                </svg>
            </div>
        )
    },
    {
        id: 3,
        title: 'iOS Developer',
        company: 'San Francisco, CA',
        timeAgo: '2 Days ago',
        icon: (
            <div className="relative w-[27.19px] h-[27.19px]">
                <div className="absolute w-full h-full rounded-full bg-white" />
                <div className="absolute left-[1.7px] top-[1.7px] w-[23.8px] h-[23.8px] rounded-full bg-[#283544]" />
                <svg className="absolute left-[5.95px] top-[9.35px] w-[8.57px] h-[8.49px]" viewBox="0 0 9 9" fill="none">
                    <path d="M6.84 4.24C6.83 3.36 7.54 2.94 7.57 2.92C7.15 2.32 6.49 2.24 6.27 2.23C5.71 2.17 5.17 2.56 4.88 2.56C4.59 2.56 4.13 2.24 3.65 2.25C3.03 2.26 2.45 2.61 2.13 3.15C1.47 4.25 1.95 5.88 2.59 6.78C2.91 7.22 3.29 7.71 3.77 7.69C4.24 7.68 4.41 7.41 4.96 7.41C5.51 7.41 5.66 7.69 6.15 7.69C6.65 7.68 6.98 7.24 7.29 6.79C7.65 6.29 7.79 5.8 7.8 5.78C7.79 5.77 6.85 5.43 6.84 4.24Z" fill="#1F2937" />
                    <path d="M6.04 1.76C6.3 1.44 6.48 1 6.44 0.56C6.06 0.58 5.59 0.81 5.32 1.12C5.08 1.39 4.87 1.84 4.92 2.27C5.34 2.3 5.78 2.07 6.04 1.76Z" fill="#1F2937" />
                </svg>
            </div>
        )
    },
    {
        id: 4,
        title: 'Brand Strategist',
        company: 'New york, US',
        timeAgo: '2 Days ago',
        icon: (
            <div className="relative w-[27.19px] h-[27.19px]">
                <div className="absolute w-full h-full rounded-full bg-white" />
                <div className="absolute left-[1.7px] top-[1.7px] w-[23.8px] h-[23.8px] rounded-full bg-[#105DFB]" />
                <svg className="absolute left-[5.84px] top-[8.28px] w-[10.8px] h-[10.6px]" viewBox="0 0 11 11" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.96 4.14C7.54 4.14 8.02 3.67 8.02 3.07C8.02 2.47 7.54 2 6.96 2C6.38 2 5.9 2.47 5.9 3.07C5.9 3.67 6.38 4.14 6.96 4.14ZM3.84 4.91C4.36 4.91 4.78 4.49 4.78 3.97C4.78 3.45 4.36 3.03 3.84 3.03C3.32 3.03 2.9 3.45 2.9 3.97C2.9 4.49 3.32 4.91 3.84 4.91ZM3.84 5.39C3.15 5.39 1.77 5.73 1.77 6.42V7.12H5.91V6.42C5.91 5.73 4.53 5.39 3.84 5.39ZM6.96 4.62C6.88 4.62 6.79 4.63 6.7 4.64C7.08 4.95 7.32 5.39 7.32 5.9V7.12H9.98V6.42C9.98 5.73 8.6 4.62 6.96 4.62Z" fill="#1F2937" />
                </svg>
            </div>
        )
    }
];