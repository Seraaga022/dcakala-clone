"use client";
import { vazirmatn } from "@/app/Fonts";
import { ArrowBackIosNew, Menu, Store } from "@mui/icons-material";
import { Box, BoxProps, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Categories from "@/assets/data/category.json";
import {
  TCategoryCard,
  TSubCategoryChildren,
} from "@/utils/types/NavCategoryItem";

const NavCategory = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategoryIndex, setSelectedCategory] = React.useState<
    number | null
  >(null);

  const categories: TCategoryCard[] = Categories.map((category, index) => ({
    ...category,
    index,
  }));

  const checkForBannerImage = (children: TSubCategoryChildren[]) => {
    if (!children) return;
    return children.some((item) => item.bannerImageSrc);
  };

  const CategoryCard = (props: TCategoryCard & BoxProps) => {
    return (
      <Box height="50px" {...props}>
        <Box
          display="flex"
          pr="10px"
          alignItems="center"
          height="100%"
          sx={{
            cursor: "pointer",
            bgcolor:
              selectedCategoryIndex === props.index ? "#f3f1f1" : "unset",
            "& .category-name": {
              color:
                selectedCategoryIndex === props.index
                  ? "#ff9e0f"
                  : "currentcolor",
            },
            "&:hover .category-name": { color: "#ff9e0f" },
          }}
        >
          {/* arrow */}
          <Box
            flex={0.1}
            display={
              props.subCategories && props.subCategories.length > 0
                ? "flex"
                : "none"
            }
            justifyContent="end"
            onClick={() => {
              if (selectedCategoryIndex === props.index)
                setSelectedCategory(null);
              else setSelectedCategory(props.index);
            }}
            sx={{
              cursor: "pointer",
            }}
          >
            <ArrowBackIosNew
              component={motion.svg}
              animate={{
                rotate: selectedCategoryIndex === props.index ? "-90deg" : "0",
              }}
              sx={{
                color: "#ff9e0f",
                fontSize: "14px",
              }}
            />
          </Box>
          {/* category name */}
          <Box flex={1} display="flex" justifyContent="end">
            <Link href={props.slug}>
              <Typography
                className={`category-name`}
                fontFamily={vazirmatn.style.fontFamily}
                sx={{
                  color: "#000000",
                  fontSize: "14px",
                  transition: "color ease-in 100ms",
                }}
              >
                {props.name}
              </Typography>
            </Link>
          </Box>
          {/* icon */}
          <Box
            ml="5px"
            flex={0.1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={props.icon} alt={props.name} width={20} height={20} />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{
        "&:hover": {
          "& .trigger-icon": {
            color: "#d1d5db",
          },
          "& .trigger-text": {
            color: "#d1d5db",
          },
        },
      }}
    >
      {/* trigger */}
      <Box
        display="flex"
        alignItems="center"
        sx={{ cursor: "pointer" }}
        gap="5px"
      >
        {/* trigger text */}
        <Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "12px",
                fontFamily: vazirmatn.style.fontFamily,
                transition: "color ease-in 90ms",
              }}
              className={`trigger-icon`}
            >
              دسته بندی محصولات
            </Typography>
          </Box>
        </Box>
        {/* trigger icon */}
        <Box>
          <Box display="flex" alignItems="center">
            <Menu
              className="trigger-text"
              sx={{
                color: "#fff",
                fontSize: "20px",
                transition: "color ease-in 90ms",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* dropdown */}
      <Box
        position="absolute"
        top="20px"
        right="0"
        width="1300px"
        height="685px"
        bgcolor="#fff"
        boxShadow={2}
        display={{ xs: "none", lg: "block" }}
        component={motion.div}
        initial={{ opacity: 0, display: "none" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          display: isOpen ? "block" : "none",
        }}
        transition={{ duration: 0.15 }}
      >
        <Box display="flex" flexDirection="column" width="100%" height="100%">
          {/* top */}
          <Box
            width="100%"
            height="39px"
            bgcolor="#ff9e0f"
            display="flex"
            alignItems="center"
            gap="4px"
            justifyContent="end"
            px="10px"
            boxSizing="border-box"
            sx={{
              "&:hover": {
                "& .top-text": { color: "black" },
                "& .top-icon": { color: "black" },
              },
              cursor: selectedCategoryIndex === null ? "default" : "pointer",
            }}
            onClick={() => {
              if (selectedCategoryIndex === null) return;
              setSelectedCategory(null);
            }}
          >
            {selectedCategoryIndex === null ? (
              <>
                {/* text */}
                <Box display="flex" alignItems="center" height="100%">
                  <Typography
                    fontFamily={vazirmatn.style.fontFamily}
                    sx={{ fontSize: "13.5px", color: "#fff" }}
                  >
                    محصولات فروشگاه
                  </Typography>
                </Box>
                {/* icon */}
                <Box>
                  <Store sx={{ color: "#fff", fontSize: "22px" }} />
                </Box>
              </>
            ) : (
              <>
                {/* text */}
                <Box display="flex" alignItems="center" height="100%">
                  <Typography
                    className={`top-text`}
                    fontFamily={vazirmatn.style.fontFamily}
                    sx={{
                      fontSize: "13.5px",
                      color: "#fff",
                      transition: "color ease-in 150ms",
                    }}
                  >
                    بازگشت
                  </Typography>
                </Box>
                {/* icon */}
                <Box>
                  <Typography
                    className={`${vazirmatn.className} top-icon`}
                    sx={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#fff",
                      transition: "color ease-in 150ms",
                    }}
                  >
                    →
                  </Typography>
                </Box>
              </>
            )}
          </Box>
          {/* content */}
          <Box
            display="flex"
            height="100%"
            maxHeight="100%"
            overflow="hidden"
            boxSizing="border-box"
            pl="10px"
            py="10px"
          >
            {/* left */}
            <Box flex={1} height="100%" width="49%" position="relative">
              <Box
                height="100%"
                width={selectedCategoryIndex === null ? "97%" : "100%"}
                sx={{
                  overflowY: "scroll",
                  direction: "rtl",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                    "&-thumb": {
                      bgcolor: "#808080",
                    },
                    "&-track": {
                      bgcolor: "#f1f1f1",
                    },
                  },
                }}
              >
                {/* selected category NULL cover */}
                <Box
                  display={selectedCategoryIndex === null ? "flex" : "none"}
                  height="100%"
                  width="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src="/images/categoryDropDown/leftCategoryDropDownCover.png"
                    alt="selected-category-null"
                    width={600}
                    height={400}
                    style={{ marginTop: "30px" }}
                  />
                </Box>
                {/* category contents */}
                {selectedCategoryIndex !== null && (
                  <Box display="flex" gap="15px">
                    {categories[selectedCategoryIndex].subCategories?.map(
                      (subCategory, index) => (
                        <Box
                          key={subCategory.title.concat(
                            Math.random().toString().concat(index.toString())
                          )}
                          fontFamily={vazirmatn.style.fontFamily}
                        >
                          {/* title */}
                          <Box
                            fontSize="14px"
                            display={
                              checkForBannerImage(subCategory.children)
                                ? "none"
                                : "flex"
                            }
                            justifyContent="center"
                          >
                            {subCategory.title}
                          </Box>
                          {/* divider */}
                          <Divider
                            color="#ff7900"
                            sx={{
                              "&.MuiDivider-root": {
                                my: 0.8,
                                p: 0,
                              },
                              display: checkForBannerImage(subCategory.children)
                                ? "none"
                                : "flex",
                            }}
                          />
                          {/* children */}
                          <Box display="flex" flexDirection="column" gap="3px">
                            {subCategory.children.map((item, index) =>
                              item.imageSrc ? (
                                <Box key={item.imageSrc.concat(item.slug)}>
                                  {/* product card */}
                                  <Box
                                    fontSize="13px"
                                    key={item.name.concat(
                                      item.slug.concat(Math.random().toString())
                                    )}
                                    border="1px solid #ff7900"
                                    borderRadius="7px"
                                    p="5px"
                                    dir="ltr"
                                  >
                                    <Link href={item.slug}>
                                      <Box
                                        display="flex"
                                        justifyContent="end"
                                        gap="5px"
                                        pl="8px"
                                      >
                                        {/* text */}
                                        <Box display="flex" alignItems="start">
                                          {item.name}
                                        </Box>
                                        {/* img */}
                                        <Box display="flex" alignItems="center">
                                          <Image
                                            src={item.imageSrc}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            objectFit="cover"
                                          />
                                        </Box>
                                      </Box>
                                    </Link>
                                  </Box>
                                  {/* show all relative products */}
                                  <Box
                                    display={
                                      index === subCategory.children.length - 1
                                        ? "flex"
                                        : "none"
                                    }
                                    justifyContent="start"
                                    alignItems="center"
                                    fontSize="13px"
                                    color="#ff7900"
                                  >
                                    <Link
                                      href={
                                        subCategory.allRelativeProductsSlug
                                          ? subCategory.allRelativeProductsSlug
                                          : ""
                                      }
                                    >
                                      مشاهده تمامی پکیجها
                                    </Link>
                                  </Box>
                                </Box>
                              ) : item.bannerImageSrc ? (
                                <Box
                                  key={item.name.concat(
                                    item.slug.concat(Math.random().toString())
                                  )}
                                  height="626px"
                                  display="flex"
                                  alignItems="center"
                                >
                                  <img
                                    src={item.bannerImageSrc}
                                    alt="faild to load image"
                                  />
                                </Box>
                              ) : (
                                <Box
                                  fontSize="13px"
                                  key={item.name.concat(
                                    item.slug.concat(Math.random().toString())
                                  )}
                                >
                                  <Link href={item.slug}>{item.name}</Link>
                                </Box>
                              )
                            )}
                          </Box>
                        </Box>
                      )
                    )}
                  </Box>
                )}
              </Box>
            </Box>
            {/* right */}
            <Box flex={selectedCategoryIndex === null ? 0.95 : 0.33}>
              <Box display="flex" height="100%" width="100%">
                {/* left column */}
                <Box
                  flex={1}
                  display={selectedCategoryIndex === null ? "unset" : "none"}
                  pr="10px"
                  boxSizing="border-box"
                >
                  <Stack spacing={0.3}>
                    {categories.map((category, index) => (
                      <CategoryCard
                        key={category.slug}
                        {...category}
                        display={
                          selectedCategoryIndex === null
                            ? index % 2 !== 0
                              ? "block"
                              : "none"
                            : "block"
                        }
                      />
                    ))}
                  </Stack>
                </Box>
                {/* divider */}
                <Box
                  minWidth="1.7px"
                  display={selectedCategoryIndex !== null ? "none" : "unset"}
                  height="100%"
                  bgcolor="#ff9e0f"
                />
                {/* right column */}
                <Box
                  flex={0.97}
                  ml="10px"
                  boxSizing="border-box"
                  sx={{
                    overflowY:
                      selectedCategoryIndex !== null ? "scroll" : "unset",
                    direction: "rtl",
                    "&::-webkit-scrollbar": {
                      width: "8px",
                      "&-thumb": {
                        borderRadius: "8px",
                        bgcolor: "#808080",
                        "&:hover": {
                          bgcolor: "#555555",
                        },
                      },
                    },
                  }}
                  position="relative"
                >
                  <Stack position="sticky" right={0} top={0} spacing={0.3}>
                    {categories.map((category, index) => (
                      <CategoryCard
                        dir="ltr"
                        key={category.slug}
                        {...category}
                        display={
                          selectedCategoryIndex === null
                            ? index % 2 === 0
                              ? "block"
                              : "none"
                            : "block"
                        }
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavCategory;
