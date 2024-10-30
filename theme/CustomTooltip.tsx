import { createTheme } from "@mui/material";

const CustomTooltip = () => {
  return createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            minWidth: "330px",
            color: "#000",
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
          },
        },
      },
    },
  });
};

export default CustomTooltip;
