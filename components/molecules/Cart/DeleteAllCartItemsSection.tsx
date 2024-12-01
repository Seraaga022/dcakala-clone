"use client";
import { MoreVert } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

const DeleteAllCartItemsSection = () => {
  const deleteAllCartItems = () => {
    console.log("all cart items deleted");
  };

  return (
    <Box justifyContent="center" alignItems="center">
      <IconButton>
        <MoreVert onClick={() => deleteAllCartItems()} />
      </IconButton>
    </Box>
  );
};

export default DeleteAllCartItemsSection;
