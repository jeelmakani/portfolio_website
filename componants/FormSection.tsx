import React, { useEffect, useState, useRef } from "react";
import style from "./FormSection.module.scss";
import formPic from "../assets/formPic.svg";
import Image from "next/image";
import { Row, Text, Button, Grid, Card } from "@nextui-org/react";
import Quotes from "./Quotes";
import quotationImage from "../assets/quotation.svg";

function FormSection() {
  const mailto = () => {
    window.open("mailto:makanijeel@gmail.com");
  };

  return (
    <>
      <div className={`${style.blockquotewrapper}`}>
        <div className={`${style.blockquote}`}>
          <Text
            h1
            size={40}
            css={{
              textGradient: "45deg, $purple500 -20%, $pink500 100%",
            }}
            weight="bold"
          >
            <Quotes />
          </Text>
          <Text className={`${style.author}`} h4 size={20} weight="bold">
            &mdash;Steven Pressfield
          </Text>
        </div>
      </div>
      <section className={`flex flex-row justify-between ${style.formsection}`}>
        <Image src={formPic} alt="Form Img" width={500} height={500} />
        <div>
          <Button color="gradient" auto ghost onClick={mailto}>
            ContactMe
          </Button>
        </div>
      </section>
    </>
  );
}

export default FormSection;
