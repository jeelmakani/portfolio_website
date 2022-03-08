/* eslint-disable @next/next/no-img-element */
import { Card, Container, Pagination, Text } from "@nextui-org/react";
import React, { useState } from "react";
import style from "./cards.module.scss";
import { API } from "../Api/ApiProjects";

import { RiGithubFill, RiShareBoxLine } from "react-icons/ri";

function Cards() {
  const [currentPage, setCurrentPage] = useState(1);

  const pagePostsLimit: number = 2;

  return (
    <Container md id="projects" className={`${style.herocards}`}>
      <Text h1>Recent Projects</Text>
      {API.slice(
        (currentPage - 1) * pagePostsLimit,
        (currentPage - 1) * pagePostsLimit + pagePostsLimit
      ).map(
        ({
          key,
          ProjectName,
          ImageLink,
          GithubLink,
          DemoLink,
          techs,
          descriptionHtml,
        }) => (
          <Card
            animated
            shadow={false}
            className={`${style.cardmain}`}
            key={key}
          >
            <div className={`${style.projectstyle}`}>
              <div className={`${style.pagecontent}`}>
                <Text h5 className={`${style.projectoverline}`}>
                  Featured Project
                </Text>
                <Text className={`${style.projecttitle}`}>{ProjectName}</Text>
                <div
                  className={`${style.description}`}
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
                {techs.length && (
                  <ul className={`flex ${style.projecttechlist}`}>
                    {techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}
                <div className={`${style.projectlink}`}>
                  {GithubLink && (
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={GithubLink}
                      aria-label="GitHub Link"
                    >
                      <RiGithubFill name="GitHub" />
                    </a>
                  )}
                  {DemoLink && (
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={DemoLink}
                      aria-label="External Link"
                    >
                      <RiShareBoxLine name="External" />
                    </a>
                  )}
                </div>
              </div>
              <div className={`${style.imagewrapper}`}>
                <a href={GithubLink}>
                  <div className={`${style.imgwrapper}`}>
                    <div className={`${style.imgcont}`}>
                      <img
                        className={`${style.image}`}
                        src={ImageLink}
                        alt="githubimage"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Card>
        )
      )}
      <div className={`flex justify-center`}>
        <Pagination
          size="xl"
          initialPage={1}
          total={Math.ceil(API.length / pagePostsLimit)}
          page={currentPage}
          onChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </Container>
  );
}

export default Cards;
