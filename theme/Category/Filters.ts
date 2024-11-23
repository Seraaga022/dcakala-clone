import { vazirmatn } from "@/app/Fonts";
import { createTheme } from "@mui/material";

const FiltersTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: vazirmatn.style.fontFamily,
        fontSize: "13px",
      },
    },
  },
});

export default FiltersTheme;
