import CartLevels from "@/components/organisms/Cart/CartLevels";
import CartStatus from "@/components/organisms/Cart/CartStatus";
import PriceDetails from "@/components/organisms/Cart/PriceDetails";
import { TabsT as CartTabsT } from "@/components/organisms/Cart/ProductsSection";
import PurchaseCounseling from "@/components/organisms/Cart/PurchaseCounseling";
import { TCart } from "@/utils/types/Cart";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

type TCartLayoutBase = {
  cart: TCart[];
  rightSideSection: React.ReactNode;
  phoneNumber: string;
  freeExpressLimit: number;
  isCartAddressPage?: boolean;
};
type TCartLayoutAddress = TCartLayoutBase & {
  isCartAddressPage: true;
  selectedCartTab?: undefined;
  altCart?: undefined;
};
type TCartLayoutNonAddress = TCartLayoutBase & {
  isCartAddressPage?: false;
  selectedCartTab: CartTabsT;
  altCart: TCart[];
};
type TCartLayout = TCartLayoutAddress | TCartLayoutNonAddress;

const CartLayout = ({
  cart,
  altCart,
  rightSideSection,
  phoneNumber,
  freeExpressLimit,
  isCartAddressPage,
  selectedCartTab,
}: TCartLayout) => {
  return (
    <>
      {/* cart levels */}
      <Box>
        <CartLevels />
      </Box>
      {/* cart items and guidance */}
      <Box mt="15px">
        <Grid container spacing={2}>
          {/* details */}
          <Grid
            order={{ xs: 2, smL2: 1 }}
            size={{ xs: 12, smL2: 4, smL4: 3 }}
            dir="rtl"
            position="relative"
          >
            <Grid position="sticky" top={0} container spacing={2}>
              {/* top */}
              <Grid
                size={12}
                border="1px solid #d9d9d9"
                borderRadius="7px"
                p="15px"
              >
                <PriceDetails
                  isCartAddressPage={isCartAddressPage}
                  cart={
                    selectedCartTab === "cart"
                      ? cart
                      : isCartAddressPage
                      ? ([] as TCart[]) // preventation of type errors
                      : altCart
                  }
                  selectedCartTab={isCartAddressPage ? "cart" : selectedCartTab}
                />
              </Grid>
              {/* middle */}
              <Grid
                size={12}
                border="1px solid #d9d9d9"
                borderRadius="7px"
                p="15px"
              >
                <PurchaseCounseling phoneNumber={phoneNumber} />
              </Grid>
              {/* bottom */}
              <Grid size={12}>
                <CartStatus
                  cart={cart}
                  freeExpressLimit={freeExpressLimit}
                  selectedCartTab={isCartAddressPage ? "cart" : selectedCartTab}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* right side */}
          <Grid
            order={{ xs: 1, smL2: 2 }}
            size={{ xs: 12, smL2: 8, smL4: 9 }}
            border="1px solid #d9d9d9"
            borderRadius="7px"
            dir="rtl"
          >
            {rightSideSection}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CartLayout;
