import { StatCardProps } from "@/types/stats";
import React from "react";

export default function StatCard({ stat }: StatCardProps) {
  return (
    <article
      role="region"
      aria-label={stat.title}
      className="
        relative
        w-full
        min-h-[80px]
        sm:min-h-[85px]
        md:min-h-[90px]
        lg:min-h-[95px]
        xl:min-h-[100px]
        rounded-lg
        overflow-hidden
        flex-none
      "
    >
       <div className="absolute h-12 w-12 -right-8 top-1 z-10">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_1264_50886)">
                        <path
                            d="M11.7915 5.70865C11.793 6.83911 11.4484 7.94459 10.8013 8.88531C10.1542 9.82602 9.23376 10.5597 8.15629 10.9936C7.07882 11.4275 5.89273 11.5421 4.74803 11.3229C3.60333 11.1038 2.55141 10.5606 1.72531 9.76228C0.899209 8.96391 0.336026 7.94615 0.106975 6.83768C-0.122076 5.72922 -0.006709 4.57984 0.438494 3.5349C0.883696 2.48996 1.63874 1.59639 2.60814 0.967187C3.57753 0.33798 4.71774 0.00139442 5.88459 0C7.44822 0.00148167 8.94758 0.602958 10.0546 1.67281C11.1616 2.74267 11.7861 4.19379 11.7915 5.70865ZM0.901281 5.71711C0.901569 6.67371 1.19467 7.60874 1.7435 8.40395C2.29234 9.19916 3.07226 9.81883 3.98463 10.1846C4.897 10.5503 5.90083 10.6457 6.86917 10.4587C7.83752 10.2717 8.72687 9.81074 9.42476 9.13402C10.1226 8.45731 10.5977 7.59528 10.7899 6.65698C10.9821 5.71867 10.8827 4.74622 10.5044 3.86263C10.1261 2.97903 9.48576 2.22397 8.66447 1.69294C7.84318 1.16192 6.87779 0.878783 5.8904 0.879341C4.5668 0.880461 3.29782 1.39065 2.3623 2.29779C1.42678 3.20492 0.90128 4.43478 0.901281 5.71711Z"
                            fill="white"
                        />
                        <path
                            d="M5.44095 6.58476C5.44095 5.85338 5.44095 5.12201 5.44095 4.39064C5.43848 4.29291 5.47105 4.19738 5.53311 4.1203C5.59517 4.04322 5.68288 3.98936 5.78132 3.96788C5.87604 3.94298 5.97665 3.94974 6.06691 3.98707C6.15717 4.0244 6.23182 4.09012 6.27877 4.17362C6.31981 4.25088 6.3422 4.33617 6.34423 4.42305C6.34423 5.86794 6.34423 7.31237 6.34423 8.75632C6.35157 8.8681 6.31502 8.97844 6.24191 9.0652C6.16881 9.15197 6.06455 9.20876 5.95004 9.22418C5.84317 9.23817 5.73465 9.21459 5.64418 9.15771C5.55371 9.10083 5.48729 9.01442 5.45695 8.91415C5.44188 8.85184 5.43552 8.78786 5.43804 8.72391C5.44095 8.01086 5.44095 7.29781 5.44095 6.58476Z"
                            fill="white"
                        />
                        <path
                            d="M5.43896 2.85138C5.43896 2.76965 5.43896 2.68651 5.43896 2.60336C5.44646 2.49955 5.49185 2.40171 5.567 2.32735C5.64215 2.25299 5.74217 2.20696 5.84914 2.19751C5.9562 2.18689 6.06353 2.21497 6.15052 2.27635C6.23751 2.33774 6.29802 2.4281 6.32041 2.53008C6.34659 2.744 6.34659 2.96017 6.32041 3.17409C6.30115 3.27959 6.2403 3.37371 6.15073 3.43655C6.06116 3.4994 5.94989 3.52605 5.84041 3.51088C5.73359 3.50024 5.63423 3.45288 5.56033 3.37741C5.48642 3.30193 5.44284 3.2033 5.4375 3.09939C5.4375 3.01766 5.4375 2.93453 5.4375 2.85138H5.43896Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1264_50886">
                            <rect
                                width="11.7979"
                                height="11.4286"
                                fill="white"
                                transform="translate(-0.00390625)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>

      <div className={`absolute inset-0 ${stat.bgColor}`} aria-hidden />

      <div
        className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative flex flex-col items-start p-2 sm:p-3 md:p-4 gap-1 sm:gap-2 w-full h-full box-border">
        <div className="flex flex-row justify-between items-center gap-4 sm:gap-6 w-full">
          <div className="flex flex-col items-start gap-1 flex-1 min-w-0 ">
            <span
              className={`font-poppins flex flex-row ${
                stat?.titleIcon && "gap-1"
              } font-normal text-[9px] sm:text-[10px] leading-[14px] sm:leading-[15px] text-white truncate w-full`}
            >
              <span className="mt-[2px] flex-shrink-0">{stat.titleIcon}</span>
              <span className="truncate">{stat.title}</span>
            </span>

            <span className="font-poppins font-semibold text-base sm:text-lg md:text-xl leading-[20px] sm:leading-[22px] text-white">
              {stat.value}
            </span>
          </div>

          <div className="sm:mt-10">
            <div
            className="flex items-center justify-center rounded flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[rgba(0,0,0,0.2)]"
            aria-hidden
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center">
              {stat.icon}
            </div>
          </div>
          </div>
        </div>

        <div className="flex items-center gap-1 relative -ml-[2px]">
          <div className="w-3 h-3 sm:w-[13px] sm:h-[13px] rounded-full bg-[rgba(255,255,255,0.3)] flex items-center justify-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 h-2 sm:w-2.5 sm:h-2.5"
            >
              <path
                d="M7.79003 3.61159C7.74865 3.51014 7.6659 3.42659 7.56541 3.38482C7.51812 3.36692 7.46492 3.35498 7.41172 3.35498H6.31223C6.08169 3.35498 5.89845 3.53998 5.89845 3.77272C5.89845 4.00546 6.08169 4.19046 6.31223 4.19046H6.41863L5.17137 5.44964L4.56843 4.54255C4.49749 4.4411 4.39109 4.36949 4.26696 4.35755C4.13691 4.34562 4.0246 4.38739 3.93593 4.47691L2.17439 6.25528C2.01479 6.4164 2.01479 6.67898 2.17439 6.84608C2.25715 6.92963 2.35764 6.96543 2.46404 6.96543C2.57044 6.96543 2.67684 6.92366 2.75369 6.84608L4.16055 5.42577L4.7635 6.33286C4.83443 6.43431 4.94083 6.50592 5.06497 6.51786C5.19501 6.52979 5.30733 6.48802 5.39599 6.3985L7.00384 4.77529V4.88271C7.00384 5.11545 7.18709 5.30045 7.41763 5.30045C7.64816 5.30045 7.83141 5.11545 7.83141 4.88271V3.76675C7.81959 3.71304 7.81368 3.65933 7.79003 3.61159Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="font-poppins font-normal text-[8px] sm:text-[8.5px] leading-[12px] sm:leading-[13px] text-white whitespace-nowrap">
            {stat.percentage}
          </span>
        </div>
      </div>
    </article>
  );
}