import { Poppins } from 'next/font/google';
import React, { useState } from 'react';
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export default function PrivacyDisplay() {
  const [messageOption, setMessageOption] = useState('anyone');
  const [profileOption, setProfileOption] = useState('anyone');

  return (
      <div className="w-full mt-5 bg-gray-900 rounded-md p-6 sm:p-8 lg:p-10 shadow-2xl">
        {/* Header */}
        <h2 className={`text-white font-bold text-xs uppercase tracking-wider mb-6 ${poppins.className}`}>
          Privacy & Display
        </h2>

        {/* Users who can message you directly */}
        <div className="mb-10">
          <h3 className={`text-white font-bold text-sm mb-4 ${poppins.className}`}>
            Users who can message you directly
          </h3>
          
          <div className="flex flex-wrap gap-6">
            {/* Anyone Radio */}
            <label className="flex items-center cursor-pointer group">
              <div className="relative mr-2">
                <input
                  type="radio"
                  name="message"
                  value="anyone"
                  checked={messageOption === 'anyone'}
                  onChange={(e) => setMessageOption(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  messageOption === 'anyone'
                    ? 'bg-white border-white shadow-inner'
                    : 'bg-gradient-to-b from-white to-gray-100 border-white shadow-inner'
                }`}>
                  {messageOption === 'anyone' && (
                    <div className="absolute top-[3px] left-[3px] w-2 h-2 rounded-full bg-gradient-to-b from-[#3CA7FC] to-[#2F74E2]"></div>
                  )}
                </div>
              </div>
              <span className={`text-white text-xs font-medium ${poppins.className} select-none`}>
                Anyone
              </span>
            </label>

            {/* Only People You Radio */}
            <label className="flex items-center cursor-pointer group">
              <div className="relative mr-2">
                <input
                  type="radio"
                  name="message"
                  value="only-people"
                  checked={messageOption === 'only-people'}
                  onChange={(e) => setMessageOption(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  messageOption === 'only-people'
                    ? 'bg-white border-white shadow-inner'
                    : 'bg-gradient-to-b from-white to-gray-100 border-white shadow-inner'
                }`}>
                  {messageOption === 'only-people' && (
                    <div className="absolute top-[3px] left-[3px] w-2 h-2 rounded-full bg-gradient-to-b from-[#3CA7FC] to-[#2F74E2]"></div>
                  )}
                </div>
              </div>
              <span className={`text-white text-xs font-medium ${poppins.className} select-none`}>
                Only People You
              </span>
            </label>
          </div>
        </div>

        {/* Users who can see your Profile */}
        <div className="mb-8">
          <h3 className={`text-white font-normal text-sm mb-4 ${poppins.className}`}>
            Users who can see your Profile
          </h3>
          
          <div className="flex flex-wrap gap-6">
            {/* Anyone Radio */}
            <label className="flex items-center cursor-pointer group">
              <div className="relative mr-2">
                <input
                  type="radio"
                  name="profile"
                  value="anyone"
                  checked={profileOption === 'anyone'}
                  onChange={(e) => setProfileOption(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  profileOption === 'anyone'
                    ? 'bg-white border-white shadow-inner'
                    : 'bg-gradient-to-b from-white to-gray-100 border-white shadow-inner'
                }`}>
                  {profileOption === 'anyone' && (
                    <div className="absolute top-[3px] left-[3px] w-2 h-2 rounded-full bg-gradient-to-b from-[#3CA7FC] to-[#2F74E2]"></div>
                  )}
                </div>
              </div>
              <span className={`text-white text-xs font-normal ${poppins.className} select-none`}>
                Anyone
              </span>
            </label>

            {/* Only People You Know Radio */}
            <label className="flex items-center cursor-pointer group">
              <div className="relative mr-2">
                <input
                  type="radio"
                  name="profile"
                  value="only-people-know"
                  checked={profileOption === 'only-people-know'}
                  onChange={(e) => setProfileOption(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  profileOption === 'only-people-know'
                    ? 'bg-white border-white shadow-inner'
                    : 'bg-gradient-to-b from-white to-gray-100 border-white shadow-inner'
                }`}>
                  {profileOption === 'only-people-know' && (
                    <div className="absolute top-[3px] left-[3px] w-2 h-2 rounded-full bg-gradient-to-b from-[#3CA7FC] to-[#2F74E2]"></div>
                  )}
                </div>
              </div>
              <span className={`text-white text-xs font-normal ${poppins.className} select-none`}>
                Only People You Know
              </span>
            </label>

            {/* No One Radio */}
            <label className="flex items-center cursor-pointer group">
              <div className="relative mr-2">
                <input
                  type="radio"
                  name="profile"
                  value="no-one"
                  checked={profileOption === 'no-one'}
                  onChange={(e) => setProfileOption(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  profileOption === 'no-one'
                    ? 'bg-white border-white shadow-inner'
                    : 'bg-gradient-to-b from-white to-gray-100 border-white shadow-inner'
                }`}>
                  {profileOption === 'no-one' && (
                    <div className="absolute top-[3px] left-[3px] w-2 h-2 rounded-full bg-gradient-to-b from-[#3CA7FC] to-[#2F74E2]"></div>
                  )}
                </div>
              </div>
              <span className={`text-white text-xs font-normal ${poppins.className} select-none`}>
                No One
              </span>
            </label>
          </div>
        </div>

        {/* Timezone Dropdown */}
        <button className="inline-flex items-center gap-2 px-3 py-1 border border-white/60 rounded-lg hover:bg-white/5 transition-colors">
          <span className={`text-white text-[10px] font-medium leading-6 ${poppins.className}`}>
            Timezone
          </span>
         <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.95906 4.97461L6.69906 8.23461C6.31406 8.61961 5.68406 8.61961 5.29906 8.23461L2.03906 4.97461" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
      </div>
  );
}