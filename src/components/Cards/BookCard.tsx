import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const BookCard = ({ data, isShopPage = false }) => {
  const {
    bookTitle,
    firstName,
    lastName,
    storeName1,
    storeCost1,
    storeName2,
    storeCost2,
  } = data;

  return (
    <Card
      sx={{
        maxWidth: "456px",
        minWidth: "456px",
        height: "214px",
        padding: 3,
        borderRadius: "8px",
      }}
    >
      <Stack direction="row" spacing={2}>
        {isShopPage ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            minWidth="125px"
            height="164px"
            sx={{
              backgroundColor: "#FFEBE1",
            }}
          >
            <Image
              src="/images/bookstore-empty.svg"
              alt="bookstore-img"
              width={58}
              height={58}
            />
          </Stack>
        ) : (
          <Stack
            alignItems="center"
            justifyContent="center"
            minWidth="125px"
            height="164px"
            sx={{
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 1.2%), linear-gradient(90deg, rgba(255, 205, 180, 0.20) 11.6%, rgba(221, 216, 214, 0.00) 26.8%), linear-gradient(90deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 8%), #FFEBE1;",
              borderRadius: "8px 3px 3px 8px",
            }}
          >
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{
                color: "black",
                textAlign: "center",
                pl: "17px",
                pr: "11px",
              }}
            >
              {bookTitle}
            </Typography>
          </Stack>
        )}

        <Stack>
          <Stack spacing={1}>
            <Stack spacing={0}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ color: "black" }}
              >
                {bookTitle}
              </Typography>
              <Typography variant="body2" sx={{ color: "#8F8F8F" }}>
                by {firstName} {lastName}
              </Typography>
            </Stack>

            <Stack spacing={0}>
              <Typography variant="body2" sx={{ color: "#8F8F8F" }}>
                Stores:
              </Typography>

              <Stack spacing={1} direction="row">
                <Stack
                  spacing={0}
                  sx={{
                    backgroundColor: "#FFF6F1",
                    borderRadius: "8px",
                    alignItems: "center",
                    padding: 1,
                    maxHeight: "91px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "black" }}
                    whiteSpace="nowrap"
                  >
                    {storeName1}
                  </Typography>

                  <Typography
                    fontWeight={600}
                    variant="body1"
                    sx={{ color: "#E9692C" }}
                  >
                    $ {storeCost1}
                  </Typography>

                  <Button
                    startIcon={
                      <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
                    }
                    sx={{
                      padding: 0,
                      color: "white",
                      backgroundColor: "#2374BF",
                      px: 1,
                      py: "2px",
                      "&:hover": {
                        backgroundColor: "#2374BF",
                      },
                    }}
                  >
                    Sell
                  </Button>
                </Stack>

                <Stack
                  spacing={0}
                  sx={{
                    backgroundColor: "#FFF6F1",
                    borderRadius: "8px",
                    alignItems: "center",
                    padding: 1,
                    maxHeight: "91px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "black" }}
                    whiteSpace="nowrap"
                  >
                    {storeName2}
                  </Typography>

                  <Typography
                    fontWeight={600}
                    variant="body1"
                    sx={{ color: "#E9692C" }}
                  >
                    $ {storeCost2}
                  </Typography>

                  <Button
                    startIcon={
                      <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
                    }
                    sx={{
                      padding: 0,
                      color: "white",
                      backgroundColor: "#2374BF",
                      px: 1,
                      py: "2px",
                      "&:hover": {
                        backgroundColor: "#2374BF",
                      },
                    }}
                  >
                    Sell
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default BookCard;
