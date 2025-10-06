import React, { useState } from 'react';
import { BrowserSettingsSection, RadioButton, Checkbox } from "@/components/common/ui";
import { browserNotificationData, browserNotificationSections } from '@/data/student/SettingsData';

export default function BrowserNotifications() {
  const [notificationsOn, setNotificationsOn] = useState(browserNotificationData.notificationsOn);
  const [newProjects, setNewProjects] = useState(browserNotificationData.newProjects);

  const browserSection = browserNotificationSections.find(section => section.id === 'browser');
  const creativesSection = browserNotificationSections.find(section => section.id === 'creatives');

  return (
    <BrowserSettingsSection title="Browser Notifications">
      <div className="mb-10">
        <h2 className="text-white font-bold text-[13px] leading-[18px] mb-4 font-['Poppins']">
          {browserSection?.title}
        </h2>
        
        <p className={`text-white text-[12px] leading-[17px] mb-6 font-['Poppins'] ${browserSection?.maxWidth}`}>
          {browserSection?.description}
        </p>

        <div className="flex items-center gap-8 sm:gap-12">
          {browserSection?.options?.map((option) => (
            <RadioButton
              key={option.value}
              name="browser-notifications"
              value={option.value}
              label={option.label}
              checked={option.value === 'on' ? notificationsOn : !notificationsOn}
              onChange={(value) => setNotificationsOn(value === 'on')}
              className="flex items-center gap-[18px]"
              labelClassName="text-[12px] leading-[14px] font-['Poppins']"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-white font-bold text-[13px] leading-[18px] mb-4 font-['Poppins']">
          {creativesSection?.title}
        </h2>
        
        <p className={`text-white text-[13px] leading-[17px] mb-6 font-['Poppins'] ${creativesSection?.maxWidth}`}>
          {creativesSection?.description}
        </p>

        <Checkbox
          checked={newProjects}
          onChange={setNewProjects}
          label="New Projects"
          className="flex items-center gap-6"
          labelClassName="text-[13px] leading-[14px] font-['Poppins']"
        />
      </div>
    </BrowserSettingsSection>
  );
}