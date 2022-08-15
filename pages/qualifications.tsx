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
    key: "Volunteer",
    title: "Volunteer at WeAredevelopers",
    desc: "Active Volunteer at WeAredevelopers",
    duration: "2019-present",
  },
  {
    key: "Lime-bike",
    title: "Lime E-bike",
    desc: "Team Lead at Lime E-bike.Youngest team lead at the age of 19. ",
    duration: "2020-2021",
  },
];
const EducationsData: DataItem[] = [
  {
    key: "10th",
    title: "10th Grade",
    desc: "GPA: 1.0",
    duration: "2016",
  },
  {
    key: "12th",
    title: "12th Grade",
    desc: "GPA: 1.7",
    duration: "2016-2018",
  },
  {
    key: "jee",
    title: "Joint Entrance Examination(JEE)",
    desc: "One of the toughest exams in the world. Successfully qualified in JEE. Required high problem solving skills.",
    duration: "2018",
  },
  {
    key: "German language",
    title: "German Language",
    desc: "Lerned German till C1 level.",
    duration: "2019-2020",
  },
  {
    key: "Bachelor",
    title: "Bachelor in Robotics and Artificial Intelligence",
    desc: "at Fachhochschule wurzburg und Schweinfurt. ",
    duration: "2021-Present",
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
            Experience and Education
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
            className={`flex flex-row gap-05em align-center ${style.link1} ${activeTimelineName === "experience" ? style.selected : ""
              }`}
            onClick={() => setActiveTimelineName("experience")}
          >
            <FaSuitcase size={28} />
            Experience
          </Link>
          <Link
            color="text"
            css={{ fontSize: "$md" }}
            className={`flex flex-row gap-05em align-center ${style.link2} ${activeTimelineName === "education" ? style.selected : ""
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
