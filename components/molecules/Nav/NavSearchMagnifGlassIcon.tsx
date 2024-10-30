import { Box } from "@mui/material";
import React from "react";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const NavSearchSearchIcon = ({ inputValue }: { inputValue: string }) => {
  const router = useRouter();
  return (
    <Box
      sx={{ cursor: "pointer" }}
      onClick={() => router.push(`/search?search=${inputValue}`)}
      display="flex"
      alignItems="center"
    >
      <Search sx={{ fontSize: "25px", color: "#ff7900" }} />
    </Box>
  );
};

export default NavSearchSearchIcon;
