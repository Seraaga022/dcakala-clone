import NavLogo from "@/components/organisms/Cart/NavLogo";
import NavTel from "@/components/organisms/Cart/NavTel";
import { Box } from "@mui/material";
import React from "react";

const CartNavbar = () => {
  return (
    <Box>
      <Box
        height="70px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="10px"
        sx={{
          borderBottom: "1px solid #d9d9d9",
        }}
      >
        {/* tel */}
        <Box>
          <NavTel />
        </Box>
        {/* logo */}
        <Box>
          <NavLogo />
        </Box>
      </Box>
    </Box>
  );
};

export default CartNavbar;
