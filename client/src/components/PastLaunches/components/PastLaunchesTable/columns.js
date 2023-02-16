export const columns = [
  {
    field: "name",
    flex: 1,
    headerName: "Name",
    description: "",
    sortable: true,
    disableColumnMenu: true,
    valueGetter: (params) => params.row.name
  },
  {
    field: "date",
    flex: 1,
    headerName: "Launch date",
    description: "",
    sortable: true,
    disableColumnMenu: true,
    valueGetter: (params) => params.row.date
  },
  {
    field: "success",
    flex: 0.5,
    headerName: "Success",
    description: "",
    sortable: true,
    disableColumnMenu: true,
    valueGetter: (params) => params.row.success ? 'Yes' : 'No'
  },
  {
    field: "details",
    flex: 1,
    headerName: "Description",
    description: "",
    sortable: true,
    disableColumnMenu: true,
    valueGetter: (params) => params.row.details
  }
];