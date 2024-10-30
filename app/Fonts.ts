import { Roboto, Vazirmatn } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
