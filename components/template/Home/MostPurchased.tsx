"use client";
import { Box, Container, Divider, Stack } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import mustPurchaseProducts from "@/assets/data/mustPurchaseProducts.json";
import Image from "next/image";
import Link from "next/link";
import { vazirmatn } from "@/app/Fonts";

const MostPurchased = () => {
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
        <Stack bgcolor="#ffa830">
          {/* divider */}
          <Box mt="30px">
            <Container
              maxWidth="lg"
              sx={{ "&.MuiContainer-maxWidthLg": { maxWidth: "1380px" } }}
              disableGutters
            >
              <Divider
                sx={{
                  "&::before": { borderColor: "#212121", borderWidth: "2px" },
                  "&::after": { borderColor: "#212121", borderWidth: "2px" },
                }}
                variant="middle"
              >
                <Box
                  fontSize="14px"
                  fontFamily={vazirmatn.style.fontFamily}
                  fontWeight={600}
                  color="#212121"
                >
                  پرفروش ترین ها
                </Box>
              </Divider>
            </Container>
          </Box>
          {/* products swiper */}
          <Box mt="20px" height="fit-content" p="10px">
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
                }}
                slidesPerView={5}
                spaceBetween={1}
                modules={[Navigation]}
                className="swiper"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  1250: {
                    slidesPerView: 5,
                    enabled: false,
                  },
                  1000: {
                    slidesPerView: 3.5,
                    enabled: true,
                  },
                  770: {
                    slidesPerView: 2.5,
                  },
                  640: {
                    slidesPerView: 4.5,
                  },
                  0: {
                    slidesPerView: 2.5,
                  },
                }}
              >
                {mustPurchaseProducts.map((product) => (
                  <SwiperSlide
                    key={product.slug.concat(
                      product.imageSrc.concat(Math.random().toString())
                    )}
                  >
                    <Link href={product.slug}>
                      <Box
                        sx={{
                          position: "relative",
                          width: { xs: "33vw", sm: "24vw", md: "220px" },
                          height: { xs: "33vw", sm: "24vw", md: "220px" },
                        }}
                      >
                        <Image
                          className="must-purchased-product-image"
                          fill
                          src={product.imageSrc}
                          alt={product.altarnative}
                          style={{
                            borderRadius: "5px",
                          }}
                        />
                      </Box>
                    </Link>
                  </SwiperSlide>
                ))}
                {/* swiper navigation buttons */}
                <Box className="swiper-button-next" />
                <Box className="swiper-button-prev" />
              </Swiper>
            </Container>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MostPurchased;
