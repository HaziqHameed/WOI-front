import { DailyChart, Skill, Stat, WeeklyChart } from "@/types/dashboard";
import { Activity, Meeting } from "@/types/student/dashboard";

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
            <div className="relative w-[27.19px] h-[27.19px] rounded-full bg-white flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1133 10.8039C11.1133 9.32224 12.3144 8.12109 13.7961 8.12109C15.2778 8.12109 16.4789 9.32224 16.4789 10.8039C16.4789 12.2856 15.2778 13.4867 13.7961 13.4867C12.3144 13.4867 11.1133 12.2856 11.1133 10.8039Z" fill="#1ABCFE" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 16.1692C5.75 14.6875 6.95114 13.4863 8.43283 13.4863H11.1157V16.1692C11.1157 17.6508 9.91451 18.852 8.43283 18.852C6.95114 18.852 5.75 17.6508 5.75 16.1692Z" fill="#0ACF83" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1133 2.75586V8.12151H13.7961C15.2778 8.12151 16.4789 6.92037 16.4789 5.43869C16.4789 3.957 15.2778 2.75586 13.7961 2.75586H11.1133Z" fill="#FF7262" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 5.43869C5.75 6.92037 6.95114 8.12151 8.43283 8.12151H11.1157V2.75586H8.43283C6.95114 2.75586 5.75 3.957 5.75 5.43869Z" fill="#F24E1E" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 10.8039C5.75 12.2856 6.95114 13.4867 8.43283 13.4867H11.1157V8.12109H8.43283C6.95114 8.12109 5.75 9.32224 5.75 10.8039Z" fill="#A259FF" />
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
            <div className="relative w-[27.19px] h-[27.19px] rounded-full bg-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.1262" cy="10.0207" r="8.13791" fill="#1ED760" />
                    <path d="M13.8255 13.2894C13.6865 13.51 13.3899 13.5718 13.1581 13.4394C11.3322 12.3805 9.04275 12.1422 6.33624 12.7246C6.07671 12.7776 5.81718 12.6276 5.76157 12.3805C5.70595 12.1334 5.86353 11.8863 6.12305 11.8334C9.07983 11.1892 11.6195 11.4628 13.6587 12.654C13.8904 12.7864 13.9645 13.0688 13.8255 13.2894ZM14.7709 11.2774C14.5948 11.551 14.2241 11.6304 13.9367 11.4716C11.8512 10.245 8.672 9.89202 6.20647 10.6068C5.88206 10.695 5.54838 10.5274 5.45569 10.2273C5.36301 9.9185 5.53911 9.60082 5.86353 9.51258C8.68127 8.70074 12.1849 9.08901 14.5855 10.4921C14.8543 10.6509 14.947 11.0039 14.7709 11.2774ZM14.8543 9.17726C12.3517 7.76537 8.22709 7.633 5.83572 8.3213C5.45569 8.43601 5.04786 8.23306 4.92737 7.86243C4.80687 7.50064 5.02933 7.11237 5.40935 6.99765C8.15294 6.20347 12.7132 6.3623 15.5866 7.98598C15.9295 8.18011 16.0408 8.60368 15.8368 8.93018C15.6422 9.2655 15.1973 9.38022 14.8543 9.17726Z" fill="#1F2937" />
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
            <div className="relative w-[27.19px] h-[27.19px] rounded-full bg-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2641 10.2356C18.2641 14.7277 14.6224 18.3735 10.1262 18.3735C5.62999 18.3735 1.98828 14.7277 1.98828 10.2356C1.98828 5.73937 5.62999 2.09766 10.1262 2.09766C14.6224 2.09766 18.2641 5.73937 18.2641 10.2356Z" fill="#283544" />
                    <path d="M4.94451 13.0495H5.83333V8.92529H4.94451V13.0495ZM5.38713 8.38447C5.66199 8.38447 5.88331 8.15103 5.88331 7.85922C5.88331 7.55963 5.66199 7.33008 5.38713 7.33008C5.11585 7.33008 4.89453 7.55963 4.89453 7.85922C4.89453 8.15103 5.11585 8.38447 5.38713 8.38447Z" fill="#1F2937" />
                    <path d="M8.93887 7.34175C7.43608 7.34175 6.49371 8.4584 6.49371 10.2443C6.49371 12.0301 7.43608 13.1429 8.93887 13.1429C10.4381 13.1429 11.3805 12.0301 11.3805 10.2443C11.3805 8.4584 10.4381 7.34175 8.93887 7.34175ZM8.93887 8.19772C9.85626 8.19772 10.4417 8.99143 10.4417 10.2443C10.4417 11.4932 9.85626 12.2869 8.93887 12.2869C8.01792 12.2869 7.43608 11.4932 7.43608 10.2443C7.43608 8.99143 8.01792 8.19772 8.93887 8.19772Z" fill="#1F2937" />
                    <path d="M11.9052 11.4698C11.9445 12.5048 12.7226 13.1429 13.9077 13.1429C15.1535 13.1429 15.9388 12.4737 15.9388 11.4076C15.9388 10.5711 15.4962 10.1003 14.4503 9.83962L13.8578 9.69177C13.2259 9.52836 12.9654 9.31047 12.9654 8.93696C12.9654 8.47007 13.358 8.15881 13.9399 8.15881C14.5288 8.15881 14.9322 8.47396 14.975 8.99921H15.8532C15.8317 8.01096 15.0821 7.34175 13.947 7.34175C12.8262 7.34175 12.0301 8.01485 12.0301 9.01088C12.0301 9.81238 12.4799 10.3104 13.4294 10.5477L14.0969 10.7189C14.7466 10.8862 15.0107 11.1197 15.0107 11.5243C15.0107 11.9912 14.5788 12.3258 13.9577 12.3258C13.3295 12.3258 12.8547 11.9873 12.7976 11.4698H11.9052Z" fill="#1F2937" />
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
            <div className="relative w-[27.19px] h-[27.19px] rounded-full bg-white flex items-center justify-center">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.1262" cy="9.45626" r="8.13791" fill="#105DFB" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.82031 12.9212V5.82031H8.10295C9.15734 5.82031 10.0121 6.67506 10.0121 7.72945C10.0121 8.39947 9.80607 8.81451 9.05065 9.24029C9.95462 9.65217 10.2057 10.223 10.2057 11.0193C10.2057 12.0964 9.24877 12.9212 8.17161 12.9212H4.82031ZM6.20938 6.99575V8.70326H7.83515C7.83515 8.70326 8.62532 8.70326 8.62532 7.8495C8.62532 6.99575 7.83515 6.99575 7.83515 6.99575H6.20938ZM6.20938 11.7186V9.8749H7.95322C8.23478 9.8749 8.82514 10.0202 8.82514 10.8921C8.82514 11.5388 8.24386 11.7126 7.95322 11.7186H6.20938Z" fill="#1F2937" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1756 7.77684C12.1766 7.77684 10.6961 8.49436 10.6961 10.4017C10.6961 11.5631 11.3319 13.0538 13.2392 13.0538C14.7651 13.0538 15.4675 11.9336 15.6279 11.3735H14.1929C14.1202 11.6278 13.8387 11.9094 13.2392 11.9094C12.3673 11.9094 12.0585 11.1646 12.0131 10.7922H15.6279V10.4017C15.6279 8.49436 14.1747 7.77684 13.1756 7.77684ZM13.1756 8.86674C12.3619 8.86674 12.0615 9.53884 12.0131 9.8749H14.1929C14.1929 9.53884 13.9894 8.86674 13.1756 8.86674Z" fill="#1F2937" />
                    <path d="M11.4409 6.22374V7.10474H14.865V6.22374H11.4409Z" fill="#1F2937" />
                </svg>

            </div>
        )
    }
];

