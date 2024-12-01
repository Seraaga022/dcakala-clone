import { TUrlPath } from "./Category";
import { ProductColorT, TProduct } from "./Product";

export type ProductMediaTypeT = "picture" | "video";

export type ProductDeliveryFeaturesItemTypeT =
  | "guaranty"
  | "express"
  | "fastExpress";

export type ProductMediaT = {
  src: string;
  title: string;
  type: ProductMediaTypeT;
  banner?: boolean;
};

export type ProductNameT = { per: string; en: string };

export type ProductPropertiesItemT = {
  categoryName: string;
  items: ProductPropertiesSubItemT[];
};

type ProductSpecialDiscountT = boolean;

export type ProductPriceT = Pick<TProduct, "price"> & {
  specialDiscount?: ProductSpecialDiscountT;
  lastUpdatedPriceDate?: ProductLastPriceUpdateDateT;
};

export type ProductFeatureT = string;

export type ProductPropertiesSubItemT = Pick<ProductMediaT, "title"> & {
  value: string;
};

export type ProductCreatorDetailsT = Pick<
  ProductComplementaryProductT,
  "slug"
> & { name: string; logo: string };

export type ProductDeliveryFeaturesItemT = Pick<ProductMediaT, "title"> & {
  type: ProductDeliveryFeaturesItemTypeT;
};

export type ProductComplementaryProductT = Pick<ProductMediaT, "title"> & {
  image: string;
  slug: string;
  type: string;
};

export type ProductComparedProductT = Pick<
  ProductComplementaryProductT,
  "image" | "slug" | "title"
> & {
  price: number;
};

export type ProductReviewAuthorT = Pick<
  ProductComplementaryProductT,
  "slug" | "image"
> & { userName: string; level: string };

export type ProductReviewItemT = Pick<ProductMediaT, "title"> & {
  score: number;
  content: string;
  author: ProductReviewAuthorT;
};

export type ProductCommentItemT = ProductReviewItemT;

export type ProductPresentationVideoT = Pick<ProductMediaT, "src" | "title">;

export type ProductLastPriceUpdateDateT = string;

export type ProductColorsT = Pick<TProduct, "colors">["colors"];

export type ProductPackageT = Pick<
  ProductComplementaryProductT,
  "slug" | "image" | "title"
>;

export type ProductContactInfoT = {
  tel: number;
};

export type ProductExpertReviewT = {
  content: string;
};

export type ProductRelativeProductT = TProduct;

export type ProductDiscountNumberT = TProduct["discountNumber"];
export type ProductSpecialOfferT = TProduct["specialOffer"];

export type TProductDetailPageContent = {
  urlPath: TUrlPath[];
  productDetails: {
    name: ProductNameT;
    media: ProductMediaT[];
    features: ProductFeatureT[];
    properties: ProductPropertiesItemT[];
    creatorDetails: ProductCreatorDetailsT;
    deliveryFeatures: ProductDeliveryFeaturesItemT[];
    complementaryProducts?: ProductComplementaryProductT[];
    comparedProducts?: ProductComparedProductT[];
    relativeProducts: ProductRelativeProductT[];
    reviews?: ProductReviewItemT[];
    comments?: ProductCommentItemT[];
    price?: ProductPriceT;
    expertReview?: ProductExpertReviewT;
    contactInfo: ProductContactInfoT;
    presentationVideo?: ProductPresentationVideoT;
    packages?: ProductPackageT[];
    colors?: ProductColorsT;
    discount?: ProductDiscountNumberT;
    specialOffer?: ProductSpecialOfferT;
  };
};

export type TCartValues = {
  color: ProductColorT;
  qntt: number;
};

export type propertiesSectionRefT = HTMLInputElement;
export type commentsSectionRefT = propertiesSectionRefT;
