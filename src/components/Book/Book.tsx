import React, { useState } from "react";
import books from "../../data/books.json";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

const BookList = () => {
  const [currentBooks, setCurrentBooks] = useState(books);

  const handleDelete = (id) => {
    setCurrentBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleEditCommit = (params) => {
    setCurrentBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === params.id
          ? {
              ...book,
              name: params.field === "name" ? params.value : book.name,
              page_count:
                params.field === "pages" ? params.value : book.page_count,
            }
          : book
      )
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Book ID", width: 130 },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      editable: true,
    },
    {
      field: "pages",
      headerName: "Pages",
      width: 300,
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

  const rows = currentBooks.map((book) => ({
    id: book.id,
    name: book.name,
    pages: book.page_count,
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

export default BookList;
