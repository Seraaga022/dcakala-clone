import CustomRating from "@/components/atoms/CustomRating";
import getUniqueKey from "@/utils/lib/UniqueKey";
import {
  commentsSectionRefT,
  ProductFeatureT,
  ProductNameT,
  propertiesSectionRefT,
} from "@/utils/types/ProductDetails";
import { ArrowBackIosNew } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const ProductBriefProperties = ({
  features,
  name,
  rating,
  propertiesSectionRef,
  commentsSectionRef,
}: {
  features: ProductFeatureT[];
  name: ProductNameT;
  rating: number;
  propertiesSectionRef: React.RefObject<propertiesSectionRefT>;
  commentsSectionRef: React.RefObject<commentsSectionRefT>;
}) => {
  const mobileMatches = useMediaQuery("(max-width: 640px)");

  const handleShowFullPropertiesClick = () => {
    if (!propertiesSectionRef) return;
    propertiesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleShowCommentsClick = () => {
    if (!commentsSectionRef) return;
    commentsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box height={{ xs: "auto", mobile: "110svh", md: "550px" }}>
      <Box
        display="flex"
        height="100%"
        justifyContent="start"
        flexDirection="column"
      >
        {/* properties */}
        <Box
          height="200px"
          dir="rtl"
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "8px",
              "&-thumb": {
                borderRadius: "8px",
                bgcolor: "#808080",
                "&:hover": {
                  bgcolor: "#555555",
                },
              },
            },
          }}
        >
          <Stack
            spacing={1.7}
            pt={{ xs: 0, mobile: "20px" }}
            pr={{ xs: 0, mobile: "40px" }}
            boxSizing="border-box"
          >
            {/* current page name */}
            <Box
              display="flex"
              alignItems="center"
              gap=".44em"
              dir="ltr"
              justifyContent="end"
            >
              {/* text */}
              <Box display="flex" alignItems="center" dir="rtl">
                <Typography fontSize=".8em" fontWeight={600}>
                  {name.per}
                </Typography>
              </Box>
              {/* marker */}
              <Box
                width=".4em"
                height=".4em"
                border="1px solid #ff7900"
                borderRadius="9999px"
              />
            </Box>
            {/* features */}
            {features.map((f) => (
              <Box
                display="flex"
                alignItems="center"
                gap=".44em"
                dir="ltr"
                justifyContent="end"
                key={getUniqueKey()}
              >
                <Box display="flex" alignItems="center" dir="rtl">
                  <Typography fontSize=".77em" fontWeight={300}>
                    {f}
                  </Typography>
                </Box>
                {/* marker */}
                <Box
                  width=".4em"
                  height=".4em"
                  border="1px solid #ff7900"
                  borderRadius="9999px"
                />
              </Box>
            ))}
          </Stack>
        </Box>
        {/* more properties */}
        <Box mt="50px">
          <Box>
            <Divider
              sx={{
                "& .MuiDivider-wrapper": {
                  p: 0,
                },
              }}
            >
              <Box
                border="1px solid #e0e0e2"
                onClick={handleShowFullPropertiesClick}
                display="flex"
                alignItems="center"
                p="10px"
                gap="10px"
                sx={{
                  cursor: "pointer",
                }}
              >
                <Box flex={0.4} display="flex" justifyContent="center">
                  <ArrowBackIosNew sx={{ fontSize: ".88em" }} />
                </Box>
                <Typography fontSize=".75em">مشاهده همه ویژگی ها</Typography>
              </Box>
            </Divider>
          </Box>
          {/* <Box display="flex">
            <Box height="100%" flex={1}>
              <Box display="flex" alignItems="center">
                <Box width="100%" height="1px" bgcolor="#e0e0e2" />
              </Box>
            </Box>
            <Box height="100%" flex={1} border="1px solid #e0e0e2">
              <Box display="flex">
                <Box flex={0.4} display="flex" justifyContent="center">
                  icon
                </Box>
                <Box
                  flex={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography fontSize=".7em">مشاهده همه ویژگی ها</Typography>
                </Box>
              </Box>
            </Box>
            <Box height="100%" flex={1}>
              <Box display="flex" alignItems="center">
                <Box width="100%" height="1px" bgcolor="#e0e0e2" />
              </Box>
            </Box>
          </Box> */}
        </Box>
        {/* comments and rating and go comment section */}
        <Box mt="auto">
          <Grid container sx={{ borderTop: "1px solid black" }} pt="10px">
            {/* rating */}
            <Grid size={{ xs: 12, mobile: 4.8, smL2: 4, md: 3.5, lgL1: 4 }}>
              <Box
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent={{ xs: "end", mobile: "unset" }}
                gap="10px"
              >
                <Typography mt="4px" fontSize=".7em">
                  5/{rating}
                </Typography>
                <CustomRating rating={rating} />
              </Box>
            </Grid>
            {/* rating existing status */}
            <Grid
              size={{ xs: 12, mobile: 5, md: 4.5 }}
              maxWidth={{ xs: "unset", mobile: "36%", md: "unset" }}
            >
              <Box
                display="flex"
                justifyContent={{ xs: "end", mobile: "center" }}
                alignItems="center"
                height="100%"
              >
                <Typography
                  whiteSpace={{ xs: "nowrap", mobile: "wrap", md: "nowrap" }}
                  fontSize={{ xs: ".6em", md: ".6em", lg: ".7em" }}
                  fontWeight={300}
                  dir="rtl"
                >
                  نظر برای این کالا ثبت {rating > 0 ? "شده" : "نشده"} است
                </Typography>
              </Box>
            </Grid>
            {/* go to comments section */}
            <Grid
              size={{ xs: 12, mobile: 1, md: 1, lg: 3 }}
              offset={{ xs: 0, mobile: 0.2, lg: 0.8 }}
              width={{ xs: "100%", mobile: "auto" }}
              maxWidth={{ xs: "unset", mobile: "16%", smL3: "unset" }}
            >
              <Button
                color="warning"
                onClick={handleShowCommentsClick}
                fullWidth={mobileMatches ? true : false}
              >
                <Typography
                  fontSize={{ xs: ".7em", mobile: ".8em", lg: "1em" }}
                  fontWeight={500}
                >
                  مشاهده نظرات
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductBriefProperties;
