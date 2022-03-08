import React from "react";
interface Item {
  key: string;
  techs: string[];
  levels: string[];
}

export const skillsAPI: Item[] = [
  {
    key: "Frontend",
    techs: [
      "HTMl",
      "css/scss",
      "react",
      "Javascript",
      "Next.js",
      "tailwind",
      "bootstrap",
      "typescript",
    ],
    levels: [
      "Experienced",
      "Experienced",
      "Intermediate",
      "Intermediate",
      "Intermediate",
      "Basic",
      "Intermediate",
      "Intermediate",
    ],
  },
  {
    key: "Backend",
    techs: ["Node.js", "django", "FastAPi", "SQL", "PostgreSQL"],
    levels: ["Basic", "basic", "basic", "Intermediate", "Basic"],
  },
  {
    key: "Machine Learning",
    techs: [
      "Numpy",
      "Pandas",
      "scikit-learn",
      "Pytorch",
      "Tenserflow",
      "keras",
    ],
    levels: [
      "Intermediate",
      "Intermediate",
      "Intermediate",
      "Basic",
      "Basic",
      "Intermediate",
    ],
  },
  {
    key: "Data Visualization",
    techs: ["Matplotlib", "plotly", "seaborn"],
    levels: ["Intermediate", "Intermediate", "Intermediate"],
  },
];
