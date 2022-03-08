import React from "react";
import style from "./Timeline.module.scss";
import { Container, Card, Text } from "@nextui-org/react";

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

                <Card className={style.arrowLeft}>
                  <Text h3> {title} </Text>

                  <Text> {desc} </Text>

                  <Text size={"14px"}> {duration} </Text>
                </Card>
              </>
            ) : (
              <>
                <Card css={{ gap: "2rem" }} className={style.arrowRight}>
                  <Text h3 css={{ textAlign: "right", marginBottom: "6px" }}>
                    {title}
                  </Text>

                  <Text css={{ textAlign: "right", marginBottom: "6px" }}>
                    {" "}
                    {desc}{" "}
                  </Text>

                  <Text css={{ textAlign: "right" }} size={"14px"}>
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
  );
};

export default Timeline;
