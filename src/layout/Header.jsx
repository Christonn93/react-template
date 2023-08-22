import React from "react";

import { Box } from "@mui/material";

const Header = () => {
 return (
  <>
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
     p: 2,
    }}
   >
    <Box id="section-one">
     <p>Logo-section</p>
    </Box>
    <Box id="section-two">
     <p>Navigation section</p>
    </Box>
   </Box>
  </>
 );
};

export default Header;
