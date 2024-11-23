"use client";
import {
  commentsSectionRefT,
  ProductCommentItemT,
  ProductContactInfoT,
  ProductCreatorDetailsT,
  ProductDeliveryFeaturesItemT,
  ProductExpertReviewT,
  ProductFeatureT,
  ProductMediaT,
  ProductNameT,
  ProductPriceT,
  ProductPropertiesItemT,
  ProductRelativeProductT,
  propertiesSectionRefT,
} from "@/utils/types/ProductDetails";
import { Box } from "@mui/material";
import React from "react";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import { ProductColorT } from "@/utils/types/Product";
import { TUrlPath } from "@/utils/types/Category";

const PageBody: React.FC<{
  colors: ProductColorT[];
  creatorDetails: ProductCreatorDetailsT;
  deliveryFeatures: ProductDeliveryFeaturesItemT[];
  price?: ProductPriceT;
  contactInfo: ProductContactInfoT;
  features: ProductFeatureT[];
  name: ProductNameT;
  rating: number;
  currentPage: TUrlPath;
  media: ProductMediaT[];
  expertReview: ProductExpertReviewT | undefined;
  properties: ProductPropertiesItemT[];
  comments: ProductCommentItemT[];
  relativeProducts: ProductRelativeProductT[];
}> = ({ ...props }) => {
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
    expertReview,
    properties,
    comments,
    relativeProducts,
  } = props;
  const propertiesSectionRef = React.useRef<propertiesSectionRefT>(null);
  const commentsSectionRef = React.useRef<commentsSectionRefT>(null);

  return (
    <Box
      className="page_wrapper"
      sx={{
        scrollBehavior: "smooth",
      }}
    >
      {/* top */}
      <Box>
        <TopSection
          colors={colors}
          contactInfo={contactInfo}
          creatorDetails={creatorDetails}
          deliveryFeatures={deliveryFeatures}
          price={price}
          features={features}
          name={name}
          rating={rating}
          currentPage={currentPage.title}
          media={media}
          propertiesSectionRef={propertiesSectionRef}
          commentsSectionRef={commentsSectionRef}
        />
      </Box>
      {/* middle */}
      <Box>
        <MiddleSection
          media={media}
          properties={properties}
          expertReview={expertReview}
          propertiesSectionRef={propertiesSectionRef}
          commentsSectionRef={commentsSectionRef}
          comments={comments}
          rating={rating}
          relativeProducts={relativeProducts}
        />
      </Box>
    </Box>
  );
};

export default PageBody;
