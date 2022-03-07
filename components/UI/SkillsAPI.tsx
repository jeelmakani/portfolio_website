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
      "HTMl",
      "css/scss",
      "react",
      "Javascript",
      "Next.js",
      "tailwind",
      "bootstrap",
      "typescript",
    ],
  },
  {
    key: "Backend",
    techs: ["Node.js", "django", "FastAPi", "SQL", "PostgreSQL"],
    levels: ["Node.js", "django", "FastAPi", "SQL", "PostgreSQL"],
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
      "Numpy",
      "Pandas",
      "scikit-learn",
      "Pytorch",
      "Tenserflow",
      "keras",
    ],
  },
  {
    key: "Data Visualization",
    techs: ["Matplotlib", "plotly", "seaborn"],
    levels: ["Matplotlib", "plotly", "seaborn"],
  },
];
