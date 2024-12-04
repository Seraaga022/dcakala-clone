import { Box } from "@mui/material";
import React from "react";

interface Props {
  params: { search: string };
}

const SearchPage = ({ params: { search } }: Props) => {
  return <Box>{search}</Box>;
};

export default SearchPage;
