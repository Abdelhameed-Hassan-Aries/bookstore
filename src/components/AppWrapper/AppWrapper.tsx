import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import SideBar, { drawerWidth } from "./SideBar";
import AppBarComponent from "./Appbar";
import { Stack } from "@mui/material";

const WithAppWrapper = (Children) => {
  return function WithAppWrapperComponent(props) {
    return (
      <Stack direction="row">
        <SideBar />
        <Stack
          sx={{
            backgroundColor: "primary.contrastText",
            flexGrow: 1,
            height: "100vh",
            pt: 8,
          }}
        >
          <AppBarComponent />

          <Box
            component="main"
            sx={{
              backgroundColor: "primary.contrastText",
              pt: 6,
              paddingLeft: `${drawerWidth + 32}px`,
              paddingRight: 4,
              overflowY: "auto",
            }}
          >
            <Children {...props} />
          </Box>
        </Stack>
      </Stack>
    );
  };
};

export default WithAppWrapper;
