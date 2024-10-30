import React from "react";
import Navbar from "@/components/template/Navbar";
import { Box } from "@mui/material";
import OffersNav from "@/components/template/OffersNav";
import MainSwiper from "@/components/template/Home/MainSwiper";
import MainCategories from "@/components/template/Home/MainCategories";
import DiscountBox from "@/components/template/Home/DiscountProducts";
import CategoriesGridFeed from "@/components/template/Home/CategoriesGridFeed";
import PageDividerWithContent from "@/components/atoms/Home/PageDividerWithContent";
import { vazirmatn } from "./Fonts";
import VideoDoorPhoneProducts from "@/components/template/Home/VideoDoorPhoneProducts";
import ChosenBrands from "@/components/template/Home/ChosenBrands";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box mt="69px">
        <Box>
          {/* offers navbar */}
          <Box>
            <OffersNav />
          </Box>
          {/* main swiper */}
          <Box mt="5px" sx={{ "@media (max-width: 800px)": { mt: "0" } }}>
            <MainSwiper />
          </Box>
          {/* main categories */}
          <Box mt="40px">
            <MainCategories />
          </Box>
          {/* discount box */}
          <Box mt="40px">
            <DiscountBox />
          </Box>
          {/* categories grid */}
          <Box mt="65px">
            <CategoriesGridFeed />
          </Box>
          {/* video door phone */}
          <Box mt="40px">
            <PageDividerWithContent
              content={
                <Box
                  fontSize="14px"
                  fontFamily={vazirmatn.style.fontFamily}
                  fontWeight={600}
                  color="#212121"
                >
                  آیفون های تصویری
                </Box>
              }
            />
          </Box>
          {/* video door phone products */}
          <Box mt="40px">
            <VideoDoorPhoneProducts />
          </Box>
          {/* chosen brands */}
          <Box mt="20px">
            <ChosenBrands />
          </Box>
        </Box>
      </Box>
    </>
  );
}
