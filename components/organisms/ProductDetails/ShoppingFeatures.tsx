import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const ShoppingFeatures = () => {
  const FeatureCard = ({ ...props }: React.PropsWithChildren) => {
    const { children } = props;

    return (
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 0, md: 1.1 }}
      >
        {children}
      </Stack>
    );
  };

  const FeatureCardHeader = ({ ...props }: React.PropsWithChildren) => {
    const { children } = props;

    return (
      <Box textAlign="center">
        <Typography
          color="#838383"
          fontSize={{ xs: "2.3vw", sm: "1.7vw", lg: "1em" }}
          fontWeight={400}
        >
          {children}
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <Grid container>
        <Grid size={3}>
          <FeatureCard>
            <FeatureCardHeader>پشتیبانی حین و بعد از فروش</FeatureCardHeader>
            {/* icon */}
            <Box display="flex" alignItems="center">
              <SvgIcon sx={{ fontSize: "25px" }}>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  fill="#838383"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="SupportAgentIcon"
                >
                  <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62"></path>
                  <circle cx="9" cy="13" r="1"></circle>
                  <circle cx="15" cy="13" r="1"></circle>
                  <path d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47"></path>
                </svg>
              </SvgIcon>
            </Box>
          </FeatureCard>
        </Grid>
        <Grid size={3}>
          <FeatureCard>
            <FeatureCardHeader>تنوع در روش های پرداخت</FeatureCardHeader>
            {/* icon */}
            <Box display="flex" alignItems="center">
              <SvgIcon sx={{ fontSize: "25px" }}>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  fill="#838383"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CreditScoreIcon"
                >
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41z"></path>
                </svg>
              </SvgIcon>
            </Box>
          </FeatureCard>
        </Grid>
        <Grid size={3}>
          <FeatureCard>
            <FeatureCardHeader>تضمین بازگشت وجه</FeatureCardHeader>
            {/* icon */}
            <Box display="flex" alignItems="center">
              <SvgIcon sx={{ fontSize: "25px" }}>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  fill="#838383"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CurrencyExchangeIcon"
                >
                  <path d="M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44M3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9z"></path>
                </svg>
              </SvgIcon>
            </Box>
          </FeatureCard>
        </Grid>
        <Grid size={3}>
          <FeatureCard>
            <FeatureCardHeader>ارسال سریع به سراسر ایران</FeatureCardHeader>
            {/* icon */}
            <Box display="flex" alignItems="center">
              <SvgIcon sx={{ fontSize: "25px" }}>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  fill="#838383"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LocalShippingIcon"
                >
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m13.5-9 1.96 2.5H17V9.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path>
                </svg>
              </SvgIcon>
            </Box>
          </FeatureCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingFeatures;
