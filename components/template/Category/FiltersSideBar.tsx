"use client";
import { vazirmatn } from "@/app/Fonts";
import CustomBreakPoint from "@/theme/CustomBreakPoint";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import mostPapularProductsData from "@/assets/data/mostPapularProducts.json";
import Link from "next/link";
import { TFilterItems, TMostPapularProducts } from "@/utils/types/Category";
import useFilterManagement from "@/hooks/useFilterManagement";

const FiltersSideBar = (props: { filterItems: TFilterItems }) => {
  const { filterItems } = props;
  const categoryChosenProduct =
    "https://dashboard.dcakala.com/public/images/side-banner/slider/2024/10/video-door-phone-ns-n_original.webp";
  const mostPapularProducts: TMostPapularProducts[] = mostPapularProductsData;
  const productsPerSlide = 3;
  const totalProducts = mostPapularProducts.length;

  const [expandedAccordions, setExpandedAccordion] = React.useState<
    Record<string, boolean>
  >({});

  const {
    filters,
    addFiltersToUrl,
    areSearchParamsEmpty,
    deleteFromFilters,
    existsInFilters,
    filterItemsChangeHandler,
    getFilterValuesTitle,
    removeFiltersFromUrl,
  } = useFilterManagement();

  const handleFilterAccordionChange =
    (title: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedAccordion((prevState) => ({
        ...prevState,
        [title]: newExpanded,
      }));
    };

  return (
    <ThemeProvider theme={CustomBreakPoint}>
      <Box className="container">
        <Stack className="wrapper" spacing={1.6}>
          {/* filters */}
          <Stack
            className="filters_wrapper"
            bgcolor="#a4a4a4"
            borderRadius="7px"
            position="relative"
          >
            {/* section title */}
            <Box
              sx={{
                borderStartStartRadius: "7px",
                borderStartEndRadius: "7px",
                boxSizing: "border-box",
                p: "5px",
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontFamily={vazirmatn.style.fontFamily}
                color="#fff"
                fontSize="16px"
              >
                فیلتر محصولات
              </Box>
            </Box>
            {/* filters */}
            <Box
              bgcolor="#fff"
              sx={{
                borderRadius: "7px",
                boxSizing: "border-box",
                py: "7px",
                border: "1px solid #a4a4a4",
              }}
            >
              <Stack>
                {/* filters application buttons */}
                <Box px="7px" position="sticky" top={10} right={0}>
                  <Stack spacing={1}>
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
                          textTransform: "none",
                          "&.Mui-disabled": { bgcolor: "#a4a4a4" },
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
                          display: areSearchParamsEmpty() ? "none" : "block",
                          bgcolor: "#ff0000",
                          color: "#fff",
                          fontFamily: vazirmatn.style.fontFamily,
                          textTransform: "none",
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
                {/* filter chips */}
                <Box
                  maxWidth="285px"
                  minHeight="30px"
                  display="flex"
                  flexWrap="wrap"
                  p="5px"
                  mt="5px"
                  gap="10px"
                  dir="rtl"
                >
                  {getFilterValuesTitle()?.map((filterValue) => (
                    <Chip
                      key={filterValue}
                      onDelete={() => deleteFromFilters(filterValue)}
                      dir="rtl"
                      sx={{
                        // self styles
                        "&:hover": {
                          cursor: "pointer",
                        },
                        //   delete icon styles
                        "& .MuiSvgIcon-root": {
                          margin: "none",
                          marginRight: "-6px",
                          marginLeft: "5px",
                        },
                        // chip content styles
                        "& .MuiChip-label": {
                          fontFamily: vazirmatn.style.fontFamily,
                        },
                      }}
                      label={filterValue}
                    />
                  ))}
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
                          onChange={handleFilterAccordionChange(filter.title)}
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
                                        fontFamily: vazirmatn.style.fontFamily,
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
              </Stack>
            </Box>
          </Stack>
          {/* category chosen Product */}
          <Box className="category-chosen-product_wrapper">
            <Box width="100%" height="200px" position="relative">
              <Image
                src={categoryChosenProduct}
                alt="chosen category product"
                style={{ borderRadius: "7px" }}
                fill
              />
            </Box>
          </Box>
          {/* most papular products */}
          <Box className="most-papular-products_container">
            <Box className="_wrapper_" bgcolor="#ff7900" borderRadius="7px">
              <Stack>
                {/* title */}
                <Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontFamily={vazirmatn.style.fontFamily}
                    color="#fff"
                    fontSize="16px"
                    py="3px"
                  >
                    محبوب ترینها
                  </Box>
                </Box>
                {/* content */}
                <Box
                  bgcolor="#fff"
                  border="1px solid #ff7900"
                  boxSizing="border-box"
                  borderRadius="7px"
                  px="10px"
                  pt="10px"
                  maxWidth="285px"
                  position="relative"
                >
                  <Swiper
                    dir="rtl"
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{
                      el: ".swiper-pagination",
                      clickable: true,
                    }}
                    className="swiper"
                    spaceBetween={1}
                    style={{
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    {Array(Math.ceil(totalProducts / productsPerSlide))
                      .fill(null)
                      .map((_, slideIndex) => {
                        return (
                          <SwiperSlide
                            key={`slide-${slideIndex}-${String(
                              import("@/utils/lib/UniqueKey").then((module) =>
                                module.default()
                              )
                            )}`}
                            style={{ height: "100%", width: "100%" }}
                          >
                            <Stack>
                              {mostPapularProducts
                                .slice(
                                  slideIndex * productsPerSlide, // start
                                  (slideIndex + 1) * productsPerSlide // end
                                )
                                .map((product) => (
                                  <>
                                    {/* product card */}
                                    <Box
                                      className="category-ChosenProduct-item_container"
                                      key={`${product.id}-${String(
                                        import("@/utils/lib/UniqueKey").then(
                                          (module) => module.default()
                                        )
                                      )}`}
                                      sx={{
                                        "&:hover": {
                                          "& .productCard-title": {
                                            color: "#ff7900",
                                          },
                                        },
                                      }}
                                    >
                                      <Link href={product.slug}>
                                        <Box
                                          display="flex"
                                          className="_wrapper_"
                                          minHeight="90px"
                                          maxHeight="90px"
                                          width="100%"
                                        >
                                          {/* img */}
                                          <Box
                                            width="90px"
                                            height="90px"
                                            position="relative"
                                          >
                                            <Image
                                              src={product.image}
                                              alt="product-picture"
                                              fill
                                            />
                                          </Box>
                                          {/* title */}
                                          <Box
                                            className="productCard-title"
                                            flex={1}
                                            display="flex"
                                            justifyContent="end"
                                            alignItems="center"
                                            fontSize="14px"
                                            sx={{
                                              transition: "color ease-in 100ms",
                                            }}
                                          >
                                            {product.title}
                                          </Box>
                                        </Box>
                                      </Link>
                                    </Box>
                                    {/* divider */}
                                    <Divider />
                                  </>
                                ))}
                            </Stack>
                          </SwiperSlide>
                        );
                      })}
                    {/* swiper pagination */}
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      position="relative"
                      top="-20px"
                      zIndex={99999}
                      sx={{
                        "& .swiper-pagination-bullet": {
                          "&-active": {
                            bgcolor: "#ff7900",
                          },
                          bgcolor: "#cccccc",
                          width: "7px",
                          height: "7.3px",
                          borderRadius: 9999,
                          display: "block",
                          "&:hover": {
                            cursor: "pointer",
                          },
                        },
                      }}
                    >
                      <Box
                        className="swiper-pagination"
                        display="flex"
                        justifyContent="center"
                        gap="5px"
                      />
                    </Box>
                  </Swiper>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default FiltersSideBar;
