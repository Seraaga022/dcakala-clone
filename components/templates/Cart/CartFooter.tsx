import { Box, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const CartFooter = () => {
  return (
    <>
      {/* divider */}
      <Box my="15px">
        <Divider />
      </Box>
      {/* delivery features & enamad */}
      <Box ml="2vw">
        <Box display="flex" justifyContent="space-between">
          <Box
            bgcolor="#e5e5e5"
            width={{ xs: "41vw", lg: "630px", xl: "600px" }}
            height={{ xs: "16.5svh", xl: "130px" }}
            borderRadius="5px"
            position="relative"
          >
            <Image src="/images/cart/enamad.png" alt="enamad" fill />
          </Box>
          <Box
            bgcolor="#e5e5e5"
            width={{ xs: "41vw", lg: "630px", xl: "600px" }}
            height={{ xs: "16.5svh", xl: "130px" }}
            borderRadius="5px"
            position="relative"
          >
            <Image src="/images/cart/export.png" alt="express" fill />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartFooter;
