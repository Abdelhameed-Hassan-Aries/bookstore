import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const AppBarComponent = () => {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          pr: "24px",
        }}
      ></Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
