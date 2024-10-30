import { AppBar, Box, Container, Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import NavSearch from "@/components/organisms/Nav/NavSearch";
const NavCart = dynamic(() => import("@/components/organisms/Nav/NavCart"), {
  ssr: false,
  loading: () => (
    <Box>
      <Skeleton variant="rectangular" animation="wave" width={42} height={33} />
    </Box>
  ),
});
const NavProfile = dynamic(
  () => import("@/components/organisms/Nav/NavProfile"),
  {
    ssr: false,
    loading: () => (
      <Box>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={87}
          height={42}
        />
      </Box>
    ),
  }
);
const NavTel = dynamic(() => import("@/components/organisms/Nav/NavTel"), {
  ssr: false,
  loading: () => (
    <Box>
      <Skeleton variant="rectangular" animation="wave" width={90} height={32} />
    </Box>
  ),
});
const NavLogo = dynamic(() => import("@/components/organisms/Nav/NavLogo"), {
  ssr: false,
  loading: () => (
    <Box>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={120}
        height={40}
      />
    </Box>
  ),
});
const NavCategory = dynamic(
  () => import("@/components/organisms/Nav/NavCategory"),
  {
    ssr: false,
    loading: () => (
      <Box>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={130}
          height={25}
        />
      </Box>
    ),
  }
);
const NavMobileCategory = dynamic(
  () => import("@/components/organisms/Nav/NavMobileCategory"),
  {
    ssr: false,
  }
);
const NavMobileSearch = dynamic(
  () => import("@/components/organisms/Nav/NavMobileSearch"),
  {
    ssr: false,
    loading: () => (
      <Box>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={38}
          height={33}
        />
      </Box>
    ),
  }
);

const Navbar = () => {
  return (
    <Box width="100%" position="fixed" zIndex={99}>
      <AppBar
        sx={{
          backgroundColor: "#ff7900",
          boxShadow: "unset",
          color: "black",
          minHeight: "63px",
          height: "68px",
          "@media (max-width: 650px)": {
            borderEndEndRadius: "30px",
            borderEndStartRadius: "30px",
            maxHeight: "40px",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            "&.MuiContainer-maxWidthLg": {
              maxWidth: "1376px",
            },
            height: "100%",
          }}
        >
          <Box display="flex" alignItems="center" height="100%">
            {/* cart & profile & tel */}
            <Box
              flex={0.3}
              display="flex"
              alignItems="center"
              sx={{ "@media (max-width: 650px)": { display: "none" } }}
            >
              {/* cart */}
              <Box mr="18px">
                <NavCart />
              </Box>
              {/* profile or login */}
              <Box mr="18px">
                <NavProfile />
              </Box>
              {/* tel */}
              <Box mr="18px">
                <NavTel />
              </Box>
            </Box>
            {/* FROM TABLET search */}
            <Box
              flex={0.75}
              sx={{
                "@media (max-width: 650px)": { flex: 1, display: "none" },
              }}
              display="flex"
              height="37px"
              pl="10px"
              pr="25px"
              boxSizing="border-box"
              justifyContent="center"
              alignItems="center"
            >
              {/* search */}
              <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <NavSearch />
              </Box>
            </Box>
            {/* MOBILE search */}
            <Box
              ml="190px"
              sx={{
                flex: 1,
                "@media (min-width: 650px)": { display: "none" },
                "@media (max-width: 540px)": {
                  position: "relative",
                  left: "-190px",
                },
              }}
            >
              <NavMobileSearch />
            </Box>
            {/* logo & category trigger */}
            <Box
              flex={0.3}
              sx={{
                "@media (max-width: 650px)": { flex: 0.1 },
              }}
              display="flex"
              alignItems="center"
              justifyContent="end"
            >
              {/* logo */}
              <Box
                minWidth="125px"
                display="flex"
                justifyContent="start"
                justifySelf="center"
                bottom="-2px"
                mr="15px"
                sx={{
                  position: "static",
                  "@media (max-width: 540px)": {
                    position: "relative",
                    left: "-100px",
                  },
                  "@media (max-width: 390px)": {
                    left: "-130px",
                  },
                  xs: {
                    left: "-140px",
                  },
                }}
              >
                <NavLogo />
              </Box>
              {/* FROM TABLET category trigger */}
              <Box
                sx={{
                  display: "none",
                  "@media (min-width: 1250px)": {
                    display: "block",
                  },
                }}
              >
                <NavCategory />
              </Box>
              {/* MOBILE category */}
              <Box
                flex={0.3}
                sx={{
                  "@media (min-width: 540px)": { display: "none" },
                  position: "absolute",
                  right: "5px",
                  "@media (max-width: 250px)": {
                    right: "10px",
                  },
                }}
              >
                <NavMobileCategory />
              </Box>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
