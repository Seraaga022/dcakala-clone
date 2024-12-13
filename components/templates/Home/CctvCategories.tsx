"use client";
import { vazirmatn } from "@/app/Fonts";
import { Box, ThemeProvider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CustomBreakPoint from "@/theme/CustomBreakPoint";

const CctvCategories = () => {
  return (
    <ThemeProvider theme={CustomBreakPoint}>
      <Box
        height={{
          xs: "420px",
          sm: "460px",
          mobile: "750px",
          lgL1: "840px",
        }}
        position="relative"
      >
        {/* categories */}
        <Box
          sx={{
            backgroundImage: "url(/images/back-cctv.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            width="100%"
            height={{
              xs: "140px",
              sm: "210px",
              md: "220px",
              lgL1: "250px",
            }}
            justifyContent="center"
            bgcolor="#d8e1e75c"
            position="relative"
            display="flex"
          >
            <Box
              mt={{ xs: 0, mobile: "100px" }}
              mb="auto"
              height="200%"
              width={{ xs: "96vw", mobile: "650px" }}
              top="-52%"
              position="absolute"
            >
              {/* top categories */}
              <Box
                width="100%"
                height="50%"
                display="flex"
                justifyContent="end"
              >
                {/* left */}
                <Box
                  zIndex={20}
                  mr="auto"
                  width="48.5%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    right={0}
                    bottom={0}
                    width="100%"
                    height="100%"
                    bgcolor="#fff"
                    borderRadius="10px"
                    boxShadow={4}
                    p="10px"
                    boxSizing="border-box"
                    sx={{
                      "@media (min-width: 640px)": {
                        "&:hover": {
                          "& .categorie-item-text": {
                            color: "#ff7900",
                          },
                          width: "110%",
                          height: "110%",
                        },
                      },
                      transition: "all ease-in 100ms",
                    }}
                  >
                    <Link href="wireless-cctv">
                      {/* image */}
                      <Box height="80%" position="relative">
                        <Image
                          style={{
                            borderRadius: "10px",
                          }}
                          src="/images/wireless-cctv-camera-desktop_original.webp"
                          fill
                          alt="wireless-cctv"
                        />
                      </Box>
                      {/* text */}
                      <Box
                        className="categorie-item-text"
                        height="20%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#212121"
                        fontFamily={vazirmatn.style.fontFamily}
                        fontSize={{ xs: "12px", md: "14px" }}
                      >
                        دوربین مداربسته وایرلس
                      </Box>
                    </Link>
                  </Box>
                </Box>
                {/* right */}
                <Box
                  zIndex={20}
                  width="48.5%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    left={0}
                    bottom={0}
                    width="100%"
                    height="100%"
                    bgcolor="#fff"
                    borderRadius="10px"
                    boxShadow={4}
                    p="10px"
                    boxSizing="border-box"
                    sx={{
                      "@media (min-width: 640px)": {
                        "&:hover": {
                          "& .categorie-item-text": {
                            color: "#ff7900",
                          },
                          width: "110%",
                          height: "110%",
                        },
                      },
                      transition: "all ease-in 100ms",
                    }}
                  >
                    <Link href="desktop-cctv">
                      {/* image */}
                      <Box height="80%" position="relative">
                        <Image
                          style={{
                            borderRadius: "10px",
                          }}
                          src="/images/all-cctv-desktop_original.webp"
                          fill
                          alt="desktop-cctv"
                        />
                      </Box>
                      {/* text */}
                      <Box
                        className="categorie-item-text"
                        height="20%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#212121"
                        fontFamily={vazirmatn.style.fontFamily}
                        fontSize={{ xs: "12px", md: "14px" }}
                      >
                        همه دوربین های مداربسته
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
              {/* bottom categories */}
              <Box
                mt="18px"
                width="100%"
                height="50%"
                display="flex"
                justifyContent="end"
              >
                {/* left */}
                <Box
                  mr="auto"
                  width="48.5%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    right={0}
                    top={0}
                    width="100%"
                    height="100%"
                    bgcolor="#fff"
                    borderRadius="10px"
                    boxShadow={4}
                    p="10px"
                    boxSizing="border-box"
                    sx={{
                      "@media (min-width: 640px)": {
                        "&:hover": {
                          "& .categorie-item-text": {
                            color: "#ff7900",
                          },
                          width: "110%",
                          height: "110%",
                        },
                      },
                      transition: "all ease-in 100ms",
                    }}
                  >
                    <Link href="dash-cams">
                      {/* image */}
                      <Box height="80%" position="relative">
                        <Image
                          style={{
                            borderRadius: "10px",
                          }}
                          src="/images/dash-cams-desktop-design_original.webp"
                          fill
                          alt="dash-cams"
                        />
                      </Box>
                      {/* text */}
                      <Box
                        className="categorie-item-text"
                        height="20%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#212121"
                        fontFamily={vazirmatn.style.fontFamily}
                        fontSize={{ xs: "12px", md: "14px" }}
                      >
                        دوربین ثبت وقایع
                      </Box>
                    </Link>
                  </Box>
                </Box>
                {/* right */}
                <Box
                  width="48.5%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    left={0}
                    top={0}
                    width="100%"
                    height="100%"
                    bgcolor="#fff"
                    borderRadius="10px"
                    boxShadow={4}
                    p="10px"
                    boxSizing="border-box"
                    sx={{
                      "@media (min-width: 640px)": {
                        "&:hover": {
                          "& .categorie-item-text": {
                            color: "#ff7900",
                          },
                          width: "110%",
                          height: "110%",
                        },
                      },
                      transition: "all ease-in 100ms",
                    }}
                  >
                    <Link href="cctv-camera-package">
                      {/* image */}
                      <Box height="80%" position="relative">
                        <Image
                          style={{
                            borderRadius: "10px",
                          }}
                          src="/images/cctv-camera-package-desktop_original.webp"
                          fill
                          alt="cctv-camera-package"
                        />
                      </Box>
                      {/* text */}
                      <Box
                        className="categorie-item-text"
                        height="20%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#212121"
                        fontFamily={vazirmatn.style.fontFamily}
                        fontSize={{ xs: "12px", md: "14px" }}
                      >
                        پکیج های دوربین مداربسته
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* left absolute camera */}
        <Box
          zIndex={19}
          position="absolute"
          top="10px"
          display={{ xs: "none", mobile: "block" }}
          left={0}
        >
          <Image
            src="/images/left-cctv-new_original.png"
            alt="left-cctv"
            width={330}
            height={260}
          />
        </Box>
        {/* right absolute camera */}
        <Box
          zIndex={19}
          position="absolute"
          top="10px"
          display={{ xs: "none", mobile: "block" }}
          right={0}
        >
          <Image
            src="/images/right-cctv-new_original.png"
            alt="right-cctv"
            width={330}
            height={260}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CctvCategories;
