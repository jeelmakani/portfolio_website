import React from "react";
import { Container, Text } from "@nextui-org/react";
import ContactForm from "../componants/ContactForm";

import Cards from "../componants/UI/Cards";
import Navbar from "../componants/Navbar";
import workImg from "../assets/workimg.svg";
import Image from "next/image";
import style from "./Projects.module.scss";

function Projects() {
  return (
    <div className={`flex flex-col ${style.pagebody}`}>
      <Navbar />
      <Container md className={`flex ${style.context}`}>
        <Image src={workImg} alt="workImg" width={500} height={500} />
        <div className={`flex ${style.myproject}`}>
          <Text
            h1
            size={60}
            css={{ textGradient: "45deg, $purple500 -20%, $pink500 100%" }}
            className={`flex flex-row gap-1em ${style.projecttext}`}
          >
            My
            <Text size={60} className={`${style.projecttext1}`} h1>
              Projects
            </Text>
          </Text>
          <Text className={`${style.Text}`}>
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create Data Science projects and deploy them
            to web applications using cloud infrastructure.
          </Text>
        </div>
      </Container>

      <Cards />
      <ContactForm />
    </div>
  );
}

export default Projects;
