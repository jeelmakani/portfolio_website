import React from "react";
interface Item {
  key: string | number;
  TechStack: string;
  GithubLink: string;
  ProjectName: string;
  DemoLink: string;
  ImageLink: string;
  descriptionHtml: string;
  techs: string[];
}
export const API: Item[] = [
  {
    key: "project1",
    TechStack: "Typescript,NextJS,ReactJS,SASS,NextUI",
    ProjectName: "personal Portflio Website",
    ImageLink:
      "",
    GithubLink: "https://github.com/jeelmakani/portfolio_website",
    DemoLink: "jeelmakani.vercel.app",
    descriptionHtml:
      "A portfolio Website made from scratch with ",
    techs: ["ReactJS", "Typescript", "Styled JSX", "NextJS", "SASS"],
  },

];
