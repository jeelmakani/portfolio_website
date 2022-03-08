import React from "react";
import { Container } from "@nextui-org/react";
import { Timeline, DataItem } from "../components";

import style from "./qualifications.module.scss";

const qualificationsData: DataItem[] = [
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

function qualifications() {
  return (
    <Container
      md
      className={`${style.qualifications}`}
      aria-label="Qualifications section"
    >
      <Timeline data={qualificationsData} name="Qualifications" />
    </Container>
  );
}

export default qualifications;
