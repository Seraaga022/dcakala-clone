"use client";
import { vazirmatn } from "@/app/Fonts";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginBox = ({
  val,
  changeHandler,
  isVerifyingPage = false,
}: {
  val: string;
  changeHandler: (input: any) => void;
  isVerifyingPage?: boolean;
}) => {
  const router = useRouter();

  const initialSeconds = 250; // seconds => 4:10
  const [seconds, setSeconds] = React.useState(initialSeconds);
  const [isActive, setIsActive] = React.useState(
    isVerifyingPage ? true : false
  );

  React.useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 0) setIsActive(false);
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
    setSeconds(initialSeconds);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <Box
      height="fit-content"
      width="380px"
      borderRadius="7px"
      border="1px solid #e5e7eb"
      px="15px"
      pb="15px"
      boxSizing="border-box"
    >
      <Stack>
        {/* back to login button */}
        <Box mt="20px" pr="5px" display={isVerifyingPage ? "block" : "none"}>
          <Box display="flex" justifyContent="end" alignItems="center">
            <IconButton onClick={() => router.back()}>
              <ArrowForwardIos sx={{ fontSize: "15px" }} />
            </IconButton>
          </Box>
        </Box>
        {/* logo */}
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            py="15px"
          >
            <Box width="150px" height="65px" position="relative">
              <Image src="/images/login-logo.webp" alt="login-logo" fill />
            </Box>
          </Box>
        </Box>
        {/* title */}
        <Box mt="10px">
          <Box dir="rtl">
            <Typography color="#212121" fontSize="16px" fontWeight={900}>
              {isVerifyingPage ? "کد تایید را وارد کنید" : "ورود | ثبت نام"}
            </Typography>
          </Box>
        </Box>
        {/* description */}
        <Box mt={isVerifyingPage ? "13px" : "20px"}>
          <Stack dir="rtl" spacing={0.8}>
            <Typography
              display={isVerifyingPage ? "none" : "block"}
              fontSize="11.5px"
              fontWeight={300}
            >
              سلام!
            </Typography>
            <Typography fontSize="11.5px" fontWeight={300}>
              {isVerifyingPage
                ? "کد تایید به شماره پیامک شد"
                : "لطفا شماره تماس خود را وارد نمایید"}
            </Typography>
          </Stack>
        </Box>
        {/* phone input */}
        <Box mt="15px">
          <Box>
            <TextField
              type="number"
              fullWidth
              size="small"
              sx={{
                "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button ":
                  { appearance: "none" },
                "& .MuiInputBase-input": {
                  fontFamily: vazirmatn.style.fontFamily,
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: val ? "#ff7900" : "#000",
                },
              }}
              value={val}
              onChange={changeHandler}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </Box>
        </Box>
        {/* OTP retry and timer */}
        <Box mt="15px" display={isVerifyingPage ? "block" : "none"}>
          {seconds > 0 ? (
            <Box dir="rtl" display="flex" justifyContent="center" gap="2px">
              <Typography fontSize="14px" fontWeight={600}>
                {minutes >= 10 ? "" : "0" + minutes}:
                {(remainingSeconds >= 10 ? "" : "0" + remainingSeconds) || 10}
              </Typography>
              <Typography fontSize="14px">مانده تا دریافت مجدد</Typography>
            </Box>
          ) : (
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => handleStart()}
                color="warning"
                variant="contained"
                sx={{ bgcolor: "#ff7900" }}
              >
                <Typography fontSize="14px" color="#fff">
                  دریافت مجدد
                </Typography>
              </Button>
            </Box>
          )}
        </Box>
        {/* login button */}
        <Box mt="15px">
          <Box>
            <Button
              onClick={
                () => (!isVerifyingPage ? router.push("verify-login") : null) // should be the custom onClickHandler that user provides
              }
              fullWidth
              color="warning"
              sx={{
                bgcolor: "#ff7900",
                py: "8px",
                boxShadow: 1,
                "&:hover": {
                  boxShadow: 2,
                },
                "&:active": {
                  boxShadow: "0 6px 9px silver",
                },
              }}
            >
              <Typography fontSize="15px" color="#fff">
                {isVerifyingPage ? "تایید" : "ورود"}
              </Typography>
            </Button>
          </Box>
        </Box>
        {/* terms of policy */}
        <Box mt="15px" display={isVerifyingPage ? "none" : "block"}>
          <Box textAlign="center">
            <Typography fontSize="10px" fontWeight={400}>
              ورود شما به معنای پذیرش{" "}
              <Box component="span" color="rgb(0 142 178/1)">
                <Link href=""> شرایط دی سی ای کالا</Link>
              </Box>{" "}
              و{" "}
              <Box component="span" color="rgb(0 142 178/1)">
                <Link href="">قوانین حریم ‌خصوصی</Link>
              </Box>{" "}
              است
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default LoginBox;
