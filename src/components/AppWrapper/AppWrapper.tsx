import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import SideBar from "./SideBar";
import AppBarComponent from "./Appbar";

const WithAppWrapper = (Children) => {
  return function WithAppWrapperComponent(props) {
    return (
      <Box sx={{ display: "flex" }}>
        <AppBarComponent />
        <SideBar />
        <Box
          component="main"
          sx={{
            backgroundColor: "primary.contrastText",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            pt: 8,
          }}
        >
          <Box p={3}>
            <Children {...props} />
          </Box>
        </Box>
      </Box>
    );
  };
};

export default WithAppWrapper;
