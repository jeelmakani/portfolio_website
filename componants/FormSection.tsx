import React from "react";
import { Text, Button, Container } from "@nextui-org/react";
import Image from "next/image";

import style from "./FormSection.module.scss";
import formPic from "../assets/formPic.svg";
import Quotes from "./Quotes";
import ContactForm from "./ContactForm";

function FormSection() {
  return (
    <Container justify="center" className={`${style.formSectionMainContainer}`}>
      <Container sm>
        <div className={`${style.blockquotewrapper}`}>
          <div className={`${style.blockquote}`}>
            <Quotes />
          </div>
        </div>
      </Container>

      <section className={`${style.formsection}`}>
        <Image src={formPic} alt="Form Img" width={500} height={500} />
        <div className={`${style.questionform}`}>
          <ContactForm />
        </div>
      </section>
    </Container>
  );
}

export default FormSection;
