import getUniqueKey from "@/utils/lib/UniqueKey";
import { ProductPropertiesItemT } from "@/utils/types/ProductDetails";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";

const ProductFullProperties = ({
  productBanner,
  properties,
}: {
  productBanner: string;
  properties: ProductPropertiesItemT[];
}) => {
  const CategoryNameProp = ({ children }: React.PropsWithChildren) => {
    return (
      <Typography fontSize={{ xs: "2.5vw", sm: "2vw", mobile: "16px" }}>
        {children}
      </Typography>
    );
  };

  const SubCategoryProp = ({ children }: React.PropsWithChildren) => {
    return (
      <Typography fontSize={{ xs: "2.2vw", sm: "1.8vw", mobile: "14px" }}>
        {children}
      </Typography>
    );
  };

  const [isPropsExpanded, setPropsExpanded] = React.useState(false);

  const PropertiesStack = ({ prop }: { prop: ProductPropertiesItemT }) => {
    return (
      <>
        {/* category items */}
        <Grid
          size={{ xs: 12, mobile: 4.5 }}
          //   order={{ xs: 1, mobile: 2 }}
        >
          <Stack spacing={1}>
            {prop.items.map((item) => (
              <Box
                key={getUniqueKey()}
                dir="rtl"
                display="flex"
                gap="10px 15px"
              >
                <Box flex={1}>
                  <Box
                    py="7px"
                    px="8px"
                    bgcolor="#d6d3d1"
                    sx={{
                      borderStartStartRadius: "10px",
                      borderEndStartRadius: "10px",
                    }}
                  >
                    <SubCategoryProp>{item.title}</SubCategoryProp>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Box
                    py="7px"
                    px="8px"
                    bgcolor="#e7e5e4"
                    sx={{
                      borderStartEndRadius: "10px",
                      borderEndEndRadius: "10px",
                    }}
                  >
                    <SubCategoryProp>{item.value}</SubCategoryProp>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
        {/* category name */}
        <Grid
          size={{ xs: 12, mobile: 1.5 }}
          //   order={{ xs: 2, mobile: 1 }}
        >
          <Box display="flex" justifyContent="end">
            <CategoryNameProp>{prop.categoryName}</CategoryNameProp>
          </Box>
        </Grid>
      </>
    );
  };

  return (
    <Box>
      <Stack>
        {/* section title */}
        <Box>
          <Box
            display="flex"
            justifyContent="end"
            borderBottom="1px solid rgb(229, 231, 235)"
            pb="6px"
          >
            <Typography
              fontWeight={700}
              fontSize={{ xs: "2vw", mobile: "16px" }}
            >
              مشخصات محصول
            </Typography>
          </Box>
        </Box>
        {/* body */}
        <Box mt="10px">
          <Grid container>
            {/* product banner */}
            <Grid size={{ xs: 12, mobile: 6 }}>
              <Box
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={productBanner}
                  alt="product banner"
                  width={210}
                  height={210}
                  objectFit="cover"
                />
              </Box>
            </Grid>
            {/* product props */}
            <Grid
              size={{ xs: 12, mobile: 6 }}
              height="fit-content"
              overflow="hidden"
            >
              <Grid container columns={{ xs: 12, mobile: 6 }} spacing={2}>
                {properties.map((prop, index) => {
                  if (!isPropsExpanded)
                    return (
                      index <= 2 && (
                        <PropertiesStack key={getUniqueKey()} prop={prop} />
                      )
                    );
                  else
                    return <PropertiesStack key={getUniqueKey()} prop={prop} />;
                })}
              </Grid>
              <Box display="flex" justifyContent="end">
                <Button
                  color="warning"
                  onClick={() =>
                    isPropsExpanded
                      ? setPropsExpanded(false)
                      : setPropsExpanded(true)
                  }
                >
                  <Typography
                    fontSize={{ xs: ".6em", mobile: ".7em", lg: ".9em" }}
                    fontWeight={400}
                  >
                    مشاهده {isPropsExpanded ? "کمتر" : "بیشتر"}
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductFullProperties;
