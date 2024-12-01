import Cart from "@/components/page/Cart";
import {
  CartFinalPriceFunctionPropsT,
  CartFinalPriceFunctionT,
  TCart,
} from "@/utils/types/Cart";
import React from "react";

export class CartInfo {
  private cart: TCart[];

  constructor(cart: TCart[]) {
    this.cart = cart;
  }

  get calcTotalCartPrice() {
    return this.cart.reduce((accum, current) => current.price + accum, 0);
  }

  get caclTotalDiscount() {
    return this.cart.reduce(
      (accum, current) => (current.discount || 0) + accum,
      0
    );
  }

  calcFinalPrice = ({
    price = this.calcTotalCartPrice,
    discount,
  }: CartFinalPriceFunctionPropsT): CartFinalPriceFunctionT => {
    const totalDiscount = discount || this.caclTotalDiscount;
    const burnedMoney = price * (totalDiscount / 100);
    const finalPrice = price - burnedMoney;
    return {
      finalPrice,
      burnedMoney,
    };
  };
}

const Page = () => {
  return <Cart />;
};

export default Page;
