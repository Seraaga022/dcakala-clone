import { Rating, RatingProps } from "@mui/material";
import React from "react";

const CustomRating = ({ ...props }: { rating: number } & RatingProps) => {
  const { rating } = props;
  return (
    <Rating
      readOnly
      name="simple-controlled"
      sx={{
        "& .MuiRating-icon": {
          fontSize: { xs: "15px", md: "19px" },
        },
      }}
      value={rating}
      {...props}
    />
  );
};

export default CustomRating;
