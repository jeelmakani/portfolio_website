import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps as NextAppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SSRProvider } from "@react-aria/ssr";

import "../styles/global.scss";

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
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  );
}

export default MyApp;
