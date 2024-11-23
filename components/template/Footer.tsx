"use client";
import { vazirmatn } from "@/app/Fonts";
import { Box, Button, Container, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import CustomBreakPoint from "../../theme/CustomBreakPoint";
import Image from "next/image";
import Link from "next/link";
import NavTel from "../organisms/Nav/NavTel";
import { LocationOn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer">
      <ThemeProvider theme={CustomBreakPoint}>
        <Stack>
          {/* shopping features */}
          <Box
            bgcolor="#e7e7e7"
            width="100%"
            py="20px"
            boxSizing="border-box"
            minHeight="80px"
          >
            <Container
              maxWidth="lg"
              sx={{
                "&.MuiContainer-maxWidthLg": {
                  maxWidth: "1380px",
                },
              }}
            >
              <Box
                display="flex"
                gap={{ xs: "15px", mobile: "15px" }}
                flexDirection={{ xs: "column", lg: "row" }}
              >
                {/* first two */}
                <Box
                  order={{ xs: 2, lg: 1 }}
                  flex={1}
                  display="flex"
                  flexDirection={{ xs: "column", mobile: "row" }}
                  gap={{ xs: "15px", mobile: "0" }}
                >
                  {/* first */}
                  <Box
                    order={{ xs: 2, mobile: 1 }}
                    flex={1}
                    display="flex"
                    justifyContent={{ xs: "end", mobile: "center" }}
                    alignItems="center"
                  >
                    {/* image */}
                    <Box order={{ xs: 2, mobile: 1 }}>
                      <Box component="picture">
                        <source
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_original.webp , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_2x.webp 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_3x.webp 3x"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_original.png , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_2x.png 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_3x.png 3x"
                          type="image/png"
                        />
                        <Box
                          component="img"
                          className=""
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_original.png , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_2x.png 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_3x.png 3x"
                          src="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-support-ns_original.png"
                          alt="پشتیبانی حین و بعد از فروش"
                          title="پشتیبانی حین و بعد از فروش"
                          height={45}
                          width={45}
                        />
                      </Box>
                    </Box>
                    {/* text */}
                    <Box
                      order={{ xs: 1, mobile: 2 }}
                      mx="10px"
                      display="flex"
                      flexDirection="column"
                      gap="5px"
                      fontFamily={vazirmatn.style.fontFamily}
                      color="rgb(114 119 122/1)"
                    >
                      {/* title */}
                      <Box fontSize="16px" fontWeight={800} textAlign="center">
                        پشتیبانی حین و بعد از فروش
                      </Box>
                      {/* description */}
                      <Box fontSize="12px" fontWeight={100} textAlign="center">
                        تیم مسلط فروش و تیم پشتیبانی فنی
                      </Box>
                    </Box>
                  </Box>
                  {/* second */}
                  <Box
                    order={{ xs: 1, mobile: 2 }}
                    flex={1}
                    display="flex"
                    justifyContent={{ xs: "end", mobile: "center" }}
                    alignItems="center"
                  >
                    {/* image */}
                    <Box order={{ xs: 2, mobile: 1 }}>
                      <Box component="picture">
                        <source
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_original.webp , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_2x.webp 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_3x.webp 3x"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_original.png , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_2x.png 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_3x.png 3x"
                          type="image/png"
                        />
                        <Box
                          component="img"
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_original.png , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_2x.png 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_3x.png 3x"
                          src="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-refund-ns_original.png"
                          alt="تضمین بازگشت وجه"
                          title="تضمین بازگشت وجه"
                          height={45}
                          width={45}
                        />
                      </Box>
                    </Box>
                    {/* text */}
                    <Box
                      order={{ xs: 1, mobile: 2 }}
                      mx="10px"
                      display="flex"
                      flexDirection="column"
                      gap="5px"
                      fontFamily={vazirmatn.style.fontFamily}
                      color="rgb(114 119 122/1)"
                    >
                      {/* title */}
                      <Box fontSize="16px" fontWeight={800} textAlign="center">
                        تضمین بازگشت وجه
                      </Box>
                      {/* description */}
                      <Box fontSize="12px" fontWeight={100} textAlign="center">
                        بازگشت 7 روزه در صو.رت مغایرت کالا
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* second two */}
                <Box
                  order={{ xs: 1, lg: 2 }}
                  flex={1}
                  display="flex"
                  flexDirection={{ xs: "column", mobile: "row" }}
                  gap={{ xs: "15px", mobile: "0" }}
                >
                  {/* first */}
                  <Box
                    order={{ xs: 2, mobile: 1 }}
                    flex={1}
                    display="flex"
                    justifyContent={{ xs: "end", mobile: "center" }}
                    alignItems="center"
                  >
                    {/* image */}
                    <Box order={{ xs: 2, mobile: 1 }}>
                      <Box component="picture">
                        <source
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_original.webp , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_2x.webp 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_3x.webp 3x"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_original.png , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_2x.png 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_3x.png 3x"
                          type="image/png"
                        />
                        <Box
                          component="img"
                          className=""
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_original.png , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_2x.png 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_3x.png 3x"
                          src="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-cart-ns_original.png"
                          alt="تنوع در روش های پرداخت"
                          title="تنوع در روش های پرداخت"
                          height={35}
                          width={45}
                        />
                      </Box>
                    </Box>
                    {/* text */}
                    <Box
                      order={{ xs: 1, mobile: 2 }}
                      mx="10px"
                      display="flex"
                      flexDirection="column"
                      gap="5px"
                      fontFamily={vazirmatn.style.fontFamily}
                      color="rgb(114 119 122/1)"
                    >
                      {/* title */}
                      <Box fontSize="16px" fontWeight={800} textAlign="center">
                        تنوع در روش های پرداخت
                      </Box>
                      {/* description */}
                      <Box fontSize="12px" fontWeight={100} textAlign="center">
                        پرداخت آنلاین، کارت به کارت و یا در محل
                      </Box>
                    </Box>
                  </Box>
                  {/* second */}
                  <Box
                    order={{ xs: 1, mobile: 2 }}
                    flex={1}
                    display="flex"
                    justifyContent={{ xs: "end", mobile: "center" }}
                    alignItems="center"
                  >
                    {/* image */}
                    <Box order={{ xs: 2, mobile: 1 }}>
                      <Box component="picture">
                        <source
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_original.webp , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_2x.webp 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_3x.webp 3x"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_original.png , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_2x.png 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_3x.png 3x"
                          type="image/png"
                        />
                        <Box
                          component="img"
                          className=""
                          srcSet="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_original.png , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_2x.png 2x , https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_3x.png 3x"
                          src="https://dashboard.dcakala.com/public/images/secondary-feature/2024/10/new-truck-ns_original.png"
                          alt="ارسال سریع به سراسر ایران"
                          title="ارسال سریع به سراسر ایران"
                          height={35}
                          width={45}
                        />
                      </Box>
                    </Box>
                    {/* text */}
                    <Box
                      order={{ xs: 1, mobile: 2 }}
                      mx="10px"
                      display="flex"
                      flexDirection="column"
                      gap="5px"
                      fontFamily={vazirmatn.style.fontFamily}
                      color="rgb(114 119 122/1)"
                    >
                      {/* title */}
                      <Box fontSize="16px" fontWeight={800} textAlign="center">
                        ارسال سریع به سراسر ایران
                      </Box>
                      {/* description */}
                      <Box fontSize="12px" fontWeight={100} textAlign="center">
                        اکسپرس، پست، تیپاکس و باربری
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          {/* categories and security symbols */}
          <Box bgcolor="#72777a" width="100%" minHeight="225px">
            <Container
              maxWidth="lg"
              sx={{
                "&.MuiContainer-maxWidthLg": {
                  maxWidth: "1380px",
                },
              }}
              disableGutters
            >
              <Box
                height="100%"
                display="flex"
                flexDirection={{ xs: "column", mobile: "row" }}
              >
                {/* left */}
                <Box
                  order={{ xs: 2, mobile: 1 }}
                  flex={{ xs: 0.6, mobile: 0.4 }}
                  display="flex"
                  justifyContent={{ xs: "center", mobile: "start" }}
                  gap="20px"
                  alignItems="center"
                  pb={{ xs: "20px", mobile: 0 }}
                >
                  <Box
                    width={{ xs: 190, sm: 130, smL3: 150 }}
                    height={{ xs: 190, sm: 130, smL3: 150 }}
                    position="relative"
                  >
                    <Image
                      src="/images/samandehi.png"
                      alt="samandehi setad"
                      fill
                    />
                  </Box>
                  <Box
                    width={{ xs: 190, sm: 130, smL3: 150 }}
                    height={{ xs: 190, sm: 130, smL3: 150 }}
                    position="relative"
                  >
                    <Image src="/images/enamad.png" alt="namad etemad" fill />
                  </Box>
                </Box>
                {/* right */}
                <Box
                  order={{ xs: 1, mobile: 2 }}
                  flex={{ xs: 0.5, smL3: 1 }}
                  columnGap={{ xs: 0, xsL3: "80px", mobile: 0 }}
                  display="flex"
                  flexWrap={{ xs: "wrap", mobile: "nowrap" }}
                >
                  {/* left */}
                  <Box
                    flex={1}
                    order={{ xs: 3, mobile: 1 }}
                    dir="rtl"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box component="ul">
                      <Stack
                        spacing={{ xs: 0.2, md: 0.82 }}
                        fontFamily={vazirmatn.style.fontFamily}
                        color="#fff"
                        sx={{
                          "& li": {
                            fontSize: {
                              xs: "14px",
                              smL3: "15px",
                            },
                          },
                        }}
                      >
                        <Box
                          fontSize={{
                            xs: "15px",
                            smL3: "17px",
                          }}
                          fontWeight={700}
                          whiteSpace="nowrap"
                        >
                          آخرین دسته بندی ها
                        </Box>
                        <Box component="li">
                          <Link href="">موتور کرکره بارزانته</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">دزدگیر ارزان</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">پکیج مناسب داروخانه</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">دوربین بیسیم داهوا</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">پکیج مناسب فروشگاه عینک فروشی</Link>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                  {/* middle */}
                  <Box
                    flex={1}
                    order={{ xs: 1, mobile: 2 }}
                    dir="rtl"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box component="ul">
                      <Stack
                        spacing={{ xs: 1, smL3: 3 }}
                        fontFamily={vazirmatn.style.fontFamily}
                        color="#fff"
                        sx={{
                          "& li": {
                            fontSize: {
                              xs: "14px",
                              smL3: "15px",
                            },
                          },
                        }}
                      >
                        <Box
                          fontSize={{ xs: "15px", smL3: "17px" }}
                          fontWeight={700}
                          whiteSpace="nowrap"
                        >
                          دی سی ای کالا
                        </Box>
                        <Box component="li" whiteSpace="nowrap">
                          <Link href="">آموزش خرید و پرداخت</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">درباره ما</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">تماس با ما</Link>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                  {/* right */}
                  <Box
                    flex={1}
                    order={{ xs: 2, mobile: 3 }}
                    dir="rtl"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box component="ul">
                      <Stack
                        spacing={{ xs: 0.1, sm: 1.3, smL3: 1.7 }}
                        fontFamily={vazirmatn.style.fontFamily}
                        color="#fff"
                        sx={{
                          "& li": {
                            fontSize: {
                              xs: "14px",
                              smL3: "15px",
                            },
                          },
                        }}
                      >
                        <Box
                          fontSize={{ xs: "15px", smL3: "17px" }}
                          fontWeight={700}
                          whiteSpace="nowrap"
                        >
                          خدمات مشتریان
                        </Box>
                        <Box component="li">
                          <Link href="">قوانین و مقررات</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">ضمانت خرید</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">روش های ارسال</Link>
                        </Box>
                        <Box component="li">
                          <Link href="">حریم خصوصی</Link>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          {/* social media and fast payment */}
          <Box
            bgcolor="#ff7900"
            width="100%"
            minHeight="70px"
            height={{ xs: "auto", mobile: "70px" }}
          >
            <Container
              maxWidth="lg"
              sx={{
                "&.MuiContainer-maxWidthLg": {
                  maxWidth: "1380px",
                },
                height: "100%",
              }}
            >
              <Box
                height="100%"
                display="flex"
                gap="10px"
                justifyContent={{ xs: "center", mobile: "space-between" }}
                alignItems="center"
                flexDirection={{ xs: "column", mobile: "row" }}
                py={{ xs: "10px", mobile: 0 }}
              >
                {/* social media */}
                <Box
                  flex={1}
                  order={{ xs: 2, mobile: 1 }}
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  height={{ xs: "100%", mobile: "70px" }}
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    gap="16px"
                    alignItems="center"
                  >
                    <Box width={35} height={35} position="relative">
                      <Image
                        src="/images/socialMedia/instagram-icon-ns.webp"
                        alt="instagram"
                        fill
                      />
                    </Box>
                    <Box width={35} height={35} position="relative">
                      <Image
                        src="/images/socialMedia/youtube-icon-ns.webp"
                        alt="youtube"
                        fill
                      />
                    </Box>
                    <Box width={35} height={35} position="relative">
                      <Image
                        src="/images/socialMedia/linkedin-icon-ns.webp"
                        alt="linkedin"
                        fill
                      />
                    </Box>
                    <Box width={35} height={35} position="relative">
                      <Image
                        src="/images/socialMedia/Facebook-Icon-ns.webp"
                        alt="facebook"
                        fill
                      />
                    </Box>
                    <Box width={35} height={35} position="relative">
                      <Image
                        src="/images/socialMedia/Twitter-Icon-ns.webp"
                        alt="x"
                        fill
                      />
                    </Box>
                  </Box>
                </Box>
                {/* fast payment */}
                <Box
                  flex={1}
                  order={{ xs: 1, mobile: 2 }}
                  justifyContent="center"
                  alignItems="center"
                  height={{ xs: "100%", mobile: "70px" }}
                >
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="end"
                    alignItems="center"
                  >
                    <Button
                      sx={{
                        boxShadow: 2,
                        "&:hover": {
                          boxShadow: 4,
                        },
                        minWidth: { xs: "300px", sm: "320px" },
                        minHeight: "38px",
                        bgcolor: "#fff",
                        borderRadius: "9999px",
                        fontFamily: vazirmatn.style.fontFamily,
                        textTransform: "none",
                        fontSize: "13px",
                        color: "#000",
                      }}
                    >
                      پرداخت سریع
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          {/* icon and contact and map address */}
          <Box
            bgcolor="#a1a3a8"
            width="100%"
            height={{ xs: "auto", mobile: "245px" }}
            py={{ xs: "20px", smL3: 0 }}
          >
            <Container
              maxWidth="lg"
              sx={{
                "&.MuiContainer-maxWidthLg": {
                  maxWidth: "1380px",
                },
                height: "100%",
              }}
            >
              <Box
                height="100%"
                display="flex"
                flexDirection="row"
                color="#fff"
              >
                {/* website icon & contact us */}
                <Box
                  flex={1}
                  display="flex"
                  flexDirection={{ xs: "column", mobile: "row" }}
                  gap={{ xs: "30px", mobile: 0 }}
                >
                  {/* icon */}
                  <Box
                    order={{ xs: 2, mobile: 1 }}
                    flex={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box width={155} height={65} position="relative">
                      <Image src="/images/logo.webp" alt="logo" fill />
                    </Box>
                  </Box>
                  {/* contact us */}
                  <Box
                    order={{ xs: 1, mobile: 2 }}
                    flex={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontFamily={vazirmatn.style.fontFamily}
                    textAlign="center"
                    px="10px"
                  >
                    <Box display="flex" flexDirection="column">
                      <Stack
                        spacing={{ xs: 0.5, mobile: 1 }}
                        sx={{
                          "& .contact-info-item": {
                            fontSize: { xs: "9.9px", mobile: "14px" },
                          },
                        }}
                      >
                        <Stack spacing={4}>
                          {/* tel */}
                          <Box display="flex" justifyContent="center">
                            <NavTel
                              sx={{ "& .nav-tel-text": { fontSize: "20px" } }}
                            />
                          </Box>
                          <Box className="contact-info-item">
                            اگر سوالی دارید با ما تماس بگیرید
                          </Box>
                        </Stack>
                        <Box className="contact-info-item">
                          ساعت کاری ما: شنبه تا چهارشنبه 9 الی 18 پنج شنبه 9 الی
                          14
                        </Box>
                        <Box className="contact-info-item" dir="rtl">
                          021-77132831-32 / 021-72195
                        </Box>
                        <Box className="contact-info-item">
                          مدیریت سایت : مسلم زمانی
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
                {/* map and address */}
                <Box
                  flex={0.5}
                  display="flex"
                  alignItems="center"
                  justifyContent="end"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {/* map */}
                    <Box
                      width={{
                        xs: "120px",
                        xsL2: "170px",
                        sm: "230px",
                        smL3: "230px",
                        md: "300px",
                      }}
                      height={{
                        xs: "70px",
                        xsL2: "90px",
                        sm: "110px",
                        smL3: "120px",
                        md: "150px",
                      }}
                      position="relative"
                    >
                      <Image
                        src="/images/googlemap-dcakala.webp"
                        alt="dcakala-googlemap"
                        fill
                      />
                    </Box>
                    {/* address */}
                    <Stack
                      spacing={0.5}
                      textAlign="center"
                      alignItems="center"
                      fontFamily={vazirmatn.style.fontFamily}
                    >
                      {/* title */}
                      <Box dir="ltr" display="flex" fontSize="15px">
                        <Box fontWeight={500}>:آدرس</Box>
                        <Box>
                          <LocationOn sx={{ fontSize: "20px" }} />
                        </Box>
                      </Box>
                      {/* address */}
                      <Box fontSize="12px">
                        تهران,نارمک,ضلع جنوبی میدان 47 ,پلاک 8
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          {/* copyright */}
          <Box
            bgcolor="#72777a"
            width="100%"
            height={{ xs: "140px", mobile: "50px" }}
          >
            <Container
              maxWidth="lg"
              sx={{
                "&.MuiContainer-maxWidthLg": {
                  maxWidth: "1380px",
                },
                height: "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Box
                height="50px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#fff"
                fontSize="12px"
                fontFamily={vazirmatn.style.fontFamily}
              >
                کلیه حقوق این سایت متعلق به دی سی ای کالا می باشد
              </Box>
            </Container>
          </Box>
        </Stack>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
