"use server";
import { Box, Container } from "@mui/material";
import React from "react";
import { vazirmatn } from "../Fonts";
import BreadCrumbs from "@/components/molecules/BreadCrumbs";
import PageDivider from "@/components/atoms/Home/PageDividerWithContent";
import { productDetailsData } from "@/assets/data/productDetailsPageContent";
import { TProductDetailPageContent } from "@/utils/types/ProductDetails";
import PageBody from "@/components/template/ProductDetails/PageBody";
import { ProductColorT } from "@/utils/types/Product";

interface Props {
  params: string[];
}

const RoutingHandlerPage = ({ params }: Props) => {
  const {
    urlPath,
    productDetails: {
      colors,
      creatorDetails,
      deliveryFeatures,
      price,
      contactInfo,
      features,
      name,
      comments,
      media,
      properties,
      expertReview,
      relativeProducts,
      discount,
      specialOffer,
    },
  }: TProductDetailPageContent = productDetailsData;
  const currentPage = urlPath[urlPath.length - 1];

  console.log(params);

  const totalRating = comments
    ? Math.round(
        comments.reduce((accum, current) => current.score + accum, 0) /
          comments.length
      )
    : 0;

  return (
    <Box sx={{ scrollBehavior: "smooth" }}>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1380px",
          },
        }}
      >
        <Box className={vazirmatn.className}>
          {/* breadCrumbs */}
          <BreadCrumbs urlPath={urlPath} />
          {/* divider */}
          <Box mt="20px" mb="25px">
            <PageDivider
              sx={{
                "& .divider-body": {
                  "&::before, &::after": {
                    borderColor: "#e5e7eb",
                    opacity: 1,
                    borderWidth: "2px",
                  },
                },
              }}
            />
          </Box>
          {/* content */}
          <Box>
            <PageBody
              colors={colors || {} as ProductColorT[]}
              contactInfo={contactInfo}
              creatorDetails={creatorDetails}
              deliveryFeatures={deliveryFeatures}
              price={price}
              features={features}
              name={name}
              rating={totalRating}
              currentPage={currentPage}
              media={media}
              expertReview={expertReview}
              properties={properties}
              comments={comments || []}
              relativeProducts={relativeProducts}
              discount={discount}
              specialOffer={specialOffer}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RoutingHandlerPage;
