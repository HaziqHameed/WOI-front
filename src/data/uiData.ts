import { AccountInformationData, FormField } from "@/types/uiTypes";

export const accountInformationData: AccountInformationData = {
  companyName: "ACME Corp",
  website: "https://example.com",
  location: "Mumbai",
  phoneNumber: "+92 300 0000000",
  email: "floyd.miles@example.com",
};

export const accountInformationFields: FormField[] = [
  {
    id: "companyName",
    label: "Company Name",
    placeholder: "ACME Corp",
    type: "text",
    ariaLabel: "Company Name",
  },
  {
    id: "website",
    label: "Website",
    placeholder: "https://example.com",
    type: "url",
    ariaLabel: "Website",
    inputClassName: "text-[13px] leading-[20px]",
  },
  {
    id: "location",
    label: "Location",
    placeholder: "Mumbai",
    type: "text",
    ariaLabel: "Location",
    inputClassName: "text-[16px] leading-[16px] text-white",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    placeholder: "+92 300 0000000",
    type: "tel",
    ariaLabel: "Phone Number",
  },
  {
    id: "email",
    label: "Email id",
    placeholder: "floyd.miles@example.com",
    type: "email",
    ariaLabel: "Email id",
    inputClassName: "font-bold",
  },
];
