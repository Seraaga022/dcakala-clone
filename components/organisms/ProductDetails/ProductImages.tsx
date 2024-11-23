"use client";
import getUniqueKey from "@/utils/lib/UniqueKey";
import {
  ProductMediaT,
  ProductMediaTypeT,
  ProductNameT,
} from "@/utils/types/ProductDetails";
import { Category, Clear, Share } from "@mui/icons-material";
import {
  Box,
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

const ProductImages = ({
  media,
  currentPage,
  name,
}: {
  media: ProductMediaT[];
  currentPage: string;
  name: ProductNameT;
}) => {
  const [selectedImage, setSelectedImage] = React.useState<number>(0);
  const [selectedDialogBanner, setSelectedDialogBanner] =
    React.useState<number>(0);
  const swiperRef = React.useRef<SwiperRef>(null);
  const [isMediaDialogOpen, setMediaDialogOpen] = React.useState(false);
  const [selectedDialogTab, setSelectedDialogTab] =
    React.useState<ProductMediaTypeT>("picture");

  React.useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideTo(selectedImage);
  }, [selectedImage]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setSelectedDialogBanner(index);
    setMediaDialogOpen(true);
  };

  const CustomDialogTab = ({
    label,
    content,
  }: {
    label: ProductMediaTypeT;
    content: string;
  }) => {
    return (
      <Box
        px="1.5em"
        py=".7em"
        sx={{
          borderBottom:
            label === selectedDialogTab ? "2px solid #ff8415" : "none",
          cursor: "default",
        }}
        onClick={() => setSelectedDialogTab(label)}
      >
        <Typography
          fontSize={{ xs: "3vw", mobile: ".9em" }}
          color="#ff8415"
          fontWeight={400}
        >
          {content}
        </Typography>
      </Box>
    );
  };

  const CustomDialogTabPanel = ({
    ...props
  }: React.PropsWithChildren & { value: ProductMediaTypeT }) => {
    const { children, value } = props;
    return (
      <Box hidden={value !== selectedDialogTab} pt="8px">
        {children}
      </Box>
    );
  };

  const videoExists = () => {
    return media.some((m) => m.type === "video") ? true : false;
  };

  return (
    <Box height={{ xs: "auto", mobile: "120svh", md: "600px" }}>
      <Grid
        container
        border="1px solid #e0e0e2"
        borderRadius="7px"
        height="90%"
      >
        {/* social networks */}
        <Grid height="11%" p="15px" size={12}>
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
        </Grid>
        {/* image swiper */}
        <Grid
          height={{ xs: "55%", lg: "70%" }}
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
              onSlideChange={(swiper) => setSelectedImage(swiper.activeIndex)}
              style={{
                height: "100%",
              }}
            >
              {media.map((m, index) =>
                m.type === "video" ? (
                  <SwiperSlide
                    key={getUniqueKey()}
                    onClick={() => handleImageClick(index)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    video
                  </SwiperSlide>
                ) : (
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
                    <CustomDialogTab label="picture" content="تصاویر" />
                    {videoExists() && (
                      <CustomDialogTab label="video" content="ویدیوها" />
                    )}
                  </Stack>
                  <Divider sx={{ ml: "3px" }} />
                  {/* tab pages */}
                  <Box>
                    {/* pictures */}
                    <CustomDialogTabPanel value="picture">
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
                                      setSelectedDialogBanner(index)
                                    }
                                    sx={{
                                      borderRadius: "5px",
                                      borderStyle: "solid",
                                      borderWidth: { xs: 0, mobile: "2px" },
                                      borderColor:
                                        selectedDialogBanner === index
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
                    </CustomDialogTabPanel>
                    {/* videos */}
                    <CustomDialogTabPanel value="video">
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
                                      setSelectedDialogBanner(index)
                                    }
                                    sx={{
                                      borderRadius: "5px",
                                      borderStyle: "solid",
                                      borderWidth: { xs: 0, mobile: "2px" },
                                      borderColor:
                                        selectedDialogBanner === index
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
                                      <Box
                                        component="video"
                                        src={m.src}
                                        bgcolor="red"
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
                    </CustomDialogTabPanel>
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
                      if (index === selectedDialogBanner)
                        return (
                          <Image
                            key={getUniqueKey()}
                            src={m.src}
                            alt="product-banner"
                            fill
                          />
                        );
                    })}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Dialog>
        {/* images */}
        <Grid size={12} py="5px">
          <Swiper
            dir="rtl"
            slidesPerView={5.5}
            spaceBetween={1}
            className="swiper"
            style={{
              height: "100%",
            }}
          >
            {media.map((m, index) =>
              m.type === "video" ? (
                <SwiperSlide
                  key={getUniqueKey()}
                  onClick={() => handleImageClick(index)}
                >
                  video
                </SwiperSlide>
              ) : (
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
                      opacity: selectedImage === index ? 1 : 0.3,
                    }}
                  >
                    <Image src={m.src} alt="product-image" fill />
                  </Box>
                </SwiperSlide>
              )
            )}
          </Swiper>
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
