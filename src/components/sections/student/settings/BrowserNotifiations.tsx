import React, { useState } from 'react';

export default function BrowserNotifications() {
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [newProjects, setNewProjects] = useState(true);

  return (
      <div className="w-full mx-auto mt-full bg-[#111827] rounded-[3px] p-6 sm:p-8 lg:p-12 mt-5">
        {/* Header */}
        <h1 className="text-white font-bold text-[11px] leading-4 uppercase tracking-wide mb-8 font-['Poppins']">
          Browser Notifications
        </h1>

        {/* Browser Notifications Section */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-white font-bold text-[13px] leading-[18px] mb-4 font-['Poppins']">
            Browser Notifications
          </h2>
          
          <p className="text-white text-[12px] leading-[17px] mb-6 font-['Poppins'] max-w-[418px]">
            Get notifications to stay up to date with Jobs
          </p>

          {/* Radio Buttons */}
          <div className="flex items-center gap-8 sm:gap-12">
            <label className="flex items-center gap-[18px] cursor-pointer">
              <div className="relative w-[14px] h-[14px]">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F4F4F4] border border-white rounded-full shadow-[inset_0px_1px_0px_#ECECEC]">
                  {notificationsOn && (
                    <div className="absolute w-2 h-2 left-[3px] top-[3px] bg-gradient-to-b from-[#3CA7FC] to-[#2F74E2] rounded-full"></div>
                  )}
                </div>
              </div>
              <span 
                className="text-white text-[12px] leading-[14px] font-['Poppins']"
                onClick={() => setNotificationsOn(true)}
              >
                On
              </span>
            </label>

            <label className="flex items-center gap-[18px] cursor-pointer">
              <div className="relative w-[14px] h-[14px]">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F4F4F4] border border-white rounded-full shadow-[inset_0px_1px_0px_#ECECEC]">
                  {!notificationsOn && (
                    <div className="absolute w-2 h-2 left-[3px] top-[3px] bg-gradient-to-b from-[#3CA7FC] to-[#2F74E2] rounded-full"></div>
                  )}
                </div>
              </div>
              <span 
                className="text-white text-[12px] leading-[14px] font-['Poppins']"
                onClick={() => setNotificationsOn(false)}
              >
                Off
              </span>
            </label>
          </div>
        </div>

        {/* Creatives You Follow Section */}
        <div>
          <h2 className="text-white font-bold text-[13px] leading-[18px] mb-4 font-['Poppins']">
            Creatives You Follow
          </h2>
          
          <p className="text-white text-[13px] leading-[17px] mb-6 font-['Poppins'] max-w-[619px]">
            When you turn on notifications from people you follow, you'll get a notification directly from your browser when your favorite creators publish new work or Conversation
          </p>

          {/* Checkbox */}
          <label className="flex items-center gap-6 cursor-pointer group">
            <div 
              className="relative w-[14px] h-[14px] flex-shrink-0"
              onClick={() => setNewProjects(!newProjects)}
            >
              <div className="absolute inset-0 bg-white border border-white rounded-[3px] shadow-[inset_0px_1px_0px_#ECECEC]">
                {newProjects && (
                  <div 
                    className="absolute w-2 h-[5px] left-[2.52px] top-[1.83px] border-l-2 border-b-2 border-[#1B6BE0]"
                    style={{ transform: 'rotate(-50deg)' }}
                  ></div>
                )}
              </div>
            </div>
            <span className="text-white text-[13px] leading-[14px] font-['Poppins']">
              New Projects
            </span>
          </label>
        </div>
      </div>
  );
}