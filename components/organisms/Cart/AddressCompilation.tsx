"use client";
import { vazirmatn } from "@/app/Fonts";
import { InputChangeHandlerT } from "@/app/login/page";
import { CustomTab, CustomTabPanel } from "@/components/molecules/CustomTab";
import CustomInput from "@/theme/CustomInput";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

type TabsT = "infoCompilation" | "address&expressType" | "addAddress";

const AddressCompilation = () => {
  const [selectedTab, setSelectedTab] =
    React.useState<TabsT>("infoCompilation");

  const [formVal, setFormVal] = React.useState({
    name: "",
    lastName: "",
  });

  const changeHandler = (e: InputChangeHandlerT) => {
    setFormVal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box>
      <Stack>
        {/* section header */}
        <Box borderBottom="1px solid silver">
          <Stack direction="row">
            <CustomTab<TabsT>
              selectedTab={selectedTab}
              label="infoCompilation"
              content="تکمیل اطلاعات"
              onClickHandler={({ label }) => setSelectedTab(label)}
              px="1em"
              pt=".8em"
              button
            />
            <CustomTab<TabsT>
              selectedTab={selectedTab}
              label="address&expressType"
              content="انتخاب آدرس و نحوه ارسال"
              onClickHandler={({ label }) => setSelectedTab(label)}
              px="1em"
              pt=".8em"
              button
            />
            <CustomTab<TabsT>
              selectedTab={selectedTab}
              label="addAddress"
              content="آدرس جدید"
              onClickHandler={({ label }) => setSelectedTab(label)}
              px="1em"
              pt=".8em"
              button
            />
          </Stack>
        </Box>
        {/* body */}
        <Box>
          <CustomTabPanel selectedTab={selectedTab} tab="infoCompilation">
            <Box p="10px">
              <Stack>
                {/* title */}
                <Box>
                  <Typography fontWeight={600} fontSize="15px">
                    تکمیل اطلاعات
                  </Typography>
                </Box>
                <Divider sx={{ mt: "5px", mb: "10px" }} />
                {/* form */}
                <Box>
                  <Grid container>
                    <Grid
                      offset={{ xs: 0, sm: 1, mobile: 7 }}
                      size={{ xs: 12, sm: "auto" }}
                    >
                      <Stack spacing={2}>
                        {/* inputs */}
                        <ThemeProvider theme={CustomInput}>
                          <Box>
                            <TextField
                              sx={{
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: formVal["name"]
                                      ? "#ff7900"
                                      : "#000",
                                  },
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button ":
                                  {
                                    appearance: "none",
                                  },
                                "& input::placeholder": {
                                  fontFamily: vazirmatn.style.fontFamily,
                                },
                              }}
                              value={formVal["name"]}
                              name={"name"}
                              placeholder="نام *"
                              onChange={changeHandler}
                            />
                          </Box>
                          <Box>
                            <TextField
                              sx={{
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: formVal["lastName"]
                                      ? "#ff7900"
                                      : "#000",
                                  },
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button ":
                                  {
                                    appearance: "none",
                                  },
                                "& input::placeholder": {
                                  fontFamily: vazirmatn.style.fontFamily,
                                },
                              }}
                              value={formVal["lastName"]}
                              name="lastName"
                              placeholder="نام خوانوادگی *"
                              onChange={changeHandler}
                            />
                          </Box>
                        </ThemeProvider>
                        {/* submit button */}
                        <Box>
                          <Button
                            variant="contained"
                            fullWidth
                            sx={{ bgcolor: "#ff7900" }}
                          >
                            <Typography fontSize="13px" color="#fff">
                              تکمیل اطلاعات
                            </Typography>
                          </Button>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel selectedTab={selectedTab} tab="address&expressType">
            <Box p="10px">
              <Stack>
                {/* title */}
                <Box>
                  <Typography fontWeight={600} fontSize="15px">
                    انتخاب آدرس
                  </Typography>
                </Box>
                <Divider sx={{ mt: "5px", mb: "15px" }} />
                {/* add address button */}
                <Box>
                  <Grid container>
                    <Grid
                      offset={{ xs: 0, sm: 1, mobile: 7 }}
                      size={{ xs: 12, sm: "auto" }}
                    >
                      <Button
                        onClick={() => setSelectedTab("addAddress")}
                        color="warning"
                        variant="contained"
                        fullWidth
                        sx={{
                          bgcolor: "#ff7900",
                        }}
                      >
                        <Typography color="#fff" fontSize="14px">
                          افزودن آدرس جدید
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                {/* title */}
                <Box mt="15px">
                  <Typography fontWeight={600} fontSize="15px">
                    نحوه ارسال
                  </Typography>
                </Box>
                <Divider sx={{ mt: "5px", mb: "10px" }} />
              </Stack>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel selectedTab={selectedTab} tab="addAddress">
            <Box p="10px">آدرس جدید اضافه کنید</Box>
          </CustomTabPanel>
        </Box>
      </Stack>
    </Box>
  );
};

export default AddressCompilation;
