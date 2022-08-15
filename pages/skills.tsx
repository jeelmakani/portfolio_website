import { Container, Text } from "@nextui-org/react";
import React from "react";
import style from "./skills.module.scss";
import skillImg from "../assets/skillimg.svg";
import Image from "next/image";
import SkillCards from "../components/UI/SkillsCard";

function skills() {
  return (
    <div className={`flex flex-col gap-3em ${style.pagebody}`}>
      <Container md className={`flex ${style.context}`}>
        <Image src={skillImg} alt="skillimg" width={300} height={300} />
        <div className={`flex ${style.myproject}`}>
          <Text
            h1
            size={50}
            css={{ textGradient: "45deg, $purple500 -20%, $pink500 100%" }}
            className={`flex flex-row gap-1em ${style.projecttext}`}
          >
            My
            <Text size={50} className={`${style.projecttext1}`} h1>
              skills
            </Text>
          </Text>
          <Text className={`${style.Text}`}>my technical skills</Text>
        </div>
      </Container>
      <SkillCards />
    </div>
  );
}

export default skills;
