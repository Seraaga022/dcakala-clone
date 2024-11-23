import { TCategory } from "@/utils/types/Category";

export type TSubCategoryChildren = TCategory & {
  imageSrc?: string;
  bannerImageSrc?: string;
};
export type TCategoryCard = TCategory & {
  icon: string;
  subCategories?: {
    title: string;
    children: TSubCategoryChildren[];
    allRelativeProductsSlug?: string;
  }[];
  index: number;
};
