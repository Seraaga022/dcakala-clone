"use server";
import { Box, Container, Divider, Stack } from "@mui/material";
import React from "react";

const PageDividerWithContent = ({ content }: { content: React.ReactNode }) => {
  return (
    <Box flex={1}>
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1380px",
          },
        }}
      >
        <Divider
          sx={{
            "&::before": { borderColor: "#212121" },
            "&::after": { borderColor: "#212121" },
          }}
        >
          {content}
        </Divider>
      </Container>
    </Box>
  );
};

export default PageDividerWithContent;
