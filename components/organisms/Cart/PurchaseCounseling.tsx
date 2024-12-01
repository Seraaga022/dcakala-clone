import { HeadsetMic, LocalPhoneRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const PurchaseCounseling = ({ phoneNumber }: { phoneNumber: string }) => {
  return (
    <Stack color="#009688" spacing={1.5}>
      <Box>
        <Stack direction="row" columnGap={1}>
          {/* icon */}
          <Box display="flex" alignItems="center">
            <HeadsetMic />
          </Box>
          {/* text */}
          <Typography color="#000">مشاوره و راهنمایی</Typography>
        </Stack>
      </Box>
      <Box maxWidth={{ xs: "auto", md: "68%" }}>
        <Typography variant="caption" fontWeight={400} letterSpacing={0}>
          در صورت سوال یا مشکل در مورد پرداخت با ما تماس بگیرید
        </Typography>
      </Box>
      <Box>
        <Link href={`tel:+98${phoneNumber}`}>
          <Stack direction="row" columnGap={1}>
            {/* icon */}
            <Box display="flex" alignItems="center">
              <LocalPhoneRounded sx={{ rotate: "-90deg" }} />
            </Box>
            <Typography fontWeight={400}>مشاوره و راهنمایی</Typography>
          </Stack>
        </Link>
      </Box>
    </Stack>
  );
};

export default PurchaseCounseling;
