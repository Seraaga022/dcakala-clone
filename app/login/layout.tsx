import { Metadata } from "next";
import CustomThemeProvider from "../[... routing]/CustomThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "صفحه لاگین دی سی ای کالا",
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
