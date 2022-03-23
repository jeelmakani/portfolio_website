import { Container, Switch, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import style from "./Footer.module.scss";
import ThemeSwitch from "./ThemeSwitch";
import LanguageDropdown from "./UI/LanguageDropdown";

function Footer() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = (): void =>
      window.pageYOffset > 60 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer
      className={`flex justify-center ${style.footer} ${
        isVisible && style.show
      }`}
    >
      <Container md className={`${style.footerContainer}`}>
        <Text b>
          🎨 and <code> {"</>"} </code> with ❤️ by Jeel Makani
        </Text>
        <LanguageDropdown />
        <ThemeSwitch />
      </Container>
    </footer>
  );
}

export default Footer;
