"use client"
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed bg-gray-900 top-0 left-0 w-full h-[78px] border-b border-white/22 bg-cover bg-center z-50">
            <div className="w-full max-w-none md:max-w-screen-2xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-6">
                    <div className="w-[80px] sm:w-[105px] h-[40px] sm:h-[50px] flex items-center">
                        <Image 
                            src={'/logo/logo.png'} 
                            alt="logo" 
                            width={120}
                            height={60}
                            className="object-contain" 
                        />
                    </div>

                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6 xl:ml-20">
                        <Link className={`${poppins.className} font-bold text-[12px] xl:text-[14px] leading-[22px] text-white tracking-[-0.4px] hover:opacity-80 transition-opacity`} href="/student/home">Home</Link>
                        <Link className={`${poppins.className} font-bold text-[12px] xl:text-[14px] leading-[22px] text-white tracking-[-0.4px] hover:opacity-80 transition-opacity`} href="/student">Dashboard</Link>
                        <Link className={`${poppins.className} font-bold text-[12px] xl:text-[14px] leading-[22px] text-white tracking-[-0.4px] hover:opacity-80 transition-opacity`} href="/operational-logs">Jobs</Link>
                        <Link className={`${poppins.className} font-bold text-[12px] xl:text-[14px] leading-[22px] text-white tracking-[-0.4px] hover:opacity-80 transition-opacity`} href="/user-management">Message</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                    <button className="hover:opacity-80 transition-opacity" aria-label="Notifications">
                        <svg
                            width={28}
                            height={34}
                            viewBox="0 0 32 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-7 sm:w-7 sm:h-8 lg:w-8 lg:h-9"
                        >
                            <path
                                d="M16.002 2.63574C16.3653 2.63645 16.7137 2.78112 16.9707 3.03809C17.2284 3.29576 17.373 3.64536 17.373 4.00977C17.373 4.37423 17.2284 4.72374 16.9707 4.98145C16.713 5.23915 16.3635 5.38379 15.999 5.38379C15.3827 5.38382 14.2707 5.48679 13.0762 5.81348C11.9467 6.11905 10.8483 6.59631 10.0254 7.27637L9.86426 7.41504C7.643 9.41889 6.79004 12.1198 6.79004 16.7324C6.78986 19.8121 5.028 22.7726 3.69629 24.7646L3.69531 24.7656C3.40063 25.2096 3.26186 25.6643 3.24902 26.0254L3.25098 26.1738C3.26326 26.3578 3.31057 26.4882 3.36621 26.5811V26.5801C3.42764 26.6839 3.52331 26.7782 3.67676 26.8613L3.67969 26.8623C5.05427 27.5972 7.07971 28.1134 9.36035 28.4365L9.36426 28.4375C11.5634 28.7327 13.7801 28.877 15.999 28.873V28.874C16.3635 28.874 16.713 29.0196 16.9707 29.2773C17.2283 29.535 17.373 29.8846 17.373 30.249C17.3729 30.6133 17.2283 30.9631 16.9707 31.2207C16.713 31.4782 16.3633 31.623 15.999 31.623C13.902 31.623 11.3854 31.5017 8.97461 31.1592C6.59066 30.8189 4.1833 30.2475 2.38281 29.2861H2.38184C1.17225 28.6388 0.58784 27.5195 0.509766 26.3604V26.3584C0.432876 25.256 0.806919 24.1439 1.41113 23.2393C2.75233 21.2302 4.0418 18.8953 4.04199 16.7324C4.04199 11.8025 4.95389 8.14237 8.02441 5.375C9.30267 4.22187 10.9273 3.55038 12.3545 3.16211L12.3564 3.16113C13.5443 2.8317 14.7694 2.6551 16.002 2.63574Z"
                                fill="#EBF0F7"
                                stroke="black"
                            />
                            <path
                                d="M15.9951 2.63574C17.228 2.65499 18.4534 2.83162 19.6416 3.16113L19.6445 3.16211C21.0717 3.5504 22.6955 4.22199 23.9736 5.375H23.9746C27.0448 8.14233 27.9561 11.8027 27.9561 16.7324C27.9562 18.8953 29.2458 21.2302 30.5869 23.2393H30.5879C31.1921 24.1439 31.5652 25.256 31.4883 26.3584V26.3604C31.4102 27.5199 30.8255 28.6389 29.6152 29.2861C27.8147 30.2475 25.4074 30.8189 23.0234 31.1592C20.6107 31.5017 18.0959 31.623 15.999 31.623C15.6347 31.623 15.285 31.4783 15.0273 31.2207C14.7697 30.9631 14.6251 30.6133 14.625 30.249C14.625 29.8847 14.7698 29.535 15.0273 29.2773C15.285 29.0197 15.6346 28.874 15.999 28.874V28.873C18.2181 28.877 20.4354 28.7327 22.6348 28.4375L22.6377 28.4365C24.9185 28.1134 26.9447 27.5973 28.3193 26.8623L28.3213 26.8613C28.4788 26.776 28.5765 26.6794 28.6377 26.5723L28.6436 26.5615C28.7082 26.4417 28.7419 26.3085 28.7461 26.1729L28.7471 26.1738C28.7727 25.7942 28.6394 25.2729 28.3027 24.7656V24.7646L27.7871 23.9736C26.5576 22.0304 25.2082 19.4272 25.208 16.7324C25.208 12.1199 24.3559 9.41888 22.1348 7.41504H22.1338C21.2964 6.66059 20.1266 6.13941 18.9219 5.81348H18.9209C17.7267 5.48701 16.6151 5.38379 15.999 5.38379C15.6346 5.38377 15.285 5.23913 15.0273 4.98145C14.7697 4.72375 14.625 4.37415 14.625 4.00977C14.625 3.64536 14.7697 3.29576 15.0273 3.03809C15.2841 2.78132 15.6321 2.6368 15.9951 2.63574Z"
                                fill="#EBF0F7"
                                stroke="black"
                            />
                            <path
                                d="M16.2754 0.758301C17.5707 0.758361 18.6357 1.18344 19.3691 1.7417C20.1242 2.3165 20.4599 2.97285 20.46 3.40674C20.46 3.43512 20.4554 3.45284 20.4531 3.46338C20.4432 3.46805 20.4268 3.47615 20.3994 3.48291C20.2308 3.52445 19.9312 3.51314 19.4707 3.44092C19.0123 3.36901 18.5375 3.26501 17.9668 3.16455C17.4227 3.06878 16.8369 2.98587 16.2754 2.98584C15.7139 2.98584 15.1281 3.06882 14.584 3.16455C14.0133 3.26497 13.5374 3.36915 13.0791 3.44092C12.619 3.51295 12.3199 3.52449 12.1514 3.48291C12.1224 3.47574 12.1053 3.46711 12.0957 3.4624C12.0934 3.45176 12.0898 3.43346 12.0898 3.40479C12.09 2.97198 12.4254 2.3154 13.1807 1.74072C13.9142 1.18261 14.98 0.758301 16.2754 0.758301Z"
                                fill="#EBF0F7"
                                stroke="black"
                            />
                            <path
                                d="M11.7783 30.7446C11.89 31.6871 12.3144 32.5706 12.9922 33.2485C13.7888 34.0452 14.8695 34.4926 15.9961 34.4927C17.1227 34.4927 18.2033 34.0452 19 33.2485C19.6779 32.5706 20.1022 31.6872 20.2139 30.7446H22.9727C22.8528 32.4175 22.1371 33.9981 20.9434 35.1919C19.6313 36.504 17.8516 37.2417 15.9961 37.2417C14.1407 37.2416 12.3608 36.504 11.0488 35.1919C9.85531 33.9982 9.14032 32.4173 9.02051 30.7446H11.7783Z"
                                fill="#EBF0F7"
                                stroke="black"
                            />
                        </svg>
                    </button>

                    <div className="flex items-center flex-col">
                        <button className="flex flex-col items-center focus:outline-none hover:opacity-80 transition-opacity" aria-haspopup="true" aria-expanded="false">
                            <div className="rounded-full" aria-hidden="true">
                                <Image 
                                    src={'/images/profile.png'} 
                                    alt="profile" 
                                    width={40} 
                                    height={40}
                                    className="w-8 h-8 sm:w-10 sm:h-10"
                                />
                            </div>
                            <span className={`text-[12px] sm:text-[14px] ${poppins.className} font-bold leading-[22px] text-[#EBF0F7] hidden sm:block`}>Profile</span>
                        </button>
                    </div>

                    <button className="lg:hidden flex flex-col gap-1 hover:opacity-80 transition-opacity" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden fixed top-[78px] left-0 w-full bg-black/95 backdrop-blur-sm border-b border-white/22 z-40">
                    <nav className="flex flex-col px-4 py-6 gap-4">
                        <Link className={`${poppins.className} font-bold text-[14px] leading-[22px] text-white tracking-[-0.4px] hover:opacity-80 transition-opacity py-2`} href="/student" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link className={`${poppins.className} font-bold text-[14px] leading-[22px] text-white tracking-[-0.4px] hover:opacity-80 transition-opacity py-2`} href="/" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                        <Link className={`${poppins.className} font-bold text-[14px] leading-[22px] text-white tracking-[-0.4px] hover:opacity-80 transition-opacity py-2`} href="/operational-logs" onClick={() => setIsMenuOpen(false)}>Jobs</Link>
                        <Link className={`${poppins.className} font-bold text-[14px] leading-[22px] text-white tracking-[-0.4px] hover:opacity-80 transition-opacity py-2`} href="/user-management" onClick={() => setIsMenuOpen(false)}>Message</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}