import { vazirmatn } from "@/app/Fonts";
import { TUrlPath } from "@/utils/types/Category";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Breadcrumbs = (props: { urlPath: TUrlPath[] }) => {
  const { urlPath } = props;
  const currentPage = urlPath[urlPath.length - 1];

  return (
    <Box
      mt="10px"
      dir="rtl"
      display="flex"
      alignItems="center"
      gap="10px"
      sx={{
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {/* home */}
      <Link href="/">
        <Box display="flex" gap="7px">
          <Box>خانه</Box>
          <Box>/</Box>
        </Box>
      </Link>
      {/* remaining url pathes */}
      {urlPath &&
        urlPath.map(
          (bc, index) =>
            index !== urlPath.length - 1 && (
              <Box
                key={bc.title}
                display="flex"
                alignItems="center"
                fontSize="14px"
              >
                <Link href={bc.slug}>
                  <Box display="flex" gap="8px" alignItems="center">
                    <Typography
                      fontSize="12px"
                      fontFamily={vazirmatn.style.fontFamily}
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                    >
                      {bc.title}
                    </Typography>
                    <Box>/</Box>
                  </Box>
                </Link>
              </Box>
            )
        )}
      {/* current page */}
      <Box
        color="#ff7900"
        display="flex"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        fontWeight={600}
        fontSize="13px"
      >
        <Box>{currentPage.title}</Box>
      </Box>
    </Box>
  );
};

export default Breadcrumbs;
