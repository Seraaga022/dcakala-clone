import { vazirmatn } from "@/app/Fonts";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

const WebsiteIntroduction = () => {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1360px",
          },
        }}
        disableGutters
      >
        <Box bgcolor="#f7f7f7" borderRadius="7px" minHeight="175px">
          <Stack spacing={2}>
            {/* title */}
            <Box
              display="flex"
              justifyContent="end"
              px="22px"
              pt="30px"
              boxSizing="border-box"
              fontSize="24px"
              fontFamily={vazirmatn.style.fontFamily}
              color="#202020"
            >
              فروشگاه دی سی ای کالا
            </Box>
            {/* description */}
            <Box
              dir="rtl"
              px="22px"
              pb="20px"
              boxSizing="border-box"
              fontSize="16px"
              fontFamily={vazirmatn.style.fontFamily}
              color="#202020"
            >
              دی سی ای کالا اولین و بزرگترین فروشگاه اینترنتی و حضوری سیستم های
              حفاظتی و نظارتی در ایران است که در سال 1392 کار خود را آغاز کرد.
              در این فروشگاه محصولاتی از گروه دوربین مدار بسته، آیفون تصویری، جک
              درب پارکینگ، انواع قفل برقی و آرام بند، کرکره برقی، راهبند و درب
              شیشه ای و انواع سیستم های حضور و غیاب و کنترل تردد قرار داده شده
              تا کاربر با توجه به ویژگی ها و بررسی های تخصصی قرار داده در سایت
              آنها را انتخاب و خریداری نماید.
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default WebsiteIntroduction;
