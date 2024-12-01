import { Box, BoxProps, Button, Typography } from "@mui/material";
import React from "react";

export function CustomTab<TabsT>({
  label,
  content,
  selectedTab,
  onClickHandler,
  button,
  ...props
}: {
  label: TabsT;
  content: string;
  selectedTab: TabsT;
  onClickHandler: (label: { label: TabsT }) => void;
  button?: boolean;
} & BoxProps) {
  const TabContent = (
    <Typography
      fontSize={{ xs: "3vw", mobile: ".9em" }}
      color={selectedTab === label ? "#ff8415" : "inherit"}
      fontWeight={400}
    >
      {content}
    </Typography>
  );

  if (button)
    return (
      <Button
        sx={{ minWidth: 0, minHeight: 0, p: 0, m: 0, color: "currentcolor" }}
      >
        <Box
          px="1.5em"
          py=".7em"
          borderBottom={
            label === selectedTab
              ? "2px solid #ff8415"
              : "2px solid transparent"
          }
          onClick={(event) => onClickHandler({ label, ...event })}
          {...props}
        >
          {TabContent}
        </Box>
      </Button>
    );
  return (
    <Box
      px="1.5em"
      py=".7em"
      borderBottom={label === selectedTab ? "2px solid #ff8415" : "none"}
      onClick={(event) => onClickHandler({ label, ...event })}
      {...props}
    >
      {TabContent}
    </Box>
  );
}

export function CustomTabPanel<TabsT>({
  ...props
}: React.PropsWithChildren & {
  tab: TabsT;
  selectedTab: TabsT;
}) {
  const { children, selectedTab: selectedDialogTab, tab: value } = props;
  return (
    <Box hidden={value !== selectedDialogTab} pt="8px">
      {children}
    </Box>
  );
}
