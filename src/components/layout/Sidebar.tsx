"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSidebar } from "@/contexts/SidebarContext";

export default function Sidebar({student}: {student?: boolean}) {
  const { isCollapsed, setIsCollapsed, isMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <>
      <aside
        className={`fixed left-0 top-[78px] ${
          isCollapsed ? "w-[80px]" : "w-[294px]"
        } h-full bg-[#1E2839] border-r border-[#1F2937] backdrop-blur-sm transition-all duration-300 z-40 overflow-y-auto`}
        aria-label="Sidebar"
      >
        <div className="relative w-full h-full">
          {/* Hidden on mobile */}
          {!isMobile && (
            <div
              className={`absolute ${
                isCollapsed ? "left-[20px]" : "left-[30px]"
              } top-3 w-[31px] h-[31px] cursor-pointer hover:opacity-80 transition-opacity`}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
            <svg
              width={31}
              height={31}
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1264_50721)">
                <path
                  d="M20.6427 7.36935C17.5628 7.36935 14.483 7.36935 11.4031 7.36935C10.5633 7.36935 10.3281 7.14091 10.3281 6.31183C10.3281 5.01378 10.3281 3.71483 10.3281 2.41499C10.3281 1.73103 10.5969 1.46094 11.2687 1.46094H30.0542C30.726 1.46094 30.9948 1.7364 30.9948 2.42171C30.9948 3.7323 30.9948 5.04289 30.9948 6.35348C30.9948 7.11404 30.7462 7.36666 29.9937 7.36666C26.878 7.36845 23.761 7.36935 20.6427 7.36935ZM29.4777 2.98608H11.8318V5.86168H29.4777V2.98608Z"
                  fill="white"
                />
                <path
                  d="M20.64 29.5307H11.3964C10.5592 29.5307 10.3281 29.3009 10.3281 28.4705C10.3281 27.1841 10.3281 25.8986 10.3281 24.614C10.3281 23.8817 10.5834 23.625 11.3131 23.625H30.0246C30.7435 23.625 30.9948 23.8749 30.9948 24.5858C30.9948 25.8964 30.9948 27.207 30.9948 28.5175C30.9948 29.2781 30.7462 29.5307 29.9924 29.5307H20.64ZM29.475 25.0803H11.8385V27.9975H29.475V25.0803Z"
                  fill="white"
                />
                <path
                  d="M20.6357 18.4238H11.3639C10.5577 18.4238 10.3359 18.1994 10.3359 17.4093C10.3359 16.1112 10.3359 14.8123 10.3359 13.5124C10.3359 12.7761 10.5899 12.5234 11.3222 12.5234H30.0297C30.7325 12.5234 31.0013 12.7922 31.0026 13.4909C31.0026 14.8284 31.0026 16.1645 31.0026 17.4993C31.0026 18.1604 30.7406 18.4198 30.0714 18.4198C26.9253 18.4242 23.78 18.4256 20.6357 18.4238ZM11.8329 16.9322H29.464V14.015H11.8329V16.9322Z"
                  fill="white"
                />
                <path
                  d="M8.84178 15.4807C8.84178 16.6256 8.84178 17.7704 8.84178 18.9153C8.84178 19.6396 8.58245 19.8962 7.84608 19.8962C5.55635 19.8962 3.26618 19.8962 0.975554 19.8962C0.263374 19.8962 0 19.6355 0 18.9355C0 16.6323 0 14.3296 0 12.0273C0 11.3151 0.253967 11.0625 0.966147 11.0625H7.91327C8.6147 11.0625 8.84044 11.2936 8.84178 12.0031C8.84178 13.1641 8.84178 14.3233 8.84178 15.4807ZM7.35024 18.4369V12.546H1.49154V18.4423L7.35024 18.4369Z"
                  fill="white"
                />
                <path
                  d="M8.84422 4.41014C8.84422 5.56845 8.84422 6.7263 8.84422 7.8837C8.84422 8.56767 8.57548 8.83641 7.90361 8.83776H0.95649C0.272528 8.83776 0.0078125 8.56901 0.0078125 7.88639C0.0078125 5.57068 0.0078125 3.25543 0.0078125 0.940616C0.0078125 0.260685 0.276558 0 0.963207 0C3.29235 0 5.62149 0 7.95064 0C8.60235 0 8.8496 0.249938 8.85094 0.90165C8.84646 2.06981 8.84422 3.2393 8.84422 4.41014ZM4.38436 7.36636C5.27526 7.36636 6.16481 7.36636 7.05437 7.36636C7.3043 7.36636 7.38224 7.28977 7.38224 7.03984C7.37239 5.28492 7.37239 3.53044 7.38224 1.77642C7.38224 1.52783 7.3043 1.44855 7.05571 1.44989C5.30079 1.45796 3.54587 1.45796 1.79095 1.44989C1.54236 1.44989 1.46308 1.52648 1.46443 1.77642C1.47338 3.52955 1.47338 5.28357 1.46443 7.03849C1.46443 7.28843 1.54102 7.36905 1.79095 7.36636C2.65498 7.36636 3.52034 7.36636 4.38436 7.36636Z"
                  fill="white"
                />
                <path
                  d="M4.43433 22.134C5.61682 22.134 6.79975 22.134 7.98313 22.134C8.59453 22.134 8.84044 22.3799 8.84044 22.9913C8.84044 25.3437 8.84044 27.6971 8.84044 30.0513C8.84044 30.6869 8.57169 30.9503 7.92804 30.9503C5.58726 30.9503 3.24602 30.9503 0.904332 30.9503C0.262026 30.9503 0.00134374 30.6815 0 30.0446C0 27.7038 0 25.363 0 23.0222C0 22.4054 0.26875 22.1354 0.884181 22.134C2.06667 22.1313 3.2505 22.134 4.43433 22.134ZM7.37443 26.5764C7.37443 25.6989 7.36771 24.8215 7.37443 23.9454C7.37443 23.6968 7.30051 23.6148 7.04924 23.6162C5.29432 23.6242 3.53985 23.6242 1.78582 23.6162C1.53858 23.6162 1.45526 23.6887 1.45661 23.94C1.46556 25.6949 1.46556 27.4494 1.45661 29.2034C1.45661 29.4507 1.52917 29.534 1.7818 29.5326C3.53492 29.5237 5.28939 29.5237 7.04521 29.5326C7.29246 29.5326 7.37711 29.46 7.37443 29.2074C7.36368 28.334 7.37443 27.4539 7.37443 26.5764Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1264_50721">
                  <rect width="31" height="30.953" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </div>
          )}

          <div
            className={`absolute ${
              isCollapsed ? "left-[20px]" : "left-[16px]"
            } top-[60px] ${
              isCollapsed ? "w-[40px]" : "w-[261.33px]"
            } flex flex-col justify-center gap-1 transition-all duration-300`}
          >
            <Link
              href={student ? "/student" : "/admin"}
              className={`flex cursor-pointer items-center gap-3 w-full h-[43px] ${
                isCollapsed ? "px-[8px] justify-center" : "px-[14px]"
              } py-[9px] rounded-lg ${
                (student ? pathname === "/student" : pathname === "/admin" || pathname === "/")
                  ? "border border-[#CE2D52] bg-gradient-to-l from-[rgba(206,45,82,0.05)] to-[rgba(206,45,82,0.2)]" 
                  : "hover:bg-white/5"
              } transition-all`}
              aria-current={(student ? pathname === "/student" : pathname === "/admin" || pathname === "/") ? "page" : undefined}
            >
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M3 9.3335L12 2.3335L21 9.3335V20.3335C21 20.8639 20.7893 21.3726 20.4142 21.7477C20.0391 22.1228 19.5304 22.3335 19 22.3335H5C4.46957 22.3335 3.96086 22.1228 3.58579 21.7477C3.21071 21.3726 3 20.8639 3 20.3335V9.3335Z"
                  stroke={pathname === "/" ? "#CE2D52" : "#9CA3AF"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22.3335V12.3335H15V22.3335"
                  stroke={pathname === "/" ? "#CE2D52" : "#9CA3AF"}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {!isCollapsed && (
                <span className={`text-[16px] leading-[24px] font-poppins whitespace-nowrap ${
                  pathname === "/" ? "text-[#CE2D52]" : "text-white"
                }`}>
                  {student ? "My Home":"Home"}
                </span>
              )}
            </Link>

            <Link
              href="/admin/configuration-changes"
              className={`flex cursor-pointer items-center gap-3 w-full h-[43px] ${
                isCollapsed ? "px-[8px] justify-center" : "px-[12px]"
              } py-[9px] rounded-lg ${
                pathname === "/admin/configuration-changes" 
                  ? "border border-[#CE2D52] bg-gradient-to-l from-[rgba(206,45,82,0.05)] to-[rgba(206,45,82,0.2)]" 
                  : "hover:bg-white/5"
              } transition-all`}
              aria-current={pathname === "/configuration-changes" ? "page" : undefined}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7611 1.74164C10.0113 0.411461 8.37033 -0.0837275 7.07669 0.723415L5.15201 1.88593C3.73242 2.74249 3.25108 4.66313 4.06204 6.14459L4.06262 6.14564C4.48096 6.90744 4.4153 7.39408 4.28472 7.63325C4.15406 7.87256 3.78824 8.17583 2.95676 8.17583C1.32019 8.17583 0 9.58711 0 11.2967V13.3694C0 15.079 1.32019 16.4902 2.95676 16.4902C3.78824 16.4902 4.15406 16.7935 4.28472 17.0328C4.4153 17.2719 4.48096 17.7586 4.06262 18.5204L4.06204 18.5215C3.25108 20.003 3.73286 21.9239 5.15247 22.7804L7.07679 23.9426C8.37042 24.7497 10.0113 24.2546 10.7611 22.9244L10.8888 22.6916C11.3072 21.9298 11.7411 21.7456 12.0041 21.7456C12.266 21.7456 12.6966 21.9282 13.1094 22.6883L13.1112 22.6916L13.2339 22.9154L13.2389 22.9244C13.9887 24.2546 15.6296 24.7497 16.9232 23.9426L18.848 22.7802C20.2686 21.9229 20.7469 20.0156 19.94 18.5251L19.9374 18.5204C19.519 17.7586 19.5847 17.2719 19.7153 17.0328C19.8459 16.7935 20.2118 16.4902 21.0432 16.4902C22.6798 16.4902 24 15.079 24 13.3694V11.2967C24 9.56928 22.6629 8.17583 21.0432 8.17583C20.2118 8.17583 19.8459 7.87256 19.7153 7.63325C19.5847 7.39408 19.519 6.90744 19.9374 6.14564L19.938 6.14459C20.749 4.66297 20.2674 2.74208 18.8475 1.88566L16.9233 0.723415C15.6297 -0.0837275 13.9887 0.411414 13.2389 1.74161L13.1112 1.97446C12.6928 2.73632 12.2589 2.92046 11.9958 2.92046C11.734 2.92046 11.3034 2.73787 10.8906 1.97773L10.8888 1.97446L10.7661 1.75068L10.7611 1.74164ZM15.3417 12.333C15.3417 14.2843 13.8431 15.866 11.9944 15.866C10.1457 15.866 8.64714 14.2843 8.64714 12.333C8.64714 10.3817 10.1457 8.79999 11.9944 8.79999C13.8431 8.79999 15.3417 10.3817 15.3417 12.333Z"
                  fill={pathname === "/configuration-changes" ? "#CE2D52" : "#9CA3AF"}
                />
              </svg>
              {!isCollapsed && (
                <span className={`text-[16px] leading-[24px] font-poppins whitespace-nowrap overflow-hidden text-ellipsis ${
                  pathname === "/admin/configuration-changes" ? "text-[#CE2D52]" : "text-white"
                }`}>
                  Configuration Changes
                </span>
              )}
            </Link>

            <Link
              href="/admin/master-data"
              className={`flex cursor-pointer items-center gap-3 w-full h-[43px] ${
                isCollapsed ? "px-[8px] justify-center" : "px-[12px]"
              } py-[9px] rounded-lg ${
                pathname === "/admin/master-data" 
                  ? "border border-[#CE2D52] bg-gradient-to-l from-[rgba(206,45,82,0.05)] to-[rgba(206,45,82,0.2)]" 
                  : "hover:bg-white/5"
              } transition-all`}
              aria-current={pathname === "/master-data" ? "page" : undefined}
            >
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M9.9999 14.0843C5.52247 14.0843 1.74791 12.9703 0 11.3257V14.0234C0.552586 15.7865 4.42678 17.5252 9.9999 17.5252C15.5729 17.5252 19.4471 15.7866 20 14.0235V11.3257C18.252 12.9703 14.4775 14.0843 9.9999 14.0843Z"
                  fill={pathname === "/master-data" ? "#CE2D52" : "#9CA3AF"}
                />
                <path
                  d="M9.9999 9.5765C5.52247 9.5765 1.74791 8.46252 0 6.81787V9.66953C0.552586 11.4329 4.42678 13.1716 9.9999 13.1716C15.5729 13.1716 19.4471 11.433 20 9.66972V6.81787C18.252 8.46252 14.4775 9.5765 9.9999 9.5765Z"
                  fill={pathname === "/master-data" ? "#CE2D52" : "#9CA3AF"}
                />
                <path
                  d="M10 0.333496C4.47714 0.333496 0 2.29914 0 4.72397V5.15387C0.552586 6.91725 4.42678 8.65595 9.9999 8.65595C15.5729 8.65595 19.4471 6.91735 20 5.15406V4.72397C20 2.29914 15.5228 0.333496 10 0.333496Z"
                  fill={pathname === "/master-data" ? "#CE2D52" : "#9CA3AF"}
                />
                <path
                  d="M9.9999 18.4358C5.52247 18.4358 1.74791 17.3219 0 15.6772V17.942C0 20.3667 4.47714 22.3324 10 22.3324C15.5229 22.3324 20 20.3668 20 17.942V15.6773C18.252 17.3219 14.4775 18.4358 9.9999 18.4358Z"
                  fill={pathname === "/master-data" ? "#CE2D52" : "#9CA3AF"}
                />
              </svg>
              {!isCollapsed && (
                <span className={`text-[16px] leading-[24px] font-poppins whitespace-nowrap ${
                  pathname === "/admin/master-data" ? "text-[#CE2D52]" : "text-white"
                }`}>
                  Master Data
                </span>
              )}
            </Link>

            <Link
              href="/admin/operational-logs"
              className={`flex cursor-pointer items-center gap-3 w-full h-[43px] ${
                isCollapsed ? "px-[8px] justify-center" : "px-[12px]"
              } py-[9px] rounded-lg ${
                pathname === "/admin/operational-logs" 
                  ? "border border-[#CE2D52] bg-gradient-to-l from-[rgba(206,45,82,0.05)] to-[rgba(206,45,82,0.2)]" 
                  : "hover:bg-white/5"
              } transition-all`}
              aria-current={pathname === "/operational-logs" ? "page" : undefined}
            >
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M14.4745 6.08799V0.328125H0V24.3281H20V6.08799H14.4745ZM2.76156 9.56143H11.5783V10.5215H2.76156V9.56143ZM17.2363 20.0111H2.76156V19.051H17.2363V20.0111ZM17.2363 16.8479H2.76156V15.8879H17.2363V16.8479ZM17.2363 13.6848H2.76156V12.7248H17.2363V13.6848Z"
                  fill={pathname === "/operational-logs" ? "#CE2D52" : "#9CA3AF"}
                />
              </svg>
              {!isCollapsed && (
                <span className={`text-[16px] leading-[24px] font-poppins whitespace-nowrap ${
                  pathname === "/admin/operational-logs" ? "text-[#CE2D52]" : "text-white"
                }`}>
                  Operational Logs
                </span>
              )}
            </Link>

            <Link
              href="/admin/user-management"
              className={`flex cursor-pointer items-center gap-3 w-full h-[43px] ${
                isCollapsed ? "px-[8px] justify-center" : "px-[12px]"
              } py-[9px] rounded-lg ${
                pathname === "/admin/user-management" 
                  ? "border border-[#CE2D52] bg-gradient-to-l from-[rgba(206,45,82,0.05)] to-[rgba(206,45,82,0.2)]" 
                  : "hover:bg-white/5"
              } transition-all`}
              aria-current={pathname === "/user-management" ? "page" : undefined}
            >
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M7.5449 3.39765C7.5449 5.09319 6.39183 6.46754 4.9696 6.46754C3.54737 6.46754 2.39453 5.09319 2.39453 3.39765C2.39453 1.70224 3.54737 0.328125 4.9696 0.328125C6.39183 0.328125 7.5449 1.70236 7.5449 3.39765Z"
                  fill={pathname === "/user-management" ? "#CE2D52" : "#9CA3AF"}
                />
                <path
                  d="M7.9037 8.8119C8.08958 8.69745 8.2955 8.62297 8.50862 8.58736C8.0759 7.97115 7.7693 7.31014 7.59218 6.51905C7.5437 6.22996 7.15154 6.19605 6.85995 6.43585C6.31455 6.88468 5.67808 7.18503 4.96828 7.18503C4.24469 7.18503 3.57905 6.89449 3.04529 6.40824C2.87501 6.25285 2.62409 6.22948 2.42825 6.35022C1.41498 6.97479 0.648065 7.96631 0.313507 9.14349C0.223748 9.45923 0.286749 9.80003 0.482827 10.0627C0.679266 10.325 0.985865 10.4797 1.31154 10.4797H5.95179C6.50703 9.83309 7.16258 9.2686 7.9037 8.8119Z"
                  fill={pathname === "/user-management" ? "#CE2D52" : "#9CA3AF"}
                />
                <path
                  d="M17.0039 3.39765C17.0039 5.09319 18.1571 6.46754 19.5793 6.46754C21.0016 6.46754 22.1545 5.09319 22.1545 3.39765C22.1545 1.70224 21.0016 0.328125 19.5793 0.328125C18.1571 0.328125 17.0039 1.70236 17.0039 3.39765Z"
                  fill={pathname === "/user-management" ? "#CE2D52" : "#9CA3AF"}
                />
                <path
                  d="M16.6438 8.8119C16.458 8.69745 16.2522 8.62297 16.0391 8.58736C16.4717 7.97115 16.7783 7.31014 16.9555 6.51905C17.004 6.22996 17.3964 6.19605 17.6879 6.43585C18.2332 6.88468 18.8697 7.18503 19.5795 7.18503C20.3031 7.18503 20.9686 6.89449 21.5024 6.40824C21.6728 6.25285 21.9236 6.22948 22.1195 6.35022C23.1327 6.97479 23.8996 7.96631 24.2343 9.14349C24.324 9.45935 24.2609 9.80003 24.0648 10.0627C23.8686 10.325 23.5618 10.4797 23.2361 10.4797H18.596C18.0405 9.83309 17.3851 9.2686 16.6438 8.8119Z"
                  fill={pathname === "/user-management" ? "#CE2D52" : "#9CA3AF"}
                />
                <path
                  d="M19.2902 13.8755C18.7864 12.1008 17.6438 10.6002 16.1309 9.63779C15.8325 9.44801 15.4451 9.47877 15.1804 9.71421C14.3686 10.4358 13.3641 10.8655 12.2733 10.8655C11.1612 10.8655 10.1384 10.4191 9.31822 9.67182C9.05651 9.43324 8.67107 9.39727 8.37011 9.58293C6.81288 10.5427 5.63412 12.0663 5.12029 13.8757C4.98217 14.3611 5.07901 14.8844 5.38021 15.2882C5.68213 15.6913 6.15336 15.9288 6.654 15.9288H17.7564C18.2572 15.9288 18.7288 15.6922 19.0306 15.2882C19.3319 14.8843 19.4283 14.3614 19.2902 13.8755Z"
                  fill={pathname === "/user-management" ? "#CE2D52" : "#9CA3AF"}
                />
                <path
                  d="M16.2314 5.04547C16.2314 7.65078 14.4594 9.76329 12.2739 9.76329C10.0883 9.76329 8.31641 7.6509 8.31641 5.04547C8.31641 2.4398 10.0882 0.328125 12.2739 0.328125C14.4595 0.328125 16.2314 2.4398 16.2314 5.04547Z"
                  fill={pathname === "/user-management" ? "#CE2D52" : "#9CA3AF"}
                />
              </svg>
              {!isCollapsed && (
                <span className={`text-[16px] leading-[24px] font-poppins whitespace-nowrap ${
                  pathname === "/admin/user-management" ? "text-[#CE2D52]" : "text-white"
                }`}>
                  User Management
                </span>
              )}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}