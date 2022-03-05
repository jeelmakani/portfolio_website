import React, { useEffect, useState } from "react";
import style from "./ScrollTop.module.scss";
import { RiArrowUpLine } from "react-icons/ri";
import { Button, Text } from "@nextui-org/react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <article className={`${style.button} ${isVisible && style.show}`}>
      <Button auto ghost color="gradient">
        <RiArrowUpLine onClick={scrollTop} className={`${style.buttonstyle}`} />
      </Button>
    </article>
  );
}
