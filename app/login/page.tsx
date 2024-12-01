"use client";
import { Box } from "@mui/material";
import React from "react";
import LoginBox from "@/components/organisms/Login/LoginBox";

export type InputChangeHandlerT = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const Page = () => {
  const [phoneVal, setPhoneVal] = React.useState<string>("");

  const changeHandler = (e: InputChangeHandlerT) => {
    setPhoneVal(e.target.value);
    console.log(phoneVal);
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
          <LoginBox val={phoneVal} changeHandler={changeHandler} />
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
