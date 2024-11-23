"use client";
import { vazirmatn } from "@/app/Fonts";
import { Box, Container, ThemeProvider } from "@mui/material";
import React from "react";
import DiscountBoxCustomBreakPoint from "@/theme/CustomBreakPoint";
import useTimer from "@/hooks/useTimer";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import discountedProductsData from "@/assets/data/discountedProducts.json";
import { TProduct } from "@/utils/types/Product";
import ProductCard from "@/components/molecules/ProductCard";

const DiscountBox = () => {
  const remainingDiscountTime = useTimer();
  const discountedProducts: TProduct[] = discountedProductsData;

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1390px",
          },
        }}
        disableGutters={true}
      >
        <ThemeProvider theme={DiscountBoxCustomBreakPoint}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", mobile: "row" }}
            height={{
              xs: "480px",
              mobile: "390px",
              md: "380px",
              lg: "410px",
            }}
            overflow="hidden"
            pt="6px"
            px={{ xs: 0, mobile: "15px" }}
            pb="27px"
          >
            {/* swiper */}
            <Box flex={1} order={{ xs: 2, mobile: 1 }} position="relative">
              <Box
                position="relative"
                height={{ xs: "100%", mobile: "95%" }}
                sx={{
                  borderRight: "none",
                  borderWidth: "10px",
                  borderColor: "#ffa500",
                  borderBlockStyle: { xs: "none", mobile: "solid" },
                  borderLeftStyle: { xs: "none", mobile: "solid" },
                  borderRadius: { xs: "0", mobile: "15px" },
                }}
                py={{ xs: 0, mobile: "10px" }}
                pl={{ xs: 0, mobile: "10px" }}
                pr="none"
              >
                {/* swiper */}
                <Box
                  height="100%"
                  width="100%"
                  position="relative"
                  bgcolor="#ffa500"
                  px={{ xs: "5px", mobile: "20px" }}
                  py="20px"
                  boxSizing="border-box"
                  borderRadius={{ xs: 0, mobile: "5px" }}
                  overflow="hidden"
                >
                  <Box
                    height="100%"
                    width="100%"
                    sx={{
                      "& .swiper-button-prev, .swiper-button-next": {
                        color: "#ff7900",
                      },
                      "& .swiper-button-disabled": {
                        display: "none",
                      },
                      oveflow: "hidden",
                    }}
                  >
                    <Container
                      disableGutters
                      sx={{
                        height: "100%",
                        maxWidth: { mobile: "500px" },
                        "@media (min-width: 830px)": {
                          maxWidth: "550px",
                        },
                        "@media (min-width: 900px)": {
                          maxWidth: "600px",
                        },
                        "@media (min-width: 915px)": {
                          maxWidth: "630px",
                        },
                        "@media (min-width: 980px)": {
                          maxWidth: "680px",
                        },
                        "@media (min-width: 1040px)": {
                          maxWidth: "730px",
                        },
                        "@media (min-width: 1150px)": {
                          maxWidth: "820px",
                        },
                        "@media (min-width: 1250px)": {
                          maxWidth: "900px",
                        },
                        "@media (min-width: 1300px)": {
                          maxWidth: "1000px",
                        },
                      }}
                    >
                      <Swiper
                        dir="rtl"
                        slidesPerView={4}
                        modules={[Navigation]}
                        className="swiper"
                        navigation={{
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        }}
                        breakpoints={{
                          1150: {
                            slidesPerView: 4,
                          },
                          1000: {
                            slidesPerView: 2.5,
                          },
                          700: {
                            slidesPerView: 2,
                          },
                          0: {
                            slidesPerView: 1.5,
                          },
                        }}
                        spaceBetween={20}
                        style={{
                          height: "100%",
                          overflowY: "visible",
                        }}
                      >
                        {discountedProducts.map((product) => (
                          <SwiperSlide
                            key={product.id.toString().concat(product.image)}
                          >
                            <ProductCard product={product} minHeight="100%">
                              <ProductCard.TopDetails />
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
                {/* clone border */}
                <Box
                  position="absolute"
                  width="103%"
                  height={{ xs: "104.6%", mobile: "104%" }}
                  top={{ xs: -19, mobile: -17 }}
                  right={{ xs: 0, mobile: -20 }}
                  bottom={-10}
                  left={{ xs: -15, mobile: -17 }}
                  sx={{
                    borderTopStyle: { xs: "none", mobile: "dashed" },
                    borderRight: "none",
                    borderBottomStyle: "dashed",
                    borderLeftStyle: { xs: "none", mobile: "dashed" },
                    borderColor: "#ffa500",
                    borderWidth: "10px",
                    borderRadius: { xs: "0", mobile: "20px" },
                  }}
                />
              </Box>
              {/* dashed circle left effect */}
              <Box
                position="absolute"
                right={-50}
                top={{ xs: -90, mobile: -50 }}
                minWidth="70px"
                minHeight="70px"
                width="70px"
                height="70px"
                bgcolor="white"
                border="8px solid #ffa500"
                borderRadius="9999px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="white 0px 0px 0px 6px"
                zIndex={10}
              >
                <Box
                  position="absolute"
                  width="85%"
                  height="85%"
                  border="9px dashed #ffa500"
                  borderRadius="100%"
                />
              </Box>
              {/* dashed circle right effect */}
              <Box
                position="absolute"
                right={{ xs: "auto", mobile: -50 }}
                top={{ xs: -90, mobile: "auto" }}
                left={{ xs: -50, mobile: "auto" }}
                bottom={-70}
                minWidth="70px"
                minHeight="70px"
                width="70px"
                height="70px"
                bgcolor="white"
                border="8px solid #ffa500"
                borderRadius="9999px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="white 0px 0px 0px 6px"
                zIndex={10}
              >
                <Box
                  position="absolute"
                  width="85%"
                  height="85%"
                  border="9px dashed #ffa500"
                  borderRadius="100%"
                />
              </Box>
            </Box>
            {/* discount details */}
            <Box flex={0.27} height="100%" order={{ xs: 1, mobile: 2 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
                sx={{
                  borderColor: "#ffa500",
                  borderStyle: "solid",
                  borderLeftStyle: "dashed",
                  borderWidth: { xs: 0, mobile: "10px" },
                }}
                borderRadius="15px"
                position="relative"
              >
                {/* text and timer */}
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="30px"
                  position="relative"
                >
                  {/* title */}
                  <Box
                    color="#000"
                    fontSize={{ xs: "15px", md: "18px" }}
                    className={vazirmatn.className}
                    px={{ xs: "18px", md: "40px" }}
                    textAlign="center"
                    pt="30px"
                  >
                    زمان باقی مانده تا اتمام تخفیف ها
                  </Box>
                  {/* timer */}
                  <Box
                    display="flex"
                    justifyContent="center"
                    className={vazirmatn.className}
                    color="#ef4444"
                  >
                    {/* hours */}
                    <Box letterSpacing="5px">
                      {remainingDiscountTime.hour < 10 ? "0" : ""}
                      {remainingDiscountTime.hour}
                    </Box>
                    &nbsp;{":"}&nbsp;
                    {/* minutes */}
                    <Box letterSpacing="5px">
                      {remainingDiscountTime.minute < 10 ? "0" : ""}
                      {remainingDiscountTime.minute}
                    </Box>
                    &nbsp;{":"}&nbsp;
                    {/* seconds */}
                    <Box letterSpacing="5px">
                      {remainingDiscountTime.second < 10 ? "0" : ""}
                      {remainingDiscountTime.second}
                    </Box>
                  </Box>
                </Box>
                {/* discount tag */}
                <Box
                  position="absolute"
                  zIndex={9}
                  top={40}
                  right={-20}
                  display={{ xs: "none", mobile: "block" }}
                >
                  <Box position="relative">
                    <Box
                      component={"img"}
                      width={{ xs: 150, sm: 140, md: 180, lg: 220 }}
                      height={{ xs: 50, sm: 50, md: 75, lg: 75 }}
                      src="/images/discount-tag.png"
                    />
                    <Box
                      position="absolute"
                      left={{ xs: "23px", sx: "20px", lg: "50px" }}
                      top={{ xs: "13px", sx: "16px", md: "21px" }}
                      color="#fff"
                      fontSize={{ xs: "15px", sx: "18px", md: "20px" }}
                      className={vazirmatn.className}
                    >
                      تخفیف باکس
                    </Box>
                  </Box>
                </Box>
                {/* clone border */}
                <Box
                  zIndex={8}
                  position="absolute"
                  border="10px dashed #ffa500"
                  sx={{
                    borderLeftStyle: "none",
                    borderRightStyle: { xs: "none", mobile: "dashed" },
                    borderBottomStyle: { xs: "none", mobile: "dashed" },
                    borderRadius: { xs: "0", mobile: "15px" },
                  }}
                  width={{
                    xs: "108%",
                    mobile: "111%",
                    md: "107%",
                    lg: "106%",
                  }}
                  height={{ xs: "107%", sm: "103%" }}
                  left={{ xs: -15, sm: -10, md: -8, lg: -9 }}
                />
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export default DiscountBox;
