"use client";
import React from "react";
import { Box } from "@mui/material";
import styles from "@/assets/css/main-swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const MainSwiper = () => {
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
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
      >
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <Link href="">
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: 'url("/images/mainSwiper/1.jpg")',
                "@media (max-width: 540px)": {
                  backgroundImage:
                    'url("/images/mainSwiper/mobile/1(mobile).jpg")',
                  backgroundSize: "cover",
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <Link href="">
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: 'url("/images/mainSwiper/2.jpg")',
                "@media (max-width: 540px)": {
                  backgroundImage:
                    'url("/images/mainSwiper/mobile/2(mobile).jpg")',
                  backgroundSize: "cover",
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <Link href="">
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: 'url("/images/mainSwiper/3.jpg")',
                "@media (max-width: 540px)": {
                  backgroundImage:
                    'url("/images/mainSwiper/mobile/3(mobile).jpg")',
                  backgroundSize: "cover",
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <Link href="">
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: 'url("/images/mainSwiper/4.jpg")',
                "@media (max-width: 540px)": {
                  backgroundImage:
                    'url("/images/mainSwiper/mobile/4(mobile).jpg")',
                  backgroundSize: "cover",
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <Link href="">
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: 'url("/images/mainSwiper/5.jpg")',
                "@media (max-width: 540px)": {
                  backgroundImage:
                    'url("/images/mainSwiper/mobile/5(mobile).jpg")',
                  backgroundSize: "cover",
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <Link href="">
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: 'url("/images/mainSwiper/6.jpg")',
                "@media (max-width: 540px)": {
                  backgroundImage:
                    'url("/images/mainSwiper/mobile/6(mobile).jpg")',
                  backgroundSize: "cover",
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <Link href="">
            <Box
              width="100%"
              height="100%"
              sx={{
                backgroundImage: 'url("/images/mainSwiper/7.jpg")',
                "@media (max-width: 540px)": {
                  backgroundImage:
                    'url("/images/mainSwiper/mobile/7(mobile).jpg")',
                  backgroundSize: "cover",
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          </Link>
        </SwiperSlide>
        {/* navigation & pagination */}
        <Box
          className="swiper-button-next"
          sx={{ "&.swiper-button-disabled": { display: "none" } }}
        />
        <Box
          className="swiper-button-prev"
          sx={{ "&.swiper-button-disabled": { display: "none" } }}
        />
        <Box className="swiper-pagination" pb="10px" />
      </Swiper>
    </Box>
  );
};

export default MainSwiper;
