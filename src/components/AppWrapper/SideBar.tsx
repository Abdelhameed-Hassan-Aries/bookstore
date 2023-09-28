import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const drawerWidth = 264;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
  marginTop: 64,
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

  return (
    <Drawer variant="permanent" open>
      <Stack justifyContent="space-between" height="100%" overflow="hidden">
        <List component="nav">
          <ListItemButton
            selected={selectedPage === "homepage"}
            onClick={() => handleSelectPage("homepage")}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>

          <ListItemButton
            selected={selectedPage === "dashboard"}
            onClick={() => handleSelectPage("dashboard")}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            selected={selectedPage === "billing"}
            onClick={() => handleSelectPage("billing")}
          >
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Billing" />
          </ListItemButton>
        </List>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <Box>
            {/* {isMenuOpen && (
              <Box>
                <Box>
                  <Divider />
                </Box>

                <Stack
                  direction="row"
                  alignItems="center"
                  padding="12px 16px"
                  spacing={4}
                >
                  <LogoutIcon
                    sx={{ width: "24px", height: "24px", color: "error.main" }}
                  />

                  <Box>
                    <Typography color="error.main" marginX={1}>
                      Sign Out
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            )} */}

            <Box>
              <Divider />
            </Box>

            {/* <Stack
              onClick={handleMenuState}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              padding="8px 16px"
            >
              <Stack direction="row" alignItems="center" spacing={3}>
                <Avatar
                  alt="user-avatar"
                  src={thumbnail}
                  sx={{ width: 32, height: 32 }}
                />

                <Box maxWidth="150px">
                  {data ? (
                    <Typography
                      color="primary.main"
                      marginX={1}
                      textTransform="capitalize"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {username}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" width={150} height={40} />
                  )}
                </Box>
              </Stack>

              <Box>
                <ExpandMoreIcon
                  sx={{
                    transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Box>
            </Stack> */}
          </Box>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default SideBar;
