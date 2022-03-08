import React, { useState } from "react";
import style from "./Timeline.module.scss";
import { Container, Card, Text, Button, Link } from "@nextui-org/react";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";
import { setEnvironmentData } from "worker_threads";
export interface DataItem {
  key: string;
  title: string;
  desc: string;
  duration: string;
}

interface TimelineProps {
  name: string;
  data: DataItem[];
}

export const Timeline = ({ name, data }: TimelineProps) => {
  return (
    <>
      <Container
        sm
        className={`timeline ${style.timeline}`}
        aria-label={`${name}-Timeline`}
      >
        {data.map(({ key, title, desc, duration }, i) => {
          return (
            <article className={`${style.timelineItem}`} key={key + i}>
              {i % 2 === 1 ? (
                <>
                  <div> </div>
                  <div className={style.dotContainer}>
                    <span className={style.dot}></span>
                  </div>

                  <Card bordered hoverable className={style.arrowLeft}>
                    <Text h3> {title} </Text>

                    <Text> {desc} </Text>

                    <Text size={"14px"} css={{ color: "Grey" }}>
                      {duration}
                    </Text>
                  </Card>
                </>
              ) : (
                <>
                  <Card
                    bordered
                    hoverable
                    css={{ gap: "2rem" }}
                    className={style.arrowRight}
                  >
                    <Text h3 css={{ textAlign: "right", marginBottom: "6px" }}>
                      {title}
                    </Text>

                    <Text css={{ textAlign: "right", marginBottom: "6px" }}>
                      {desc}
                    </Text>

                    <Text
                      css={{ textAlign: "right", color: "Grey" }}
                      size={"14px"}
                    >
                      {duration}
                    </Text>
                  </Card>

                  <div className={style.dotContainer}>
                    <span className={style.dot}></span>
                  </div>

                  <div></div>
                </>
              )}
            </article>
          );
        })}
      </Container>
    </>
  );
};

export default Timeline;
