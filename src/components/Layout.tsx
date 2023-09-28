import Meta from "./Meta";
import React from "react";
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main>
        {/* <Header /> */}
        <Box>{children}</Box>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Layout;
