import { CartInfo } from "@/app/cart/page";
import getUniqueKey from "@/utils/lib/UniqueKey";
import { TCart, TNavCartItems } from "@/utils/types/Cart";
import { ProductColorT } from "@/utils/types/Product";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";

const CartProductsData = ({ cart }: { cart: TCart[] }) => {
  const CartProductCardColorBox = ({ color }: { color: ProductColorT }) => {
    return (
      <Box p="7px" bgcolor="#f6f6f6" borderRadius="5px" width="100%">
        <Stack direction="row" spacing={1} justifyContent="start" dir="rtl">
          <Typography>رنگ:</Typography>
          {/* color title */}
          <Typography pr="5px">{color?.title}</Typography>
          {/* color value */}
          <Box
            bgcolor={`#${color?.value}`}
            width="25px"
            height="25px"
            borderRadius="9999px"
            border="1px solid silver"
          />
        </Stack>
      </Box>
    );
  };

  const CartProductCard = (product: TNavCartItems) => {
    const {
      product: { image, price, qntt, color, title, discount },
    } = product;

    const cartInfo = new CartInfo(cart);

    return (
      <Box
        p="15px"
        boxSizing="border-box"
        border={{ xs: "none", sm: "1px solid #e6e8eb" }}
        borderRadius="7px"
        height={{ xs: "auto", sm: "220px" }}
        sx={{
          "&:hover": {
            boxShadow: 3,
          },
        }}
      >
        <Grid container dir="ltr" height="82%">
          {/* price */}
          <Grid
            size={{ xs: 3.8, smL2_5: 3.1 }}
            height="100%"
            order={{ xs: 3, sm: 1 }}
          >
            <Box
              height="100%"
              className="_container_"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {price ? (
                <>
                  {/* final price */}
                  <Box>
                    <Stack direction="row" spacing={0.5}>
                      <>
                        <Typography
                          color={discount ? "#de1616" : "auto"}
                          fontSize="13px"
                          fontWeight={300}
                        >
                          تومان
                        </Typography>
                        <Typography
                          color={discount ? "#de1616" : "auto"}
                          fontSize="17px"
                          fontWeight={800}
                        >
                          {cartInfo
                            .calcFinalPrice({
                              price,
                              discount,
                            })
                            .finalPrice.toLocaleString()}
                        </Typography>
                      </>
                    </Stack>
                  </Box>
                  {/* original price */}
                  <Box>
                    <Box component="del">
                      <Stack direction="row" spacing={0.5}>
                        {discount ? (
                          <>
                            <Typography
                              color="#c4c3c3"
                              fontSize="13px"
                              fontWeight={300}
                            >
                              تومان
                            </Typography>
                            <Typography
                              color="#c4c3c3"
                              fontSize="14px"
                              fontWeight={800}
                            >
                              {price.toLocaleString()}
                            </Typography>
                          </>
                        ) : null}
                      </Stack>
                    </Box>
                  </Box>
                </>
              ) : null}
            </Box>
          </Grid>
          {/* title & qntt & color */}
          <Grid size={{ xs: 5.2, smL2_5: 5.9 }} order={{ xs: 1, sm: 2 }}>
            <Box className="_container_" display="flex" justifyContent="end">
              <Stack spacing={2} width="100%">
                {/* title */}
                <Box dir="rtl">
                  <Typography fontSize="14px">{title}</Typography>
                </Box>
                {/* qntt & color */}
                <Box>
                  <Stack spacing={1} alignItems="end">
                    {/* qntt */}
                    <Box>
                      <Stack direction="row" spacing={1}>
                        {/* increment */}
                        <Box>
                          <IconButton>
                            <Add
                              sx={{
                                color: "#707070",
                                fontSize: { xs: "13px", sm: "17px" },
                              }}
                            />
                          </IconButton>
                        </Box>
                        {/* qntt */}
                        <Box
                          px="15px"
                          border="1px solid #e5e7eb"
                          display="flex"
                          alignItems="center"
                        >
                          <Typography>{qntt}</Typography>
                        </Box>
                        {/* decrement */}
                        <Box>
                          <IconButton
                            disabled={qntt === 1}
                            sx={{
                              "&.Mui-disabled": {
                                "& .qntt-decrement-icon": {
                                  color: "#bdbdbd !important",
                                },
                              },
                            }}
                          >
                            <Remove
                              className="qntt-decrement-icon"
                              sx={{
                                color: "#707070",
                                fontSize: { xs: "13px", sm: "17px" },
                              }}
                            />
                          </IconButton>
                        </Box>
                      </Stack>
                    </Box>
                    {/* color */}
                    <Box width="100%" minHeight={{ xs: "50px", sm: "10px" }}>
                      <Box
                        className="_wrapper_"
                        display={{ xs: "none", sm: "block" }}
                      >
                        {color ? (
                          <CartProductCardColorBox color={color} />
                        ) : null}
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Grid>
          {/* img */}
          <Grid size={{ xs: 6, sm: 3 }} order={{ xs: 2, sm: 3 }}>
            <Box
              height="100%"
              className="_container_"
              display="flex"
              justifyContent="end"
              alignItems="center"
            >
              <Box
                position="relative"
                width={{ xs: "45vw", sm: "10vw", md: "120px" }}
                height={{ xs: "45vw", sm: "10vw", md: "120px" }}
              >
                <Image src={image} alt="product-image" fill />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* MOBILE color box */}
        <Box>
          <Box
            className="_wrapper_"
            width="97%"
            display={{ xs: "block", sm: "none" }}
          >
            {color ? <CartProductCardColorBox color={color} /> : null}
          </Box>
        </Box>
        {/* delete icon */}
        <Box>
          <Box dir="rtl">
            <IconButton>
              <Delete color="error" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  };

  const EmptyCartComponent = (
    <Box mt="50px" width="100%" height="100%">
      <Stack spacing={1}>
        <Box display="flex" justifyContent="center">
          <Box width="150px" height="150px" position="relative">
            <Image
              src="/images/cart/empty-cart-logo.png"
              alt="empty-cart-logo"
              fill
            />
          </Box>
        </Box>
        {/* text */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography>سبد خرید شما خالی است</Typography>
        </Box>
      </Stack>
    </Box>
  );

  const output =
    cart.length > 0
      ? cart.map((i) => (
          <Box key={getUniqueKey()}>
            <CartProductCard product={i} />
          </Box>
        ))
      : EmptyCartComponent;

  return <Stack spacing={2}>{output}</Stack>;
};

export default CartProductsData;