export const activities: Activity[] = [
    {
        id: 1,
        name: 'Marvin McKinney',
        action: 'applied for the job',
        jobTitle: 'Product Designer',
        time: '10 mins ago',
        status: 'Applying',
        statusColor: '#377DFF',
        statusBg: 'rgba(55, 125, 255, 0.2)',
        avatarBg: 'rgba(56, 203, 137, 0.3)',
        avatarBorder: 'rgba(56, 203, 137, 0.3)',
        emoji: <img
            src="/images/avatar-2.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
        />
    },
    {
        id: 2,
        name: 'Jone Copper',
        action: 'Created new Account as a',
        jobTitle: 'Job Hunt',
        time: '4 hours ago',
        status: 'Sign Up',
        statusColor: '#38CB89',
        statusBg: 'rgba(56, 203, 137, 0.2)',
        avatarBg: 'rgba(255, 166, 0, 0.4)',
        avatarBorder: 'rgba(255, 166, 0, 0.3)',
        emoji: <img
            src="/images/avatar-3.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
        />
    },
    {
        id: 3,
        name: 'Jenny Wilson',
        action: 'applied for the job',
        jobTitle: 'Frontend Engineer',
        time: '10 mins ago',
        status: 'Applying',
        statusColor: '#377DFF',
        statusBg: 'rgba(55, 125, 255, 0.2)',
        avatarBg: 'rgba(55, 125, 255, 0.3)',
        avatarBorder: 'rgba(55, 125, 255, 0.3)',
        emoji: <img
            src="/images/avatar-4.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
        />
    }
];

export const meetingsData: Meeting[] = [
    {
        id: 1,
        day: 'Mon',
        date: '10',
        title: 'Interview',
        time: '9:00 am - 11:30 am',
    },
    {
        id: 2,
        day: 'Thu',
        date: '08',
        title: 'Organizational meeting',
        time: '9:00 am - 11:30 am',
    },
    {
        id: 3,
        day: 'Fri',
        date: '11',
        title: 'Meeting with the manager',
        time: '9:00 am - 11:30 am',
    },
];