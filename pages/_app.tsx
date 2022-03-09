import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps as NextAppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SSRProvider } from "@react-aria/ssr";
import Layout from "../components/Layout";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";

import "../styles/global.scss";
import { useState } from "react";
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps, router }: AppProps) {
  const slideRight = {
    name: "Slide Right",
    variants: {
      initial: {
        opacity: 0,
        left: "-100%",
        scale: 0.6,
      },
      animate: {
        opacity: 1,
        left: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        left: "100%",
        scale: 0.6,
      },
    },
    transition: {
      duration: 0.5,
    },
  };

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
            <LazyMotion features={domAnimation}>
              <AnimatePresence exitBeforeEnter={false}>
                <m.div
                  key={router.route.concat(slideRight.name)}
                  className="page-wrap"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={slideRight.variants}
                  transition={slideRight.transition}
                >
                  <Component {...pageProps} />
                </m.div>
              </AnimatePresence>
            </LazyMotion>
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  );
}

export default MyApp;
