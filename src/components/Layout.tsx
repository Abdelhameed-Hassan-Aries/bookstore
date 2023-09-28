import Meta from "./Meta";
import React from "react";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main>
        <Box height="100%">{children}</Box>
      </main>
    </>
  );
};

export default Layout;
