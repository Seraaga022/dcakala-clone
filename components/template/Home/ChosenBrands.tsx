"use client";
import { vazirmatn } from "@/app/Fonts";
import { Verified } from "@mui/icons-material";
import { Box, Container, Divider, ThemeProvider } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomBreakPoint from "@/theme/CustomBreakPoint";
import { TChosenBrands } from "@/utils/types/ChosenBrands";

const ChosenBrands = ({ brands }: { brands: TChosenBrands[] }) => {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1380px",
          },
        }}
      >
        <ThemeProvider theme={CustomBreakPoint}>
          <Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", lgL1: "row" }}
              height={{ xs: "200px", lgL1: "100px" }}
              gap="8px"
            >
              {/* brands */}
              <Box
                flex={1}
                order={{ xs: 2, lgL1: 1 }}
                border="1px solid #ff9e00"
                borderRadius="12px"
                height="100%"
                // if this props didnt specified, swiper would increase its width forever
                maxWidth={{ xs: "auto", lgL1: "86%" }}
                sx={{
                  "& .swiper-button-prev, .swiper-button-next": {
                    color: "#ff7900",
                  },
                  "& .swiper-button-disabled": {
                    display: "none",
                  },
                }}
              >
                <Swiper
                  dir="rtl"
                  style={{
                    height: "100%",
                  }}
                  slidesPerView={5}
                  spaceBetween={30}
                  modules={[Navigation]}
                  className="swiper"
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  breakpoints={{
                    1000: {
                      enabled: false,
                      slidesPerView: 5,
                    },
                    650: {
                      enabled: true,
                      slidesPerView: 3.5,
                    },
                    0: {
                      slidesPerView: 2.5,
                    },
                  }}
                >
                  {brands.map((b) => (
                    <>
                      <SwiperSlide
                        key={b.slug.concat(Math.random().toString())}
                      >
                        <Link href={b.slug}>
                          <Box
                            height="100%"
                            component="picture"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                              transition: "all ease-in 100ms",
                              filter: "grayscale(100%)",
                              "&:hover": {
                                filter: "grayscale(0)",
                              },
                            }}
                          >
                            <source srcSet={b.srcSet[0]} type="image/webp" />
                            <source srcSet={b.srcSet[1]} type="image/jpg" />
                            <Box
                              component="img"
                              srcSet={b.srcSet[1]}
                              src={b.imageSrc}
                              alt={b.altarnative}
                              title={b.altarnative}
                              width={75}
                              height={75}
                            />
                          </Box>
                        </Link>
                      </SwiperSlide>
                      <Divider
                        flexItem
                        orientation="vertical"
                        sx={{
                          "&::before": { borderColor: "#212121" },
                          "&::after": { borderColor: "#212121" },
                        }}
                      />
                    </>
                  ))}
                  {/* swiper navigation buttons */}
                  <Box className="swiper-button-next" />
                  <Box className="swiper-button-prev" />
                </Swiper>
              </Box>
              {/* section title */}
              <Box
                flex={{ xs: 0.8, lgL1: 0.135 }}
                order={{ xs: 1, lgL1: 2 }}
                sx={{
                  borderEndEndRadius: { xs: 0, lgL1: "12px" },
                  borderEndStartRadius: { xs: 0, lgL1: "12px" },
                  borderStartStartRadius: "12px",
                  borderStartEndRadius: "12px",
                }}
                bgcolor="#ff9e00"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  gap="5px"
                  height="100%"
                >
                  {/* icon */}
                  <Box display="flex" justifyContent="center">
                    <Verified sx={{ color: "#fff" }} />
                  </Box>
                  {/* text */}
                  <Box
                    display="flex"
                    justifyContent="center"
                    fontWeight={700}
                    fontSize="12px"
                    color="#fff"
                    fontFamily={vazirmatn.style.fontFamily}
                  >
                    منتخب برندها
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export default ChosenBrands;
