import Footer from "@/components/template/Footer";
import Navbar from "@/components/template/Navbar";
import OffersNav from "@/components/template/OffersNav";
import { Box } from "@mui/material";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CustomThemeProvider from "./CustomThemeProvider";

export default async function routerHandlerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Box mt="69px" mb="20px">
        <OffersNav />
        <AppRouterCacheProvider>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </AppRouterCacheProvider>
      </Box>
      <Footer />
    </>
  );
}
