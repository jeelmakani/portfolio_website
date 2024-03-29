import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps as NextAppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SSRProvider } from "@react-aria/ssr";
import Layout from "../components/Layout";

import "../styles/global.scss";
import { useState } from "react";
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps) {
  const lightTheme = createTheme({
    type: "light",
    theme: {},
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {},
  });

  return (
    <SSRProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  );
}

export default MyApp;
