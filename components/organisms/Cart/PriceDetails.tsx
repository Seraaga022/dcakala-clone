"use client";
import { CartInfo } from "@/hooks/useCart";
import { TCart } from "@/utils/types/Cart";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { TabsT as CartTabsT } from "@/components/organisms/Cart/ProductsSection";
import React from "react";

const PriceDetails = ({
  cart,
  isCartAddressPage,
  selectedCartTab,
}: {
  cart: TCart[];
  isCartAddressPage?: boolean;
  selectedCartTab: CartTabsT;
}) => {
  const cartInfo = new CartInfo(cart);

  return (
    <Stack>
      {/* top */}
      <Box>
        <Stack spacing={2}>
          {/* top */}
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                fontSize={{ xs: "12px", lg: "13.5px" }}
                fontWeight={400}
              >
                مبلغ کل ({cart.length} کالا)
              </Typography>
            </Box>
            <Box>
              <Stack spacing={0.5} direction="row" dir="ltr">
                <Box display="flex" alignItems="center">
                  <Typography fontSize={{ xs: "12px", lg: "13.5px" }}>
                    تومان
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    fontSize={{ xs: "12px", lg: "13.5px" }}
                    fontWeight={600}
                  >
                    {cartInfo.calcTotalCartPrice.toLocaleString()}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
          {/* bottom */}
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                fontSize={{ xs: "12px", lg: "13.5px" }}
                fontWeight={400}
              >
                هزینه ارسال
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={{ xs: "12px", lg: "13.5px" }}>
                وابسته به آدرس
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Divider sx={{ mt: "15px", mb: "10px" }} />
      {/* middle */}
      <Box>
        <Stack spacing={2.5}>
          {/* top */}
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                fontSize={{ xs: "12px", lg: "13.5px" }}
                fontWeight={400}
                color="error"
              >
                تخفیف
              </Typography>
            </Box>
            <Box>
              <Stack spacing={0.5} direction="row" dir="ltr" color="red">
                <Box display="flex" alignItems="center">
                  <Typography fontSize={{ xs: "12px", lg: "13.5px" }}>
                    تومان
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography fontSize={{ xs: "12px", lg: "13.5px" }}>
                    {cartInfo.calcFinalPrice({}).burnedMoney.toLocaleString()}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
          {/* bottom */}
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                fontSize={{ xs: "12px", lg: "13.5px" }}
                fontWeight={400}
              >
                مبلغ قابل پرداخت
              </Typography>
            </Box>
            <Box>
              <Stack spacing={0.5} direction="row" dir="ltr">
                <Box display="flex" alignItems="center">
                  <Typography fontSize={{ xs: "12px", lg: "13.5px" }}>
                    تومان
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    fontSize={{ xs: "12px", lg: "13.5px" }}
                    fontWeight={600}
                  >
                    {selectedCartTab === "cart"
                      ? cartInfo.calcFinalPrice({}).finalPrice.toLocaleString()
                      : 0}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
      {/* bottom */}
      <Box mt="15px">
        {selectedCartTab === "cart" ? (
          <Button
            href={isCartAddressPage ? "/cart#" : "/address"}
            color="warning"
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#ff7900",
            }}
          >
            <Typography color="#fff" fontSize="14px">
              {isCartAddressPage ? "آدرس خود را ثبت کنید" : "ادامه ثبت سفارش"}
            </Typography>
          </Button>
        ) : (
          <Box>
            <Typography fontSize={{ xs: "12px", md: "13", lg: "14px" }}>
              ابتدا کاهایی که در لیست خرید بعدی قرار داده اید را به سبد خرید
              انتقال دهید تا بتوانید مراحل بعدی سفارش را تکمیل کنید.
            </Typography>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default PriceDetails;
