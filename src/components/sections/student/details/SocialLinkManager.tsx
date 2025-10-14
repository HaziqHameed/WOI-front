'use client';

import { Poppins } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { ExperienceSection } from '../home/ExperienceSection';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

// Generic type for any data structure with required fields
interface LinkItem {
  id: string;
  url?: string;
  platform?: string;
  icon?: string;
  [key: string]: any;
  job?: string;
  date?: string;
  description?: string;
  degree?: string;
  university?: string;
  tagDescription?:React.ReactNode;
}

interface SocialLinksManagerProps<T extends LinkItem = LinkItem> {
  initialLinks: T[];
  title?: string;
  addButtonText?: string;
  onLinksChange?: (links: T[]) => void;
  onSave?: (links: T[]) => Promise<void>;
  isLoading?: boolean;
  defaultPlatform?: string;
  platformOptions?: { value: string; label: string }[];
  icon?: React.ReactNode;
  type?: string;
}

const LinkedInIcon = () => (
  <div className="relative w-[31px] h-[31px] flex-shrink-0">
    <div className="absolute inset-0 rounded-full bg-white"></div>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 31 31" fill="none">
      <circle cx="15.5" cy="15.5" r="15.5" fill="#3B82F6" />
      <path d="M11.5 13.5H8.5V22.5H11.5V13.5Z" fill="white" />
      <path d="M10 8.5C8.89543 8.5 8 9.39543 8 10.5C8 11.6046 8.89543 12.5 10 12.5C11.1046 12.5 12 11.6046 12 10.5C12 9.39543 11.1046 8.5 10 8.5Z" fill="white" />
      <path d="M19.5 13.25C17.7051 13.25 16.5 14.4551 16.5 16.25V22.5H13.5V13.5H16.5V14.75C17.1667 13.9167 18.2949 13.25 19.5 13.25C21.9853 13.25 23.5 14.7647 23.5 17.25V22.5H20.5V17.5C20.5 16.3954 19.6046 15.5 18.5 15.5C17.3954 15.5 16.5 16.3954 16.5 17.5V22.5H19.5V13.25Z" fill="white" />
    </svg>
  </div>
);

const DefaultIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1264_49813)">
      <circle cx="15" cy="16" r="13" fill="white" />
      <path d="M14.5325 0H16.47C16.5464 0.0218667 16.6243 0.0384557 16.7031 0.0496489C19.1165 0.23129 21.3761 0.922735 23.4347 2.18998C27.4356 4.65363 29.8999 8.19623 30.7608 12.8293C30.8656 13.3918 30.9207 13.9633 30.9988 14.5312V16.4688C30.974 16.6673 30.9461 16.8659 30.9249 17.0651C30.5925 20.1306 29.4821 22.8776 27.5252 25.2656C25.0918 28.2324 21.9791 30.0718 18.198 30.7602C17.6258 30.8644 17.0446 30.9213 16.4675 31.0024H14.5325C14.154 30.9558 13.775 30.9152 13.3978 30.862C10.5364 30.4551 7.96979 29.3652 5.73742 27.5276C2.77426 25.0912 0.928789 21.9828 0.242187 18.2034C0.138047 17.63 0.0805273 17.0488 0 16.4712V14.5312C0.0248242 14.3327 0.0514662 14.1347 0.073263 13.9355C0.431701 10.652 1.67352 7.74879 3.8635 5.27363C6.27205 2.54902 9.27154 0.859159 12.8596 0.23371C13.4148 0.137441 13.9754 0.0768945 14.5325 0ZM16.8587 23.4207C16.8587 22.4453 16.8587 21.4984 16.8587 20.5514C16.8635 19.2703 16.8587 17.9891 16.8865 16.7091C16.9023 16.014 17.271 15.4824 17.8347 15.1052C18.9282 14.3738 20.308 14.863 20.6628 16.1242C20.7738 16.5528 20.8279 16.9942 20.8239 17.4369C20.8408 19.3229 20.8312 21.2096 20.8312 23.0962V23.4117H24.5923C24.5972 23.3124 24.6044 23.233 24.6044 23.1531C24.6044 21.0848 24.6087 19.0172 24.6008 16.9489C24.5973 16.5358 24.5704 16.1232 24.5203 15.7131C24.2563 13.4886 22.9255 12.0852 20.7833 11.8381C19.2412 11.6619 17.9376 12.13 17.0155 13.4535C16.9662 13.5127 16.9136 13.5691 16.8581 13.6224C16.8581 13.155 16.8466 12.7542 16.8623 12.3546C16.8714 12.1306 16.8018 12.0591 16.5741 12.0615C15.4945 12.073 14.415 12.0664 13.3361 12.0676C13.2586 12.0712 13.1814 12.0789 13.1048 12.0906V23.4207H16.8587ZM10.9856 23.4207C10.9923 23.3438 11.0002 23.2948 11.0002 23.2464C11.0002 19.6039 11.002 15.9616 11.0056 12.3195C11.0056 12.0846 10.9003 12.0628 10.7126 12.064C9.64269 12.0694 8.57344 12.064 7.50357 12.0676C7.41578 12.0676 7.32799 12.0803 7.23959 12.0876V23.4207L10.9856 23.4207ZM7.00467 8.56436C7.00467 9.71475 7.88623 10.5333 9.11412 10.5273C10.3511 10.5206 11.2496 9.69961 11.2484 8.57586C11.2484 7.42547 10.3668 6.60203 9.14318 6.60022C7.88441 6.59961 7.00406 7.4067 7.00467 8.56436Z" fill="#3B82F6" />
    </g>
    <defs>
      <clipPath id="clip0_1264_49813">
        <rect width="31" height="31" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function SocialLinksManager<T extends LinkItem = LinkItem>({
  initialLinks,
  title = '',
  addButtonText = '',
  onLinksChange,
  onSave,
  isLoading = false,
  defaultPlatform = 'LinkedIn',
  platformOptions = [
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'github', label: 'GitHub' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'portfolio', label: 'Portfolio' },
  ],
  icon = '',
  type = ''
}: SocialLinksManagerProps<T>) {
  const [links, setLinks] = useState<T[]>(initialLinks);
  const [isAdding, setIsAdding] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newPlatform, setNewPlatform] = useState(defaultPlatform);
  const [error, setError] = useState('');
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleAdd = async () => {
    if (!newUrl.trim()) {
      setError('URL is required');
      return;
    }

    try {
      new URL(newUrl);
    } catch {
      setError('Please enter a valid URL');
      return;
    }

    const newLink = {
      id: Date.now().toString(),
      platform: newPlatform,
      url: newUrl,
      icon: newPlatform.toLowerCase(),
    } as T;

    const updatedLinks = [...links, newLink];
    setLinks(updatedLinks);
    onLinksChange?.(updatedLinks);

    if (onSave) {
      await onSave(updatedLinks);
    }

    setNewUrl('');
    setNewPlatform(defaultPlatform);
    setIsAdding(false);
    setError('');
  };

  const handleDelete = async (id: string) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
    onLinksChange?.(updatedLinks);

    if (onSave) {
      await onSave(updatedLinks);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  useEffect(() => {
    setLinks(links);
  }, [links])

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      setLineHeight(height);
    }
  }, [links, isAdding]);

  return (
    <div className="flex mt-5">
      <div className="w-full max-w-6xl">
        <div className="relative">
          <div className={`absolute left-6 ${type !== 'experience' ? 'top-10' : 'top-12'} flex flex-col items-center pointer-events-none`}>
            {/* Vertical line connecting all dots */}
            {links.length > 0 && (
              <div
                className="w-[2px] bg-[#F05921] transition-all duration-300 ease-in-out"
                style={type === 'education' ? { height: `${lineHeight - 32}px`, marginLeft: '-1px' }: { height: `${lineHeight - 60}px`, marginLeft: '-1px' }}
              ></div>
            )}
          </div>

          <div className="absolute left-0 top-0">
            {icon}
          </div>

          {/* Timeline dots and content */}
          <div className="ml-[55px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
              <h2 className={`text-white ${poppins.className} font-bold text-2xl leading-9 ml-16`}>
                {title}
              </h2>
              <button
                type="button"
                onClick={() => setIsAdding(true)}
                disabled={isLoading}
                className={`
        inline-flex items-center justify-center gap-[10px]
        px-4 py-2
        w-full max-w-[178px] h-[43px]
        bg-gradient-to-r from-[#FFA844] to-[#FF6D68]
        rounded-[8px]
        ${poppins.className} font-bold
        text-[16px] leading-[120%] text-white
        transition-transform duration-150
        hover:scale-[1.02] active:scale-[0.99]
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
              >
                <span className="flex-none">{addButtonText}</span>
              </button>
            </div>

            <div className={`ml-16 ${type === 'links' ? `space-y-0` : `space-y-5`}`} ref={containerRef}>
              {links.map((link, index) => (
                <div key={link.id} className="relative flex">
                  {/* Dot positioned absolutely */}
                  <div className={`absolute -left-26 ${type !== 'links' ? 'top-18':'top-3'} w-[18.91px] h-[18.91px] rounded-full bg-[#F05921] border-2 border-[#F05921] flex-shrink-0`}></div>

                  {/* Link content */}
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-3 flex items-start justify-between group hover:bg-white/15 transition-colors w-full">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {type === 'links' && (
                        <>
                          <DefaultIcon />

                          <div className="flex flex-col flex-1 min-w-0">
                            <span
                              className={`text-white ${poppins.className} text-xs leading-[18px] truncate`}
                              title={link.url}
                            >
                              {link.url}
                            </span>
                          </div>
                        </>
                      )}
                      {(type !== 'links') && (
                        <ExperienceSection
                          job={link.job ?? link.degree}
                          date={link.date}
                          description={link.description ?? link.university ?? link?.tagDescription}
                        />
                      )}
                    </div>

                    <div className="flex items-center gap-2 ml-4 mt-2">
                      <button className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors disabled:opacity-50">
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
                        onClick={() => handleDelete(link.id)}
                        disabled={isLoading}
                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-400 transition-colors disabled:opacity-50"
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
                </div>
              ))}

              {isAdding && (
                <div className="relative flex">
                  {/* Dot for new item being added */}
                  <div className="absolute left-[-47px] top-3 w-[18.91px] h-[18.91px] rounded-full bg-[#F05921]/50 border-2 border-[#F05921] flex-shrink-0"></div>

                  <div className="bg-white/10 backdrop-blur-sm px-4 py-3 flex flex-col gap-3 w-full">
                    <div className="flex items-center gap-4">
                      <LinkedInIcon />
                      <select
                        value={newPlatform}
                        onChange={(e) => setNewPlatform(e.target.value)}
                        className={`bg-white/20 text-white px-3 py-2 rounded border border-white/30 focus:outline-none focus:border-[#F05921] ${poppins.className} text-xs`}
                      >
                        {platformOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-gray-900">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      type="text"
                      value={newUrl}
                      onChange={(e) => {
                        setNewUrl(e.target.value);
                        setError('');
                      }}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter social media URL"
                      className={`w-full bg-white/20 text-white placeholder-white/50 px-3 py-2 rounded border border-white/30 focus:outline-none focus:border-[#F05921] ${poppins.className} text-xs`}
                      autoFocus
                    />
                    {error && (
                      <p className={`text-red-400 ${poppins.className} text-xs`}>{error}</p>
                    )}
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        onClick={handleAdd}
                        disabled={isLoading}
                        className="px-4 py-1.5 bg-gradient-to-r from-[#FFA844] to-[#FF6D68] text-white rounded text-sm font-semibold hover:opacity-90 disabled:opacity-50"
                      >
                        {isLoading ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        onClick={() => {
                          setIsAdding(false);
                          setNewUrl('');
                          setNewPlatform(defaultPlatform);
                          setError('');
                        }}
                        disabled={isLoading}
                        className="px-4 py-1.5 bg-white/20 text-white rounded text-sm font-semibold hover:bg-white/30 disabled:opacity-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}