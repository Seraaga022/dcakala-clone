import { Box, Container } from "@mui/material";
import React from "react";

const RollingShuttersProducts = () => {
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
        <Box
          display="flex"
          gap={{ xs: "8px", xl: "15px" }}
          justifyContent="end"
        >
          {/* left */}
          <Box mr="auto">
            <Box component="picture">
              <source
                srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_original.webp , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_2x.webp 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_3x.webp 3x"
                type="image/webp"
              />
              <source
                srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_3x.jpg 3x"
                type="image/jpg"
              />
              <Box
                component="img"
                srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_3x.jpg 3x"
                src="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_original.jpg"
                alt="موتور کرکره برقی طرح دسکتاپ سمت چپ"
                title="موتور کرکره برقی طرح دسکتاپ سمت چپ"
                width={{ xs: "44vw", sm: "45vw", xl: 655 }}
                height={{ xs: "auto", xl: 235 }}
                style={{ borderRadius: "0.5rem" }}
              />
            </Box>
          </Box>
          {/* right */}
          <Box>
            <Box component="picture">
              <source
                srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_original.webp , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_2x.webp 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_3x.webp 3x"
                type="image/webp"
              />
              <source
                srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_3x.jpg 3x"
                type="image/jpg"
              />
              <Box
                component="img"
                srcSet="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_original.jpg , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_2x.jpg 2x , https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_3x.jpg 3x"
                src="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_original.jpg"
                alt="موتور کرکره برقی طرح دسکتاپ سمت راست"
                title="موتور کرکره برقی طرح دسکتاپ سمت راست"
                width={{ xs: "44vw", sm: "45vw", xl: 655 }}
                height={{ xs: "auto", xl: 235 }}
                style={{ borderRadius: "0.5rem" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RollingShuttersProducts;
