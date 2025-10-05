import { activities, meetingsData } from '@/data/student/StudentDashboardData';
import { Poppins } from 'next/font/google';
import React, { useState } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
export default function ActivityCard({ meetingFlag }: { meetingFlag?: boolean }) {
  const [meetings, setMeetings] = useState(meetingsData);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showMeetingMenu, setShowMeetingMenu] = useState<number | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    day: '',
    date: '',
    title: '',
    time: '',
  });


  const handleMenuClick = (meetingId: number) => {
    setShowMeetingMenu(showMeetingMenu === meetingId ? null : meetingId);
  };

  

  return (
    <div className="w-full bg-gray-900 flex items-center justify-center rounded-lg">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl bg-gray-900 rounded-lg p-3 sm:p-4">
        {/* Header */}
        <div className="flex flex-row justify-between items-center mb-5 sm:mb-6">
          <h2 className={`text-white font-semibold text-sm sm:text-base ${poppins.className}`}>
            Activity Feed
          </h2>
          <button className="flex flex-row justify-center items-center px-2 py-1.5 sm:px-2.5 sm:py-2 border border-gray-200 rounded-lg hover:bg-gray-800 transition-colors">
            <span className={`text-white font-medium text-xs sm:text-sm ${poppins.className} mr-1 sm:mr-1.5`}>
              {meetingFlag ? 'Create New' : 'Create Activity'}
            </span>
            <svg
              width="7"
              height="5"
              viewBox="0 0 7 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.976856 0.504787C1.11279 0.504787 1.24872 0.554867 1.35603 0.66218L3.50229 2.80844L5.64855 0.66218C5.85602 0.454708 6.19942 0.454708 6.4069 0.662179C6.61437 0.869651 6.61437 1.21305 6.4069 1.42052L3.88146 3.94596C3.67399 4.15343 3.33059 4.15343 3.12312 3.94596L0.597684 1.42053C0.390212 1.21305 0.390212 0.869652 0.597684 0.66218C0.704997 0.554867 0.840926 0.504787 0.976856 0.504787Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        {meetingFlag ? (
          <div className="flex flex-col gap-3.5 sm:gap-[14.31px]">
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="flex flex-row justify-between items-center gap-4"
              >
                {/* Left Section */}
                <div className="flex flex-row items-center gap-3">
                  {/* Date Badge */}
                  <div className="flex flex-col justify-center items-center bg-[#1F2937] shadow-[0px_2.86px_18.6px_rgba(111,111,114,0.12)] rounded-[4.29px] w-9 h-9 px-1 py-0.5">
                    <span className={`text-[#FFA600] font-semibold text-[12px] leading-[11px] text-center ${poppins.className}`}>
                      {meeting.day}
                    </span>
                    <span className={`text-white font-normal text-[12px] leading-[11px] ${poppins.className}`}>
                      {meeting.date}
                    </span>
                  </div>

                  {/* Meeting Info */}
                  <div className="flex flex-col gap-[0.72px]">
                    <h3 className={`text-white font-normal text-[12px] leading-[13px] ${poppins.className}`}>
                      {meeting.title}
                    </h3>
                    <p className={`text-[#8F8F8F] font-normal text-[10px] leading-[13px] ${poppins.className}`}>
                      {meeting.time}
                    </p>
                  </div>
                </div>

                {/* Menu Button */}
                <div className="relative">
                  <button
                    onClick={() => handleMenuClick(meeting.id)}
                    className="flex items-center justify-center bg-[#1F2937] rounded-[3.58px] w-[18.6px] h-[18.6px] p-1 hover:bg-[#374151] transition-colors flex-shrink-0"
                  >
                   <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.9699 4.85742C5.18349 4.85742 4.53906 5.50185 4.53906 6.28826C4.53906 7.07468 5.18349 7.7191 5.9699 7.7191C6.75632 7.7191 7.40074 7.07468 7.40074 6.28826C7.40074 5.50185 6.75632 4.85742 5.9699 4.85742Z"
        fill="#8F8F8F"
      />
      <path
        d="M5.9699 0.564453C5.18349 0.564453 4.53906 1.20888 4.53906 1.99529C4.53906 2.78171 5.18349 3.42613 5.9699 3.42613C6.75632 3.42613 7.40074 2.78171 7.40074 1.99529C7.40074 1.20888 6.75632 0.564453 5.9699 0.564453Z"
        fill="#8F8F8F"
      />
      <path
        d="M5.9699 9.15039C5.18349 9.15039 4.53906 9.79482 4.53906 10.5812C4.53906 11.3676 5.18349 12.0121 5.9699 12.0121C6.75632 12.0121 7.40074 11.3676 7.40074 10.5812C7.40074 9.79482 6.75632 9.15039 5.9699 9.15039Z"
        fill="#8F8F8F"
      />
    </svg>
                  </button>

                  {/* Context Menu */}
                  {showMeetingMenu === meeting.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-[#1F2937] border border-[#374151] rounded-lg shadow-lg z-10">
                      <button
                        className={`w-full px-3 py-2 text-left text-white text-xs hover:bg-[#374151] transition-colors ${poppins.className}`}
                      >
                        Edit
                      </button>

                      <button
                        className={`w-full px-3 py-2 text-left text-red-400 text-xs hover:bg-[#374151] transition-colors ${poppins.className}`}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3 sm:gap-3.5 lg:gap-4 mb-[1px]">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex flex-row justify-between items-center gap-3 sm:gap-4 lg:gap-6"
              >
                {/* Left side: Avatar + Info */}
                <div className="flex flex-row items-center gap-2 sm:gap-2.5 flex-1 min-w-0">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: activity.avatarBg,
                        border: `0.36px solid ${activity.avatarBorder}`
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-base sm:text-lg">
                      {activity.emoji}
                    </div>
                  </div>

                  {/* Activity Info */}
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <p className={`text-white text-xs sm:text-sm font-normal ${poppins.className} leading-tight truncate`}>
                      <span className="font-medium">{activity.name}</span>{' '}
                      <span className="opacity-90">{activity.action}</span>{' '}
                      <span className="font-medium">{activity.jobTitle}</span>
                    </p>
                    <p className={`text-gray-400 text-[10px] sm:text-xs font-light ${poppins.className} leading-tight`}>
                      {activity.time}
                    </p>
                  </div>
                </div>

                {/* Right side: Status Badge */}
                <div
                  className="flex-shrink-0 flex flex-row justify-center items-center px-2 py-1 sm:px-2.5 sm:py-1 rounded"
                  style={{ background: activity.statusBg }}
                >
                  <span
                    className={`text-[10px] sm:text-xs font-normal ${poppins.className} leading-tight whitespace-nowrap`}
                    style={{ color: activity.statusColor }}
                  >
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>

  );
}