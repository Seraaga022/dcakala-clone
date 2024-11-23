"use client";
import { vazirmatn } from "@/app/Fonts";
import useCategories from "@/hooks/useCategories";
import useCreators from "@/hooks/useCreators";
import useProducts from "@/hooks/useProducts";
import { TProduct } from "@/utils/types/Product";
import { ArrowBackIosNew, Clear, Search } from "@mui/icons-material";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const NavSearchMagnifingGlassIcon = dynamic(
  () => import("@/components/molecules/Nav/NavSearchMagnifGlassIcon"),
  {
    ssr: false,
    loading: () => (
      <Box>
        <Skeleton variant="circular" width={25} height={25} />
      </Box>
    ),
  }
);

const NoGoods = () => {
  return (
    <Box
      minHeight="170px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minWidth="350px"
      maxWidth="350px"
    >
      <Typography
        fontFamily={vazirmatn.style.fontFamily}
        sx={{ color: "#212121", fontSize: "17px", letterSpacing: 0.5 }}
      >
        محصولی موجود نیست
      </Typography>
    </Box>
  );
};

const NavSearchProductCard = ({ product }: { product: TProduct }) => {
  return (
    <Box display="inline-block">
      <Link href={product.slug}>
        <Box
          display="flex"
          justifyContent="end"
          p="10px"
          dir="rtl"
          border="1px solid #e7e5e4"
          borderRadius="7px"
          gap="10px"
          pl="30px"
        >
          {/* image */}
          <Box display="flex" alignItems="center">
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
          </Box>
          {/* text */}
          <Box
            fontFamily={vazirmatn.style.fontFamily}
            fontSize="14px"
            color="#212121"
          >
            {product.title}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

const NavSearch = () => {
  const [inputValue, setInputValue] = React.useState("");

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts();
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const {
    data: creators,
    isLoading: creatorsLoading,
    error: creatorsError,
  } = useCreators();

  return (
    <Box
      bgcolor="#fff"
      height="100%"
      sx={{
        width: "70%",
        "@media (min-width: 1250px)": {
          width: "100%",
        },
        "&:hover .input-clear-button": {
          display: inputValue.length > 0 ? "block" : "none",
        },
      }}
      borderRadius="99999px"
      display="flex"
      alignItems="center"
      position="relative"
    >
      {/* search section */}
      <Box width="100%" height="100%" display="flex" alignItems="center">
        {/* icons */}
        <Box
          width="6%"
          sx={{
            "@media (max-width: 1250px)": { width: "13%" },
            "@media (max-width: 900px)": { width: "20%" },
          }}
          height="100%"
          display="flex"
          pl="8px"
          alignItems="center"
        >
          {/* search icon */}
          <Box>
            <NavSearchMagnifingGlassIcon inputValue={inputValue} />
          </Box>
          {/* clear icon */}
          <Box
            display="none"
            className="input-clear-button"
            onClick={() => setInputValue("")}
          >
            <Clear
              sx={{ fontSize: "18px", color: "#375c9c", fontWeight: 700 }}
            />
          </Box>
        </Box>
        {/* input */}
        <Box
          width="94%"
          height="99%"
          pr="10px"
          sx={{
            "& > input::placeholder": { textAlign: "center", color: "#9ca3af" },
            "@media (max-width: 1250px)": { width: "80%" },
          }}
        >
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            title="search"
            placeholder="جستجو در دی سی ای کالا"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "99999px",
              paddingInline: "2px",
              boxSizing: "border-box",
              outline: "none",
              direction: "rtl",
              fontSize: "14px",
              fontFamily: vazirmatn.style.fontFamily,
            }}
          />
        </Box>
      </Box>
      {/* dropdown */}
      <Box
        position="absolute"
        right="-290px"
        top="53px"
        bgcolor="#fff"
        minWidth="90vw"
        maxHeight="580px"
        display={inputValue.length > 2 ? "block" : "none"}
        sx={{
          borderEndStartRadius: "10px",
          borderEndEndRadius: "10px",
          boxShadow: 1,
          "@media (min-width: 1200px)": { minWidth: "80vw" },
          "@media (max-width: 1000px)": { right: "-200px" },
        }}
      >
        <Box display="flex" height="100%">
          {/* left */}
          <Box flex={0.64} boxSizing="border-box" px="10px" mb="33px">
            <Box display="flex" flexDirection="column">
              {/* categories */}
              <Box display="flex" flexDirection="column">
                {/* top */}
                <Box height="40px" position="relative">
                  {/* title & icon */}
                  <Box
                    flex={1}
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    gap="5px"
                  >
                    {/* title */}
                    <Box display="flex" alignItems="center">
                      <Box display="flex">
                        {/* دسته بندی */}
                        <Typography
                          sx={{
                            fontFamily: vazirmatn.style.fontFamily,
                            fontSize: "13px",
                            letterSpacing: 0.5,
                            color: "#ff7900",
                          }}
                        >
                          دسته بندی&nbsp;
                        </Typography>
                        {/* جستجو در */}
                        <Typography
                          sx={{
                            fontFamily: vazirmatn.style.fontFamily,
                            fontSize: "13px",
                            letterSpacing: 0.5,
                          }}
                        >
                          جستجو در
                        </Typography>
                      </Box>
                    </Box>
                    {/* icon */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      pr="5px"
                    >
                      <Search sx={{ fontSize: "24px" }} />
                    </Box>
                  </Box>
                  {/* divider */}
                  <Box
                    role="separator"
                    sx={{
                      bgcolor: "#e7e5e4",
                      position: "absolute",
                      bottom: "0",
                      minHeight: "4%",
                      minWidth: "100%",
                    }}
                  />
                </Box>
                {/* categories */}
                <Box pt="10px" dir="rtl">
                  {categories !== undefined && categories.length > 0 ? (
                    categoriesLoading ? (
                      // category skeletons
                      <Box
                        display="flex"
                        gap="15px"
                        flexWrap="wrap"
                        width="100%"
                        px="10px"
                      >
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          height="30px"
                          width="95%"
                          sx={{
                            "&::after": {
                              animationDirection: "reverse",
                            },
                            borderRadius: "5px",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          height="30px"
                          width="95%"
                          sx={{
                            "&::after": {
                              animationDirection: "reverse",
                            },
                            borderRadius: "5px",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          height="30px"
                          width="95%"
                          sx={{
                            "&::after": {
                              animationDirection: "reverse",
                            },
                            borderRadius: "5px",
                          }}
                        />
                      </Box>
                    ) : categoriesError ? (
                      <Box fontFamily={vazirmatn.style.fontFamily}>
                        {/* becaus we are doing it with hard way, i have not access to message propertie */}
                        {/* {categoriesError.message} */}
                        {categoriesError}
                      </Box>
                    ) : (
                      <Stack spacing={1.4}>
                        {categories.map((category) => (
                          <Box
                            key={category.slug.concat(Math.random().toString())}
                          >
                            <Link href={category.slug}>
                              <Typography
                                sx={{ fontSize: "12.5px" }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                {category.name}
                              </Typography>
                            </Link>
                          </Box>
                        ))}
                      </Stack>
                    )
                  ) : (
                    <Box width="100%" display="flex" justifyContent="center">
                      <NoGoods />
                    </Box>
                  )}
                </Box>
              </Box>
              {/* creators */}
              <Box display="flex" flexDirection="column">
                {/* top */}
                <Box height="40px" position="relative">
                  {/* title & icon */}
                  <Box
                    flex={1}
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    gap="5px"
                  >
                    {/* title */}
                    <Box display="flex" alignItems="center">
                      <Box display="flex">
                        {/* تولید کنندگان */}
                        <Typography
                          sx={{
                            fontFamily: vazirmatn.style.fontFamily,
                            fontSize: "13px",
                            letterSpacing: 0.5,
                            color: "#ff7900",
                          }}
                        >
                          تولید کنندگان&nbsp;
                        </Typography>
                        {/* جستجو در */}
                        <Typography
                          sx={{
                            fontFamily: vazirmatn.style.fontFamily,
                            fontSize: "13px",
                            letterSpacing: 0.5,
                          }}
                        >
                          جستجو در
                        </Typography>
                      </Box>
                    </Box>
                    {/* icon */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      pr="5px"
                    >
                      <Search sx={{ fontSize: "24px" }} />
                    </Box>
                  </Box>
                  {/* divider */}
                  <Box
                    role="separator"
                    sx={{
                      bgcolor: "#e7e5e4",
                      position: "absolute",
                      bottom: "0",
                      minHeight: "4%",
                      minWidth: "100%",
                    }}
                  />
                </Box>
                {/* creators */}
                <Box pt="10px" dir="rtl">
                  {creators !== undefined && creators.length > 0 ? (
                    creatorsLoading ? (
                      // creators skeletons
                      <Box
                        display="flex"
                        gap="15px"
                        flexWrap="wrap"
                        width="100%"
                        px="10px"
                      >
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          height="30px"
                          width="95%"
                          sx={{
                            "&::after": {
                              animationDirection: "reverse",
                            },
                            borderRadius: "5px",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          height="30px"
                          width="95%"
                          sx={{
                            "&::after": {
                              animationDirection: "reverse",
                            },
                            borderRadius: "5px",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          height="30px"
                          width="95%"
                          sx={{
                            "&::after": {
                              animationDirection: "reverse",
                            },
                            borderRadius: "5px",
                          }}
                        />
                      </Box>
                    ) : creatorsError ? (
                      <Box fontFamily={vazirmatn.style.fontFamily}>
                        {/* becaus we are doing it with hard way, i have not access to message propertie */}
                        {/* {creatorsError.message} */}
                        {creatorsError}
                      </Box>
                    ) : (
                      <Stack spacing={1.4}>
                        {creators.map((creator) => (
                          <Box key={creator.slug}>
                            <Link href={creator.slug}>
                              <Typography
                                sx={{ fontSize: "12.5px" }}
                                fontFamily={vazirmatn.style.fontFamily}
                              >
                                {creator.name}
                              </Typography>
                            </Link>
                          </Box>
                        ))}
                      </Stack>
                    )
                  ) : (
                    <Box width="100%" display="flex" justifyContent="center">
                      <NoGoods />
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          {/* right */}
          <Box flex={1.36} boxSizing="border-box" px="10px" height="100%">
            <Box height="100%" position="relative">
              {/* top */}
              <Box height="40px">
                {/* title */}
                <Box display="flex" height="100%" position="relative">
                  {/* product count */}
                  <Box
                    flex={0.15}
                    height="100%"
                    display="flex"
                    alignItems="center"
                  >
                    <Typography
                      sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      fontFamily={vazirmatn.style.fontFamily}
                    >
                      {products && products.length > 0 ? products.length : 0}
                    </Typography>
                  </Box>
                  {/* title & icon */}
                  <Box
                    flex={1}
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    gap="5px"
                  >
                    {/* title */}
                    <Box display="flex" alignItems="center">
                      <Box display="flex">
                        {/* محصولات */}
                        <Typography
                          sx={{
                            fontFamily: vazirmatn.style.fontFamily,
                            fontSize: "13px",
                            letterSpacing: 0.5,
                            color: "#ff7900",
                          }}
                        >
                          محصولات&nbsp;
                        </Typography>
                        {/* جستجو در */}
                        <Typography
                          sx={{
                            fontFamily: vazirmatn.style.fontFamily,
                            fontSize: "13px",
                            letterSpacing: 0.5,
                          }}
                        >
                          جستجو در
                        </Typography>
                      </Box>
                    </Box>
                    {/* icon */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      pr="5px"
                    >
                      <Search sx={{ fontSize: "24px" }} />
                    </Box>
                  </Box>
                  {/* divider */}
                  <Box
                    role="separator"
                    sx={{
                      bgcolor: "#e7e5e4",
                      position: "absolute",
                      bottom: "0",
                      minHeight: "4%",
                      minWidth: "100%",
                    }}
                  />
                </Box>
              </Box>
              {/* products */}
              <Box pt="15px" mb="20px" dir="rtl" width="100%" height="85%">
                {products !== undefined && products.length > 0 ? (
                  productsLoading ? (
                    // product skeletons
                    <Box
                      display="flex"
                      gap="15px"
                      flexWrap="wrap"
                      width="100%"
                      px="10px"
                    >
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        height="95px"
                        width="380px"
                        sx={{
                          "&::after": {
                            animationDirection: "reverse",
                          },
                          borderRadius: "5px",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        height="95px"
                        width="380px"
                        sx={{
                          "&::after": {
                            animationDirection: "reverse",
                          },
                          borderRadius: "5px",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        height="95px"
                        width="380px"
                        sx={{
                          "&::after": {
                            animationDirection: "reverse",
                          },
                          borderRadius: "5px",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        height="95px"
                        width="380px"
                        sx={{
                          "&::after": {
                            animationDirection: "reverse",
                          },
                          borderRadius: "5px",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        height="95px"
                        width="380px"
                        sx={{
                          "&::after": {
                            animationDirection: "reverse",
                          },
                          borderRadius: "5px",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        height="95px"
                        width="380px"
                        sx={{
                          "&::after": {
                            animationDirection: "reverse",
                          },
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                  ) : productsError ? (
                    <Box className={vazirmatn.className}>{productsError}</Box>
                  ) : (
                    products.map((product) => (
                      <NavSearchProductCard
                        key={product.slug.concat(product.image)}
                        product={product}
                      />
                    ))
                  )
                ) : (
                  <Box width="100%" display="flex" justifyContent="center">
                    <NoGoods />
                  </Box>
                )}
              </Box>
              {/* more */}
              <Box
                display={products && productsLoading ? "none" : "block"}
                position="absolute"
                bottom={products && products.length > 0 ? "0" : "-25px"}
                left="0"
              >
                <Link
                  href={`search?search=${inputValue}`}
                  style={{ margin: 0, padding: 0 }}
                >
                  <Box display="flex" alignItems="center" gap="5px">
                    {/* icon */}
                    <Box display="flex" alignItems="start">
                      <ArrowBackIosNew
                        sx={{ fontSize: "10px", color: "black", opacity: 1 }}
                      />
                    </Box>
                    {/* text */}
                    <Box>
                      <Typography
                        fontFamily={vazirmatn.style.fontFamily}
                        sx={{ fontSize: "12px", color: "inherit" }}
                      >
                        مشاهده نتایج بیشتر
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavSearch;
