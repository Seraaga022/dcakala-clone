import { vazirmatn } from "@/app/Fonts";
import { TNavCartItems } from "@/utils/types/Cart";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NavCartProductCard = ({ product }: TNavCartItems) => {
  return (
    <Box>
      {/* product */}
      <Box display="flex" gap="10px" boxSizing="border-box" pl="5px" pr="30px">
        {/* left */}
        <Box flex={1}>
          <Box display="flex" flexDirection="column" gap="10px">
            {/* title */}
            <Box display="flex" justifyContent="end">
              <Box>
                <Typography
                  sx={{
                    color: "#212121",
                    fontSize: "14px",
                    fontWeight: 600,
                    direction: "rtl",
                  }}
                  fontFamily={vazirmatn.style.fontFamily}
                >
                  {product.title}
                </Typography>
              </Box>
            </Box>
            {/* qntt management & total price */}
            <Box>
              <Box display="flex" gap="4px" justifyContent="end">
                {/* price */}
                <Box flex={0.8} width="100px" maxWidth="100px">
                  <Box
                    display="flex"
                    maxWidth="100%"
                    alignItems="center"
                    textAlign="end"
                  >
                    <Typography
                      fontFamily={vazirmatn.style.fontFamily}
                      sx={{
                        fontWeight: 700,
                        fontSize: "12.8px",
                        wordBreak: "break-word",
                        direction: "rtl",
                      }}
                    >
                      {product.price.toLocaleString()}&nbsp; تومان
                    </Typography>
                  </Box>
                </Box>
                {/* qntt management */}
                <Box flex={0.9}>
                  <Stack spacing={0.4} direction="row" alignItems="center">
                    {/* increment */}
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      // onClick={() => incrementCartItem()}
                    >
                      <IconButton>
                        <Add sx={{ color: "#707070", fontSize: "19px" }} />
                      </IconButton>
                    </Box>
                    {/* qntt */}
                    <Box
                      minWidth="25px"
                      maxHeight="25px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      border=".5px solid #e5e7eb"
                    >
                      <Typography className={vazirmatn.className}>
                        {product.qntt}
                      </Typography>
                    </Box>
                    {/* decrement */}
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      // onClick={() => decrementCartItem()}
                    >
                      <IconButton disabled={product.qntt === 1}>
                        <Remove sx={{ color: "#707070", fontSize: "19px" }} />
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* right > img */}
        <Box flex={0.3}>
          <Image src={product.image} width={100} height={100} alt=""></Image>
        </Box>
      </Box>
      {/* toolbox */}
      <Box boxSizing="border-box" px="10px" mt="10px">
        <Box
          bgcolor="#f6f6f6"
          display="flex"
          justifyContent="end"
          minHeight="45px"
          borderRadius="5px"
          px="5px"
        >
          {/* left */}
          <Box mr="auto" display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <IconButton
                onClick={() =>
                  console.log(`cart item remove with id: ${product.id}`)
                }
              >
                <Delete color="error" sx={{ fontSize: "20px" }} />
              </IconButton>
            </Box>
          </Box>
          {/* right */}
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Box
                border="1px solid silver"
                borderRadius="9999px"
                bgcolor={`#${product.color?.value}`}
                minWidth="18px"
                minHeight="18px"
              />
              &nbsp;:
            </Box>
            &nbsp;
            <Box>
              <Typography fontFamily={vazirmatn.style.fontFamily}>
                رنگ
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavCartProductCard;
