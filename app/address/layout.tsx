import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Metadata } from "next";
import React from "react";
import CustomThemeProvider from "../[... routing]/CustomThemeProvider";
import CartNavbar from "@/components/templates/Cart/CartNavbar";
import CartFooter from "@/components/templates/Cart/CartFooter";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "مشخص کردن آدرس خرید",
};

export default function AddressLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppRouterCacheProvider>
      <CustomThemeProvider>
        <CartNavbar />
        <Container
          maxWidth="lg"
          sx={{
            "&.MuiContainer-maxWidthLg": {
              maxWidth: "1380px",
            },
            mt: "15px",
          }}
        >
          {children}
          <CartFooter />
        </Container>
      </CustomThemeProvider>
    </AppRouterCacheProvider>
  );
}
