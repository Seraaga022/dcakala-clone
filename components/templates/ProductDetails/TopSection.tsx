"use client";
import ProductImages from "@/components/organisms/ProductDetails/ProductImages";
import ProductBriefProperties from "@/components/organisms/ProductDetails/ProductBriefProperties";
import PurchaseInfo from "@/components/organisms/ProductDetails/PurchaseInfo";
import ShoppingFeatures from "@/components/organisms/ProductDetails/ShoppingFeatures";
import { ProductColorT } from "@/utils/types/Product";
import {
  commentsSectionRefT,
  ProductContactInfoT,
  ProductCreatorDetailsT,
  ProductDeliveryFeaturesItemT,
  ProductDiscountNumberT,
  ProductFeatureT,
  ProductMediaT,
  ProductNameT,
  ProductPriceT,
  ProductSpecialOfferT,
  propertiesSectionRefT,
} from "@/utils/types/ProductDetails";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const TopSection = ({
  ...props
}: {
  colors: ProductColorT[];
  creatorDetails: ProductCreatorDetailsT;
  deliveryFeatures: ProductDeliveryFeaturesItemT[];
  price?: ProductPriceT;
  contactInfo: ProductContactInfoT;
  features: ProductFeatureT[];
  name: ProductNameT;
  rating: number;
  currentPage: string;
  media: ProductMediaT[];
  propertiesSectionRef: React.RefObject<propertiesSectionRefT>;
  commentsSectionRef: React.RefObject<commentsSectionRefT>;
  discount: ProductDiscountNumberT;
  specialOffer: ProductSpecialOfferT;
}) => {
  const {
    colors,
    creatorDetails,
    deliveryFeatures,
    price,
    contactInfo,
    features,
    name,
    rating,
    currentPage,
    media,
    propertiesSectionRef,
    commentsSectionRef,
    discount,
    specialOffer,
  } = props;

  return (
    <>
      {/* product details */}
      <Grid container spacing={1}>
        {/* purchase info */}
        <Grid
          size={{ xs: 12, mobile: 3.5, md: 3.05 }}
          order={{ xs: 2, mobile: 1 }}
        >
          <PurchaseInfo
            colors={colors}
            creatorDetails={creatorDetails}
            deliveryFeatures={deliveryFeatures}
            price={price}
            contactInfo={contactInfo}
          />
        </Grid>
        {/* product name & brief props */}
        <Grid
          size={{ xs: 12, mobile: 8.5, md: 8.9 }}
          order={{ xs: 1, mobile: 2 }}
        >
          {/* name */}
          <Box dir="rtl" my="15px">
            <Typography
              fontSize="1.13em"
              fontWeight={700}
              color="rgb(101 101 101/1)"
            >
              {currentPage}
            </Typography>
          </Box>
          {/* brief properties and images */}
          <Grid container columns={8.5} spacing={1.5}>
            {/* brief properties */}
            <Grid
              size={{ xs: 12, mobile: 4, md: 4.5 }}
              order={{ xs: 2, mobile: 1 }}
            >
              <ProductBriefProperties
                features={features}
                name={name}
                rating={rating}
                propertiesSectionRef={propertiesSectionRef}
                commentsSectionRef={commentsSectionRef}
              />
            </Grid>
            {/* images */}
            <Grid
              size={{ xs: 12, mobile: 4.5, md: 4 }}
              order={{ xs: 1, mobile: 2 }}
            >
              <ProductImages
                media={media}
                currentPage={currentPage}
                name={name}
                discount={discount}
                specialOffer={specialOffer}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* shopping features */}
      <Box mt="15px" sx={{ borderBlock: "1px solid #f1f1f1" }} py="15px">
        <ShoppingFeatures />
      </Box>
    </>
  );
};

export default TopSection;
