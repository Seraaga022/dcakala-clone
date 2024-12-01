"use server"
import AddressCompilation from "@/components/organisms/Cart/AddressCompilation";
import CartLayout from "@/components/template/Cart/CartLayout";
import useCart from "@/hooks/useCart";
import React from "react";

const CartAddressPage = () => {
  const { data: cart } = useCart();
  const phoneNumber = "2172195";
  const freeExpressLimit = 10000000;

  return (
    <CartLayout
      rightSideSection={<AddressCompilation />}
      cart={cart}
      freeExpressLimit={freeExpressLimit}
      phoneNumber={phoneNumber}
      isCartAddressPage
    />
  );
};

export default CartAddressPage;
