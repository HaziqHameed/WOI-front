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
