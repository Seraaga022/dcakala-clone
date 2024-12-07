"use client";
import { vazirmatn } from "@/app/Fonts";
import ProductCard from "@/components/molecules/ProductCard";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import newProductsData from "@/assets/data/newProducts.json";
import { TProduct } from "@/utils/types/Product";

const NewProducts = () => {
  const newProducts: TProduct[] = newProductsData;
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
          {/* title */}
          <Box minHeight="1px" bgcolor="#e0e0e0" position="relative">
            <Box
              position="absolute"
              bottom={1}
              right={0}
              width="120px"
              height="35px"
              borderBottom="3px solid #ff7900"
              display="flex"
              justifyContent="center"
              alignItems="start"
            >
              <Box
                fontFamily={vazirmatn.style.fontFamily}
                fontSize="14px"
                color="#ff6b00"
              >
                محصولات جدید
              </Box>
            </Box>
          </Box>
          {/* swiper */}
          <Box mt="30px" height={{ xs: "300px", sm: "380px", lg: "450px" }}>
            <Container
              maxWidth="lg"
              sx={{
                "&.MuiContainer-maxWidthLg": {
                  maxWidth: "1380px",
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
              {/* more link */}
              <Box>
                <Button variant="text" color="warning">
                  <Link href="video-door-phone">
                    <Box fontFamily={vazirmatn.style.fontFamily}>
                      مشاهده بیشتر
                    </Box>
                  </Link>
                </Button>
              </Box>
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
                breakpoints={{
                  1150: {
                    slidesPerView: 5,
                  },
                  1000: {
                    spaceBetween: 25,
                    slidesPerView: 3.5,
                  },
                  650: {
                    spaceBetween: 18,
                    slidesPerView: 2.5,
                  },
                  0: {
                    spaceBetween: 10,
                    slidesPerView: 1.7,
                  },
                }}
              >
                {newProducts.map((product) => (
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
                      <ProductCard.Colors />
                      <ProductCard.FastExpress />
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

export default NewProducts;
