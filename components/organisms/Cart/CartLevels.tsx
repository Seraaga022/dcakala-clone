"use client";
import {
  CheckCircle,
  LocationOnRounded,
  ShoppingCartRounded,
  Wallet,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import React from "react";

const CartLevels = () => {
  const pathName = usePathname();
  const currentCartSegment = pathName.split("/")[1];
  const cartSegments = ["cart", "address", "cart#"];

  const LevelItem = ({ color = "#d9d9d9" }: { color?: string }) => {
    return (
      <Box display="flex" justifyContent="center">
        <CheckCircle
          sx={{
            color,
            fontSize: { xs: "35px", sm: "48px" },
            border: "2px solid #fff",
            bgcolor: "#fff",
            borderRadius: "999px",
          }}
        />
      </Box>
    );
  };

  return (
    <Box
      key={pathName}
      width="100%"
      border="1px solid #d9d9d9"
      borderRadius="7px"
      height="30svh"
      display="flex"
      justifyContent="center"
    >
      <Box
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width={{ xs: "82%", sm: "92%" }}
      >
        {/* first progress */}
        <Box
          flex={1}
          minHeight="5.5px"
          bgcolor={
            currentCartSegment === cartSegments[2] ? "#ff7900" : "#d9d9d9"
          }
        />
        {/* second progress */}
        <Box
          flex={1}
          minHeight="5.5px"
          bgcolor={
            currentCartSegment === cartSegments[1] ? "#ff7900" : "#d9d9d9"
          }
        />
        {/* levels */}
        <Box
          position="absolute"
          width="100%"
          display="flex"
          alignItems="center"
        >
          <Grid
            container
            dir="rtl"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            {/* first level */}
            <Grid>
              <Box position="relative" color="#ff7900">
                <Link href={`/${cartSegments[0]}`}>
                  <Box
                    position="absolute"
                    top="-33px"
                    right="15%"
                    display="flex"
                    justifyContent="center"
                  >
                    <ShoppingCartRounded
                      sx={{ fontSize: { xs: "29px", sm: "35px" } }}
                    />
                  </Box>
                  <LevelItem color="#ff7900" />
                  <Box position="absolute" bottom="-20px">
                    <Typography
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      fontSize="13px"
                      fontWeight={700}
                    >
                      سبد خرید
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
            {/* second level */}
            <Grid>
              <Box
                position="relative"
                color={
                  currentCartSegment === cartSegments[1] ? "#ff7900" : "#d9d9d9"
                }
              >
                <Link href={`/${cartSegments[1]}`}>
                  <Box
                    position="absolute"
                    top="-33px"
                    right={{ xs: "14%", sm: "17%" }}
                    display="flex"
                    justifyContent="center"
                  >
                    <LocationOnRounded
                      sx={{ fontSize: { xs: "29px", sm: "35px" } }}
                    />
                  </Box>
                  <LevelItem
                    color={
                      currentCartSegment !== cartSegments[0]
                        ? "#ff7900"
                        : undefined
                    }
                  />
                  <Box position="absolute" bottom="-20px" left="-25px">
                    <Typography
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      fontSize="13px"
                      fontWeight={700}
                    >
                      آدرس و نحوه ارسال
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
            {/* third level */}
            <Grid>
              <Box
                position="relative"
                color={
                  currentCartSegment !== cartSegments[0] &&
                  currentCartSegment !== cartSegments[1]
                    ? "#ff7900"
                    : "#d9d9d9"
                }
              >
                <Link href={`/${cartSegments[2]}`}>
                  <Box
                    position="absolute"
                    top="-33px"
                    right={{ xs: "12%", sm: "15%" }}
                    display="flex"
                    justifyContent="center"
                  >
                    <Wallet sx={{ fontSize: { xs: "29px", sm: "35px" } }} />
                  </Box>
                  <LevelItem />
                  <Box position="absolute" bottom="-20px" right="-12px">
                    <Typography
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      fontSize="13px"
                      fontWeight={700}
                    >
                      روش پرداخت
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CartLevels;
