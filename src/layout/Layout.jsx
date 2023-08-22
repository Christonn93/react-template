// Importing React
import React from "react";
import { Outlet } from "react-router-dom";

// Importing MUI
import { Box, Container } from "@mui/material";

// Importing layout components
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
 return (
  <>
   <Box
    sx={{
     display: "grid",
     gridTemplateRows: "auto 1fr auto",
     height: "100vh",
    }}
   >
    <Header />
    <Container maxWidth="lg">
     <Outlet />
    </Container>
    <Footer />
   </Box>
  </>
 );
};

export default Layout;