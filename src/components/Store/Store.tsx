import React from "react";
import stores from "../../data/stores.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

const StoreList = ({}) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Store ID", width: 130 },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      valueGetter: (params: GridValueGetterParams) => `${params.row.name}`,
    },
    {
      field: "address",
      headerName: "Address",
      width: 300,
      valueGetter: (params: GridValueGetterParams) => `${params.row.address}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: () => (
        <React.Fragment>
          <IconButton color="primary" size="small">
            <EditIcon />
          </IconButton>
          <IconButton color="error" size="small">
            <DeleteIcon />
          </IconButton>
        </React.Fragment>
      ),
    },
  ];

  const rows = stores.map((store) => ({
    id: `#${store.id}`,
    name: store.name,
    address: `${store.address_1 ?? ""} ${store.city}, ${store.state} ${
      store.zip
    } `,
  }));

  return (
    <Box bgcolor="white">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        className="whiteBackground"
      />
    </Box>
  );
};

export default StoreList;
