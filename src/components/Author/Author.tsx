import React, { useState } from "react";
import authors from "../../data/authors.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

const AuthorList = ({}) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Author ID", width: 130 },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName} ${params.row.lastName}`,
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

  const rows = authors.map((author) => ({
    id: `#${author.id}`,
    firstName: author.first_name,
    lastName: author.last_name,
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

export default AuthorList;
