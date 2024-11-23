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
          <Box mt="20px" height="270px">
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
                spaceBetween={10}
                modules={[Navigation]}
                className="swiper"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  1150: {
                    slidesPerView: 5,
                    enabled: false,
                  },
                  1000: {
                    slidesPerView: 3.5,
                    enabled: true,
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
                    <Box
                      sx={{
                        "@media (min-width: 1150px) and (max-width: 1350px)": {
                          "& .must-purchased-product-image": {
                            width: 220,
                            height: 220,
                          },
                          "@media (max-width: 1100px)": {
                            "& .must-purchased-product-image": {
                              width: 280,
                              height: 260,
                            },
                          },
                        },
                      }}
                    >
                      <Link href={product.slug}>
                        <Image
                          className="must-purchased-product-image"
                          width={250}
                          height={250}
                          src={product.imageSrc}
                          alt={product.altarnative}
                          style={{
                            borderRadius: "5px",
                          }}
                        />
                      </Link>
                    </Box>
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
