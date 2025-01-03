import { isAuthenticated } from "@/hooks/useCheckAuth";
import { vazirmatn } from "@/app/Fonts";
import { AccountCircleRounded } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavProfile = () => {
  // const token = "null";
  const isAuth = !!isAuthenticated;

  return (
    <Link href="/login">
      <Box
        display="flex"
        alignItems="center"
        bgcolor="#fff"
        borderRadius="9999px"
        height="33px"
        px="6px"
        sx={{
          cursor: "pointer",
        }}
      >
        {/* text */}
        <Box
          mr="5px"
          pt="2px"
          display={isAuth ? "block" : "none"}
          sx={{
            "@media (max-width: 1000px)": { display: "none" },
            minWidth: "50px",
          }}
        >
          <Typography
            sx={{
              color: "#212121",
              fontSize: { xs: "1vw", lg: "12px" },
              fontFamily: vazirmatn.style.fontFamily,
            }}
          >
            {isAuth ? "user name" : "وارد شوید"}
          </Typography>
        </Box>
        {/* avatar */}
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar
              src="user.avatar"
              sx={{ width: 22, height: 22, bgcolor: "#fff" }}
            >
              <AccountCircleRounded sx={{ color: "#009688" }} />
            </Avatar>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default NavProfile;
