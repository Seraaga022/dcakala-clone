import { vazirmatn } from "@/app/Fonts";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const OffersNav = () => {
  return (
    <>
      <Box pt="3px">
        <Box
          component={"nav"}
          display="flex"
          sx={{ "@media (max-width: 650px)": { display: "none" } }}
          justifyContent="center"
          alignItems="center"
          bgcolor="#f3f3f3"
          height="45px"
          borderRadius="0 0 85% 85%/0 0 50px 50px"
          gap="33px"
        >
          <Box height="100%">
            <Link href="https://mag.dcakala.com/">
              <Box
                display="flex"
                alignItems="center"
                gap="10px"
                height="100%"
                sx={{
                  "&:hover": {
                    color: "#d1d5db",
                    transition: "color ease-in 100ms",
                  },
                }}
              >
                <Box className={vazirmatn.className} fontSize="14px">
                  مجله آموزشی
                </Box>
                <Box component="i" className="fa-solid fa-tags" />
              </Box>
            </Link>
          </Box>
          <Box height="100%">
            <Link href="content/gift-card">
              <Box
                display="flex"
                alignItems="center"
                gap="10px"
                height="100%"
                sx={{
                  "&:hover": {
                    color: "#d1d5db",
                    transition: "color ease-in 100ms",
                  },
                }}
              >
                <Box className={vazirmatn.className} fontSize="14px">
                  تخفیف ها و پیشنهادات
                </Box>
                <Box component="i" className="fa-solid fa-tags" />
              </Box>
            </Link>
          </Box>
          <Box height="100%">
            <Link href="content/buy-Installments">
              <Box
                display="flex"
                alignItems="center"
                gap="10px"
                height="100%"
                sx={{
                  "&:hover": {
                    color: "#d1d5db",
                    transition: "color ease-in 100ms",
                  },
                }}
              >
                <Box className={vazirmatn.className} fontSize="14px">
                  خرید اقساطی
                </Box>
                <Box component="i" className="fa-solid fa-tags" />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OffersNav;
