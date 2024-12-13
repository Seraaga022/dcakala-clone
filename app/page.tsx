"use server";
import React from "react";
import Navbar from "@/components/templates/Navbar";
import { Box, Skeleton } from "@mui/material";
import OffersNav from "@/components/templates/OffersNav";
import MainSwiper from "@/components/templates/Home/MainSwiper/MainSwiper";
import MainCategories from "@/components/templates/Home/MainCategories";
import DiscountBox from "@/components/templates/Home/DiscountProducts";
import CategoriesGridFeed from "@/components/templates/Home/CategoriesGridFeed";
import PageDivider from "@/components/atoms/PageDivider";
import VideoDoorPhoneProducts from "@/components/templates/Home/VideoDoorPhoneProducts";
import ChosenBrands from "@/components/templates/Home/ChosenBrands";
import CctvCategories from "@/components/templates/Home/CctvCategories";
import ChosenCategories from "@/components/templates/Home/ChosenCategories";
import AutomaticGateProducts from "@/components/templates/Home/AutomaticGateProducts";
import chosenVideoDoorBrands from "@/assets/data/chosenVideoDoorPhoneBrands.json";
import chosenAutomaticGateBrands from "@/assets/data/chosenAutomaticGateBrands.json";
import MostPurchased from "@/components/templates/Home/MostPurchased";
import RollingShuttersProducts from "@/components/templates/Home/RollingShuttersProducts";
import NewProducts from "@/components/templates/Home/NewProducts";
import WebsiteIntroduction from "@/components/templates/Home/WebsiteIntroduction";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/templates/Footer"), {
  ssr: false,
  loading: () => (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="670px"
      />
    </Box>
  ),
});

export default async function Home() {
  return (
    <>
      <Navbar />
      <Box mt="69px" mb="20px">
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
          {/* video door phone divider */}
          <Box mt="40px">
            <PageDivider>
              <PageDivider.DividerContent content="آیفون های تصویری" />
            </PageDivider>
          </Box>
          {/* video door phone products */}
          <Box mt="40px">
            <VideoDoorPhoneProducts />
          </Box>
          {/* chosen video door phone brands */}
          <Box mt="20px">
            <ChosenBrands brands={chosenVideoDoorBrands} />
          </Box>
          {/* cctv divider */}
          <Box mt="60px">
            <PageDivider>
              <PageDivider.DividerContent content="دوربین مدار بسته" />
            </PageDivider>
          </Box>
          {/* cctv categories */}
          <Box mt="20px">
            <CctvCategories />
          </Box>
          {/* chosen categories divider */}
          <Box mt="30px">
            <PageDivider>
              <PageDivider.DividerContent content="دسته های منتخب" />
            </PageDivider>
          </Box>
          {/* chosen categories */}
          <Box mt="20px">
            <ChosenCategories />
          </Box>
          {/* automatic gate divider */}
          <Box mt="60px">
            <PageDivider>
              <PageDivider.DividerContent content="جک درب پارکینگ" />
            </PageDivider>
          </Box>
          {/* automatic gate products */}
          <Box mt="30px">
            <AutomaticGateProducts />
          </Box>
          {/* chosen automatic gate brands */}
          <Box mt="20px">
            <ChosenBrands brands={chosenAutomaticGateBrands} />
          </Box>
          {/* must purchased */}
          <Box mt="60px">
            <MostPurchased />
          </Box>
          {/* rolling shutters products */}
          <Box mt="60px">
            <RollingShuttersProducts />
          </Box>
          {/* new products */}
          <Box mt="80px">
            <NewProducts />
          </Box>
          {/* website introduction */}
          <Box mt="100px">
            <WebsiteIntroduction />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
