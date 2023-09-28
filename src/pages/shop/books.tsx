import BookCard from "@/components/Cards/BookCard";
import { AccountCircle } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Button,
  Input,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { ShopPageStoresData } from "@/components/Shop/Shop";

const books = () => {
  return (
    <Stack width="100%" spacing={3}>
      <Stack width="100%">
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Typography variant="h5" fontWeight={500}>
            Browse Books
          </Typography>

          <Input
            id="input-with-icon-adornment"
            placeholder="Search"
            sx={{
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
        <Stack direction="row" spacing={3}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontSize="18px" fontWeight={500} color="#3E435D">
              Author
            </Typography>

            <Select
              value="All"
              sx={{ height: "43px", backgroundColor: "white" }}
            >
              <MenuItem value={"All"}>All</MenuItem>
            </Select>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontSize="18px" fontWeight={500} color="#3E435D">
              Store
            </Typography>

            <Select
              value="All"
              sx={{ height: "43px", backgroundColor: "white" }}
            >
              <MenuItem value={"All"}>All</MenuItem>
            </Select>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontSize="18px" fontWeight={500} color="#3E435D">
              Sort By
            </Typography>

            <Select
              value="Least Price"
              sx={{ height: "43px", backgroundColor: "white" }}
            >
              <MenuItem value={"Least Price"}>Least Price</MenuItem>
            </Select>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" flexWrap="wrap" gap={3} alignItems="flex-start">
        {ShopPageStoresData.map((data) => {
          return <BookCard key={data.id} data={data} />;
        })}
      </Stack>
    </Stack>
  );
};

export default books;
