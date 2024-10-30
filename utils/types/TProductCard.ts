export type TProductCard = {
  id: number;
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  discountTime?: number; // in days
  discountNumber?: number;
  fastExpress?: boolean;
  video?: string;
  colors?: string[];
  specialOffer?: boolean;
  slug: string;
};
