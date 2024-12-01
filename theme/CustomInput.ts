import { vazirmatn } from "@/app/Fonts";
import { createTheme } from "@mui/material";
import React from "react";

const CustomInput = () => {
  const customTextFieldTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            sx: {
              "& .MuiInputBase-input": {
                fontFamily: vazirmatn.style.fontFamily,
              },
              "& input::placeholder": {
                fontFamily: vazirmatn.style.fontFamily,
              },
            },
          },
        },
        defaultProps: {
          size: "small",
          fullWidth: true,
        },
        variants: [
          {
            props: { type: "number" },
            style: {
              slotProps: {
                inputLabel: {
                  shrink: true,
                },
              },
            },
          },
        ],
      },
    },
  });
  return customTextFieldTheme;
};

export default CustomInput;
