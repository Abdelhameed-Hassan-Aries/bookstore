import React, { useState } from "react";
import stores from "../../data/stores.json";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

const StoreList = () => {
  const [currentStores, setCurrentStores] = useState(stores);

  const handleDelete = (id) => {
    setCurrentStores((prevStores) =>
      prevStores.filter((store) => store.id !== id)
    );
  };

  const handleEditCommit = (params) => {
    setCurrentStores((prevStores) =>
      prevStores.map((store) =>
        store.id === params.id ? { ...store, name: params.value } : store
      )
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Store ID", width: 130 },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 300,
      valueGetter: (params) => `${params.row.address}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <React.Fragment>
          <IconButton
            color="primary"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(params.row.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </React.Fragment>
      ),
    },
  ];

  const rows = currentStores.map((store) => ({
    id: store.id,
    name: store.name,
    address: `${store.address_1 ?? ""} ${store.city}, ${store.state} ${
      store.zip
    }`,
  }));

  return (
    <Box bgcolor="white">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        className="whiteBackground"
        onCellEditStart={handleEditCommit}
      />
    </Box>
  );
};

export default StoreList;
