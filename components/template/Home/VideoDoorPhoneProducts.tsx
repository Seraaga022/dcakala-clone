"use client";
import { vazirmatn } from "@/app/Fonts";
import ProductCard from "@/components/molecules/ProductCard";
import { TProduct } from "@/utils/types/Product";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import videoDoorPhoneProductsData from "@/assets/data/videoDoorPhoneProducts.json";

const VideoDoorPhoneProducts = () => {
  const videoDoorPhoneProducts: TProduct[] = videoDoorPhoneProductsData;
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
        <Box>
          {/* more link */}
          <Box>
            <Button variant="text" color="warning">
              <Link href="video-door-phone">
                <Box fontFamily={vazirmatn.style.fontFamily}>مشاهده همه</Box>
              </Link>
            </Button>
          </Box>
          {/* swiper */}
          <Box height="450px">
            <Container
              maxWidth="lg"
              sx={{
                "&.MuiContainer-maxWidthLg": {
                  maxWidth: "1350px",
                },
                height: "100%",
                "& .swiper-button-prev, .swiper-button-next": {
                  color: "#ff7900",
                },
                "& .swiper-button-disabled": {
                  display: "none",
                },
                oveflow: "hidden",
              }}
            >
              <Swiper
                dir="rtl"
                style={{
                  height: "100%",
                  overflowY: "visible",
                }}
                slidesPerView={5}
                spaceBetween={30}
                modules={[Navigation]}
                className="swiper"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                enabled={false}
                breakpoints={{
                  1150: {
                    enabled: false,
                    slidesPerView: 5,
                  },
                  1000: {
                    slidesPerView: 3.5,
                    enabled: true,
                  },
                  650: {
                    slidesPerView: 2.5,
                  },
                  0: {
                    slidesPerView: 1.5,
                  },
                }}
              >
                {videoDoorPhoneProducts.map((product) => (
                  <SwiperSlide
                    key={product.id.toString().concat(product.image)}
                  >
                    <ProductCard product={product} minHeight="100%">
                      <ProductCard.TopDetails
                        sx={{
                          "&.productCard-timer_container": {
                            pt: "7px",
                            pl: "5px",
                          },
                        }}
                      />
                      <ProductCard.Image />
                      <ProductCard.Colors
                        sx={{
                          "& .productCard-colors-placeholder": {
                            minHeight: "20px",
                          },
                        }}
                      />
                      <ProductCard.FastExpress
                        sx={{
                          "& .productCard-fastExpress-placeholder": {
                            minHeight: "55px",
                          },
                        }}
                      />
                      <ProductCard.Title />
                      <ProductCard.Price />
                    </ProductCard>
                  </SwiperSlide>
                ))}
                {/* swiper navigation buttons */}
                <Box className="swiper-button-next" />
                <Box className="swiper-button-prev" />
              </Swiper>
            </Container>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoDoorPhoneProducts;
