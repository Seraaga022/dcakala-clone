import { Box, Container } from "@mui/material";
import React from "react";

const CategoriesGridFeed = () => {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1380px",
          },
        }}
      >
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: "10px", md: "17px" }}
          >
            {/* top images */}
            <Box display="flex" gap={{ xs: "10px", md: "17px" }}>
              {/* left */}
              <Box flex={1} position="relative">
                <Box component={"picture"}>
                  <source
                    srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_original.webp , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_2x.webp 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_3x.webp 3x"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_3x.jpg 3x"
                    type="image/jpg"
                  />
                  <img
                    style={{ borderRadius: ".5rem" }}
                    width="100%"
                    srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_3x.jpg 3x"
                    src="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/konegates-desktop-new-size_original.jpg"
                    alt="جک کانه گیتس"
                    title="جک کانه گیتس"
                  />
                </Box>
              </Box>
              {/* right */}
              <Box flex={1} position="relative">
                <Box component="picture">
                  <source
                    srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_original.webp , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_2x.webp 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_3x.webp 3x"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_3x.jpg 3x"
                    type="image/jpg"
                  />
                  <img
                    width="100%"
                    srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_3x.jpg 3x"
                    src="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/electropeyk-desktope-new-size_original.jpg"
                    alt="پکیج آیفون تصویری الکتروپیک"
                    title="پکیج آیفون تصویری الکتروپیک"
                    style={{ borderRadius: ".5rem" }}
                  />
                </Box>
              </Box>
            </Box>
            {/* full image */}
            <Box>
              <Box component="picture">
                <source
                  srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_original.webp , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_2x.webp 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_3x.webp 3x"
                  type="image/webp"
                />
                <source
                  srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_3x.jpg 3x"
                  type="image/jpg"
                />
                <img
                  width="100%"
                  srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_3x.jpg 3x"
                  src="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/pool-cover-electric-shutter-desktop-design_original.jpg"
                  alt="بنر کرکره روی استخر طرح دسکتاپ"
                  title="بنر کرکره روی استخر طرح دسکتاپ"
                  loading="lazy"
                  style={{ borderRadius: ".5rem" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CategoriesGridFeed;
