import CustomRating from "@/components/atoms/CustomRating";
import { ProductCommentItemT } from "@/utils/types/ProductDetails";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Comments = ({
  comments,
  rating,
}: {
  comments: ProductCommentItemT[];
  rating: number;
}) => {
  const handleCommentOutClick = () => {
    console.log("comment out clicked");
  };

  return (
    <>
      {/* section title */}
      <Box>
        <Stack>
          {/* title and comment out button */}
          <Box display="flex" dir="rtl" justifyContent="space-between">
            {/* title */}
            <Box
              sx={{
                borderBottom: "2.3px solid #ff7a01",
                py: "10px",
                px: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography fontSize="14px" color="#ff7a01" fontWeight={900}>
                نقد و بررسی
              </Typography>
            </Box>
            {/* [MOBILE] comment out button */}
            <Box display={{ xs: "block", sm: "none" }} mb="5px">
              <Button
                onClick={() => handleCommentOutClick()}
                sx={{
                  bgcolor: "#ff7a01",
                  width: { xs: "auto", mobile: "100%" },
                  boxShadow: 1,
                  "&:hover": {
                    boxShadow: 2,
                  },
                  "&:active": {
                    boxShadow: "0 6px 9px silver",
                  },
                }}
              >
                <Typography fontSize="14px" color="#fff" fontWeight={500}>
                  ثبت نظر
                </Typography>
              </Button>
            </Box>
          </Box>
          {/* divider */}
          <Divider />
        </Stack>
      </Box>
      {/* body */}
      <Box mt="10px">
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, mobile: 8.7 }}>
            <Box
              borderRadius="10px"
              border="1px solid rgba(0, 0, 0, 0.12)"
              p="20px"
            >
              {comments.length > 0 ? (
                <Box>not empty</Box>
              ) : (
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography color="rgb(239 68 68/1)" dir="rtl" fontSize="1vw">
                    هیچ نظری ثبت نشده است!!!
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, mobile: 2.5, md: 2.2 }}
            offset={{ xs: 0, mobile: 0.8, md: 1.1 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              gap="30px"
              alignItems="end"
            >
              {/* total rating */}
              <Stack spacing={2}>
                <Typography fontSize="14px">مجموع امتیاز از نظر</Typography>
                <Box display="flex" justifyContent="end">
                  <CustomRating rating={rating} />
                </Box>
              </Stack>
              {/* comment out */}
              <Grid container width="100%" spacing={1}>
                {/* title */}
                <Grid size={{ xs: 6, mobile: 12 }} order={{ xs: 2, mobile: 1 }}>
                  <Box display="flex" justifyContent="end">
                    <Typography
                      fontSize="15px"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                    >
                      درباره این کالا نظری دارید؟
                    </Typography>
                  </Box>
                </Grid>
                {/* button */}
                <Grid size={{ xs: 6, mobile: 12 }} order={{ xs: 1, mobile: 2 }}>
                  <Box
                    display={{ xs: "none", sm: "flex" }}
                    justifyContent={{ xs: "start", mobile: "end" }}
                  >
                    <Button
                      onClick={() => handleCommentOutClick()}
                      sx={{
                        bgcolor: "#ff7a01",
                        width: { xs: "auto", mobile: "100%" },
                        boxShadow: 1,
                        "&:hover": {
                          boxShadow: 2,
                        },
                        "&:active": {
                          boxShadow: "0 6px 9px silver",
                        },
                      }}
                    >
                      <Typography fontSize="14px" color="#fff">
                        ثبت نظر
                      </Typography>
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Comments;
