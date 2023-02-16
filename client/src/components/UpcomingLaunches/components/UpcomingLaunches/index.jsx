import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {columns} from './columns'

export const UpcomingLaunchesTable = ({upcomingLaunches}) => <DataGrid
  rows={upcomingLaunches}
  columns={columns}
  disableSelectionOnClick={true}
  pageSize={5}
  rowsPerPageOptions={[5]}
  disableColumnFilter
  disableDensitySelector
  disableColumnSelector
  componentsProps={{
    toolbar: {
      csvOptions: { disableToolbarButton: true },
      printOptions: { disableToolbarButton: true },
      quickFilterProps: { debounceMs: 500 },
    },
  }}
/>