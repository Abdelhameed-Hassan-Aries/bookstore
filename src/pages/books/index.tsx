/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Input,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import BookList from "@/components/Book/Book";
import AddBookModal from "@/components/Modal/AddBookModal";

const index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Stack width="100%" spacing={3}>
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Stack direction="row" width="100%" spacing={3} alignItems="center">
          <Typography variant="h5" fontWeight={500}>
            Book List
          </Typography>

          <Input
            id="input-with-icon-adornment"
            placeholder="Search"
            sx={{
              width: "336px",
              backgroundColor: "white",
              py: "8px",
              px: "20px",
              height: "40px",
              borderBottom: "none",
              "&:before": {
                borderBottom: "none",
              },
              "&:after": {
                borderBottom: "none",
              },
              "&:hover": {
                borderBottom: "none",
              },
              "&:before:hover": {
                borderBottom: "none",
              },
            }}
            startAdornment={
              <InputAdornment position="start">
                <Image
                  src="/images/search.svg"
                  alt="search"
                  width={19}
                  height={19}
                />
              </InputAdornment>
            }
          />
        </Stack>

        <Button
          onClick={handleOpenModal}
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#C76128",
            },
            whiteSpace: "nowrap",
            px: 1,
            width: "132px",
          }}
        >
          Add New Book
        </Button>
      </Stack>

      <BookList />

      {modalOpen && (
        <AddBookModal open={modalOpen} onClose={handleCloseModal} />
      )}
    </Stack>
  );
};

export default index;
