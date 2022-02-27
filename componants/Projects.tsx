import React from "react";
import Navbar from "./Navbar";
import workImg from "../assets/workImg.svg";
import Image from "next/image";

function Projects() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section>
        <Image src={workImg} alt="workImg" />
      </section>
    </div>
  );
}

export default Projects;
