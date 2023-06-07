'use client';
import { DataGrid, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { IconButton, LinearProgress } from '@mui/material';
import Link from 'next/link';
import MainNav from './mainNav';
import { problems } from './components/problems';
import { Task } from '@mui/icons-material';

export default function Home() {
  const columns = [
    {
      field: 'status',
      headerClassName: 'text-xl font-semibold text-white text-center',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'title',
      headerClassName: 'text-xl font-semibold text-white text-center',
      headerName: 'title',
      width: 150,
    },
    {
      field: 'difficulty',
      headerClassName: 'text-xl font-semibold text-white text-center',
      headerName: 'difficulty',
      width: 150,
    },
    {
      field: 'category',
      headerClassName: 'text-xl font-semibold text-white text-center',
      headerName: 'category',
      width: 150,
    },
    {
      field: 'solution',
      headerClassName: 'text-xl font-semibold text-white text-center',
      headerName: 'solution',
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <div className='w-full flex justify-center items-center'>
          <IconButton>
            <Task />
          </IconButton>
        </div>
      ),
    },
  ];
  return (
    <main className='main'>
      <MainNav />
      <div className='w-full h-full px-20'>
        <div className='w-full flex items-center justify-center h-5/6 bg-transparent'>
          <DataGrid
            rows={problems}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
              LoadingOverlay: LinearProgress,
            }}
            autoPageSize
            sortModel={[
              {
                field: 'id',
                sort: 'desc',
              },
            ]}
            sx={{
              borderColor: 'transparent',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
              '& .MuiSvgIcon-root': {
                fill: 'white', // Modify the fill color of all icons to red
              },
              '& .MuiDataGrid-searchInput': {
                color: 'white',
                '& input': {
                  color: 'white',
                  '&::placeholder': {
                    color: 'white', // Modify the placeholder color
                  },
                  '&::after': {
                    borderBottomColor: 'white', // Modify the underline color
                  },
                },
              },
              '& .MuiTablePagination-root': {
                '& .MuiTablePagination-caption': {
                  color: 'white', // Modify the color of the "Rows per page" text
                },
                '& .MuiPaginationItem-root': {
                  color: 'white', // Modify the color of the page indicators
                },
              },
            }}
            componentsProps={{
              toolbar: { showQuickFilter: true },
            }}
            className='p-4 border-0 text-center'
          />
        </div>
      </div>
    </main>
  );
}
