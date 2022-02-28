import React from "react";
import Navbar from "../componants/Navbar";
import workImg from "../assets/workimg.svg";
import Image from "next/image";
import style from "./Projects.module.scss";
import { Container } from "@nextui-org/react";

function Projects() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Container className={`${style.projecthero}`}>
        <Image src={workImg} alt="workImg" width={500} height={500} />
        <div></div>
      </Container>
    </div>
  );
}

export default Projects;
