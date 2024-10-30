"use client";
import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";
import React from "react";

const NavMobileCategory = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<number | null>(
    null
  );

  return (
    <>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Menu sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        anchor="right"
        sx={{
          "& .MuiPaper-root": {
            minWidth: "303px",
            width: "auto",
            bgcolor: "#f8f8f8",
            overflow: "visible",
          },
        }}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box dir="rtl">asdfas</Box>
      </Drawer>
    </>
  );
};

export default NavMobileCategory;
