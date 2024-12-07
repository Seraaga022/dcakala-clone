import Footer from "@/components/template/Footer";
import Navbar from "@/components/template/Navbar";
import OffersNav from "@/components/template/OffersNav";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default async function videoDoorPhonePLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <Navbar />
      <Box mt="69px" mb="20px">
        <OffersNav />
        {children}
      </Box>
      <Footer />
    </AppRouterCacheProvider>
  );
}
