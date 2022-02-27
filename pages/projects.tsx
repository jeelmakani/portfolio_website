import React from "react";
import Navbar from "../componants/Navbar";
import workImg from "../assets/workimg.svg";
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
