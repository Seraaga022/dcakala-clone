"use server";
import PageDivider from "@/components/atoms/PageDivider";
import { Box, Container, Skeleton } from "@mui/material";
import { vazirmatn } from "../Fonts";
import dynamic from "next/dynamic";
import Contents from "@/components/templates/Category/Contents";
import {
  TCategoryChosenBrands,
  TCategoryImportantProducts,
  TCategoryVariousTypes,
  TFilterItems,
  TUrlPath,
} from "@/utils/types/Category";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import { TProduct } from "@/utils/types/Product";
import { categoryPageProductsData } from "@/assets/data/categoryPageProducts";
import "swiper/css";
import "swiper/css/navigation";
import { Suspense } from "react";
const FiltersSideBar = dynamic(
  () => import("@/components/templates/Category/FiltersSideBar"),
  {
    ssr: false,
    loading: () => (
      <Box>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="600px"
        />
      </Box>
    ),
  }
);

interface Props {
  params: string;
}

const CategoryPage = ({ params }: Props) => {
  console.log(params);
  const urlPath: TUrlPath[] = [
    { title: "آیفون تصویری قیمت، فروش و نصب", slug: "video-door-phone" },
  ];
  const currentPage: TUrlPath = urlPath[urlPath.length - 1];
  const filterItems: TFilterItems = [
    {
      title: "برند سازنده",
      items: [
        { title: "دیگر برندها", id: 174192192 },
        { title: "سیماران Simaran", id: 699870606 },
        { title: "داهوا Dahua", id: 1570769897 },
      ],
    },
    {
      title: "اندازه صفحه نمایش",
      items: [
        { title: "2.4 اینچ", id: 1352379819 },
        { title: "3.5 اینچ", id: 2708102864 },
        { title: "4 اینچ", id: 2577733365 },
      ],
    },
    {
      title: "as سازنده",
      items: [
        { title: "sds برندها", id: 1371090312 },
        { title: "ass Simaran", id: 3920443244 },
        { title: "داهوا ss", id: 1052429561 },
      ],
    },
    {
      title: "212 صفحه نمایش",
      items: [
        { title: "2.4 سی", id: 3537363059 },
        { title: "شس.5 اینچ", id: 1541166509 },
        { title: "4 22", id: 3949148095 },
      ],
    },
  ];
  const importantProducts: TCategoryImportantProducts = {
    title: "پرفروش ترین آیفون های تصویری",
    items: [
      {
        id: 0,
        title: "آیفون تصویری تابا TVD-3070 سفید 7 اینچ با حافظه",
        price: 5900000,
        image:
          "https://dashboard.dcakala.com/public/images/product/taba-3070/2024/08/taba-3070-video-door-new-1_medium.webp",
        slug: "video-door-phone/taba/taba-3070.html",
        discountNumber: 90,
      },
      {
        id: 1,
        title: "ریموت بتا 2007",
        price: 140000,
        image:
          "https://dashboard.dcakala.com/public/images/product/beta-remote-2007/2024/08/beta-remote-2007_medium.webp",
        slug: "remote/beta/beta-remote-2007.html",
      },
      {
        id: 2,
        title: "جک درب اتوماتیک فک مدل 412",
        price: 42000000,
        image:
          "https://dashboard.dcakala.com/public/images/product/faac-412/2024/08/faac-automatic-gate-412-package_medium.webp",
        slug: "automatic-gate/faac/faac-412.html",
      },
      {
        id: 3,
        title: "قفل برقی سیزا مدل الکتریکا کلید کامپیوتری",
        price: 8950000,
        image:
          "https://dashboard.dcakala.com/public/images/product/cisa-elettrika-electric-rim-lock-bilateral-keys/2024/08/cisa-elettrika-electric-rim-lock-bilateral-keys-front_medium.webp",
        slug: "electric-lock/cisa-elettrika-electric-rim-lock-bilateral-keys.html",
      },
      {
        id: 4,
        title: "سیستم ارتباط داخلی(اینترکام) یک به یک سیماران",
        price: 772000,
        image:
          "https://dashboard.dcakala.com/public/images/product/simaran-1-to-1/2024/08/simaran-intercome-1-to-1_medium.webp",
        slug: "intercome/intercome-simaran/simaran-1-to-1.html",
      },
      {
        id: 5,
        title: "آیفون تصویری سوزوکی SZ-413 بدون حافظه 4.3 اینچی",
        price: 1716000,
        image:
          "https://dashboard.dcakala.com/public/images/product/suzuki-sz-413/2024/09/suzuki-video-door-phone-sz-413-new_medium.webp",
        slug: "video-door-phone/suzuki/suzuki-sz-413.html",
      },
      {
        id: 6,
        title: "آرامبند فاتلس مدل D55 در آهنی",
        price: 1760000,
        image:
          "https://dashboard.dcakala.com/public/images/product/fateless-door-closer-d55/2024/08/fateless-door-closer-d-55-features-01_medium.webp",
        slug: "door-closer/fateless-door-closer-d55.html",
      },
      {
        id: 7,
        title: "آنتن هوایی شاخه ای آنتن کار 44شاخه",
        price: 690000,
        image:
          "https://dashboard.dcakala.com/public/images/product/antenkar-abu44/2024/08/antenkar-central-antenna-abu44_medium.webp",
        slug: "central-antenna/antenkar-abu44.html",
      },
    ],
  };
  const categoryTypes: TCategoryVariousTypes = {
    title: "انواع آیفون تصویری",
    items: [
      {
        title: "پکیج آیفون تصویری",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/04/2024/07/2024/07/2024/07/2024/09/video-door-phone-package-deskttop_original.webp",
        slug: "video-door-phone/package",
      },
      {
        title: "آیفون تصویری ایرانی",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/07/2024/07/2024/09/iranian-video-door-phone_original.webp",
        slug: "video-door-phone/iranian-video-door-phone",
      },
      {
        title: "آیفون تصویری خارجی",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/07/2024/09/foreign-manufactured-video-door-phone_original.webp",
        slug: "video-door-phone/foreign-manufactured",
      },
      {
        title: "آیفون تصویری ارزان",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/04/2024/07/2024/07/2024/07/2024/07/2024/09/cheap-video-doorr-phone-desktop_original.webp",
        slug: "video-door-phone?%D8%A8%D8%B1%D8%A7%D8%B3%D8%A7%D8%B3-%D9%82%DB%8C%D9%85%D8%AA=1500000-2000000&%D9%86%D9%88%D8%B9-%D8%A2%DB%8C%D9%81%D9%88%D9%86-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%DB%8C=%D9%85%D8%A7%D9%86%DB%8C%D8%AA%D9%88%D8%B1-%D8%A2%DB%8C%D9%81%D9%88%D9%86-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%DB%8C",
      },
      {
        title: "آیفون تصویری وای فای",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/04/2024/07/2024/07/2024/07/2024/09/wifi-video-door-phone-deskttop_original.webp",
        slug: "video-door-phone/wifi-vdp",
      },
      {
        title: "آیفون تصویری هوشمند",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/04/2024/07/2024/07/2024/07/2024/09/smart-video-door-phone-deskttop_original.webp",
        slug: "video-door-phone/smart-video-door-phone/",
      },
      {
        title: "لیست قیمت",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/04/2024/07/2024/07/2024/07/2024/07/2024/07/2024/09/video-door-phone-price-list-deskttop_original.webp",
        slug: "price-list/video-door-phone/",
      },
      {
        title: "راهنمای نصب",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/04/2024/07/2024/07/2024/07/2024/07/2024/09/guide-installation-deskttop_original.webp",
        slug: "articles/tag/video-door-phone-installation-guide/",
      },
    ],
  };
  const chosenBrands: TCategoryChosenBrands = {
    title: "برند های منتخب آیفون تصویری",
    items: [
      {
        title: "تابا",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/08/2024/08/2024/08/2024/08/2024/09/taba-n-ns_3x.webp",
        slug: "video-door-phone/taba",
      },
      {
        title: "الکتروپیک",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/electropeyk-ns_3x.webp",
        slug: "video-door-phone/electropeyk",
      },
      {
        title: "سیماران",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/simaran-ns_3x.webp",
        slug: "video-door-phone/simaran/",
      },
      {
        title: "تکنما",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/taknama-ns_3x.webp",
        slug: "video-door-phone/taknama/",
      },
      {
        title: "سوزوکی",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/suzuki-nsi_3x.webp",
        slug: "video-door-phone/suzuki/",
      },
      {
        title: "کالیوز",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/2024/09/calluse-new-ns_3x.webp",
        slug: "video-door-phone/calluse/",
      },
      {
        title: "اف اف",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/ff-technology-ns_3x.webp",
        slug: "video-door-phone/ff-technology/",
      },
      {
        title: "تابا",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/08/2024/08/2024/08/2024/08/2024/09/taba-n-ns_3x.webp",
        slug: "video-door-phone/taba",
      },
      {
        title: "الکتروپیک",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/electropeyk-ns_3x.webp",
        slug: "video-door-phone/electropeyk",
      },
      {
        title: "سیماران",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/simaran-ns_3x.webp",
        slug: "video-door-phone/simaran/",
      },
      {
        title: "تکنما",
        image:
          "https://dashboard.dcakala.com/public/images/category/video-door-phone/2024/07/2024/09/taknama-ns_3x.webp",
        slug: "video-door-phone/taknama/",
      },
    ],
  };
  const consiceFilterOptions = [
    "ردیف",
    "ابتدا محصولات جدید",
    "قیمت، کم به زیاد",
    "قیمت، زیاد به کم",
  ];
  const categoryProducts: TProduct[] = categoryPageProductsData;

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1380px",
          },
        }}
      >
        <Box className={vazirmatn.className}>
          {/* breadCrumbs */}
          <Breadcrumbs urlPath={urlPath} />
          {/* content */}
          <Box
            display="flex"
            flexDirection="column"
            mt={{ xs: "15px", md: "30px" }}
          >
            {/* page title */}
            <Box>
              <Box mr="25px" dir="rtl" fontSize="16.5px" fontWeight={700}>
                {currentPage.title}
              </Box>
            </Box>
            {/* title & content divider */}
            <Box mt="20px" mb="15px">
              <PageDivider
                sx={{
                  "& .divider-body": {
                    "&::before, &::after": {
                      borderColor: "#e5e7eb",
                      opacity: 1,
                      borderWidth: "2px",
                    },
                  },
                }}
              />
            </Box>
            {/* content */}
            <Box>
              <Box display="flex" gap="15px">
                {/* content */}
                <Box flex={1} width="70%">
                  <Suspense fallback={<Box>the main content section</Box>}>
                    <Contents
                      importantProducts={importantProducts}
                      categoryTypes={categoryTypes}
                      chosenBrands={chosenBrands}
                      consiceFilterOptions={consiceFilterOptions}
                      filterItems={filterItems}
                      categoryProducts={categoryProducts}
                    />
                  </Suspense>
                </Box>
                {/* filter sidebar */}
                <Box
                  flex={0.274}
                  position="relative"
                  sx={{
                    display: "none",
                    "@media (min-width: 1280px)": {
                      display: "block",
                    },
                  }}
                >
                  <Box position="sticky" top={0} right={0}>
                    <Suspense
                      fallback={<Box>the filters side bar section</Box>}
                    >
                      <FiltersSideBar filterItems={filterItems} />
                    </Suspense>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CategoryPage;
