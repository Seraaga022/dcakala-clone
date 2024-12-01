import { ProductColorT } from "./Product";

export type TCart = {
  id: number;
  image: string;
  title: string;
  price: number;
  qntt: number;
  color?: ProductColorT;
  path: string;
  discount?: number;
};

export type TNavCartItems = {
  product: TCart;
};

export type CartFinalPriceFunctionPropsT = {
  price?: number;
  discount?: number;
};

export type CartFinalPriceFunctionT = {
  finalPrice: number;
  burnedMoney: number;
};
