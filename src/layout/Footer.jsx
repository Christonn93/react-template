// Importing React
import React, { Link } from "react-router-dom";

// Importing MUI
import { Box, Typography } from "@mui/material";

// Importing MUI Icons
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
 const timeDate = new Date();
 const year = timeDate.getFullYear();

 return (
  <footer>
   <Box
    sx={{
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     gap: 1,
     p: 2,
    }}
   >
    <CopyrightIcon color="TextWhite" />
    <Typography variant="body2" color="#FFFF">
     All right reserved. Christopher Tønnesland {year}
    </Typography>
   </Box>
  </footer>
 );
};

export default Footer;
