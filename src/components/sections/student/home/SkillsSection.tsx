import { useState } from 'react';
import Badge from './Badge';

export default function DesignAssessment() {
  const [skills, setSkills] = useState([
    { id: 1, name: 'Mobile UI/UX Design', rating: 4, progress: 90 },
    { id: 2, name: 'Interaction Design', rating: 4, progress: 90 },
    { id: 3, name: 'Responsive Web Design', rating: 4, progress: 90 },
    { id: 4, name: 'User Research', rating: 4, progress: 90 },
    { id: 5, name: 'Information Architecture', rating: 0, progress: 0 },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editRating, setEditRating] = useState(0);

  const startEdit = (skill) => {
    setEditingId(skill.id);
    setEditRating(skill.rating);
  };

  const saveEdit = (id) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id
          ? {
            ...skill,
            rating: editRating,
            progress: Math.round((editRating / 5) * 100),
          }
          : skill
      )
    );
    setEditingId(null);
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const getStatusColor = (progress) => {
    if (progress === 0) return 'border-[#FF003B]';
    return 'border-[#52B447]';
  };

  const getStatusBg = (progress) => {
    if (progress === 0) return 'bg-[rgba(255,0,59,0.03)]';
    return 'bg-[rgba(82,180,71,0.11)]';
  };

  const getStatusLabel = (progress) => {
    return progress === 0 ? 'Not Assessed' : 'Assessed';
  };

  const renderStars = (rating, isEditing = false) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => {
              if (isEditing) {
                setEditRating(star);
              }
            }}
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center transition-all ${isEditing ? 'cursor-pointer hover:scale-110' : 'cursor-default'
              }`}
          >
            {star <= rating ? (
              <svg
                className="w-full h-full"
                fill="#FFB700"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ) : (
              <svg
                className="w-full h-full"
                fill="none"
                stroke="#FFB700"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            )}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-5">
      <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full"
          >
            {/* Skill Name - Left */}
            <div className="w-full sm:w-32 md:w-40 lg:w-56 flex-shrink-0">
              {editingId === skill.id ? (
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => {
                    setSkills(
                      skills.map((s) =>
                        s.id === skill.id ? { ...s, name: e.target.value } : s
                      )
                    );
                  }}
                  className="w-full bg-gray-700 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm md:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ) : (
                <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-normal text-white truncate">
                  {skill.name}
                </h3>
              )}
            </div>

            {/* Stars - Second Column */}
            <div className="w-20 sm:w-24 md:w-28 lg:w-32 flex-shrink-0">
              {editingId === skill.id ? (
                renderStars(editRating, true)
              ) : (
                renderStars(skill.rating, false)
              )}
            </div>

            {/* Progress Bar - Third Column */}
            <div className="flex-1 min-w-0">
              <div className="relative h-2 sm:h-2.5 md:h-3 lg:h-3.5 bg-gray-600 rounded-full overflow-hidden">
                {/* Progress Fill */}
                <div
                  className={`h-full rounded-full transition-all duration-300 flex items-center justify-end pr-0.5 sm:pr-1 ${skill.progress === 0 ? 'bg-red-500' : 'bg-green-500'
                    }`}
                  style={{ width: `${skill.progress}%` }}
                >
                  {skill.progress > 15 && skill.progress < 100 && (
                    <span className="text-white text-[8px] sm:text-xs md:text-xs lg:text-sm font-bold whitespace-nowrap">
                      {skill.progress}%
                    </span>
                  )}
                </div>

                {/* Dots */}
                <div className="absolute inset-0 flex items-center justify-between px-0.5 sm:px-1 pointer-events-none">
                  {[0, 1, 2, 3, 4].map((index) => {
                    const percentage = (index + 1) * 20;
                    const isDone = percentage <= skill.progress;
                    return (
                      <div
                        key={index}
                        className={`w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full ${isDone ? 'bg-white' : 'bg-blue-200'
                          }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Status Badge - Fourth Column */}
            {/* <div
                className={`px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full border-2 ${getStatusColor(
                  skill.progress
                )} ${getStatusBg(skill.progress)} w-full sm:w-28 md:w-32 lg:w-36 flex-shrink-0 text-center`}
              >
                <span className="text-xs sm:text-xs md:text-sm lg:text-sm font-normal opacity-80 inline-block truncate">
                  {getStatusLabel(skill.progress)}
                </span>
              </div> */}
            <Badge label={getStatusLabel(skill.progress)} className={skill.progress === 0 ? 'bg-[rgba(255,0,59,0.03)] border-[#FF003B]' : 'bg-[rgba(82,180,71,0.11)] border-[#52B447]'} />

            {/* Action Buttons - Right */}
            {/* <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                <button
                  onClick={() => {
                    if (editingId === skill.id) {
                      saveEdit(skill.id);
                    } else {
                      startEdit(skill);
                    }
                  }}
                  className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 transition-all transform hover:scale-110 active:scale-95"
                >
                  <span className="text-white text-xs sm:text-sm md:text-base font-bold">
                    E
                  </span>
                </button>
                <button
                  onClick={() => deleteSkill(skill.id)}
                  className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white hover:bg-gray-100 transition-all transform hover:scale-110 active:scale-95"
                >
                  <span className="text-gray-900 text-xs sm:text-sm md:text-base font-bold">
                    T
                  </span>
                </button>
              </div> */}

            <div className="flex items-center gap-2 ml-4"
            >
              <button className="w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                onClick={() => {
                  if (editingId === skill.id) {
                    saveEdit(skill.id);
                  } else {
                    startEdit(skill);
                  }
                }}
              >
                <svg
                  width={27}
                  height={27}
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <path
                    d="M-0.000221252 13.5702C-0.000221252 6.35161 5.85161 0.499779 13.0702 0.499779C20.2888 0.499779 26.1406 6.35161 26.1406 13.5702C26.1406 20.7888 20.2888 26.6406 13.0702 26.6406C5.85161 26.6406 -0.000221252 20.7888 -0.000221252 13.5702ZM24.3462 13.5702C24.3462 7.34262 19.2978 2.29417 13.0702 2.29417C6.84262 2.29417 1.79417 7.34262 1.79417 13.5702C1.79417 19.7978 6.84262 24.8462 13.0702 24.8462C19.2978 24.8462 24.3462 19.7978 24.3462 13.5702Z"
                    fill="url(#paint0_linear_1264_71051)"
                  />
                  <path
                    d="M7.92102 18.583H8.95576L16.0537 11.485L15.019 10.4503L7.92102 17.5483V18.583ZM6.46875 20.0353V16.9492L16.0537 7.38237C16.199 7.24925 16.3593 7.14638 16.5348 7.07376C16.7103 7.00115 16.8948 6.96484 17.0885 6.96484C17.2821 6.96484 17.4697 7.00115 17.6512 7.07376C17.8328 7.14638 17.9901 7.2553 18.1232 7.40052L19.1216 8.41711C19.2669 8.55024 19.3728 8.70757 19.4393 8.8891C19.5059 9.07063 19.5392 9.25217 19.5392 9.4337C19.5392 9.62734 19.5059 9.8119 19.4393 9.98738C19.3728 10.1629 19.2669 10.3232 19.1216 10.4684L9.55482 20.0353H6.46875ZM15.5273 10.9767L15.019 10.4503L16.0537 11.485L15.5273 10.9767Z"
                    fill="url(#paint1_linear_1264_71051)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1264_71051"
                      x1="-0.000221747"
                      y1="13.6432"
                      x2="26.1406"
                      y2="13.4972"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#CE2D52" />
                      <stop offset="1" stopColor="#F05921" />
                    </linearGradient>

                    <linearGradient
                      id="paint1_linear_1264_71051"
                      x1="19.5392"
                      y1="13.4234"
                      x2="6.46875"
                      y2="13.5767"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#CE2D52" />
                      <stop offset="1" stopColor="#F05921" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>

              <button
                onClick={() => deleteSkill(skill.id)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <path
                    d="M0 13.5C0 6.3203 5.8203 0.5 13 0.5C20.1797 0.5 26 6.3203 26 13.5C26 20.6797 20.1797 26.5 13 26.5C5.8203 26.5 0 20.6797 0 13.5ZM24.05 13.5C24.05 7.39725 19.1027 2.45 13 2.45C6.89725 2.45 1.95 7.39725 1.95 13.5C1.95 19.6027 6.89725 24.55 13 24.55C19.1027 24.55 24.05 19.6027 24.05 13.5Z"
                    fill="white"
                  />
                  <g clipPath="url(#clip0_1264_71050)">
                    <path
                      d="M9.48533 20.5234C9.23872 20.4209 9.06081 20.2638 9.03827 19.9798C9.0196 19.7431 9.00304 19.506 8.98789 19.2689C8.87046 17.526 8.75303 15.7833 8.6356 14.0409C8.58158 13.2466 8.52627 12.4522 8.46967 11.6576C8.46403 11.584 8.48341 11.5615 8.55211 11.5696C8.57404 11.571 8.59605 11.571 8.61798 11.5696C11.5364 11.5696 14.4548 11.5685 17.3731 11.5664C17.5028 11.5664 17.531 11.596 17.5208 11.7239C17.4394 12.7677 17.365 13.8123 17.2889 14.8565C17.2326 15.6287 17.1766 16.401 17.1209 17.1735C17.0519 18.1165 16.9814 19.0597 16.9095 20.0031C16.888 20.2849 16.7038 20.4322 16.4586 20.5231L9.48533 20.5234ZM13.9753 15.8341C13.9753 16.7183 13.9753 17.6025 13.9753 18.4865C13.9753 18.7683 14.1962 18.9469 14.4526 18.8842C14.633 18.8402 14.7376 18.682 14.7376 18.4481C14.7376 16.7101 14.7376 14.9721 14.7376 13.2342C14.7387 13.2034 14.7377 13.1725 14.7348 13.1419C14.7253 13.0465 14.68 12.9582 14.6082 12.8947C14.5363 12.8312 14.4432 12.7972 14.3473 12.7994C14.1282 12.8026 13.9742 12.9668 13.9739 13.2067C13.9739 14.0832 13.9743 14.959 13.9753 15.8341ZM11.2559 15.8341V17.5099C11.2559 17.84 11.2531 18.1698 11.2559 18.4999C11.2591 18.769 11.4828 18.9452 11.7347 18.8832C11.9109 18.8398 12.0165 18.6834 12.0165 18.4604C12.0165 16.7142 12.0165 14.9679 12.0165 13.2215C12.0174 13.195 12.0167 13.1686 12.0144 13.1422C12.0044 13.0426 11.9553 12.951 11.878 12.8873C11.8006 12.8237 11.7013 12.7933 11.6015 12.8026C11.3902 12.8192 11.2538 12.9809 11.2535 13.2215C11.2544 14.0926 11.2552 14.9637 11.2559 15.8348V15.8341Z"
                      fill="white"
                    />
                    <path
                      d="M14.9547 7C15.17 7.08138 15.2612 7.23463 15.251 7.46573C15.2397 7.71233 15.2461 7.95894 15.251 8.20554C15.251 8.276 15.2355 8.30348 15.1576 8.30348C13.7196 8.3009 12.2816 8.3009 10.8438 8.30348C10.7656 8.30348 10.7498 8.276 10.7508 8.20519C10.7543 7.95859 10.761 7.71198 10.7508 7.46538C10.7402 7.23392 10.8325 7.08138 11.0471 7H14.9547Z"
                      fill="white"
                    />
                    <path
                      d="M12.9951 10.8069C11.2431 10.8069 9.49152 10.8048 7.73957 10.8108C7.59865 10.8108 7.57223 10.7706 7.57963 10.6431C7.59619 10.3612 7.55532 10.0794 7.59936 9.80004C7.66629 9.37447 8.00837 9.08101 8.43887 9.06445C8.47832 9.06445 8.51813 9.06445 8.55759 9.06445H17.4308C18.0501 9.06445 18.407 9.41992 18.4073 10.0364C18.4073 10.2478 18.3982 10.4592 18.4105 10.6706C18.4179 10.7946 18.3732 10.8115 18.2636 10.8115C16.5068 10.8056 14.7507 10.8041 12.9951 10.8069Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1264_71050">
                      <rect width="10.8333" height="13.5238" fill="white" transform="translate(7.57812 7)" />
                    </clipPath>
                  </defs>
                </svg>

              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Mode Indicator */}
      {editingId && (
        <div className="fixed bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 max-w-md mx-auto bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-lg text-center text-xs sm:text-sm md:text-base">
          Editing mode - Click edit button again to save changes
        </div>
      )}
    </div>
  );
}