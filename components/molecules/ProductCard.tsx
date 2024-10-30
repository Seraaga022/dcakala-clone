"use client";
import { vazirmatn } from "@/app/Fonts";
import useTimer from "@/hooks/useTimer";
import { TProductCard } from "@/utils/types/TProductCard";
import { Box, BoxProps, Stack, Typography } from "@mui/material";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import Image from "next/image";
import {
  AccessTimeFilled,
  LocalOffer,
  RocketLaunch,
} from "@mui/icons-material";
import Link from "next/link";

const productContext = createContext<TProductCard | undefined>(undefined);
const useProductCardContext = () => {
  const context = useContext(productContext);
  if (!context)
    throw new Error(
      "useProductCardContext in this component, must be used within a ProductCard"
    );
  return context;
};

export default function ProductCard({
  product,
  children,
  ...props
}: { product: TProductCard } & PropsWithChildren & BoxProps) {
  return (
    <productContext.Provider value={product}>
      <Box
        className="productCard-wrapper"
        bgcolor="#fff"
        border="1px solid #e4e6ea"
        borderRadius="7px"
        boxSizing="border-box"
        position="relative"
        p="15px"
        sx={{
          "&:hover": {
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
          transition: "all ease-in 100ms",
        }}
        {...props}
      >
        <Link href={product.slug}>
          <Stack>{children}</Stack>
        </Link>
      </Box>
    </productContext.Provider>
  );
}

const TimerAndSpecialOffer = (props: BoxProps) => {
  const { discountTime, specialOffer, isNew, slug } = useProductCardContext();
  const timerVal = (discountTime || 0) * 3600;
  const { hour, minute, second } = useTimer(timerVal, `${slug}-Product`);
  return (
    <Box
      className="productCard-timer_container"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      {...props}
    >
      <Box
        className="productCard-timer_wrapper"
        display="flex"
        justifyContent="start"
        p="10px"
        boxSizing="border-box"
      >
        {discountTime ? (
          <Box
            display="flex"
            gap="5px"
            className="productCard-timer-time_wrapper"
            mr="auto"
            fontFamily={vazirmatn.style.fontFamily}
            color="#ef4444"
            fontSize="12px"
            dir="ltr"
          >
            {/* icon */}
            <Box
              className="productCard-timeIcon_wrapper"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <AccessTimeFilled />
            </Box>
            {/* text */}
            <Box
              display="flex"
              dir="ltr"
              justifyContent="center"
              alignItems="end"
              className="productCard-timeText_wrapper"
              fontWeight={600}
              fontSize="14px"
            >
              {/* hours */}
              <Box
                className="productCard-timerHours"
                display="flex"
                alignItems="center"
              >
                {hour < 10 ? "0" : ""}
                {hour}
              </Box>
              &nbsp;{":"}
              {/* minutes */}
              <Box
                className="productCard-timerMinutes"
                display="flex"
                alignItems="center"
              >
                {minute < 10 ? "0" : ""}
                {minute}
              </Box>
              &nbsp;{":"}
              {/* seconds */}
              <Box
                className="productCard-timerSeconds"
                display="flex"
                alignItems="center"
              >
                {second < 10 ? "0" : ""}
                {second}
              </Box>
            </Box>
          </Box>
        ) : isNew ? (
          <Box
            className="productCard-timer-newProduct_container"
            fontFamily={vazirmatn.style.fontFamily}
            color="#ef4444"
            fontSize="15px"
          >
            <Box
              className="productCard-timer-newProduct_wrapper"
              display="flex"
              color="red"
            >
              <Box className="productCard-timer-newProduct-text">جدید</Box>
            </Box>
          </Box>
        ) : (
          specialOffer && (
            <Box
              className="productCard-timer-specialOffer_wrapper"
              display="flex"
              mr="auto"
              fontFamily={vazirmatn.style.fontFamily}
              letterSpacing={1}
              color="#ef4444"
              fontSize="16px"
              gap="5px"
            >
              <Box className="productCard-timer-specialOffer-text">
                پیشنهاد ویژه
              </Box>
              <Box className="productCard-timer-specialOffer-icon">
                <LocalOffer />
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};
const ImageAndVideo = (props: BoxProps) => {
  const { image, discountTime, isNew, specialOffer, title, video } =
    useProductCardContext();
  const [videoIsVisible, setVideoVisible] = useState(false);
  return (
    <Box
      mt={discountTime || isNew || specialOffer ? "30px" : "8px"}
      className="productCard-image_wrapper"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onMouseEnter={() => setVideoVisible(true)}
      onMouseLeave={() => setVideoVisible(false)}
      {...props}
    >
      {video && videoIsVisible ? (
        <video
          className="productCard-video"
          src={video}
          width={200}
          height={200}
          style={{
            objectFit: "contain",
            backgroundColor: "black",
          }}
          autoPlay
          loop
          muted
        />
      ) : (
        <Image
          className="productCard-image"
          src={image}
          alt={title}
          width={200}
          height={200}
          objectFit="contain"
        />
      )}
    </Box>
  );
};
const Colors = (props: BoxProps) => {
  const { colors, slug } = useProductCardContext();
  return (
    <Box className="productCard-colors_container" mt="5px" {...props}>
      {colors ? (
        <Box
          className="productCard-colors_wrapper"
          minHeight="25px"
          display="flex"
          gap="5px"
        >
          {colors.map((color) => (
            <Box
              className="productCard-color"
              bgcolor={`#${color}`}
              width={17}
              height={17}
              borderRadius="3px"
              border="1px solid #e5e7eb"
              key={color.concat(slug.concat(Math.random().toString()))}
            />
          ))}
        </Box>
      ) : (
        <Box className="productCard-colors-placeholder" minHeight="5px" />
      )}
    </Box>
  );
};
const FastExpress = (props: BoxProps) => {
  const { fastExpress } = useProductCardContext();
  return (
    <Box
      className="productCard-fastExpress_container"
      display="flex"
      justifyContent="end"
      dir="ltr"
      mb="5px"
      {...props}
    >
      {fastExpress ? (
        <Box
          maxHeight="30px"
          minHeight="30px"
          className="productCard-fastExpress_wrapper"
          mb="10px"
        >
          <Box
            className="productCard-fastExpres"
            borderRadius="7px"
            bgcolor="#009688"
            display="flex"
            gap="5px"
            py="4px"
            px="6px"
          >
            <Typography
              sx={{
                fontFamily: vazirmatn.style.fontFamily,
                color: "#fff",
                fontSize: "13px",
              }}
            >
              ارسال سریع
            </Typography>
            <RocketLaunch sx={{ color: "#fff", fontSize: "20px" }} />
          </Box>
        </Box>
      ) : (
        <Box minHeight="5px" className="productCard-fastExpress-placeholder" />
      )}
    </Box>
  );
};
const Title = (props: BoxProps) => {
  const { title } = useProductCardContext();
  return (
    <Box className="productCard-title_container" minHeight="45px" {...props}>
      <Box className="productCard-title_wrapper" pr="10px" pl="15px">
        <Typography
          fontSize={{ xs: "15px", md: "13px", lg: "14px" }}
          fontFamily={vazirmatn.style.fontFamily}
          fontWeight={vazirmatn.style.fontWeight}
          className="productCard-title"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
const PriceAndDiscount = (props: BoxProps) => {
  const { price, discountNumber } = useProductCardContext();
  return (
    <Box
      className="productCard-price_container"
      position="absolute"
      bottom={10}
      right={0}
      boxSizing="border-box"
      display="flex"
      alignItems="center"
      width="100%"
      {...props}
    >
      <Box
        className="productCard-price-discountedNumber_wrapper"
        display="flex"
        justifyContent="end"
        width="100%"
        height="100%"
        dir="ltr"
        px="15px"
        boxSizing="border-box"
      >
        <Box
          flex={1}
          mr="auto"
          display="flex"
          flexDirection="column"
          fontFamily={vazirmatn.style.fontFamily}
          fontSize="16px"
          className="productCard-price_wrapper"
        >
          <Box
            className="productCard-price-price"
            display="flex"
            dir="rtl"
            justifyContent="end"
            alignItems="center"
            mb={discountNumber ? 0 : "12px"}
            color={discountNumber ? "#de1616" : "#121212"}
          >
            {/* number */}
            <Typography fontFamily={vazirmatn.style.fontFamily} fontSize="16px">
              {price.toLocaleString()}&nbsp;
            </Typography>
            {/* تومان */}
            <Typography
              fontSize="12px"
              fontWeight={400}
              fontFamily={vazirmatn.style.fontFamily}
            >
              تومان
            </Typography>
          </Box>
          {discountNumber && (
            <Box
              className="productCard-price-discountedPrice"
              display="flex"
              dir="rtl"
              justifyContent="end"
              alignItems="center"
            >
              {/* number */}
              <Typography
                component="del"
                fontSize="14px"
                fontFamily={vazirmatn.style.fontFamily}
                color="#c4c3c3"
              >
                {(price - price / discountNumber).toLocaleString()}
              </Typography>
              &nbsp;
              {/* تومان */}
              <Typography
                component="del"
                fontSize="12px"
                fontWeight={400}
                fontFamily={vazirmatn.style.fontFamily}
                color="#c4c3c3"
              >
                تومان
              </Typography>
            </Box>
          )}
        </Box>
        {/* discount number tag */}
        <Box flex={0.15} className="productCard-price-discountNumber_wrapper">
          {discountNumber && (
            <Box
              className="productCard-price-discountNumber"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="fit-content"
              px="5px"
              fontFamily={vazirmatn.style.fontFamily}
              fontSize="12px"
              color="#fff"
              bgcolor="#de1616"
              borderRadius="5px"
            >
              %&nbsp;{discountNumber}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

ProductCard.Timer = TimerAndSpecialOffer;
ProductCard.Image = ImageAndVideo;
ProductCard.Colors = Colors;
ProductCard.FastExpress = FastExpress;
ProductCard.Title = Title;
ProductCard.Price = PriceAndDiscount;
