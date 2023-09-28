import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";

export const drawerWidth = 248;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    height: "100vh",
    zIndex: theme.zIndex.drawer,
  },
}));

const SideBar = () => {
  const { asPath, push } = useRouter();
  const [selectedPage, setSelectedPage] = useState(asPath.split("/")[1]);

  useEffect(() => {
    setSelectedPage(asPath.split("/")[1]);
  }, [asPath]);

  const handleSelectPage = (route) => {
    setSelectedPage(route);
    push(`/${route}`);
  };

  const isShopRoute = selectedPage === "shop";
  const isStoreRoute = selectedPage === "stores";
  const isAuthorRoute = selectedPage === "author";
  const isBooksRoute = selectedPage === "books";

  return (
    <Drawer variant="permanent" open>
      <Stack
        justifyContent="space-between"
        height="100%"
        overflow="hidden"
        pt={6}
        pb={4}
      >
        <Stack spacing={6}>
          <Box px={4}>
            <Image
              src="/images/bookworld-whole.svg"
              alt="bookstore-img"
              width={180}
              height={45}
            />
          </Box>

          <List component="nav">
            <ListItemButton
              selected={selectedPage === "shop"}
              onClick={() => handleSelectPage("shop")}
              sx={{ px: 4 }}
            >
              <ListItemIcon sx={{ pr: 2, minWidth: "fit-content" }}>
                <Image
                  src={`/images/${
                    isShopRoute ? "shop-icon-active.svg" : "shop-icon.svg"
                  }`}
                  alt="shop-img"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Shop"
                sx={{
                  color: isShopRoute ? "primary.main" : "black",
                  opacity: isShopRoute ? 1 : 0.25,
                }}
              />
            </ListItemButton>

            <ListItemButton
              selected={selectedPage === "stores"}
              onClick={() => handleSelectPage("stores")}
              sx={{ px: 4 }}
            >
              <ListItemIcon sx={{ pr: 2, minWidth: "fit-content" }}>
                <Image
                  src={`/images/${
                    isStoreRoute ? "stores-icon-active.svg" : "stores-icon.svg"
                  }`}
                  alt="shop-img"
                  width={24}
                  height={24}
                  style={{ opacity: isStoreRoute ? 1 : 0.25 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Stores"
                sx={{
                  color: isStoreRoute ? "primary.main" : "black",
                  opacity: isStoreRoute ? 1 : 0.25,
                }}
              />
            </ListItemButton>

            <ListItemButton
              selected={selectedPage === "author"}
              onClick={() => handleSelectPage("author")}
              sx={{ px: 4 }}
            >
              <ListItemIcon sx={{ pr: 2, minWidth: "fit-content" }}>
                <Image
                  src={`/images/${
                    isAuthorRoute ? "author-icon-active.svg" : "author-icon.svg"
                  }`}
                  alt="shop-img"
                  width={24}
                  height={24}
                  style={{ opacity: isAuthorRoute ? 1 : 0.25 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Author"
                sx={{
                  color: isAuthorRoute ? "primary.main" : "black",
                  opacity: isAuthorRoute ? 1 : 0.25,
                }}
              />
            </ListItemButton>

            <ListItemButton
              selected={selectedPage === "books"}
              onClick={() => handleSelectPage("books")}
              sx={{ px: 4 }}
            >
              <ListItemIcon sx={{ pr: 2, minWidth: "fit-content" }}>
                <Image
                  src={`/images/${
                    isBooksRoute ? "book-icon-active.svg" : "book-icon.svg"
                  }`}
                  alt="shop-img"
                  width={24}
                  height={24}
                  style={{ opacity: isBooksRoute ? 1 : 0.25 }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Books"
                sx={{
                  color: isBooksRoute ? "primary.main" : "black",
                  opacity: isBooksRoute ? 1 : 0.25,
                }}
              />
            </ListItemButton>
          </List>
        </Stack>

        <Stack direction="row" alignItems="center" px={4} spacing={2}>
          <LogoutIcon
            sx={{
              width: "24px",
              height: "24px",
              color: "black",
              opacity: 0.25,
            }}
          />

          <Box>
            <Typography
              marginX={1}
              sx={{
                color: "black",
                opacity: 0.25,
              }}
            >
              Log Out
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default SideBar;
