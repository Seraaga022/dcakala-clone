import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xsL1: true;
    xsL2: true;
    xsL3: true;
    mobile: true;
    smL1_5: true;
    smL2: true;
    smL3: true;
    smL4: true;
    lgL1: true;
    lgL2: true;
  }
}

export default function CustomBreakPoint() {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        // customs (*Level) // format
        xsL1: 250,
        xsL2: 350,
        xsL3: 400,
        mobile: 640,
        smL1_5: 700,
        smL2: 750,
        smL3: 860,
        smL4: 1000,
        lgL1: 1024,
        lgL2: 1500,
      },
    },
  });
}
