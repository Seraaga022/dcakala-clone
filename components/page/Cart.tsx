"use client";
import useCart, { useAltCart } from "@/hooks/useCart";
import React from "react";
import ProductsSection, {
  TabsT as CartTabsT,
} from "../organisms/Cart/ProductsSection";
import CartLayout from "../template/Cart/CartLayout";

const Cart = () => {
  const { data: cart } = useCart();
  const { data: altCart } = useAltCart();
  let phoneNumber = "2172195";
  const freeExpressLimit = 10000000;

  const [selectedCart, setSelectedCart] = React.useState<CartTabsT>("cart");

  return (
    <CartLayout
      rightSideSection={
        <ProductsSection
          cart={cart}
          altCart={altCart}
          cartTabSetter={setSelectedCart}
        />
      }
      cart={cart}
      altCart={altCart}
      selectedCartTab={selectedCart}
      freeExpressLimit={freeExpressLimit}
      phoneNumber={phoneNumber}
    />
  );
};

export default Cart;
