// Example usage of the DataTable component
import React from 'react';
import { DataTable, DataTableColumn, DataTableHeaderInfo } from './';
import { dataTableExampleData, ExampleData } from '@/data/common/DataTableExampleData';

const ExampleDataTable = () => {
  const data: ExampleData[] = dataTableExampleData.sampleData;

  const columns: DataTableColumn<ExampleData>[] = [
    {
      key: 'name',
      label: dataTableExampleData.columnLabels.name,
      sortable: true,
      width: 'w-[200px]',
      render: (value) => (
        <span className="text-white text-sm font-medium">{value != null ? String(value) : ''}</span>
      )
    },
    {
      key: 'email',
      label: dataTableExampleData.columnLabels.email,
      sortable: true,
      render: (value) => (
        <span className="text-white/70 text-sm">{value != null ? String(value) : ''}</span>
      )
    },
    {
      key: 'status',
      label: dataTableExampleData.columnLabels.status,
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
      label: dataTableExampleData.columnLabels.created,
      sortable: true,
      width: 'w-[120px]',
      render: (value) => (
        <span className="text-white/70 text-sm">{value != null ? String(value) : ''}</span>
      )
    }
  ];

  const headerInfo: DataTableHeaderInfo = {
    title: dataTableExampleData.headerInfo.title,
    subtitle: dataTableExampleData.headerInfo.description,
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
