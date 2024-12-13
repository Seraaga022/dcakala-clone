"use client";
import React from "react";
import { Box } from "@mui/material";
import styles from "./mainSwiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import getUniqueKey from "@/utils/lib/UniqueKey";

const MainSwiper = () => {
  const images = [
    `/images/mainSwiper/1.jpg`,
    `/images/mainSwiper/2.jpg`,
    `/images/mainSwiper/3.jpg`,
    `/images/mainSwiper/4.jpg`,
  ];

  return (
    <Box
      sx={{
        "& .swiper-button-prev, .swiper-button-next": {
          color: "#ff7900",
        },
        "& .swiper-pagination-bullet-active": {
          bgcolor: "#ff7900",
        },
        zIndex: 98,
        position: "relative",
      }}
    >
      <Swiper
        dir="rtl"
        className={styles.swiper}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
      >
        {images.map((img) => (
          <SwiperSlide
            key={getUniqueKey()}
            style={{ height: "100%", width: "100%" }}
          >
            <Link href="">
              <Box
                position="relative"
                width="100%"
                height="100%"
                sx={{
                  "@media (max-width: 900px)": {
                    "& .hero-swiper-slide-image": {
                      objectPosition: "70% center",
                      "&:nth-child(2)": {
                        objectPosition: "50% center",
                      },
                      "&:nth-child(3)": {
                        objectPosition: "-20% center",
                      },
                      "&:nth-child(4)": {
                        objectPosition: "60% center",
                      },
                    },
                  },
                  "@media (max-width: 450px)": {
                    "& .hero-swiper-slide-image": {
                      objectPosition: "80% center",
                      "&:nth-child(2)": {
                        objectPosition: "60% center",
                      },
                      "&:nth-child(3)": {
                        objectPosition: "-20% center",
                      },
                      "&:nth-child(4)": {
                        objectPosition: "70% center",
                      },
                    },
                  },
                }}
              >
                <Image
                  src={img}
                  className={`hero-swiper-slide-image-${
                    img.split("")[img.length - 5]
                  }`}
                  alt="hero-slider-slide"
                  objectFit="cover"
                  fill
                />
              </Box>
            </Link>
          </SwiperSlide>
        ))}
        {/* navigation & pagination */}
        <Box
          className="swiper-button-next"
          sx={{ "&.swiper-button-disabled": { display: "none" } }}
        />
        <Box
          className="swiper-button-prev"
          sx={{ "&.swiper-button-disabled": { display: "none" } }}
        />
        <Box className="swiper-pagination" pb="1.5svh" />
      </Swiper>
    </Box>
  );
};

export default MainSwiper;
