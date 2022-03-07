import { Container, Text, Card, Divider } from "@nextui-org/react";
import React from "react";
import { skillsAPI } from "./SkillsAPI";
import style from "./SkillsCard.module.scss";
import { BsFillPatchCheckFill } from "react-icons/bs";

function SkillsCard() {
  return (
    <Container md id="skills" className={`flex justify-center  ${style.body}`}>
      <Text
        h1
        css={{
          fontWeight: "400",
          letterSpacing: "$wider",
          "@lg": { fontWeight: "$bold" },
        }}
      >
        Technical Skills
      </Text>
      <Container className={`${style.skillcontainer}`}>
        {skillsAPI.map(({ key, techs, levels }) => (
          <Card bordered shadow key={key} className={`${style.boxShadow}`}>
            <div className={`flex flex-col justify-center ${style.context}`}>
              <Text
                css={{
                  fontSize: "$md",
                  fontWeight: "$bold",
                  letterSpacing: "$wider",
                }}
                className={`flex justify-center`}
              >
                {key}
              </Text>
              <Divider height={2} />
              <div className={`${style.techtext}`}>
                {techs.map((tech, i) => (
                  <div
                    key={i}
                    className={`flex flex-row gap-1em ${style.starlevel}`}
                  >
                    <article className={`flex ${style.star}`}>
                      <BsFillPatchCheckFill />
                    </article>
                    <article>
                      <Text b h4>
                        {tech}
                      </Text>
                      <Text>{levels[i]}</Text>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

export default SkillsCard;
