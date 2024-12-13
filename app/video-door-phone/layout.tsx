import Footer from "@/components/templates/Footer";
import Navbar from "@/components/templates/Navbar";
import OffersNav from "@/components/templates/OffersNav";
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
