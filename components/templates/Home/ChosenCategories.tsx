"use client";
import { Box, Container } from "@mui/material";
import CategoryItems from "@/components/molecules/ChosenCategories/CategoryItems";
import getUniqueKey from "@/utils/lib/UniqueKey";

const ChosenCategories = () => {
  const categories = [
    {
      imageSrc: "/images/chosenCategories/ffiree-alarm-desctop-nss_3x.webp",
      text: "اعلام حریق",
    },
    {
      imageSrc: "/images/chosenCategories/alarm-systems-descktop-ns_3x.webp",
      text: "دزدگیر",
    },
    {
      imageSrc: "/images/chosenCategories/barrierr-descktop-ns_3x.webp",
      text: "راهبند",
    },
    {
      imageSrc: "/images/chosenCategories/electric-lock-descktop-ns_3x.webp",
      text: "قفل برقی",
    },
    {
      imageSrc: "/images/chosenCategories/door-closer-descktop-ns_3x.webp",
      text: "آرام بند",
    },
    {
      imageSrc: "/images/chosenCategories/rolling-shutters-descktop-ns_3x.webp",
      text: "کرکره برقی",
    },
  ];

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1350px",
          },
        }}
      >
        <Box
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          display="flex"
          gap={{
            xs: 5,
            xsL3: 3,
            sm: 6,
            mobile: 8,
            smL2: 5,
            lg: 6,
          }}
          justifyContent="center"
          dir="rtl"
        >
          {categories.map((item) => (
            <CategoryItems
              key={getUniqueKey()}
              imageSrc={item.imageSrc}
              text={item.text}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ChosenCategories;
