"use client";
import getUniqueKey from "@/utils/lib/UniqueKey";
import {
  ProductDiscountNumberT,
  ProductMediaT,
  ProductMediaTypeT,
  ProductNameT,
  ProductSpecialOfferT,
} from "@/utils/types/ProductDetails";
import { Category, Clear, PlayCircle, Share } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Grid from "@mui/material/Grid2";
import { CustomTab, CustomTabPanel } from "@/components/molecules/CustomTab";

const ProductImages = ({
  media,
  currentPage,
  name,
  discount,
  specialOffer,
}: {
  media: ProductMediaT[];
  currentPage: string;
  name: ProductNameT;
  discount: ProductDiscountNumberT;
  specialOffer: ProductSpecialOfferT;
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);
  const [selectedDialogBannerIndex, setSelectedDialogBannerIndex] =
    React.useState<number>(0);
  const swiperRef = React.useRef<SwiperRef>(null);
  const [isMediaDialogOpen, setMediaDialogOpen] = React.useState(false);
  const [selectedDialogTab, setSelectedDialogTab] =
    React.useState<ProductMediaTypeT>("picture");

  React.useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideTo(selectedImageIndex);
  }, [selectedImageIndex]);

  // React.useEffect(() => {
  //   if (selectedDialogBannerIndex === getVideoMediaIndex())
  //     setSelectedDialogTab("video");
  //   else setSelectedDialogTab("picture");
  // }, [selectedImageIndex]);

  const handleImageClick = (index: number) => {
    if (getVideoMediaIndex() !== index) {
      setSelectedImageIndex(index);
      setSelectedDialogBannerIndex(index);
      setMediaDialogOpen(true);
    } else {
      setSelectedDialogBannerIndex(index);
      setMediaDialogOpen(true);
    }
  };

  const videoExists = () => {
    return media.some((m) => m.type === "video") ? true : false;
  };

  function getVideoMediaIndex() {
    return media.findIndex((m) => m.type === "video");
  }

  function getFirstImageIndex() {
    return media.findIndex((m) => m.type === "picture");
  }

  return (
    <Box height={{ xs: "auto", mobile: "120svh", md: "600px" }}>
      <Grid
        container
        border="1px solid #e0e0e2"
        borderRadius="7px"
        height="90%"
      >
        {/* social networks */}
        <Grid height="11%" p="15px" size={12} position="relative">
          <Stack direction="row" justifyContent="center">
            {/* socials */}
            <Box>
              <IconButton>
                <Tooltip title={<Box>socials</Box>}>
                  <Share sx={{ color: "#707070" }} />
                </Tooltip>
              </IconButton>
            </Box>
            {/* compare */}
            <Box>
              <IconButton>
                <Tooltip
                  title={<Typography fontSize=".95em">مقایسه</Typography>}
                >
                  <Category sx={{ color: "#707070" }} />
                </Tooltip>
              </IconButton>
            </Box>
          </Stack>
          {/* right and left icons */}
          <Box>
            <Box position="absolute" left={0} top="40%">
              {discount && (
                <Box>
                  <Box p="5px" bgcolor="#ef4444">
                    <Typography color="#fff">{discount}</Typography>
                  </Box>
                </Box>
              )}
            </Box>
            <Box position="absolute" right={0} top="40%">
              {specialOffer && (
                <Box width="100px" height="30px">
                  <Image
                    src="/images/special-discount-tag.png"
                    alt="special-discount-logo"
                    fill
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
        {/* image swiper */}
        <Grid
          height={{
            xs: "25%",
            smL1_5: "30%",
            smL3: "35%",
            md: "55%",
            lg: "70%",
          }}
          size={12}
          px="10px"
          // swiper navigation styles
          sx={{
            "& .swiper-button-prev, .swiper-button-next": {
              color: "#ff7900",
            },
            "& .swiper-button-disabled": {
              display: "none",
            },
          }}
        >
          <Box
            height="100%"
            width="100%"
            sx={{
              cursor: "pointer",
            }}
          >
            <Swiper
              ref={swiperRef}
              dir="rtl"
              slidesPerView={1}
              modules={[Navigation]}
              className="swiper"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSlideChange={(swiper) =>
                setSelectedImageIndex(swiper.activeIndex)
              }
              style={{
                height: "100%",
              }}
            >
              {media.map(
                (m, index) =>
                  m.type === "picture" && (
                    <SwiperSlide
                      onClick={() => handleImageClick(index)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      key={getUniqueKey()}
                    >
                      <Box
                        width="90%"
                        position="relative"
                        sx={{ aspectRatio: 1 / 1, objectFit: "cover" }}
                      >
                        <Image src={m.src} alt="product-image" fill />
                      </Box>
                    </SwiperSlide>
                  )
              )}
              {/* swiper navigation buttons */}
              <Box className="swiper-button-next" />
              <Box className="swiper-button-prev" />
            </Swiper>
          </Box>
        </Grid>
        {/* media dialog */}
        <Dialog
          open={isMediaDialogOpen}
          onClose={() => setMediaDialogOpen(false)}
          aria-labelledby="alert-media-dialog"
          aria-describedby="alert-media-dialog"
          sx={{
            "& .MuiPaper-root": {
              scrollBehavior: "smooth",
              maxWidth: "100vw",
              overflowY: "scroll",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                bgcolor: "transparent",
                width: "7px",
                "&-thumb": {
                  bgcolor: "#27272a",
                  borderRadius: "10px",
                },
              },
            },
          }}
        >
          <Stack
            width="75vw"
            height={{ xs: "500px", xsL3: "600px" }}
            divider={<Divider />}
            p="10px"
            pt="15px"
            boxSizing="border-box"
          >
            {/* dialog header */}
            <Stack mb=".5em" direction="row" justifyContent="space-between">
              {/* icon */}
              <Box>
                <IconButton onClick={() => setMediaDialogOpen(false)}>
                  <Clear />
                </IconButton>
              </Box>
              {/* text */}
              <Box display="flex" alignItems="center">
                <Typography fontSize={{ xs: "2.5vw", md: "16px" }}>
                  {currentPage}
                </Typography>
              </Box>
            </Stack>
            {/* dialog body */}
            <Grid container height={{ xs: "122svh", mobile: "90%" }}>
              {/* images feed */}
              <Grid
                size={{ xs: 12, mobile: 4 }}
                order={{ xs: 2, mobile: 1 }}
                maxHeight={{ xs: "30%", mobile: "auto" }}
              >
                <Stack
                  dir="rtl"
                  pt="20px"
                  pr="10px"
                  boxSizing="border-box"
                  pl="3px"
                >
                  {/* tabs */}
                  <Stack direction="row" spacing={1}>
                    <CustomTab<ProductMediaTypeT>
                      selectedTab={selectedDialogTab}
                      label="picture"
                      content="تصاویر"
                      onClickHandler={({ label }) => {
                        setSelectedDialogTab(label);
                        setSelectedDialogBannerIndex(getFirstImageIndex());
                      }}
                      sx={{
                        cursor: "default",
                      }}
                    />
                    {videoExists() && (
                      <CustomTab<ProductMediaTypeT>
                        selectedTab={selectedDialogTab}
                        label="video"
                        content="ویدیوها"
                        onClickHandler={({ label }) => {
                          setSelectedDialogTab(label);
                          setSelectedDialogBannerIndex(getFirstImageIndex());
                        }}
                        sx={{
                          cursor: "default",
                        }}
                      />
                    )}
                  </Stack>
                  <Divider sx={{ ml: "3px" }} />
                  {/* tab pages */}
                  <Box>
                    {/* pictures */}
                    <CustomTabPanel
                      selectedTab={selectedDialogTab}
                      tab="picture"
                    >
                      <Box display="flex" gap="8px" dir="rtl" width="100%">
                        <Swiper
                          dir="rtl"
                          slidesPerView={4}
                          className="swiper"
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                          spaceBetween={6}
                          breakpoints={{
                            600: {
                              slidesPerView: 4,
                            },
                            0: {
                              slidesPerView: 3,
                            },
                          }}
                        >
                          {media.map(
                            (m, index) =>
                              m.type === "picture" && (
                                <SwiperSlide key={getUniqueKey()}>
                                  <Box
                                    onClick={() =>
                                      setSelectedDialogBannerIndex(index)
                                    }
                                    sx={{
                                      borderRadius: "5px",
                                      borderStyle: "solid",
                                      borderWidth: { xs: 0, mobile: "2px" },
                                      borderColor:
                                        selectedDialogBannerIndex === index
                                          ? "#ff8415"
                                          : "#e5e7eb",
                                      overflow: "hidden",
                                      cursor: "pointer",
                                    }}
                                    border="2px solid red"
                                    height={{
                                      xs: "100%",
                                      sm: "100%",
                                      lg: "80px",
                                    }}
                                    position="relative"
                                  >
                                    <Box
                                      width={{
                                        xs: "20vw",
                                        sm: "100%",
                                        lg: "80px",
                                      }}
                                      position="relative"
                                      sx={{
                                        objectFit: "cover",
                                        aspectRatio: 1 / 1,
                                        borderRadius: "5px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <Image
                                        src={m.src}
                                        alt="product-image"
                                        fill
                                      />
                                    </Box>
                                  </Box>
                                </SwiperSlide>
                              )
                          )}
                        </Swiper>
                      </Box>
                    </CustomTabPanel>
                    {/* videos */}
                    <CustomTabPanel selectedTab={selectedDialogTab} tab="video">
                      <Box display="flex" gap="8px" dir="rtl" width="100%">
                        <Swiper
                          dir="rtl"
                          slidesPerView={4}
                          className="swiper"
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                          spaceBetween={6}
                          breakpoints={{
                            600: {
                              slidesPerView: 4,
                            },
                            0: {
                              slidesPerView: 3,
                            },
                          }}
                        >
                          {media.map(
                            (m, index) =>
                              m.type === "video" && (
                                <SwiperSlide key={getUniqueKey()}>
                                  <Box
                                    onClick={() =>
                                      setSelectedDialogBannerIndex(index)
                                    }
                                    sx={{
                                      cursor: "pointer",
                                    }}
                                    height={{
                                      xs: "100%",
                                      sm: "100%",
                                      lg: "80px",
                                    }}
                                    position="relative"
                                  >
                                    <Box
                                      width={{
                                        xs: "25vw",
                                        sm: "180%",
                                        lg: "125px",
                                      }}
                                      sx={{
                                        aspectRatio: 16 / 9,
                                        borderRadius: "5px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <Box
                                        component="video"
                                        src={m.src}
                                        width="100%"
                                        height="100%"
                                      />
                                    </Box>
                                  </Box>
                                </SwiperSlide>
                              )
                          )}
                        </Swiper>
                      </Box>
                    </CustomTabPanel>
                  </Box>
                </Stack>
              </Grid>
              {/* banner */}
              <Grid
                size={{ xs: 12, mobile: 8 }}
                order={{ xs: 1, mobile: 2 }}
                mt={{ xs: "20px", mobile: 0 }}
              >
                <Box display="flex" justifyContent="center" height="100%">
                  <Box
                    height={{ xs: "35svh", mobile: "100%" }}
                    position="relative"
                    sx={{ aspectRatio: 1 / 1, objectFit: "cover" }}
                  >
                    {media.map((m, index) => {
                      if (index === selectedDialogBannerIndex)
                        if (getVideoMediaIndex() !== index)
                          return (
                            <Image
                              key={getUniqueKey()}
                              src={m.src}
                              alt="product-banner"
                              fill
                            />
                          );
                        else
                          return (
                            <Box key={getUniqueKey()} mt="10px">
                              <CardMedia
                                component={"video"}
                                src={m.src}
                                controls
                                sx={{
                                  aspectRatio: 16 / 9,
                                  borderRadius: "5px",
                                }}
                              />
                            </Box>
                          );
                    })}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Dialog>
        {/* image and videos */}
        <Grid size={12} py="5px">
          <Grid container>
            {/* images */}
            <Grid size={9.2}>
              <Swiper
                dir="rtl"
                slidesPerView={videoExists() ? 3.5 : 5.5}
                spaceBetween={2}
                className="swiper"
                style={{
                  height: "100%",
                }}
              >
                {media.map(
                  (m, index) =>
                    m.type === "picture" && (
                      <SwiperSlide
                        key={getUniqueKey()}
                        onClick={() => handleImageClick(index)}
                      >
                        <Box
                          width={{ xs: "14vw", mobile: "5vw", xl: "80px" }}
                          position="relative"
                          sx={{
                            objectFit: "cover",
                            aspectRatio: 1 / 1,
                            cursor: "pointer",
                            opacity: selectedImageIndex === index ? 1 : 0.3,
                          }}
                        >
                          <Image src={m.src} alt="product-image" fill />
                        </Box>
                      </SwiperSlide>
                    )
                )}
              </Swiper>
            </Grid>
            {/* video */}
            <Grid size={2.8}>
              <Box height="100%">
                {media.map(
                  (m, index) =>
                    m.type === "video" && (
                      <Box
                        key={getUniqueKey()}
                        display="flex"
                        alignItems="center"
                        height="100%"
                        position="relative"
                        onClick={() => handleImageClick(index)}
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        <CardMedia
                          component={"video"}
                          src={m.src}
                          sx={{
                            width: { xs: "14vw", mobile: "5vw", xl: "100px" },
                            aspectRatio: 16 / 9,
                            filter: "brightness(50%)",
                          }}
                        />
                        {/* video play button */}
                        <Box
                          position="absolute"
                          top={{ xs: "31%", xl: "20%" }}
                          right={{
                            xs: "50%",
                            smL3: "55%",
                            lg: "47%",
                            xl: "33%",
                          }}
                        >
                          <PlayCircle
                            sx={{
                              color: "#ff7900",
                              fontSize: {
                                xs: "6vw",
                                mobile: "2vw",
                                xl: "40px",
                              },
                            }}
                          />
                        </Box>
                      </Box>
                    )
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* english name */}
      <Box mt="15px">
        <Box display="flex" justifyContent="end">
          <Typography fontSize="11.5px" color="rgb(198 195 185/1)">
            {name.en}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductImages;
