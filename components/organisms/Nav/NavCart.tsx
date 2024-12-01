"use client";
import React from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  Stack,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import { ArrowBackIosNew, ShoppingCartOutlined } from "@mui/icons-material";
import CustomTooltip from "@/theme/CustomTooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavCartItem from "@/components/molecules/Nav/NavCartProductCard";
import { vazirmatn } from "@/app/Fonts";
import useCart from "@/hooks/useCart";

const NavCart = () => {
  const router = useRouter();
  const { data: cart } = useCart();
  const cartItemsCount = cart.length;
  const calcFullPrice = () => {
    return cart.reduce(
      (accumulator, current) => current.price + accumulator,
      0
    );
  };
  const calcAllDiscounts = () => {
    return cart.reduce((accum, current) => (current.discount || 0) + accum, 0);
  };
  const calcFinallPrice = () => {
    return cart.reduce(
      (accum, current) => accum + (current.price - (current.discount || 0)),
      0
    );
  };
  // const incrementCartItem = (id: number) => {
  //   if (!cart) return;
  //   setCart(cart.map((i) => (i.id !== id ? i : { ...i, qntt: i.qntt + 1 })));
  // };
  // const decrementCartItem = (id: number) => {
  //   if (!cart) return;
  //   setCart(cart.map((i) => (i.id !== id ? i : { ...i, qntt: i.qntt - 1 })));
  // };

  return (
    <Box>
      <Box
        boxSizing="border-box"
        bgcolor="#fff"
        py="2px"
        px="7px"
        display="flex"
        alignItems="center"
        borderRadius="7px"
        sx={{ cursor: "pointer" }}
      >
        <Badge
          badgeContent={cartItemsCount}
          color="error"
          sx={{
            "& .MuiBadge-badge": { top: "-4px", left: "-27px", right: "auto" },
          }}
        >
          {cartItemsCount > 0 ? (
            <ThemeProvider theme={CustomTooltip}>
              <Tooltip
                title={
                  <Box width="330px" maxWidth="330px">
                    <Stack dir="rtl">
                      {/* top */}
                      <Box
                        dir="ltr"
                        display="flex"
                        justifyContent="end"
                        alignItems="center"
                        py="4px"
                      >
                        {/* left */}
                        <Box mr="auto">
                          <Link href="/cart">
                            <Box
                              display="flex"
                              alignItems="center"
                              gap="3px"
                              pt="5px"
                              boxSizing="border-box"
                            >
                              {/* icon */}
                              <Box
                                display="flex"
                                alignItems="center"
                                height="100%"
                              >
                                <ArrowBackIosNew
                                  sx={{ color: "#ff7900", fontSize: "11px" }}
                                />
                              </Box>
                              {/* text */}
                              <Box
                                display="flex"
                                alignItems="center"
                                height="100%"
                              >
                                <Typography
                                  sx={{
                                    color: "#ff7900",
                                    fontSize: "13px",
                                    fontFamily: vazirmatn.style.fontFamily,
                                  }}
                                >
                                  مشاهده بیشتر
                                </Typography>
                              </Box>
                            </Box>
                          </Link>
                        </Box>
                        {/* right */}
                        <Box>
                          <Typography
                            sx={{
                              color: "#212121",
                              fontSize: "14px",
                              fontFamily: vazirmatn.style.fontFamily,
                            }}
                          >
                            کالا در سبد خرید شما
                          </Typography>
                        </Box>
                      </Box>
                      <Divider
                        color="#e5e7eb"
                        sx={{
                          "&.MuiDivider-root": {
                            my: 0.8,
                            p: 0,
                          },
                        }}
                      />
                      {/* items */}
                      <Box
                        minHeight={{ md: "300px", xl: "400px" }}
                        maxHeight={{ md: "300px", xl: "400px" }}
                        overflow="hidden"
                        sx={{
                          overflowY: "scroll",
                          position: "relative",
                          "&::-webkit-scrollbar": {
                            width: "8px",
                            "&-thumb": {
                              bgcolor: "#808080",
                              borderRadius: "3px",
                              "&:hover": {
                                bgcolor: "#555555",
                              },
                            },
                          },
                        }}
                      >
                        <Stack spacing={0.2} dir="ltr">
                          {cart.map((i, index) => (
                            <React.Fragment
                              key={i.path.concat(Math.random().toString())}
                            >
                              <NavCartItem
                                product={i}
                                key={i.path.concat(Math.random().toString())}
                              />
                              {/* divider */}
                              {cart.length > 1 && index !== cart.length - 1 && (
                                <Divider
                                  color="#e5e7eb"
                                  sx={{
                                    "&.MuiDivider-root": {
                                      my: 0.8,
                                      p: 0,
                                    },
                                  }}
                                />
                              )}
                            </React.Fragment>
                          ))}
                        </Stack>
                      </Box>
                      <Divider
                        color="#e5e7eb"
                        sx={{
                          "&.MuiDivider-root": {
                            my: 0.8,
                            p: 0,
                          },
                        }}
                      />
                      {/* info */}
                      <Box dir="ltr">
                        <Stack spacing={0.5}>
                          {/* items count */}
                          <Box display="flex" justifyContent="center">
                            {/* left */}
                            <Box mr="auto">
                              <Typography
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                {cartItemsCount}
                              </Typography>
                            </Box>
                            {/* right */}
                            <Box>
                              <Typography
                                sx={{ color: "#212121" }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                تعداد موارد
                              </Typography>
                            </Box>
                          </Box>
                          {/* full price */}
                          <Box display="flex" justifyContent="center">
                            {/* left */}
                            <Box
                              mr="auto"
                              display="flex"
                              alignItems="center"
                              dir="rtl"
                            >
                              <Typography
                                fontFamily={vazirmatn.style.fontFamily}
                                sx={{
                                  fontSize: "13px",
                                  fontWeight: 600,
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {calcFullPrice().toLocaleString()}&nbsp;
                              </Typography>
                              {/* تومان text */}
                              <Typography
                                sx={{
                                  color: "#212121",
                                  fontSize: "13px",
                                  fontWeight: 500,
                                }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                تومان
                              </Typography>
                            </Box>
                            {/* right */}
                            <Box>
                              <Typography
                                sx={{ color: "#212121" }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                جمع کل (بدون مالیات)
                              </Typography>
                            </Box>
                          </Box>
                          {/* discount */}
                          <Box display="flex" justifyContent="center">
                            {/* left */}
                            <Box
                              mr="auto"
                              display="flex"
                              alignItems="center"
                              dir="rtl"
                            >
                              <Typography
                                sx={{
                                  direction: "rtl",
                                  color: "#f04b4b",
                                  fontSize: "13px",
                                  fontWeight: 600,
                                }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                {calcAllDiscounts().toLocaleString()}&nbsp;
                              </Typography>
                              {/* تومان text */}
                              <Typography
                                sx={{
                                  color: "#f04b4b",
                                  fontSize: "13px",
                                  fontWeight: 500,
                                }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                تومان
                              </Typography>
                            </Box>
                            {/* right */}
                            <Box>
                              <Typography
                                sx={{ color: "#212121" }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                مجموع تخفیفات
                              </Typography>
                            </Box>
                          </Box>
                          {/* final price */}
                          <Box display="flex" justifyContent="center">
                            {/* left */}
                            <Box
                              mr="auto"
                              display="flex"
                              alignItems="center"
                              dir="rtl"
                            >
                              <Typography
                                fontFamily={vazirmatn.style.fontFamily}
                                sx={{
                                  direction: "rtl",
                                  fontSize: "13px",
                                  fontWeight: 600,
                                }}
                              >
                                {calcFinallPrice().toLocaleString()}&nbsp;
                              </Typography>
                              <Typography
                                fontFamily={vazirmatn.style.fontFamily}
                                sx={{
                                  color: "#212121",
                                  fontSize: "13px",
                                  fontWeight: 500,
                                }}
                              >
                                تومان
                              </Typography>
                            </Box>
                            {/* right */}
                            <Box>
                              <Typography
                                sx={{ color: "#212121" }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                مبلغ نهایی
                              </Typography>
                            </Box>
                          </Box>
                          {/* cart page button */}
                          <Box pb="5px">
                            <Button
                              onClick={() => router.push("/cart")}
                              fullWidth
                              sx={{ bgcolor: "#ff7900", boxShadow: 2 }}
                            >
                              <Typography
                                color="#fff"
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                تکمیل فرآیند خرید
                              </Typography>
                            </Button>
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                }
                placement="bottom-start"
              >
                <Link href="/cart" style={{ maxHeight: "27px" }}>
                  <ShoppingCartOutlined sx={{ color: "#009688" }} />
                </Link>
              </Tooltip>
            </ThemeProvider>
          ) : (
            <ShoppingCartOutlined sx={{ color: "#009688" }} />
          )}
        </Badge>
      </Box>
    </Box>
  );
};

export default NavCart;
