import ProductCard from "@/components/molecules/ProductCard";
import { ProductRelativeProductT } from "@/utils/types/ProductDetails";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RelativeProducts = ({
  relativeProducts,
}: {
  relativeProducts: ProductRelativeProductT[];
}) => {
  return (
    <>
      {/* section title */}
      <Box>
        <Stack>
          {/* text */}
          <Box display="flex" dir="rtl" justifyContent="space-between">
            <Box
              sx={{
                borderBottom: "2.3px solid #ff7a01",
                py: "10px",
                px: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography fontSize="14px" color="#ff7a01" fontWeight={400}>
                محصولات مرتبط
              </Typography>
            </Box>
          </Box>
          {/* divider */}
          <Divider />
        </Stack>
      </Box>
      {/* products */}
      <Box mt="10px">
        <Box
          bgcolor="#ffd7b3"
          p="15px"
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
              overflowY: "visible",
            }}
            slidesPerView={5}
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
                slidesPerView: 3.5,
              },
              650: {
                slidesPerView: 2.5,
              },
              0: {
                slidesPerView: 1.5,
              },
            }}
          >
            {relativeProducts.map((product) => (
              <SwiperSlide key={product.id.toString().concat(product.image)}>
                <ProductCard product={product} minHeight="470px">
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
                        minHeight: "40px",
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
        </Box>
      </Box>
    </>
  );
};

export default RelativeProducts;
