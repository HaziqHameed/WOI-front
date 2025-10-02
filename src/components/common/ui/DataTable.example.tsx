// Example usage of the DataTable component
import React from 'react';
import { DataTable, DataTableColumn, DataTableHeaderInfo } from './';

interface ExampleData {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  createdAt: string;
  [key: string]: unknown;
}

const ExampleDataTable = () => {
  const data: ExampleData[] = [
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
  ];

  const columns: DataTableColumn<ExampleData>[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      width: 'w-[200px]',
      render: (value) => (
        <span className="text-white text-sm font-medium">{value != null ? String(value) : ''}</span>
      )
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      render: (value) => (
        <span className="text-white/70 text-sm">{value != null ? String(value) : ''}</span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      width: 'w-[100px]',
      render: (value) => (
        <span className={`px-2 py-1 rounded-md text-xs font-medium ${
          value === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {value != null ? String(value) : ''}
        </span>
      ),
      mobileRender: (row) => (
        <div className="flex justify-between items-center">
          <span className="text-white text-sm">{row.name}</span>
          <span className={`px-2 py-1 rounded-md text-xs font-medium ${
            row.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {row.status}
          </span>
        </div>
      )
    },
    {
      key: 'createdAt',
      label: 'Created',
      sortable: true,
      width: 'w-[120px]',
      render: (value) => (
        <span className="text-white/70 text-sm">{value != null ? String(value) : ''}</span>
      )
    }
  ];

  const headerInfo: DataTableHeaderInfo = {
    title: 'User Management',
    subtitle: 'Manage system users and their permissions',
    totalEntries: data.length
  };

  return (
    <DataTable<ExampleData>
      data={data}
      columns={columns}
      headerInfo={headerInfo}
      onRowClick={(row, index) => {
        console.log('Row clicked:', row, index);
      }}
      emptyMessage="No users found"
    />
  );
};

export default ExampleDataTable;
