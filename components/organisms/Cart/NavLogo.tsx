import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <Box>
      <Box>
        <Link href="/">
          <Box
            width={{ xs: "120px", md: "150px" }}
            height={{ xs: "30px", md: "40px" }}
            position="relative"
          >
            <Image
              src="/images/cart/cart-nav-logo.webp"
              alt="cart-nav-logo"
              fill
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default NavLogo;
