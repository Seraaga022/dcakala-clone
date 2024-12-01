"use client";
import CustomBreakPoint from "@/theme/CustomBreakPoint";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import React from "react";
import { vazirmatn } from "../Fonts";

declare module "@mui/material/styles" {
  interface TypographyVariantOptions {
    price: true;
  }
}

const DefaultStyles = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "subtitle1" },
          style: {
            fontSize: "15px",
          },
        },
        {
          props: { variant: "subtitle2" },
          style: { fontSize: "14px" },
        },
        // {
        //   props: { variant: "price" },
        //   style: {
        //     fontSize: "12px",
        //   },
        // },
      ],
      defaultProps: {
        fontWeight: 300,
        fontFamily: vazirmatn.style.fontFamily,
      },
    },
  },
});

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const customBreakPointTheme = CustomBreakPoint();
  const mergedTheme = createTheme(
    deepmerge(DefaultStyles, customBreakPointTheme)
  );
  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
