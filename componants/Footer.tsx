import { Container, Text } from "@nextui-org/react";
import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`flex justify-center`}>
      <Container md className={`${style.footercontainer}`}>
        <Text b>
          🎨 and <code> {"</>"} </code> with ❤️ by Jeel Makani
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;
