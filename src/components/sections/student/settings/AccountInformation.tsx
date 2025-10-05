import React from "react";
import { FormSection, FormInput } from "@/components/common/ui";
import { accountInformationFields } from "@/data/uiData";

export default function AccountInformation() {
  return (
    <FormSection title="Account Information">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-24">
        {accountInformationFields.map((field) => (
          <FormInput
            key={field.id}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            ariaLabel={field.ariaLabel}
            inputClassName={field.inputClassName}
            required={field.required}
          />
        ))}
      </div>
    </FormSection>
  );
}
