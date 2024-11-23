import type { Metadata } from "next";
import { roboto, vazirmatn } from "./Fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "dcakala clone",
  description: "a clone of the www.dcakala.com website",
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  const { children } = props;
  return (
    <html lang="en" className={`${roboto.className} ${vazirmatn.className}`}>
      <head>
        {/* font awesome links */}
        <link
          rel="stylesheet"
          data-purpose="Layout StyleSheet"
          title="Web Awesome"
          href="/css/app-wa-3b124ff0e0d7a67cd8c995d0aeb1d15a.css?vsn=d"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-duotone-solid.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-thin.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-solid.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-regular.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/sharp-light.css"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
