import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BookCard from "../Cards/BookCard";
import AuthorCard from "../Cards/AuthorCard";
import { useRouter } from "next/router";
import BookStoreModal from "../Modal/AddBookModal";

export const ShopPageStoresData = [
  {
    id: "1",
    bookTitle: "To Kill a Mockingbird",
    firstName: "Brooklyn",
    lastName: "Simmons",
    storeName1: "Second Story",
    storeCost1: "4",
    storeName2: "Bookmark My Word",
    storeCost2: "7",
  },
  {
    id: "2",
    bookTitle: "Cats And Agents",
    firstName: "Cody",
    lastName: "Hudson",
    storeName1: "By Its Cover",
    storeCost1: "7",
    storeName2: "Bookmark My Word",
    storeCost2: "8",
  },
  {
    id: "3",
    bookTitle: "Lion Of Yesterday",
    firstName: "Brooklyn",
    lastName: "Simmons",
    storeName1: "Second Story",
    storeCost1: "4",
    storeName2: "Bookmark My Word",
    storeCost2: "7",
  },
];

const ShopPageAuthorsData = [
  {
    id: "1",
    name: "Serenity Cooper",
    publishBooks: "12",
    image: "/images/user-img-1.svg",
  },
  {
    id: "2",
    name: "Cody",
    publishBooks: "29",
    image: "/images/user-img-2.svg",
  },
  {
    id: "3",
    name: "Jacob Warren",
    publishBooks: "10",
    image: "/images/user-img-3.svg",
  },
];

const Shop = () => {
  const { push } = useRouter();

  return (
    <Stack spacing={4}>
      <Stack width="100%" spacing={3}>
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Typography variant="h5" fontWeight={500}>
            Browse by Stores
          </Typography>
          <Button
            onClick={() => push("/stores")}
            sx={{
              color: "white",
              backgroundColor: "primary.main",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#C76128",
              },
            }}
          >
            View All
          </Button>
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap={3} alignItems="flex-start">
          {ShopPageStoresData.map((data) => {
            return <BookCard key={data.id} data={data} isShopPage />;
          })}
        </Stack>
      </Stack>

      <Stack width="100%" spacing={3}>
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Typography variant="h5" fontWeight={500}>
            Browse by Authors
          </Typography>
          <Button
            onClick={() => push("/author")}
            sx={{
              color: "white",
              backgroundColor: "primary.main",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#C76128",
              },
            }}
          >
            View All
          </Button>
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap={3} alignItems="flex-start">
          {ShopPageAuthorsData.map((data) => {
            return <AuthorCard key={data.id} data={data} />;
          })}
        </Stack>
      </Stack>

      <Stack width="100%" spacing={3}>
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Typography variant="h5" fontWeight={500}>
            Browse by Books
          </Typography>
          <Button
            onClick={() => push("/shop/books")}
            sx={{
              color: "white",
              backgroundColor: "primary.main",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#C76128",
              },
            }}
          >
            View All
          </Button>
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap={3} alignItems="flex-start">
          {ShopPageStoresData.map((data) => {
            return <BookCard key={data.id} data={data} />;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Shop;
