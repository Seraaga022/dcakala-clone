import { vazirmatn } from "@/app/Fonts";
import { Verified } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import React from "react";

const ChosenBrands = () => {
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
          <Box display="flex" height="100px" gap="8px">
            {/* brands */}
            <Box
              flex={1}
              border="1px solid #ff9e00"
              borderRadius="7px"
              height="100%"
            >
              brands swiper
            </Box>
            {/* section title */}
            <Box flex={0.135} borderRadius="7px" bgcolor="#ff9e00">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap="5px"
                height="100%"
              >
                {/* icon */}
                <Box display="flex" justifyContent="center">
                  <Verified sx={{ color: "#fff" }} />
                </Box>
                {/* text */}
                <Box
                  display="flex"
                  justifyContent="center"
                  fontWeight={700}
                  fontSize="12px"
                  color="#fff"
                  fontFamily={vazirmatn.style.fontFamily}
                >
                  منتخب برندها
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChosenBrands;
