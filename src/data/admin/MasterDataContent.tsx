export interface MasterDataContent {
  title: string;
  description: string;
  dataCategories: Array<{
    name: string;
    recordCount: string;
  }>;
  recentActivity: Array<{
    action: string;
    time: string;
    user: string;
  }>;
}

export const masterDataContent: MasterDataContent = {
  title: "Master Data",
  description: "View and manage master data across your system.",
  dataCategories: [
    { name: "Users", recordCount: "1,234 records" },
    { name: "Products", recordCount: "5,678 records" },
    { name: "Categories", recordCount: "89 records" }
  ],
  recentActivity: [
    { action: "Updated user permissions", time: "2 hours ago", user: "Admin" },
    { action: "Added new product category", time: "4 hours ago", user: "Manager" },
    { action: "Deleted inactive user", time: "6 hours ago", user: "Admin" }
  ]
};
