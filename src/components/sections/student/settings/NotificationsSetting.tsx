import React, { useState } from 'react';
import { NotificationsSection, ToggleSwitch } from "@/components/common/ui";
import { notificationOptions, notificationsData } from '@/data/student/SettingsData';

export default function NotificationsSettings() {
  const [notifications, setNotifications] = useState(notificationsData);

  const handleToggle = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <NotificationsSection 
      title="Notifications" 
      description="This is where you'll receive notifications"
    >
      {notificationOptions.map((option) => (
        <ToggleSwitch
          key={option.id}
          checked={notifications[option.id as keyof typeof notifications]}
          onChange={() => handleToggle(option.id)}
          title={option.title}
          description={option.description}
          ariaLabel={`Toggle ${option.title.toLowerCase()} notifications`}
        />
      ))}
    </NotificationsSection>
  );
}