"use client";
import { vazirmatn } from "@/app/Fonts";
import useTime from "@/hooks/useTimer";
import { ProductCardLayoutT, TProduct } from "@/utils/types/Product";
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
  LocalPhoneRounded,
  RocketLaunch,
} from "@mui/icons-material";
import Link from "next/link";
import getUniqueKey from "@/utils/lib/UniqueKey";

const productContext = createContext<
  { product: TProduct; layout: ProductCardLayoutT } | undefined
>(undefined);
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
  layout = "grid",
  children,
  ...props
}: { product: TProduct } & {
  layout?: ProductCardLayoutT;
} & PropsWithChildren &
  BoxProps) {
  return (
    <productContext.Provider value={{ product, layout }}>
      <Box
        className="productCard-wrapper"
        bgcolor="#fff"
        border="1px solid #e4e6ea"
        borderRadius="7px"
        boxSizing="border-box"
        position="relative"
        p="15px"
        overflow="visible"
        sx={{
          "&:hover": {
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
          transition: "all ease-in 80ms",
        }}
        {...props}
      >
        <Link href={product.slug}>
          <Stack direction={layout === "grid" ? "column" : "row"}>
            {children}
          </Stack>
        </Link>
      </Box>
    </productContext.Provider>
  );
}

const TopDetails = (props: BoxProps) => {
  const {
    product: { discountTime, specialOffer, isNew, id },
  } = useProductCardContext();
  const timerVal = (discountTime || 0) * 3600;
  const { hour, minute, second } = useTime({
    value: timerVal,
    name: `${id}-Product`,
  });
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
            className="productCard-timer-newProduct_wrapper"
            fontFamily={vazirmatn.style.fontFamily}
            color="#de1616"
            fontSize="16px"
          >
            <Box className="productCard-timer-newProduct-text" pr="10px">
              جدید
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
  const {
    product: { image, discountTime, isNew, specialOffer, title, video },
  } = useProductCardContext();
  const [videoIsVisible, setVideoVisible] = useState(false);
  return (
    <Box
      mt={discountTime || isNew || specialOffer ? "25px" : "8px"}
      className="productCard-image_wrapper"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onMouseEnter={() => setVideoVisible(true)}
      onMouseLeave={() => setVideoVisible(false)}
      sx={{
        "@media (max-width: 1250px)": {
          "& .productCard-image, & .productCard-video": {
            width: 170,
            height: 170,
          },
        },
        "@media (max-width: 650px)": {
          "& .productCard-image, & .productCard-video": {
            width: 200,
            height: 200,
          },
        },
        "@media (max-width: 620px)": {
          "& .productCard-image, & .productCard-video": {
            width: 130,
            height: 130,
          },
        },
      }}
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
  const {
    product: { colors },
  } = useProductCardContext();
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
              bgcolor={`#${color.value}`}
              width={17}
              height={17}
              borderRadius="3px"
              border="1px solid #e5e7eb"
              key={getUniqueKey()}
            />
          ))}
        </Box>
      ) : (
        <Box className="productCard-colors-placeholder" />
      )}
    </Box>
  );
};
const FastExpress = (props: BoxProps) => {
  const {
    product: { fastExpress },
  } = useProductCardContext();
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
                fontSize: { xs: "11px", sm: "13px" },
              }}
            >
              ارسال سریع
            </Typography>
            <RocketLaunch sx={{ color: "#fff", fontSize: "20px" }} />
          </Box>
        </Box>
      ) : (
        <Box className="productCard-fastExpress-placeholder" />
      )}
    </Box>
  );
};
const Title = (props: BoxProps) => {
  const {
    product: { title },
    layout,
  } = useProductCardContext();
  return (
    <Box
      className="productCard-title_container"
      minHeight={layout === "grid" ? { xs: "10px", md: "45px" } : "10px"}
      {...props}
    >
      <Box className="productCard-title_wrapper" pr="10px">
        <Typography
          fontSize={{ xs: "10px", md: "12px", lg: "13.5px" }}
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
  const {
    product: { price, discountNumber },
    layout,
  } = useProductCardContext();

  return (
    <Box
      className="productCard-price_container"
      position={layout === "grid" ? "absolute" : "unset"}
      minHeight="60px"
      bottom={10}
      right={0}
      boxSizing="border-box"
      display="flex"
      alignItems="center"
      width="100%"
      sx={{
        "@media (max-width: 500px)": {
          "& .productCard-price-price-number": {
            fontSize: "12px",
          },
          "& .productCard-price-price-extension": {
            fontSize: "10px",
          },
          "& .productCard-price-discountedPrice-number": {
            fontSize: "10px",
          },
          "& .productCard-price-discountedPrice-extension": {
            fontSize: "10px",
          },
          "& .productCard-price-discountNumber": {
            fontSize: "9px",
          },
        },
      }}
      {...props}
    >
      <Box
        className="productCard-price-discount_wrapper"
        display="flex"
        justifyContent="end"
        width="100%"
        height="100%"
        dir="ltr"
        px="15px"
        boxSizing="border-box"
      >
        {price ? (
          <>
            {/* price */}
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
                <Typography
                  className="productCard-price-price-number"
                  fontFamily={vazirmatn.style.fontFamily}
                  fontWeight={500}
                  fontSize="16px"
                >
                  {discountNumber
                    ? (price - (price * discountNumber) / 100).toLocaleString()
                    : price.toLocaleString()}
                  &nbsp;
                </Typography>
                {/* تومان */}
                <Typography
                  className="productCard-price-price-extension"
                  fontFamily={vazirmatn.style.fontFamily}
                  fontSize="12px"
                  fontWeight={400}
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
                >
                  {/* number */}
                  <Typography
                    className="productCard-price-discountedPrice-number"
                    component="del"
                    fontSize="14px"
                    fontFamily={vazirmatn.style.fontFamily}
                    color="#c4c3c3"
                  >
                    {price.toLocaleString()}
                  </Typography>
                  &nbsp;
                  {/* تومان */}
                  <Typography
                    className="productCard-price-discountedPrice-extension"
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
            <Box
              flex={0.15}
              className="productCard-price-discountNumber_wrapper"
            >
              {discountNumber && (
                <Box
                  className="productCard-price-discountNumber"
                  display="flex"
                  justifyContent="center"
                  alignItems="end"
                  width="fit-content"
                  px="5px"
                  pt="1px"
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
          </>
        ) : (
          <Box
            display="flex"
            gap="10px"
            width="100%"
            justifyContent="space-between"
            color="#009688"
            fontFamily={vazirmatn.style.fontFamily}
            className="productCard-noPrice_wrapper"
          >
            {/* icon */}
            <Box
              className="productCard-noPrice-icon"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <LocalPhoneRounded />
            </Box>
            {/* text */}
            <Box
              className="productCard-noPrice-text"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize={{ xs: "12px", sm: "15px" }}
              fontWeight={700}
            >
              تماس بگیرید
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

ProductCard.TopDetails = TopDetails;
ProductCard.Image = ImageAndVideo;
ProductCard.Colors = Colors;
ProductCard.FastExpress = FastExpress;
ProductCard.Title = Title;
ProductCard.Price = PriceAndDiscount;
