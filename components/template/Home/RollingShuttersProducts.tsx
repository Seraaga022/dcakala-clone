import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
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
        <Box height={{ xs: "60px", sm: "100px", md: "180px", lg: "230px" }}>
          <Grid height="100%" container spacing={{ xs: 1, lg: 2 }}>
            {/* left */}
            <Grid size={6} position="relative">
              <Image
                src="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-left_3x.jpg"
                alt="roller-shutters-banner1"
                objectFit="cover"
                fill
                style={{ borderRadius: "7px" }}
              />
            </Grid>
            {/* right */}
            <Grid size={6} position="relative">
              <Image
                src="https://dashboard.dcakala.com/public/images/home/simple-banner/2024/09/roller-shutter-motor-desktop-right_3x.jpg"
                alt="roller-shutters-banner1"
                objectFit="cover"
                fill
                style={{ borderRadius: "7px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default RollingShuttersProducts;
