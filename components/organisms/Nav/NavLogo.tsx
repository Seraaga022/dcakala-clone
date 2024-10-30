import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <Box>
      <Link href="/" style={{ margin: 0, padding: 0 }}>
        <Image width={90} height={40} src="/images/logo.webp" alt="" />
      </Link>
    </Box>
  );
};

export default NavLogo;
