"use client";
import { isAuthenticated } from "@/app/address/page";
import { Add, MoreVert, Remove } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";

const DeleteAllCartItemsSection = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const handleMoreCartDetailsClick = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const moveAllCartProductsToAltCart = () => {
    console.log("moved all cart products to alt cart");
  };

  const deleteAllCartProducts = () => {
    console.log("all cart products deleted");
  };

  const isAuth = !!isAuthenticated;

  return (
    <Box justifyContent="center" alignItems="center">
      <IconButton onClick={() => handleMoreCartDetailsClick()}>
        <MoreVert />
      </IconButton>
      <Drawer
        anchor="bottom"
        dir="rtl"
        sx={{
          "& .MuiPaper-root": {
            minWidth: "303px",
            width: "auto",
            bgcolor: "#f8f8f8",
            overflow: "visible",
            borderStartStartRadius: "7px",
            borderStartEndRadius: "7px",
          },
        }}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box>
          <List>
            {/* move cart items */}
            <ListItem disablePadding hidden={!isAuth ? true : false}>
              <ListItemButton onClick={() => moveAllCartProductsToAltCart()}>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <Stack direction="row" alignItems="end">
                  <ListItemText primary="انتقال همه کالاها به لیست بعدی" />
                </Stack>
              </ListItemButton>
            </ListItem>
            {/* delete cart items */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => deleteAllCartProducts()}>
                <ListItemIcon>
                  <Remove sx={{ color: "red" }} />
                </ListItemIcon>
                <Stack direction="row" alignItems="end">
                  <ListItemText
                    primary="حذف"
                    sx={{
                      "& .MuiTypography-root": {
                        color: "red",
                      },
                    }}
                  />
                </Stack>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DeleteAllCartItemsSection;
