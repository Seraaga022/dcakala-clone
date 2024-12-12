"use server";
import { vazirmatn } from "@/app/Fonts";
import { Box, BoxProps, Container, Divider } from "@mui/material";
import React from "react";

const PageDivider = ({
  children,
  ...props
}: {
  children?: React.ReactNode;
} & BoxProps) => {
  return (
    <Box flex={1} {...props}>
      <Container
        maxWidth="lg"
        sx={{ "&.MuiContainer-maxWidthLg": { maxWidth: "1380px" } }}
        disableGutters
      >
        <Divider
          className="divider-body"
          sx={{
            "&::before": { borderColor: "#212121", borderWidth: "2px" },
            "&::after": { borderColor: "#212121", borderWidth: "2px" },
          }}
          variant="middle"
        >
          {children}
        </Divider>
      </Container>
    </Box>
  );
};

const DividerContent = ({ content }: { content: string }) => {
  return (
    <Box
      fontSize="14px"
      fontFamily={vazirmatn.style.fontFamily}
      fontWeight={600}
      color="#212121"
    >
      {content}
    </Box>
  );
};
PageDivider.DividerContent = DividerContent;
export default PageDivider;
