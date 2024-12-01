"use client";
import { isAuthenticated } from "@/app/address/page";
import DeleteAllCartItemsSection from "@/components/molecules/Cart/DeleteAllCartItemsSection";
import { CustomTab, CustomTabPanel } from "@/components/molecules/CustomTab";
import { TCart } from "@/utils/types/Cart";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
const CartProducts = dynamic(
  () => import("@/components/molecules/Cart/CartProductsData"),
  {
    loading: () => <Box>loading</Box>,
  }
);

export type TabsT = "cart" | "altCart";

const ProductsSection = ({
  cart,
  altCart,
  cartTabSetter,
}: {
  cart: TCart[];
  altCart: TCart[];
  cartTabSetter: React.Dispatch<React.SetStateAction<TabsT>>;
}) => {
  const [selectedTab, setSelectedTab] = React.useState<TabsT>("cart");
  const isAuth = !!isAuthenticated;

  return (
    <Box>
      {/* header */}
      <Box sx={{ borderBottom: "1px solid #d9d9d9" }}>
        <Stack direction="row">
          <CustomTab<TabsT>
            content="سبد خرید"
            label="cart"
            selectedTab={selectedTab}
            onClickHandler={({ label }) => {
              setSelectedTab(label);
              cartTabSetter("cart");
            }}
            button={isAuth}
            pt=".8em"
          />
          {isAuth && (
            <CustomTab<TabsT>
              content="خرید بعدی"
              label="altCart"
              selectedTab={selectedTab}
              onClickHandler={({ label }) => {
                setSelectedTab(label);
                cartTabSetter("altCart");
              }}
              button
              pt=".8em"
            />
          )}
        </Stack>
      </Box>
      {/* contents */}
      <Box p={{ xs: "5px", sm: "15px" }}>
        {/* products */}
        <Box>
          <CustomTabPanel selectedTab={selectedTab} tab="cart">
            <Box>
              {/* products header */}
              <Box>
                <Box
                  p="10px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {/* cart products count */}
                  <Box>
                    <Typography fontSize="13px">
                      {cart.length > 0 ? cart.length : 0} کالا در سبد خرید شما
                    </Typography>
                  </Box>
                  {/* delete all button */}
                  <Box display={{ xs: "block", smL4: "none" }}>
                    <DeleteAllCartItemsSection />
                  </Box>
                  {/* move all cart products to altCart */}
                  <Box
                    display={isAuth ? { xs: "none", smL4: "block" } : "none"}
                  >
                    <Button variant="text" color="primary">
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        dir="ltr"
                        color="#ff7900"
                        spacing={1}
                      >
                        <ArrowBack />
                        <Typography
                          fontSize={{ xs: "12px", sm: "13px", lg: "14px" }}
                          fontWeight={400}
                        >
                          انتقال همه کالاها به خرید بعدی
                        </Typography>
                      </Stack>
                    </Button>
                  </Box>
                </Box>
              </Box>
              {/* products */}
              <CartProducts cart={cart} />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel selectedTab={selectedTab} tab="altCart">
            <Box>
              {/* products header */}
              <Box>
                <Box
                  p="10px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {/* cart products count */}
                  <Box>
                    <Typography fontSize="13px">
                      {altCart.length > 0 ? altCart.length : 0} کالا در سبد خرید
                      شما
                    </Typography>
                  </Box>
                  {/* delete all button */}
                  <Box display={{ xs: "block", smL4: "none" }}>
                    <DeleteAllCartItemsSection />
                  </Box>
                </Box>
              </Box>
              {/* products */}
              <CartProducts cart={altCart} />
            </Box>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsSection;
