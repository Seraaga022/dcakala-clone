import Footer from "@/components/template/Footer";
import Navbar from "@/components/template/Navbar";
import OffersNav from "@/components/template/OffersNav";
import { Box, createTheme } from "@mui/material";

export const outerTheme = createTheme({});

export default async function videoDoorPhonePLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Box mt="69px" mb="20px">
        <OffersNav />
        {children}
      </Box>
      <Footer />
    </>
  );
}
