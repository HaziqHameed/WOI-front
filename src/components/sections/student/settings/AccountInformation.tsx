import React from "react";
import { FormSection, FormInput } from "@/components/common/ui";

export default function AccountInformation() {
  return (
    <FormSection title="Account Information">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-24">
        <FormInput
          label="Company Name"
          placeholder="ACME Corp"
          ariaLabel="Company Name"
        />

        <FormInput
          label="Website"
          placeholder="https://example.com"
          type="url"
          ariaLabel="Website"
          inputClassName="text-[13px] leading-[20px]"
        />

        <FormInput
          label="Location"
          placeholder="Mumbai"
          ariaLabel="Location"
          inputClassName="text-[16px] leading-[16px] text-white"
        />

        <FormInput
          label="Phone Number"
          placeholder="+92 300 0000000"
          type="tel"
          ariaLabel="Phone Number"
        />

        <FormInput
          label="Email id"
          placeholder="floyd.miles@example.com"
          type="email"
          ariaLabel="Email id"
          inputClassName="font-bold"
        />
      </div>
    </FormSection>
  );
}
