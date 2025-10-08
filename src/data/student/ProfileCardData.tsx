export interface ProfileCardData {
  labels: {
    preview: string;
    name: string;
    companyName: string;
    collegeName: string;
    cgpa: string;
    website: string;
    fresher: string;
    profileComplete: string;
    nowYouHaveMoreChances: string;
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    location: string;
  };
  profileItems: {
    home: Array<{
      label: string;
      status: string;
    }>;
    company: Array<{
      label: string;
      status: string;
    }>;
    general: Array<{
      label: string;
      status: string;
    }>;
  };
  progress: {
    percentage: string;
    minLabel: string;
    maxLabel: string;
  };
}

export const profileCardData: ProfileCardData = {
  labels: {
    preview: "Preview",
    name: "Name",
    companyName: "Company Name",
    collegeName: "College Name",
    cgpa: "CGPA",
    website: "Website",
    fresher: "Fresher",
    profileComplete: "Profile Complete",
    nowYouHaveMoreChances: "Now you have more chances of getting hired!"
  },
  contactInfo: {
    phone: "+9187794802021",
    email: "example12@gm...",
    website: "https://www.softsuittech.com",
    location: "Mumbai, India"
  },
  profileItems: {
    home: [
      { label: "Certifications", status: "Added" },
      { label: "Projects", status: "Added" },
      { label: "Achievements", status: "Added" },
      { label: "Profile Picture", status: "Added" }
    ],
    company: [
      { label: "About", status: "Added" },
      { label: "Social", status: "Added" },
      { label: "Certificates", status: "Added" },
      { label: "Profile Picture", status: "Added" }
    ],
    general: [
      { label: "About", status: "Added" },
      { label: "Social", status: "Added" },
      { label: "Profile Picture", status: "Added" }
    ]
  },
  progress: {
    percentage: "100%",
    minLabel: "0%",
    maxLabel: "100%"
  }
};
