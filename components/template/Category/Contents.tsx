"use client";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  MenuItem,
  Pagination,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CategoryChosenBrandsItemT,
  CategoryVariousTypesItemT,
  FilterValueT,
  TCategoryChosenBrands,
  TCategoryImportantProducts,
  TCategoryVariousTypes,
  TFilter,
  TFilterItems,
} from "@/utils/types/Category";
import ProductCard from "@/components/molecules/ProductCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Grid from "@mui/material/Grid2";
import CustomBreakPoint from "@/theme/CustomBreakPoint";
import { vazirmatn } from "@/app/Fonts";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clear,
  ExpandMore,
  Tune,
  ViewList,
  ViewModule,
} from "@mui/icons-material";
import { useSearchParams, useRouter } from "next/navigation";
import getUniqueKey from "@/utils/lib/UniqueKey";
import { ProductCardLayoutT, TProduct } from "@/utils/types/Product";

type CategoryTypesCardT = {
  type: CategoryVariousTypesItemT;
};

type CategoryChosenBrandsCardT = {
  brand: CategoryChosenBrandsItemT;
};

const CategoryTypesCard = ({ type }: CategoryTypesCardT) => {
  return (
    <Box
      sx={{
        "&:hover": { "& .type-card-text-below-border": { width: "90px" } },
      }}
    >
      <Link href={type.slug}>
        <Box
          bgcolor={{ xs: "transparent", mobile: "#ff7900" }}
          height="240px"
          display="flex"
          flexDirection="column"
          borderRadius="7px"
          position="relative"
        >
          {/* image */}
          <Box
            zIndex={12}
            position="absolute"
            top={0}
            height="75%"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={type.image}
              alt="category-type-image"
              width={150}
              height={150}
            />
          </Box>
          {/* title & below border */}
          <Box
            zIndex={11}
            position="absolute"
            bottom={0}
            height="46%"
            width="100%"
            bgcolor="#fff"
            borderRadius="7px"
            boxSizing="border-box"
            mb=".1px"
            sx={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: { xs: "transparent", mobile: "#ff7900" },
            }}
          >
            <Box
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {/* text */}
              <Typography
                fontFamily={vazirmatn.style.fontFamily}
                fontSize={{ xs: "14px", mobile: "16px" }}
                fontWeight={{ xs: "auto", mobile: 600 }}
              >
                {type.title}
              </Typography>
              {/* below border */}
              <Box mt="7px" display={{ xs: "none", mobile: "block" }}>
                <Box
                  width="35px"
                  minHeight="1.5px"
                  bgcolor="#ff7900"
                  className="type-card-text-below-border"
                  sx={{
                    transition: "width ease-in 100ms",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

const ChosenBrandsCard = ({ brand }: CategoryChosenBrandsCardT) => {
  const [isBrandHovered, setBrandHovered] = React.useState<boolean>(false);

  return (
    <Link href={brand.slug}>
      <Box
        component={motion.div}
        layoutId="chosen-brands-card"
        bgcolor="#fff"
        borderRadius=".5em"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="40px"
        onMouseEnter={() => setBrandHovered(true)}
        onMouseLeave={() => setBrandHovered(false)}
        position="relative"
      >
        <AnimatePresence>
          {!isBrandHovered ? (
            <Box>{brand.title}</Box>
          ) : (
            <Box
              component={motion.div}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.45,
              }}
            >
              <Image
                src={brand.image}
                alt="chosen-brand-image"
                fill
                objectFit="cover"
                style={{ borderRadius: ".5em" }}
              />
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </Link>
  );
};

const Contents = ({
  importantProducts,
  categoryTypes,
  chosenBrands,
  consiceFilterOptions,
  filterItems,
  categoryProducts,
}: {
  importantProducts: TCategoryImportantProducts;
  categoryTypes: TCategoryVariousTypes;
  chosenBrands: TCategoryChosenBrands;
  consiceFilterOptions: string[];
  filterItems: TFilterItems;
  categoryProducts: TProduct[];
}) => {
  const categoryProductsTotalLength = 26;

  const [productsFeedLayout, setProductsFeedLayout] =
    React.useState<ProductCardLayoutT>("grid");

  const [isFiltersDrawerOpen, setFiltersDrawerOpen] =
    React.useState<boolean>(false);

  const [filters, setFilters] = React.useState<TFilter[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [expandedAccordions, setExpandedAccordion] = React.useState<
    Record<string, boolean>
  >({});

  const filterItemsChangeHandler = (
    newItem: FilterValueT & Pick<TFilter, "brandName">
  ) => {
    setFilters((prevFilters) => {
      const newFilters = prevFilters.map((filter) => {
        if (filter.brandName === newItem.brandName)
          return {
            ...filter,
            values: filter.values.find((val) => val.valueId === newItem.valueId)
              ? filter.values.filter((val) => val.valueId !== newItem.valueId)
              : [
                  ...filter.values,
                  { valueTitle: newItem.valueTitle, valueId: newItem.valueId },
                ],
          };
        return filter;
      });

      // Check if an object with the brand exists
      const existingBrandIndex = newFilters.findIndex(
        (f) => f.brandName === newItem.brandName
      );

      // check if the values is empty
      if (existingBrandIndex === -1) {
        return [
          ...newFilters,
          {
            brandName: newItem.brandName,
            values: [
              {
                valueTitle: newItem.valueTitle,
                valueId: newItem.valueId,
              },
            ],
          },
        ];
      }

      return newFilters.filter((f) => f.values.length > 0);
    });
  };

  const existsInFilters = (targetValue: string, targetBrandName: string) => {
    if (!filters || !Array.isArray(filters)) return;
    for (const filter of filters) {
      if (filter.brandName === targetBrandName) {
        return filter.values.some((val) => val.valueTitle === targetValue);
      }
    }
    return false;
  };

  const getFilterValuesTitle = (): string[] | undefined => {
    if (!filters || !Array.isArray(filters)) return;
    const data: string[] = [];
    filters.forEach((f) => f.values.forEach((v) => data.push(v.valueTitle)));
    return data;
  };

  const deleteFromFilters = (valueTitle: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters.map((f) => ({
        ...f,
        values: f.values.filter((v) => v.valueTitle !== valueTitle),
      }));
      return updatedFilters.filter((f) => f.values.length > 0);
    });
  };

  const getAllFiltersAsSearchParams = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    filters.forEach((filter) => {
      filter.values.forEach((value, index) => {
        const paramKey = `attr[${encodeURIComponent(
          filter.brandName.split(" ").join("_")
        )}][${index}]`;
        newSearchParams.append(paramKey, value.valueId.toString());
      });
    });
    newSearchParams.set("page", "1");

    return newSearchParams;
  };

  const addFiltersToUrl = () => {
    // {
    //   "attr[برند-سازنده_3][0]": "167",
    //   "attr[برند-سازنده_3][1]": "169",
    //   "page": "1"
    // }
    router.push(window.location + "?" + getAllFiltersAsSearchParams());
  };

  const removeFiltersFromUrl = () => {
    const urlParts = window.location.toString().split("?");
    router.push(urlParts[0]);
    setFilters([]);
  };

  const areSearchParamsEmpty = () => {
    return searchParams.size === 0;
  };

  const handleAccordionChange =
    (title: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedAccordion((prevState) => ({
        ...prevState,
        [title]: newExpanded,
      }));
    };

  return (
    <Stack>
      {/* important products */}
      <Box
        height={{ xs: "380px", sm: "410px", md: "470px" }}
        width="100%"
        position="relative"
        display="flex"
        justifyContent="center"
        overflow="hidden"
      >
        {/* swiper wrapper */}
        <Box
          width="100%"
          height="107.5%"
          borderRadius="7px"
          overflow="hidden"
          sx={{
            backgroundImage: "linear-gradient(to bottom, #CED0D0, white)",
          }}
        >
          {/* swiper */}
          <Box
            mt="85px"
            height="80.5%"
            width="100%"
            overflow="hidden"
            px={{ xs: "5px", md: "20px" }}
            pb={{ xs: "20px", md: 0 }}
            boxSizing="border-box"
            // swiper components styles
            sx={{
              "& .swiper-button-prev, .swiper-button-next": {
                color: "#ff7900",
              },
              "& .swiper-button-disabled": {
                display: "none",
              },
            }}
          >
            <Swiper
              dir="rtl"
              style={{
                height: "94%",
                overflowY: "visible",
              }}
              slidesPerView={4}
              spaceBetween={18}
              modules={[Navigation]}
              className="swiper"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                1150: {
                  slidesPerView: 4,
                },
                1000: {
                  slidesPerView: 3,
                },
                700: {
                  spaceBetween: 18,
                },
                500: {
                  slidesPerView: 2.5,
                  spaceBetween: 4,
                },
                0: {
                  spaceBetween: 1,
                  slidesPerView: 1.9,
                },
              }}
            >
              {importantProducts.items.map((product) => (
                <SwiperSlide
                  key={`${product.slug}-${String(
                    import("@/utils/lib/UniqueKey").then((module) =>
                      module.default()
                    )
                  )}`}
                >
                  <ProductCard
                    product={product}
                    minWidth="auto"
                    minHeight="100%"
                    sx={{
                      "@media (max-width: 500px)": {
                        "&.productCard-wrapper": {
                          borderRadius: 0,
                        },
                      },
                    }}
                  >
                    <ProductCard.TopDetails
                      sx={{
                        "&.productCard-timer_container": {
                          pt: "7px",
                          pl: "5px",
                        },
                      }}
                    />
                    <ProductCard.Image />
                    <ProductCard.Colors
                      sx={{
                        "& .productCard-colors-placeholder": {
                          minHeight: "15px",
                        },
                      }}
                    />
                    <ProductCard.FastExpress
                      sx={{
                        "& .productCard-fastExpress-placeholder": {
                          minHeight: "15px",
                        },
                      }}
                    />
                    <ProductCard.Title />
                    <ProductCard.Price />
                  </ProductCard>
                </SwiperSlide>
              ))}
              {/* swiper navigation buttons */}
              <Box className="swiper-button-next" />
              <Box className="swiper-button-prev" />
            </Swiper>
          </Box>
        </Box>
        {/* absolute title */}
        <Box
          position="absolute"
          top="-60px"
          height="120px"
          width="78%"
          bgcolor="#fff"
          borderRadius="99999px"
          display="flex"
          justifyContent="center"
          alignItems="end"
          boxSizing="border-box"
          py="15px"
          fontSize={{ xs: "14px", md: "17px" }}
          fontWeight={600}
        >
          {importantProducts.title}
        </Box>
      </Box>
      {/* product types */}
      <Box mt="120px" display="flex" flexDirection="column" alignItems="end">
        {/* title */}
        <Box
          width={{ xs: "33%", md: "22%" }}
          bgcolor="rgb(164 164 164/1)"
          p="10px"
          boxSizing="border-box"
          color="#fff"
          fontSize={{ xs: "13px", md: "16px" }}
          display="flex"
          justifyContent="center"
          sx={{
            borderStartStartRadius: "1.2rem",
            borderStartEndRadius: "1.2rem",
          }}
        >
          {categoryTypes.title}
        </Box>
        {/* content */}
        <ThemeProvider theme={CustomBreakPoint}>
          <Box
            p="20px"
            boxSizing="border-box"
            dir="rtl"
            width="100%"
            border="1px solid #a4a4a4"
            borderRadius="7px"
            sx={{
              borderStartStartRadius: 0,
            }}
          >
            <Grid container spacing={{ xs: 0.5, mobile: 4 }}>
              {categoryTypes.items.map((type) => (
                <Grid
                  key={type.slug.concat(type.image)}
                  size={{ xs: 6, mobile: 4, lg: 3 }}
                >
                  <CategoryTypesCard
                    key={String(
                      import("@/utils/lib/UniqueKey").then((module) =>
                        module.default()
                      )
                    )}
                    type={type}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </ThemeProvider>
      </Box>
      {/* chosen brands */}
      <Box mt="20px">
        <Box display="flex" flexDirection="column" alignItems="end">
          {/* section title */}
          <ThemeProvider theme={CustomBreakPoint}>
            <Box
              width={{ xs: "100%", mobile: "28%", lg: "22%" }}
              height="40px"
              px="7px"
              boxSizing="border-box"
              bgcolor="#ced0d0"
              display="flex"
              justifyContent={{ xs: "end", mobile: "center" }}
              alignItems="center"
              sx={{
                borderStartStartRadius: ".5em",
                borderStartEndRadius: ".5em",
              }}
            >
              <Typography
                fontFamily={vazirmatn.style.fontFamily}
                fontSize={{
                  xs: "14px",
                  md: "15px",
                  lg: "15.5px",
                }}
              >
                {chosenBrands.title}
              </Typography>
            </Box>
          </ThemeProvider>
          {/* contents */}
          <Box
            width="100%"
            bgcolor="#ced0d0"
            p="15px"
            boxSizing="border-box"
            dir="rtl"
            sx={{
              borderStartStartRadius: 0,
              borderStartEndRadius: { xs: 0, md: ".5em" },
              borderEndStartRadius: ".5em",
              borderEndEndRadius: ".5em",
            }}
          >
            <ThemeProvider theme={CustomBreakPoint}>
              {/* grid layout */}
              <Box display={{ xs: "none", md: "block" }}>
                <Grid container spacing={2}>
                  {chosenBrands.items.map((brand) => (
                    <Grid
                      key={String(
                        import("@/utils/lib/UniqueKey").then((module) =>
                          module.default()
                        )
                      )}
                      size={1.7}
                    >
                      <ChosenBrandsCard brand={brand} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              {/* swiper layout */}
              <Box
                display={{ xs: "block", md: "none" }}
                // swiper navigation buttons styles
                sx={{
                  "& .chosen-brands-swiper-button-prev, .chosen-brands-swiper-button-next":
                    {
                      color: "#ff7900",
                    },
                  "&.swiper-button-disabled": {
                    display: "none",
                  },
                }}
              >
                <Swiper
                  dir="rtl"
                  style={{
                    height: "100%",
                  }}
                  slidesPerView={4}
                  spaceBetween={18}
                  modules={[Navigation]}
                  className="chosen-brands-swiper"
                  navigation={{
                    nextEl: ".chosen-brands-swiper-button-next",
                    prevEl: ".chosen-brands-swiper-button-prev",
                  }}
                  breakpoints={{
                    1150: {
                      slidesPerView: 4,
                    },
                    1000: {
                      slidesPerView: 3,
                    },
                    700: {
                      spaceBetween: 18,
                    },
                    500: {
                      slidesPerView: 2.5,
                      spaceBetween: 4,
                    },
                    0: {
                      spaceBetween: 1,
                      slidesPerView: 1.9,
                    },
                  }}
                >
                  {chosenBrands.items.map((brand) => (
                    <SwiperSlide
                      key={`${brand.slug}-${String(
                        import("@/utils/lib/UniqueKey").then((module) =>
                          module.default()
                        )
                      )}`}
                    >
                      <ChosenBrandsCard brand={brand} />
                    </SwiperSlide>
                  ))}
                  {/* swiper navigation buttons */}
                  <Box className="chosen-brands-swiper-button-next" />
                  <Box className="chosen-brands-swiper-button-prev" />
                </Swiper>
              </Box>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
      {/* products feed */}
      <Box mt="45px">
        <Stack>
          {/* toolbox */}
          <ThemeProvider theme={CustomBreakPoint}>
            <Box
              display="flex"
              justifyContent={{ xs: "space-between", mobile: "end" }}
              gap="15px"
              dir="ltr"
            >
              {/* products feed layout buttons & laptop filters */}
              <Box
                flex={1}
                order={{ xs: 2, mobile: 1 }}
                display="flex"
                justifyContent={{ xs: "space-between", mobile: "end" }}
                alignItems="center"
              >
                {/* filter trigger */}
                <Box
                  order={{ xs: 2, mobile: 1 }}
                  display={{ xs: "block", lg: "none" }}
                  color="inherit"
                  className="laptop-filters"
                  onClick={() => setFiltersDrawerOpen(true)}
                  dir="ltr"
                  sx={{
                    pl: "15px",
                    py: "2px",
                    textTransform: "none",
                    boxSizing: "border-box",
                    border: "1px solid #d7d7d7",
                    borderRadius: "7px",
                    bgcolor: "#fff",
                  }}
                >
                  <Stack spacing={1} direction="row" alignItems="center">
                    {/* text */}
                    <Typography
                      fontFamily={vazirmatn.style.fontFamily}
                      fontSize=".9em"
                    >
                      فیلترها
                    </Typography>
                    {/* icon */}
                    <Box display="flex" alignItems="end">
                      <IconButton onClick={() => setFiltersDrawerOpen(true)}>
                        <Tune />
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>
                {/* filter drawer */}
                <Drawer
                  sx={{
                    "& .MuiPaper-root": {
                      bgcolor: "#f8f8f8",
                      overflow: "visible",
                    },
                  }}
                  anchor="bottom"
                  open={isFiltersDrawerOpen}
                  onClose={() => setFiltersDrawerOpen(false)}
                >
                  <Box
                    width="100%"
                    height="100svh"
                    sx={{
                      overflowY: "scroll",
                      position: "relative",
                    }}
                    dir="rtl"
                  >
                    {/* header */}
                    <Box
                      dir="ltr"
                      bgcolor="#fff"
                      borderBottom="1px solid #e5e7eb"
                      p="10px"
                      zIndex={1000}
                      position="sticky"
                    >
                      <Stack>
                        {/* application buttons */}
                        <Box
                          width="100%"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box>
                            <Stack direction="row" spacing={1}>
                              {/* apply filters */}
                              <Box>
                                <Button
                                  onClick={addFiltersToUrl}
                                  fullWidth
                                  color="warning"
                                  disabled={filters.length > 0 ? false : true}
                                  sx={{
                                    bgcolor: "#ff7900",
                                    color: "#fff",
                                    fontFamily: vazirmatn.style.fontFamily,
                                    fontWeight: 300,
                                    textTransform: "none",
                                    px: "13px",
                                    "&.Mui-disabled": {
                                      bgcolor: "#a4a4a4",
                                      color: "#fff",
                                    },
                                    "&:hover": {
                                      boxShadow: 3,
                                      animationDuration: "1000ms",
                                    },
                                  }}
                                >
                                  اعمال فیلتر
                                </Button>
                              </Box>
                              {/* remove filters */}
                              <Box>
                                <Button
                                  onClick={removeFiltersFromUrl}
                                  fullWidth
                                  color="error"
                                  sx={{
                                    display: areSearchParamsEmpty()
                                      ? "none"
                                      : "block",
                                    bgcolor: "#ff0000",
                                    color: "#fff",
                                    fontFamily: vazirmatn.style.fontFamily,
                                    fontWeight: 300,
                                    textTransform: "none",
                                    px: "13px",
                                    "&:hover": {
                                      boxShadow: 3,
                                      animationDuration: "1000ms",
                                    },
                                  }}
                                >
                                  حذف فیلتر
                                </Button>
                              </Box>
                            </Stack>
                          </Box>
                          {/* close */}
                          <Box>
                            <IconButton
                              onClick={() => setFiltersDrawerOpen(false)}
                            >
                              <Clear />
                            </IconButton>
                          </Box>
                        </Box>
                        {/* selected filters */}
                        <Box
                          maxHeight="104px"
                          display={filters.length > 0 ? "flex" : "none"}
                          flexDirection="column"
                          p="5px"
                          mt="10px"
                          gap="8px"
                          dir="rtl"
                          sx={{
                            overflowY: "scroll",
                          }}
                        >
                          {getFilterValuesTitle()?.map((filterValue) => (
                            <Box
                              key={filterValue}
                              dir="rtl"
                              height="30px"
                              bgcolor="#f1f1f1"
                              borderRadius="5px"
                              py="7px"
                              px="10px"
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              fontFamily={vazirmatn.style.fontFamily}
                            >
                              {/* text */}
                              <Box
                                fontSize="12px"
                                fontWeight={300}
                                color="#000"
                              >
                                {filterValue}
                              </Box>
                              {/* close button */}
                              <Box>
                                <IconButton
                                  onClick={() => deleteFromFilters(filterValue)}
                                >
                                  <Clear sx={{ fontSize: "20px" }} />
                                </IconButton>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Stack>
                    </Box>
                    {/* filters */}
                    <Box>
                      {filterItems.map((filter) => (
                        <>
                          <Box
                            key={filter.title.concat(Math.random().toString())}
                            className="filter-item"
                          >
                            <Accordion
                              expanded={expandedAccordions[filter.title]}
                              onChange={handleAccordionChange(filter.title)}
                              dir="rtl"
                              sx={{
                                boxShadow: "none",
                                "--Paper-shadow": "none",
                              }}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="filters-accordion-content"
                                id="filters-accordion-header"
                              >
                                <Box>
                                  <Typography
                                    fontFamily={vazirmatn.style.fontFamily}
                                    fontSize="14px"
                                  >
                                    {filter.title}
                                  </Typography>
                                </Box>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Stack className="filter-children-wrapper">
                                  {filter.items.map((subItem) => (
                                    <Box
                                      key={subItem.title.concat(
                                        Math.random().toString()
                                      )}
                                    >
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={existsInFilters(
                                              subItem.title,
                                              filter.title
                                            )}
                                            name={subItem.title}
                                            id={subItem.title.concat(
                                              subItem.id.toString()
                                            )}
                                            size="small"
                                            color="warning"
                                            onChange={() =>
                                              filterItemsChangeHandler({
                                                valueTitle: subItem.title,
                                                valueId: subItem.id,
                                                brandName: filter.title,
                                              })
                                            }
                                            sx={{
                                              "&.MuiCheckbox-root": { pr: 0 },
                                            }}
                                          />
                                        }
                                        label={subItem.title}
                                        labelPlacement="end"
                                        sx={{
                                          "& .MuiFormControlLabel-label": {
                                            fontFamily:
                                              vazirmatn.style.fontFamily,
                                            fontSize: "13px",
                                          },
                                        }}
                                      />
                                    </Box>
                                  ))}
                                </Stack>
                              </AccordionDetails>
                            </Accordion>
                          </Box>
                          <Divider variant="middle" />
                        </>
                      ))}
                    </Box>
                  </Box>
                </Drawer>
                {/* products feed layout buttons */}
                <ButtonGroup
                  variant="outlined"
                  color="info"
                  dir="ltr"
                  sx={{
                    order: { xs: 1, mobile: 2 },
                  }}
                >
                  {/* block layout button */}
                  <Box>
                    <Button
                      color="inherit"
                      className="block"
                      onClick={() => setProductsFeedLayout("block")}
                      sx={{
                        minWidth: "10px",
                        p: 0,
                        m: 0,
                        py: "10px",
                        border: "1px solid #d7d7d7",
                        bgcolor:
                          productsFeedLayout === "block" ? "#ebebeb" : "#fff",
                        "&:hover": {
                          bgcolor:
                            productsFeedLayout === "block"
                              ? "#e0e0e0"
                              : "#f5f5f5",
                        },
                      }}
                    >
                      <ViewList
                        sx={{
                          color:
                            productsFeedLayout === "block" ? "#000" : "#707070",
                        }}
                      />
                    </Button>
                  </Box>
                  {/* grid layout button */}
                  <Box>
                    <Button
                      color="inherit"
                      className="grid"
                      onClick={() => setProductsFeedLayout("grid")}
                      sx={{
                        minWidth: "10px",
                        p: 0,
                        m: 0,
                        py: "10px",
                        border: "1px solid #d7d7d7",
                        bgcolor:
                          productsFeedLayout === "grid" ? "#ebebeb" : "#fff",
                        "&:hover": {
                          bgcolor:
                            productsFeedLayout === "grid"
                              ? "#e0e0e0"
                              : "#f5f5f5",
                        },
                      }}
                    >
                      <ViewModule
                        sx={{
                          color:
                            productsFeedLayout === "grid" ? "#000" : "#707070",
                        }}
                      />
                    </Button>
                  </Box>
                </ButtonGroup>
              </Box>
              {/* consice filtering drop down */}
              <Box
                flex={{ xs: 0.9, mobile: 0.28, smL3: 0.2 }}
                order={{ xs: 1, mobile: 2 }}
                display={{ xs: "none", sm: "flex" }}
                justifyContent={{ xs: "start", mobile: "end" }}
                sx={{
                  "& .MuiInputLabel-formControl": {
                    fontFamily: vazirmatn.style.fontFamily,
                    right: "-40px",
                  },
                  "& .MuiInput-input": {
                    fontFamily: vazirmatn.style.fontFamily,
                  },
                  "& .MuiSelect-icon": {
                    position: "relative",
                  },
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      width: { xs: "18.5ch", mobile: "19ch" },
                    },
                  }}
                  autoComplete="off"
                >
                  <TextField
                    label="نمایش براساس"
                    select
                    defaultValue={consiceFilterOptions[0]}
                    dir="rtl"
                    color="warning"
                    variant="standard"
                  >
                    {/* options menu */}
                    {consiceFilterOptions.map((option) => (
                      <MenuItem
                        key={`${String(
                          import("@/utils/lib/UniqueKey").then((module) =>
                            module.default()
                          )
                        )}`}
                        dir="rtl"
                        value={option}
                        id={option}
                      >
                        <Typography
                          fontFamily={vazirmatn.style.fontFamily}
                          fontSize="14px"
                        >
                          {option}
                        </Typography>
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
          {/* products */}
          <Box mt="20px">
            <Box className="_wrapper_" dir="rtl">
              <ThemeProvider theme={CustomBreakPoint}>
                <Grid container spacing={1}>
                  {categoryProducts.map((p) => (
                    <Grid
                      key={getUniqueKey()}
                      size={
                        productsFeedLayout === "grid"
                          ? { xs: 6, sm: 4, md: 3 }
                          : 12
                      }
                    >
                      <ProductCard
                        layout={productsFeedLayout}
                        product={p}
                        minHeight={
                          productsFeedLayout === "grid" ? "480px" : "200px"
                        }
                        sx={{
                          "@media (max-width: 640px)": {
                            "&:hover": {
                              boxShadow: "none",
                            },
                            border: "none",
                            borderRadius: "0",
                            borderBottom: "1px solid #e4e6ea",
                          },
                        }}
                      >
                        <ProductCard.TopDetails
                          sx={{
                            "&.productCard-timer_container": {
                              pt: "7px",
                              pl: "5px",
                            },
                          }}
                        />
                        <ProductCard.Image
                          flex={0.2}
                          sx={{
                            "@media (max-width: 650px)": {
                              "& .productCard-video , & .productCard-image": {
                                width:
                                  productsFeedLayout === "grid"
                                    ? "130px"
                                    : "auto",
                                height:
                                  productsFeedLayout === "grid"
                                    ? "130px"
                                    : "auto",
                              },
                            },
                            "@media (max-width: 600px)": {
                              "& .productCard-video , & .productCard-image": {
                                width:
                                  productsFeedLayout === "grid"
                                    ? "auto"
                                    : "100px",
                                height:
                                  productsFeedLayout === "grid"
                                    ? "auto"
                                    : "100px",
                              },
                            },
                            "@media (max-width: 500px)": {
                              "& .productCard-video , & .productCard-image": {
                                width:
                                  productsFeedLayout === "grid"
                                    ? "auto"
                                    : "50px",
                                height:
                                  productsFeedLayout === "grid"
                                    ? "auto"
                                    : "50px",
                              },
                            },
                          }}
                        />
                        {/* color & fast express & title & price container */}
                        <Stack
                          flex={0.9}
                          direction={
                            productsFeedLayout === "grid" ? "column" : "row"
                          }
                          alignItems="center"
                          justifyContent="start"
                        >
                          {/* colors and fast express and title container */}
                          <Stack
                            direction="column"
                            justifyContent="center"
                            flex={1}
                          >
                            {/* colors and fast express container */}
                            <Stack
                              order={productsFeedLayout === "grid" ? 1 : 2}
                              justifyContent={
                                productsFeedLayout === "grid"
                                  ? "space-between"
                                  : "start"
                              }
                              mt={
                                productsFeedLayout === "grid" ? "70px" : "20px"
                              }
                              direction={
                                productsFeedLayout === "grid" ? "row" : "column"
                              }
                            >
                              <ProductCard.Colors
                                sx={{
                                  "& .productCard-colors-placeholder": {
                                    minHeight:
                                      productsFeedLayout === "grid"
                                        ? "55px"
                                        : 0,
                                  },
                                }}
                              />
                              <ProductCard.FastExpress />
                            </Stack>
                            <ProductCard.Title
                              order={productsFeedLayout === "grid" ? 2 : 1}
                            />
                          </Stack>
                          {/* price */}
                          <ProductCard.Price
                            order={3}
                            flex={0.3}
                            overflow="visible"
                          />
                        </Stack>
                      </ProductCard>
                    </Grid>
                  ))}
                </Grid>
              </ThemeProvider>
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* products pagination */}
      <Box mt="20px">
        <Box
          display="flex"
          justifyContent="center"
          dir="rtl"
          sx={{
            "& .MuiPaginationItem-icon": {
              transform: "rotate(-180deg)",
            },
            "& .MuiPaginationItem-outlined": {
              fontFamily: vazirmatn.style.fontFamily,
              pt: "3px",
            },
          }}
        >
          <Pagination
            count={categoryProductsTotalLength}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Box>
      {/* category explanation */}
      <Box mt="35px">
        <Box>category explanation</Box>
      </Box>
    </Stack>
  );
};

export default Contents;
