import React from "react";
import books from "../../data/books.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

const BookList = ({}) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Book ID", width: 130 },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      valueGetter: (params: GridValueGetterParams) => `${params.row.name}`,
    },
    {
      field: "pages",
      headerName: "Pages",
      width: 300,
      valueGetter: (params: GridValueGetterParams) => `${params.row.pages}`,
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

  const rows = books.map((author) => ({
    id: `#${author.id}`,
    name: author.name,
    pages: author.page_count,
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

export default BookList;
