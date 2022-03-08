/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Container, Link, Text } from "@nextui-org/react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { Timeline, DataItem } from "../components";
import Education from "../assets/Education.svg";

import style from "./qualifications.module.scss";
import Image from "next/image";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";

const ExperienceData: DataItem[] = [
  {
    key: "web-dev-begin1",
    title: "Diving into Web-Dev",
    desc: "Got introduced to the world of Front-End Web-Dev with HTML & CSS.",
    duration: "2012",
  },
  {
    key: "web-dev-begin2",
    title: "Diving into Web-Dev",
    desc: "Got introduced to the world of Front-End Web-Dev with HTML & CSS.",
    duration: "2012",
  },
  {
    key: "web-dev-begin3",
    title: "Diving into Web-Dev",
    desc: "Got introduced to the world of Front-End Web-Dev with HTML & CSS.",
    duration: "2012",
  },
  {
    key: "web-dev-begin4",
    title: "Diving into Web-Dev",
    desc: "Got introduced to the world of Front-End Web-Dev with HTML & CSS.",
    duration: "2012",
  },
];
const EducationsData: DataItem[] = [
  {
    key: "web-dev-begin1",
    title: "Diving into Web- dvsad aDev",
    desc: "Got introduced to the world of Front-End Web-Dev with HTML & CSS.",
    duration: "2012",
  },
  {
    key: "web-dev-begin2",
    title: "Diving invadsa a to Web-Dev",
    desc: "Got introduced to the world of Front-End Web-Dev with HTML & CSS.",
    duration: "2012",
  },
  {
    key: "web-dev-begin3",
    title: "Diving into Weaaab-Dev",
    desc: "Got introduced to the world of Front-End Web-Dev with HTML & CSS.",
    duration: "2012",
  },
  {
    key: "web-dev-begin4",
    title: "Diving into  advsa vWeb-Dev",
    desc: "Got introduced to the world of Front-End Web-Dev with HTML & CSS.",
    duration: "2012",
  },
];

function qualifications() {
  const [activeTimelineName, setActiveTimelineName] =
    useState<string>("experience");

  return (
    <div className={`flex flex-col ${style.pagebody}`}>
      <Container md className={`flex ${style.context}`}>
        <Image src={Education} alt="skillimg" width={300} height={300} />
        <div className={`flex ${style.myproject}`}>
          <Text
            h1
            size={50}
            css={{ textGradient: "45deg, $purple500 -20%, $pink500 100%" }}
            className={`flex flex-row gap-1em ${style.projecttext}`}
          >
            Experiace and Education
          </Text>
        </div>
      </Container>

      <Container
        md
        className={`flex gap-3em align-center justify-center ${style.qualifications}`}
        aria-label="Qualifications section"
      >
        <div
          className={`flex flex-row justify-center gap-3em ${style.buttonss}`}
        >
          <Link
            color="text"
            css={{ fontSize: "$md" }}
            className={`flex flex-row gap-05em align-center ${style.link1} ${
              activeTimelineName === "experience" ? style.selected : ""
            }`}
            onClick={() => setActiveTimelineName("experience")}
          >
            <FaSuitcase size={28} />
            Experience
          </Link>
          <Link
            color="text"
            css={{ fontSize: "$md" }}
            className={`flex flex-row gap-05em align-center ${style.link2} ${
              activeTimelineName === "education" ? style.selected : ""
            }`}
            onClick={() => setActiveTimelineName("education")}
          >
            <FaGraduationCap size={28} />
            Education
          </Link>
        </div>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={activeTimelineName}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="timelineFade"
          >
            <>
              {activeTimelineName === "experience" && (
                <Timeline data={ExperienceData} name="Experience" />
              )}
              {activeTimelineName === "education" && (
                <Timeline data={EducationsData} name="Education" />
              )}
            </>
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </div>
  );
}

export default qualifications;
