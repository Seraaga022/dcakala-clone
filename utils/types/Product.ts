export type TProduct = {
  id: number;
  title: string;
  price?: number;
  image: string;
  isNew?: boolean;
  discountTime?: number; // in days
  discountNumber?: number;
  fastExpress?: boolean;
  video?: string;
  colors?: ProductColorT[];
  specialOffer?: boolean;
  slug: string;
};

export type ProductColorT = { value: string; title: string };

export type ProductCardLayoutT = "grid" | "block";

export type ProductCardPropsT = { product: TProduct }