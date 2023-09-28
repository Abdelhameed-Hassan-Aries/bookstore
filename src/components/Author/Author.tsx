import React, { useState } from "react";
import authors from "../../data/authors.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

const AuthorList = () => {
  const [currentAuthors, setCurrentAuthors] = useState(authors);

  const handleDelete = (id) => {
    setCurrentAuthors((prevAuthors) =>
      prevAuthors.filter((author) => author.id !== id)
    );
  };

  const handleEditCommit = (params) => {
    setCurrentAuthors((prevAuthors) =>
      prevAuthors.map((author) =>
        author.id === params.id
          ? {
              ...author,
              first_name:
                params.field === "firstName" ? params.value : author.first_name,
              last_name:
                params.field === "lastName" ? params.value : author.last_name,
            }
          : author
      )
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Author ID", width: 130 },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      editable: true, // Making this column editable
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
      editable: true, // Making this column editable
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

  const rows = currentAuthors.map((author) => ({
    id: author.id,
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
        onCellEditStart={handleEditCommit}
      />
    </Box>
  );
};

export default AuthorList;
