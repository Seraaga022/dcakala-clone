import { Roboto, Vazirmatn } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export const neda = localFont({
  src: "../public/fonts/Neda Outline_MRT.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
});
