import { eduAustraliaVICWANTHandGuides } from "@/app/Fonts";
import { LocalPhoneRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavTel = () => {
  const phoneNumber = "02172195";
  const title = "مرکز تماس و پشتیبانی:";
  const textColor = "#009688";

  return (
    <Box>
      <Box display="flex" gap="10px" flexWrap="wrap">
        {/* phone number */}
        <Box display="flex" alignItems="center" order={{ xs: 2, xsL2: 1 }}>
          <Link href={`tel:${phoneNumber}`}>
            <Typography
              color={textColor}
              fontFamily={eduAustraliaVICWANTHandGuides.style.fontFamily}
            >
              {phoneNumber}
            </Typography>
          </Link>
        </Box>
        {/* title and logo */}
        <Box
          display="flex"
          alignItems="center"
          gap="10px"
          order={{ xs: 1, xsL2: 2 }}
        >
          {/* title */}
          <Box dir="rtl" display="flex" alignItems="center">
            <Typography fontSize={{ xs: "13px", xsL2: "16px" }}>
              {title}
            </Typography>
          </Box>
          {/* logo */}
          <Box>
            <Box display="flex" alignItems="center">
              <LocalPhoneRounded sx={{ color: textColor }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavTel;
