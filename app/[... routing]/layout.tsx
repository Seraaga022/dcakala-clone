import Footer from "@/components/templates/Footer";
import Navbar from "@/components/templates/Navbar";
import OffersNav from "@/components/templates/OffersNav";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CustomThemeProvider from "./CustomThemeProvider";
import React from "react";

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
