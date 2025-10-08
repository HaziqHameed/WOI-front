export interface ExampleData {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  createdAt: string;
  [key: string]: unknown;
}

export interface DataTableExampleData {
  sampleData: ExampleData[];
  columnLabels: {
    name: string;
    email: string;
    status: string;
    created: string;
  };
  headerInfo: {
    title: string;
    description: string;
  };
}

export const dataTableExampleData: DataTableExampleData = {
  sampleData: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'inactive',
      createdAt: '2024-01-14'
    }
  ],
  columnLabels: {
    name: 'Name',
    email: 'Email',
    status: 'Status',
    created: 'Created'
  },
  headerInfo: {
    title: 'User Management',
    description: 'Manage your users and their permissions'
  }
};
