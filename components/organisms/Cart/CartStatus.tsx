import { CartInfo } from "@/app/cart/page";
import { TCart } from "@/utils/types/Cart";
import { Box, Stack, Typography } from "@mui/material";
import { TabsT as CartTabsT } from "@/components/organisms/Cart/ProductsSection";
import React from "react";

const CartStatus = ({
  cart,
  freeExpressLimit,
  selectedCartTab,
}: {
  cart: TCart[];
  freeExpressLimit: number;
  selectedCartTab: CartTabsT;
}) => {
  const cartInfo = new CartInfo(cart);

  const getFreeExpressProgressValue = () => {
    const cartFinalPrice = cartInfo.calcFinalPrice({}).finalPrice;
    const percentageLeft = (cartFinalPrice / freeExpressLimit) * 100;
    if (percentageLeft <= 100) return percentageLeft;
    return 100;
  };

  return (
    <Stack spacing={2}>
      {/* title */}
      <Box>
        <Typography fontWeight={500} fontSize="12.5px">
          کالا های موجود در سبد شما ثبت و رزرو نشده اند,برای ثبت سفارش مراحل
          بعدی را تکمیل کنید.
        </Typography>
      </Box>
      {/* progress section */}
      <Box display={selectedCartTab === "cart" ? "block" : "none"}>
        {/* progressBar */}
        <Box>
          {/* progress body */}
          <Box
            width="100%"
            height="10px"
            bgcolor="#eeafaf"
            borderRadius="999px"
            position="relative"
          >
            <Box
              position="absolute"
              width={`${getFreeExpressProgressValue()}%`}
              bgcolor="#fe0e0e"
              borderRadius="999px"
              height="100%"
            />
          </Box>
        </Box>
        {/* delivery price status */}
        <Box mt="15px">
          <Typography fontWeight={500} fontSize="12px">
            {getFreeExpressProgressValue() >= 100
              ? "رایگان"
              : `${(
                  freeExpressLimit - cartInfo.calcFinalPrice({}).finalPrice
                ).toLocaleString()} تومان تا ارسال رایگان`}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default CartStatus;
