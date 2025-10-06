import React, { useState } from 'react';
import { PrivacySection, RadioButton, DropdownButton } from "@/components/common/ui";
import { privacyDisplayGroups, privacyDisplayData } from "@/data/uiData";

export default function PrivacyDisplay() {
  const [messageOption, setMessageOption] = useState(privacyDisplayData.messageOption);
  const [profileOption, setProfileOption] = useState(privacyDisplayData.profileOption);

  const messageGroup = privacyDisplayGroups.find(group => group.id === 'message');
  const profileGroup = privacyDisplayGroups.find(group => group.id === 'profile');

  return (
    <PrivacySection title="Privacy & Display">
      <div className="mb-10">
        <h3 className={`text-white font-bold text-sm mb-4`}>
          {messageGroup?.title}
        </h3>
        
        <div className="flex flex-wrap gap-6">
          {messageGroup?.options.map((option) => (
            <RadioButton
              key={option.value}
              name={messageGroup.name}
              value={option.value}
              label={option.label}
              checked={messageOption === option.value}
              onChange={setMessageOption}
              fontWeight={messageGroup.fontWeight}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className={`text-white font-normal text-sm mb-4`}>
          {profileGroup?.title}
        </h3>
        
        <div className="flex flex-wrap gap-6">
          {profileGroup?.options.map((option) => (
            <RadioButton
              key={option.value}
              name={profileGroup.name}
              value={option.value}
              label={option.label}
              checked={profileOption === option.value}
              onChange={setProfileOption}
              fontWeight={profileGroup.fontWeight}
            />
          ))}
        </div>
      </div>

      <DropdownButton label="Timezone" />
    </PrivacySection>
  );
}