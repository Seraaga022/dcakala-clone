"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import { vazirmatn } from "@/app/Fonts";
import { motion } from "framer-motion";

const MainCategories = () => {
  const mainCategoryItems = [
    {
      src: "/images/mainCategories/simaran-electrical-devices-categories-desktop_original.png",
      text: "لوازم خانگی",
    },
    {
      src: "/images/mainCategories/barrier-categories-desktop_original.png",
      text: "راهبند",
    },
    {
      src: "/images/mainCategories/automatic-glass-doors-categories-desktop_original.png",
      text: "درب اتوماتیک شیشه ای",
    },
    {
      src: "/images/mainCategories/automatic-gate-categories-desktop_original.png",
      text: "جک درب پارکینگی",
    },
    {
      src: "/images/mainCategories/video-door-phone-categories-desktop_original.png",
      text: "آیفون تصویری",
    },
    {
      src: "/images/mainCategories/cctv-categories-desk_original.png",
      text: "دوربین مداربسته",
    },
  ];

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1275px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            "& .categoryImages": { width: 120, height: 120 },
          }}
        >
          {mainCategoryItems.map((i) => (
            <Box key={i.src} flex={{ xs: 1.5, md: 1 }}>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="20px"
                maxWidth="350px"
                sx={{
                  "@media (min-width:300px) and (max-width:395px)": {
                    "& .categoryImages": { width: 95, height: 95 },
                  },
                  "@media (min-width:395px) and (max-width:450px)": {
                    "& .categoryImages": { width: 120, height: 120 },
                  },
                  "@media (min-width:450px) and (max-width:510px)": {
                    "& .categoryImages": { width: 140, height: 140 },
                  },
                  "@media (min-width:510px) and (max-width:630px)": {
                    "& .categoryImages": { width: 145, height: 145 },
                  },
                  "@media (min-width:630px) and (max-width:890px)": {
                    "& .categoryImages": { width: 90, height: 90 },
                  },
                  "@media (min-width:1000px)": {
                    "& .categoryImages": { width: 150, height: 150 },
                  },
                }}
              >
                {/* image */}
                <Box>
                  <Image
                    src={i.src}
                    alt=""
                    width={151}
                    height={151}
                    className="categoryImages"
                  />
                </Box>
                {/* text */}
                <Box
                  className={vazirmatn.className}
                  fontSize={{ xs: "9px", sm: "12px", md: "13px" }}
                  color="black"
                  fontWeight={500}
                >
                  {i.text}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MainCategories;
