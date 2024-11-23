import { vazirmatn } from "@/app/Fonts";
import { LocalPhoneRounded } from "@mui/icons-material";
import { Box, BoxProps, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavTel = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Link href="tel:02172195">
        <Box display="flex" alignItems="center" gap="3px">
          {/* icon */}
          <Box>
            <LocalPhoneRounded sx={{ color: "#fff" }} />
          </Box>
          {/* text */}
          <Box display="flex" alignItems="center">
            <Typography
              className="nav-tel-text"
              fontFamily={vazirmatn.style.fontFamily}
              sx={{ color: "#fff", fontSize: "14px" }}
            >
              02172195
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default NavTel;
