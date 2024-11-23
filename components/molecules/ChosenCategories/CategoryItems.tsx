import { vazirmatn } from "@/app/Fonts";
import { Avatar, Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const CategoryItems = ({
  imageSrc,
  text,
}: {
  imageSrc: string;
  text: string;
}) => {
  const [itemStyles] = React.useState({
    containerStyles: {
      width: {
        xs: "80px",
        xsL1: "85px",
        xsL2: "110px",
        xsL3: "140px",
        sm: "140px",
        md: "170px",
      },
      height: {
        xs: "120px",
        xsL3: "170px",
        sm: "190px",
        md: "190px",
        lg: "230px",
        xl: "220px",
      },
    },
    wrapperStyles: {
      width: "100%",
      height: "100%",
      position: "relative",
      "&:hover .category-text": {
        color: "#fff",
        backgroundImage:
          "linear-gradient(160deg,#d9d9d9 -1.59%,#7b7b7b 97.07%)",
      },
    },
    imageContainerStyles: {
      width: "100%",
      height: "70%",
      position: "absolute",
      top: 0,
      boxShadow: 3,
      zIndex: 45,
      p: "15px",
      boxSizing: "border-box",
      bgcolor: "#fff",
    },
    textContainerStyles: {
      width: "100%",
      height: "65%",
      position: "absolute",
      bottom: 0,
      zIndex: 44,
      border: "1px solid #e5e7eb",
      borderRadius: "15px",
      display: "flex",
      alignItems: "end",
      justifyContent: "center",
      fontFamily: vazirmatn.style.fontFamily,
    },
  });

  return (
    <Box {...itemStyles.containerStyles}>
      <Box sx={itemStyles.wrapperStyles}>
        <Link href="">
          <Avatar sx={itemStyles.imageContainerStyles} src={imageSrc}></Avatar>
          <Box sx={itemStyles.textContainerStyles} className="category-text">
            {text}
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default CategoryItems;
