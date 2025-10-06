import { DropdownOption } from "@/components/common/ui";
import { LogsTableColumn } from "@/types/operationalLogs";
import { Poppins } from 'next/font/google';
import Image from "next/image";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const tabs = [
  { id: 'students', label: 'Students' },
  { id: 'recruiters', label: 'Recruiters' },
  { id: 'admin', label: 'Admin Users' }
];

export const StatusOptions: DropdownOption[] = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
];

export const UserManagementTableColumns: LogsTableColumn[] = [
  {
    key: 'name',
    label: 'Name',
    sortable: false,
    width: 'w-[200px]',
    className: 'flex items-center gap-1',
    render: (value) => (
      <div className="flex items-center gap-4 w-[162px]">
        <div className="w-8 h-8 rounded-full bg-[#D9D9D9] overflow-hidden flex-shrink-0">

          <Image
            src="/images/avatar-1.png"
            alt="User Avatar"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <span className="text-white text-sm font-medium">{String(value)}</span>
      </div>
    )
  },
  {
    key: 'email',
    label: 'Email',
    sortable: false,
    width: 'w-[250px]',
    className: 'flex items-center gap-1 ml-26',
    render: (value) => (
      <div className="flex items-center w-[235px]">
        <span className="text-white text-sm font-medium ">
          {String(value)}
        </span>
      </div>
    )
  },
  {
    key: 'university',
    label: 'University',
    sortable: false,
    width: 'w-[150px]',
    className: 'flex items-center gap-1 ml-21 ',
    render: (value) => (
      <div className="flex items-center gap-1 w-[70px]">
        <span className="text-white text-sm font-medium">{String(value)}</span>
      </div>
    )
  },
  {
    key: 'status',
    label: 'Status',
    sortable: false,
    width: 'w-[120px]',
    className: 'flex items-center ml-36',
    render: (value) => {
      return (
        <div className="flex flex-row justify-center items-center px-2 py-1 gap-1 w-[67px] h-6 bg-[#B4FFD1] rounded-md ">
          <span className={`${poppins.className} font-medium text-base leading-6 text-[#166534]`}>
            {String(value)}
          </span>
        </div>
      );
    }
  },
  {
    key: 'joined',
    label: 'Joined',
    sortable: false,
    width: 'w-[120px]',
    className: 'flex items-center gap-1 mr-30 ml-auto',
    render: (value) => (
      <div className="flex items-center gap-1  ">
        <span className="text-white text-sm font-medium">{String(value)}</span>
      </div>
    )
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
    width: 'w-[80px]',
    className: 'flex items-center justify-center',
    render: () => (
      <div className="cursor-pointer flex flex-row gap-3">
        <div>
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM29.8034 16C29.8034 8.37659 23.6234 2.19658 16 2.19658C8.37659 2.19658 2.19658 8.37659 2.19658 16C2.19658 23.6234 8.37659 29.8034 16 29.8034C23.6234 29.8034 29.8034 23.6234 29.8034 16Z"
              fill="#CE2D52"
            />
            <path
              d="M9.77778 22.2222H11.0444L19.7333 13.5333L18.4667 12.2667L9.77778 20.9556V22.2222ZM8 24V20.2222L19.7333 8.51111C19.9111 8.34815 20.1074 8.22222 20.3222 8.13333C20.537 8.04444 20.763 8 21 8C21.237 8 21.4667 8.04444 21.6889 8.13333C21.9111 8.22222 22.1037 8.35556 22.2667 8.53333L23.4889 9.77778C23.6667 9.94074 23.7963 10.1333 23.8778 10.3556C23.9593 10.5778 24 10.8 24 11.0222C24 11.2593 23.9593 11.4852 23.8778 11.7C23.7963 11.9148 23.6667 12.1111 23.4889 12.2889L11.7778 24H8ZM19.0889 12.9111L18.4667 12.2667L19.7333 13.5333L19.0889 12.9111Z"
              fill="#CE2D52"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="-6.04897e-07"
                y1="16.0894"
                x2="32"
                y2="15.9106"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CE2D52" />
                <stop offset="1" stopColor="#F05921" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="24"
                y1="15.9062"
                x2="8"
                y2="16.0938"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CE2D52" />
                <stop offset="1" stopColor="#F05921" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM29.8034 16C29.8034 8.37659 23.6234 2.19658 16 2.19658C8.37659 2.19658 2.19658 8.37659 2.19658 16C2.19658 23.6234 8.37659 29.8034 16 29.8034C23.6234 29.8034 29.8034 23.6234 29.8034 16Z"
              fill="white"
            />
            <g clipPath="url(#clip0_1264_52650)">
              <path
                d="M11.673 24.6446C11.3695 24.5185 11.1506 24.3251 11.1228 23.9756C11.0998 23.6842 11.0795 23.3924 11.0608 23.1006C10.9163 20.9555 10.7718 18.8107 10.6272 16.6661C10.5607 15.6885 10.4927 14.7108 10.423 13.7329C10.4161 13.6423 10.4399 13.6145 10.5245 13.6245C10.5515 13.6262 10.5785 13.6262 10.6055 13.6245C14.1974 13.6245 17.7893 13.6232 21.3811 13.6206C21.5407 13.6206 21.5754 13.657 21.5628 13.8144C21.4626 15.0991 21.3712 16.3847 21.2775 17.6699C21.2081 18.6203 21.1392 19.5709 21.0707 20.5216C20.9857 21.6822 20.899 22.8431 20.8105 24.0042C20.7841 24.3511 20.5573 24.5323 20.2555 24.6442L11.673 24.6446ZM17.1992 18.8731C17.1992 19.9614 17.1992 21.0496 17.1992 22.1376C17.1992 22.4845 17.471 22.7043 17.7867 22.6271C18.0087 22.5729 18.1374 22.3783 18.1374 22.0904C18.1374 19.9513 18.1374 17.8123 18.1374 15.6732C18.1387 15.6353 18.1375 15.5974 18.134 15.5596C18.1222 15.4422 18.0665 15.3336 17.9781 15.2554C17.8897 15.1773 17.775 15.1354 17.657 15.1382C17.3873 15.1421 17.1979 15.3441 17.1974 15.6394C17.1974 16.7182 17.198 17.7961 17.1992 18.8731ZM13.8523 18.8731V20.9357C13.8523 21.342 13.8488 21.7478 13.8523 22.1541C13.8562 22.4854 14.1315 22.7022 14.4415 22.6258C14.6583 22.5725 14.7884 22.38 14.7884 22.1055C14.7884 19.9564 14.7884 17.8071 14.7884 15.6576C14.7895 15.6251 14.7886 15.5925 14.7858 15.5601C14.7734 15.4374 14.713 15.3247 14.6178 15.2464C14.5226 15.1681 14.4003 15.1306 14.2776 15.1421C14.0175 15.1625 13.8497 15.3615 13.8492 15.6576C13.8504 16.7297 13.8514 17.8019 13.8523 18.874V18.8731Z"
                fill="white"
              />
              <path
                d="M18.4055 8C18.6704 8.10016 18.7827 8.28877 18.7701 8.57321C18.7563 8.87672 18.7641 9.18023 18.7701 9.48375C18.7701 9.57046 18.7511 9.60428 18.6552 9.60428C16.8853 9.6011 15.1156 9.6011 13.3459 9.60428C13.2497 9.60428 13.2302 9.57046 13.2315 9.48331C13.2358 9.1798 13.244 8.87629 13.2315 8.57277C13.2185 8.2879 13.3321 8.10016 13.5961 8H18.4055Z"
                fill="white"
              />
              <path
                d="M15.999 12.6856C13.8428 12.6856 11.687 12.683 9.53073 12.6903C9.35729 12.6903 9.32478 12.6409 9.33388 12.4839C9.35426 12.1371 9.30396 11.7902 9.35816 11.4464C9.44054 10.9226 9.86156 10.5614 10.3914 10.541C10.44 10.541 10.489 10.541 10.5375 10.541H21.4584C22.2206 10.541 22.6598 10.9785 22.6603 11.7373C22.6603 11.9974 22.649 12.2576 22.6642 12.5178C22.6733 12.6704 22.6182 12.6912 22.4834 12.6912C20.3212 12.684 18.1598 12.6821 15.999 12.6856Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1264_52650">
                <rect width="13.3333" height="16.6447" fill="white" transform="translate(9.33203 8)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    )
  }
];