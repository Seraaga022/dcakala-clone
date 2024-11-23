"use client";
import Comments from "@/components/organisms/ProductDetails/Comments";
import ProductFullProperties from "@/components/organisms/ProductDetails/ProductFullProperties";
import RelativeProducts from "@/components/organisms/ProductDetails/RelativeProducts";
import {
  commentsSectionRefT,
  ProductCommentItemT,
  ProductExpertReviewT,
  ProductMediaT,
  ProductPropertiesItemT,
  ProductRelativeProductT,
  propertiesSectionRefT,
} from "@/utils/types/ProductDetails";
import { Box, Stack } from "@mui/material";
import React from "react";

const MiddleSection = ({
  ...props
}: {
  properties: ProductPropertiesItemT[];
  media: ProductMediaT[];
  expertReview: ProductExpertReviewT | undefined;
  propertiesSectionRef: React.RefObject<propertiesSectionRefT>;
  commentsSectionRef: React.RefObject<commentsSectionRefT>;
  comments: ProductCommentItemT[];
  rating: number;
  relativeProducts: ProductRelativeProductT[];
}) => {
  const {
    properties,
    media,
    expertReview,
    propertiesSectionRef,
    commentsSectionRef,
    comments,
    rating,
    relativeProducts,
  } = props;

  const bannerMedia = () => {
    return media[media.findIndex((m) => m.banner)].src;
  };

  return (
    <Stack>
      {/* properties */}
      <Box mt="40px" ref={propertiesSectionRef}>
        <ProductFullProperties
          productBanner={bannerMedia()}
          properties={properties}
        />
      </Box>
      {/* expert review */}
      <Box>{expertReview && <Box>{expertReview.content}</Box>}</Box>
      {/* comments */}
      <Box mt="30px" ref={commentsSectionRef}>
        <Comments comments={comments} rating={rating} />
      </Box>
      {/* raltive products */}
      <Box mt="50px">
        <RelativeProducts relativeProducts={relativeProducts} />
      </Box>
    </Stack>
  );
};

export default MiddleSection;
