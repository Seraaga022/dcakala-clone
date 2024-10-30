"use client";
import { vazirmatn } from "@/app/Fonts";
import { Clear, Search } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { TProduct, useProducts } from "./NavSearch";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DrawerSearchCard = ({ product }: { product: TProduct }) => {
  const router = useRouter();
  return (
    <Box
      minWidth="565px"
      display="flex"
      justifyContent="end"
      alignItems="center"
      bgcolor="#f8f8f8"
      sx={{
        cursor: "pointer",
        "@media (max-width: 600px)": {
          minWidth: "100%",
        },
      }}
      borderRadius="5px"
      onClick={() => {
        router.push(product.slug);
      }}
    >
      {/* left */}
      <Box display="flex" alignItems="center">
        <Box className={vazirmatn.className}>{product.name}</Box>
      </Box>
      {/* right */}
      <Box display="flex" alignItems="center" boxSizing="border-box" p="10px">
        <Image
          src={product.image}
          alt="product image"
          width={180}
          height={180}
        />
      </Box>
    </Box>
  );
};

const NavMobileSearch = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts;

  return (
    <>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Search sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            minWidth: "320px",
            width: "auto",
            bgcolor: "#f8f8f8",
            overflow: "visible",
          },
        }}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          width="100%"
          height="100svh"
          sx={{
            overflowY: "scroll",
            position: "relative",
          }}
          dir="rtl"
        >
          {/* static top */}
          <Box
            bgcolor="#fff"
            minHeight="55px"
            position="absolute"
            left={0}
            top={0}
            width="100%"
          />
          {/* dynamic top */}
          <Box
            dir="ltr"
            bgcolor="#fff"
            height="55px"
            borderBottom="1px solid #e5e7eb"
            boxShadow={0.6}
            display="flex"
            alignItems="center"
            justifyContent="end"
            pr="8px"
            maxWidth="320px"
            position="sticky"
            zIndex={1000}
            top={0}
            right={0}
          >
            <IconButton onClick={() => setDrawerOpen(false)}>
              <Clear color="inherit" />
            </IconButton>
          </Box>
          {/* input section */}
          <Box pt="33px" px="15px" dir="ltr" boxSizing="border-box">
            <Box
              width="100%"
              bgcolor="#fff"
              height="40px"
              borderRadius="9999px"
              display="flex"
              sx={{
                "& > input::placeholder": {
                  textAlign: "end",
                  pr: "16px",
                  fontFamily: vazirmatn.style.fontFamily,
                  fontSize: "12px",
                  color: "#9ca3af",
                },
              }}
            >
              {/* input */}
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="جستجو در دی سی ای کالا"
                style={{
                  padding: 0,
                  margin: 0,
                  background: "transparent",
                  paddingInline: "20px",
                  fontSize: "16px",
                  fontFamily: vazirmatn.style.fontFamily,
                  fontWeight: 400,
                  border: "none",
                  outline: "none",
                  width: "90%",
                  height: "40px",
                }}
              />
              {/* icon */}
              <Box
                width="10%"
                height="100%"
                display="flex"
                alignItems="center"
                pr="8px"
              >
                <Search sx={{ color: "#9c9d9e" }} />
              </Box>
            </Box>
          </Box>
          {/* skeletons */}
          <Box
            dir="ltr"
            display={products && productsLoading ? "block" : "none"}
          >
            {/* results info skeleton */}
            <Box pt="25px" px="30px">
              <Skeleton
                variant="rectangular"
                width="100%"
                height={40}
                sx={{
                  "&::after": {
                    animationDirection: "reverse",
                  },
                  borderRadius: "5px",
                }}
              />
            </Box>
            {/* search result skeletons */}
            <Box
              bgcolor="#fff"
              px="25px"
              py="20px"
              mt="18px"
              mx="15px"
              borderRadius="5px"
            >
              <Stack spacing={1}>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height={53}
                  sx={{
                    "&::after": {
                      animationDirection: "reverse",
                    },
                    borderRadius: "5px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height={53}
                  sx={{
                    "&::after": {
                      animationDirection: "reverse",
                    },
                    borderRadius: "5px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height={53}
                  sx={{
                    "&::after": {
                      animationDirection: "reverse",
                    },
                    borderRadius: "5px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height={53}
                  sx={{
                    "&::after": {
                      animationDirection: "reverse",
                    },
                    borderRadius: "5px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height={53}
                  sx={{
                    "&::after": {
                      animationDirection: "reverse",
                    },
                    borderRadius: "5px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height={53}
                  sx={{
                    "&::after": {
                      animationDirection: "reverse",
                    },
                    borderRadius: "5px",
                  }}
                />
              </Stack>
            </Box>
          </Box>
          {/* search res top */}
          <Box
            dir="ltr"
            display={products && !productsLoading ? "flex" : "none"}
            alignItems="center"
            justifyContent="end"
            px="15px"
            pt="20px"
            boxSizing="border-box"
          >
            {/* left */}
            <Box mr="auto">
              <Link href={`search?search=${searchValue}`}>
                <Box
                  borderRadius="5px"
                  bgcolor="#ff7900"
                  boxShadow={1}
                  sx={{
                    "&: hover": { boxShadow: 3 },
                    transition: "all ease-in 100ms",
                    boxSizing: "border-box",
                    px: "15px",
                    py: "8px",
                  }}
                >
                  <Typography
                    className={vazirmatn.className}
                    sx={{ fontSize: "15px", color: "#fff" }}
                  >
                    مشاهده نتایج
                  </Typography>
                </Box>
              </Link>
            </Box>
            {/* right */}
            <Box flex={1}>
              <Typography
                className={vazirmatn.className}
                sx={{ fontSize: "12px", direction: "rtl" }}
              >
                تعداد محصولات: {products ? products.length : 0}
              </Typography>
            </Box>
          </Box>
          {/* search result items */}
          <Box
            dir="ltr"
            display={products && !productsLoading ? "block" : "none"}
            boxSizing="border-box"
            px="8px"
            mt="15px"
            py="8px"
            mx="15px"
            bgcolor="#fff"
            borderRadius="7px"
          >
            {products &&
              products.map((p) => (
                <DrawerSearchCard key={p.slug} product={p} />
              ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavMobileSearch;
