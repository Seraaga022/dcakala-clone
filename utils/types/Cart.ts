export type TCart = {
  id: number;
  image: string;
  title: string;
  price: number;
  qntt: number;
  color?: string;
  path: string;
  discount?: number;
};

export type TNavCartItems = {
  product: TCart;
};
