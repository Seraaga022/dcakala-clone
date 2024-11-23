import { Metadata } from "next";
import CustomThemeProvider from "../[... routing]/CustomThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "../globals.css";

export const metadata: Metadata = {
  title: "صفحه تایید شماره همراه دی سی ای کالا",
};

export default async function LoginLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
  const { children } = props;

  return (
    <AppRouterCacheProvider>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </AppRouterCacheProvider>
  );
}
