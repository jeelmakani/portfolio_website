import { Container, Text } from "@nextui-org/react";
import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`flex justify-center ${style.footer}`}>
      <Container md className={`${style.footerContainer}`}>
        <Text b>
          🎨 and <code> {"</>"} </code> with ❤️ by Jeel Makani
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;
