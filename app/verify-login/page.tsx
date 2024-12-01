"use client";
import { Box } from "@mui/material";
import React from "react";
import LoginBox from "@/components/organisms/Login/LoginBox";
import { InputChangeHandlerT } from "../login/page";

const Page = () => {
  const [verifyingCode, setVerifyingCode] = React.useState<string>("");

  const changeHandler = (e: InputChangeHandlerT) => {
    setVerifyingCode(e.target.value);
    console.log(verifyingCode);
  };

  return (
    <Box height="100svh">
      <Box height="100%">
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* login box */}
          <LoginBox
            isVerifyingPage
            val={verifyingCode}
            changeHandler={changeHandler}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
