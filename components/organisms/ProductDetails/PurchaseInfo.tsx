"use client";
import { vazirmatn } from "@/app/Fonts";
import getUniqueKey from "@/utils/lib/UniqueKey";
import { ProductColorT } from "@/utils/types/Product";
import {
  ProductContactInfoT,
  ProductCreatorDetailsT,
  ProductDeliveryFeaturesItemT,
  ProductPriceT,
  TCartValues,
} from "@/utils/types/ProductDetails";
import {
  Add,
  Moped,
  Remove,
  RocketLaunch,
  WorkspacePremium,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Grid2 from "@mui/material/Grid2";

const PurchaseInfo = ({
  colors,
  creatorDetails,
  deliveryFeatures,
  price,
  contactInfo,
}: {
  colors: ProductColorT[];
  creatorDetails: ProductCreatorDetailsT;
  deliveryFeatures: ProductDeliveryFeaturesItemT[];
  price?: ProductPriceT;
  contactInfo: ProductContactInfoT;
}) => {
  const [cartValues, setCartValues] = React.useState<TCartValues>({
    color: { value: colors[0].value, title: colors[0].title },
    qntt: 1,
  });

  const ProductColor = ({ color }: { color: ProductColorT }) => {
    return (
      <Tooltip
        arrow
        title={
          <Box fontSize="10px" fontFamily={vazirmatn.style.fontFamily}>
            {color.title}
          </Box>
        }
      >
        <Box
          borderRadius="7px"
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            borderWidth: "1.5px",
            borderStyle: "solid",
            borderColor:
              cartValues.color.title === color.title ? "#ff7900" : "silver",
          }}
          bgcolor={`#${color.value}`}
          width="26px"
          height="26px"
          onClick={() =>
            setCartValues((prevState) => ({ ...prevState, color: color }))
          }
        />
      </Tooltip>
    );
  };

  const ProductDeliveryFeature = ({
    deliveryFeature,
  }: {
    deliveryFeature: ProductDeliveryFeaturesItemT;
  }) => {
    return (
      <Box>
        <Box display="flex" gap="8px" alignItems="center">
          {/* icon */}
          <Box display="flex" alignItems="center">
            {deliveryFeature.type === "guaranty" ? (
              <Box>
                <WorkspacePremium sx={{ fontSize: "20px", color: "#6d7083" }} />
              </Box>
            ) : deliveryFeature.type === "express" ? (
              <Box>
                <Moped sx={{ fontSize: "20px", color: "#6d7083" }} />
              </Box>
            ) : deliveryFeature.type === "fastExpress" ? (
              <Box>
                <RocketLaunch sx={{ color: "#009688", fontSize: "21px" }} />
              </Box>
            ) : null}
          </Box>
          {/* text */}
          <Typography
            variant="caption"
            color="#6d7083"
            letterSpacing={0.01}
            fontWeight={500}
          >
            {deliveryFeature.title}
          </Typography>
        </Box>
      </Box>
    );
  };

  const changeCartQntt = (payload: { action: "DECREMENT" | "INCREMENT" }) => {
    if (payload.action === "INCREMENT") {
      setCartValues((prevState) => ({
        ...prevState,
        qntt: prevState.qntt + 1,
      }));
      return;
    }
    setCartValues((prevState) => ({
      ...prevState,
      qntt: prevState.qntt - 1,
    }));
  };

  return (
    <Box p="7px" boxSizing="border-box">
      <Box
        bgcolor="#f6f6f6"
        borderRadius="7px"
        p="16px"
        boxSizing="border-box"
        dir="rtl"
        minHeight={{ xs: "fit-content", mobile: "120svh", md: "590px" }}
        display="flex"
        flexDirection="column"
        alignItems="space-between"
      >
        {/* rest */}
        <Box flex={2.5}>
          <Stack spacing={1}>
            {/* creator */}
            <Box>
              <Stack spacing={1}>
                {/* title */}
                <Box>
                  <Typography variant="subtitle1">برند سازنده:</Typography>
                </Box>
                {/* creator info box */}
                <Box>
                  <Link href={creatorDetails.slug}>
                    <Box borderRadius="7px" bgcolor="#fff">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        p="7px"
                      >
                        {/* text */}
                        <Typography variant="caption">
                          {creatorDetails.name}
                        </Typography>
                        {/* image */}
                        <Box width="35px" height="35px" position="relative">
                          <Image
                            src={creatorDetails.logo}
                            alt="creator-image"
                            fill
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Stack>
            </Box>
            {/* colors */}
            <Box>
              <Stack spacing={1}>
                {/* section title */}
                <Box display="flex" gap="5px">
                  {/* text */}
                  <Typography variant="subtitle1">رنگ:</Typography>
                  {/* value */}
                  <Typography variant="subtitle2">
                    {cartValues.color.title}
                  </Typography>
                </Box>
                {/* colors title */}
                <Box>
                  <Box display="flex" gap="10px">
                    {colors.map((color) => (
                      <ProductColor key={getUniqueKey()} color={color} />
                    ))}
                  </Box>
                </Box>
              </Stack>
            </Box>
            {/* delivery items */}
            <Box
              sx={{
                borderWidth: "1.5px 0",
                borderStyle: "solid",
                borderColor: "#cfcfcf",
                py: "5px",
              }}
            >
              <Stack
                spacing={0.1}
                columnGap="10px"
                direction={{ xs: "row", mobile: "column" }}
              >
                {deliveryFeatures.map((f) => (
                  <ProductDeliveryFeature
                    key={getUniqueKey()}
                    deliveryFeature={f}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
        {/* purchase info */}
        <Box flex={0.01}>
          <Stack spacing={2}>
            {price && price.price && price.lastUpdatedPriceDate ? (
              <>
                {/* price and qntt management */}
                <Box>
                  <Grid2 container pt="10px">
                    {/* qntt management */}
                    <Grid2
                      size={{ xs: 6, mobile: 12, md: 6 }}
                      order={{ xs: 1, mobile: 2, md: 1 }}
                    >
                      <Box flex={0.9} display="flex" justifyContent="start">
                        <Stack
                          spacing={0.4}
                          direction="row"
                          alignItems="center"
                          dir="ltr"
                        >
                          {/* increment */}
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            onClick={() =>
                              changeCartQntt({ action: "INCREMENT" })
                            }
                          >
                            <IconButton>
                              <Add
                                sx={{
                                  color: "#707070",
                                  fontSize: {
                                    xs: "22px",
                                    mobile: "1.5vw",
                                    xl: "19px",
                                  },
                                  aspectRatio: 1 / 1,
                                  width: {
                                    xs: "25px",
                                    mobile: "1.4vw",
                                    md: "1.2vw",
                                    xl: "20px",
                                  },
                                }}
                              />
                            </IconButton>
                          </Box>
                          {/* qntt */}
                          <Box
                            minWidth={{ xs: "6vw", mobile: "3vw", xl: "40px" }}
                            maxHeight="10svh"
                            py={{ xs: "4px", mobile: 0 }}
                            px={{ xs: "3px", mobile: 0 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            border=".5px solid #e5e7eb"
                            bgcolor="#fff"
                          >
                            <Typography
                              fontSize={{
                                xs: "18px",
                                mobile: "1.4vw",
                                xl: "17px",
                              }}
                            >
                              {cartValues.qntt}
                            </Typography>
                          </Box>
                          {/* decrement */}
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <IconButton
                              disabled={cartValues.qntt === 1}
                              onClick={() =>
                                changeCartQntt({ action: "DECREMENT" })
                              }
                              sx={{
                                "&.Mui-disabled": {
                                  "& .decrement-icon": {
                                    color: "silver !important",
                                  },
                                },
                              }}
                            >
                              <Remove
                                className="decrement-icon"
                                sx={{
                                  color: "#707070",
                                  fontSize: {
                                    xs: "22px",
                                    mobile: "1.5vw",
                                    xl: "19px",
                                  },
                                  aspectRatio: 1 / 1,
                                  width: {
                                    xs: "25px",
                                    mobile: "1.4vw",
                                    md: "1.2vw",
                                    xl: "20px",
                                  },
                                }}
                              />
                            </IconButton>
                          </Box>
                        </Stack>
                      </Box>
                    </Grid2>
                    {/* price */}
                    <Grid2
                      size={{ xs: 6, mobile: 12, md: 6 }}
                      order={{ xs: 2, mobile: 1, md: 2 }}
                    >
                      <Box display="flex" alignItems="end" justifyContent="end">
                        <Typography
                          fontSize={{
                            xs: "4.3vw",
                            mobile: "2vw",
                            smL2: "1.3vw",
                            lg: "1.2em",
                          }}
                          fontWeight={700}
                        >
                          {(price.price * cartValues.qntt).toLocaleString()}
                        </Typography>
                        &nbsp;
                        <Typography
                          fontSize={{
                            xs: "4.3vw",
                            mobile: "2vw",
                            smL2: "1.3vw",
                            lg: "1.2em",
                          }}
                          fontWeight={700}
                        >
                          تومان
                        </Typography>
                      </Box>
                    </Grid2>
                  </Grid2>
                </Box>
                {/* add to cart button */}
                <Box>
                  <Button
                    fullWidth
                    color="warning"
                    sx={{
                      bgcolor: "#ff7900",
                      py: "8px",
                      boxShadow: 1,
                      "&:hover": { boxShadow: 3 },
                      "&:active": { boxShadow: "0 6px 10px silver" },
                    }}
                  >
                    <Typography color="#fff" variant="subtitle2">
                      افزودن به سبد خرید
                    </Typography>
                  </Button>
                </Box>
                {/* last update price time */}
                <Box maxHeight="20px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      fontSize={{ xs: ".5em", md: ".7em", lg: ".75em" }}
                    >
                      بروزرسانی قیمت:
                    </Typography>
                    &nbsp;
                    <Typography
                      fontSize={{ xs: ".5em", md: ".7em", lg: ".75em" }}
                    >
                      {price.lastUpdatedPriceDate}
                    </Typography>
                  </Box>
                </Box>
              </>
            ) : (
              <Link href={`tel:${contactInfo.tel.toString()}`}>
                <Button
                  fullWidth
                  color="inherit"
                  sx={{
                    bgcolor: "#097969",
                    py: "8px",
                    boxShadow: 1,
                    "&:hover": { boxShadow: 3 },
                    "&:active": { boxShadow: "0 6px 10px silver" },
                  }}
                >
                  <Typography color="#fff" variant="subtitle2">
                    تماس بگیرید
                  </Typography>
                </Button>
              </Link>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PurchaseInfo;
