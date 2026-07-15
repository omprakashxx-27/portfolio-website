import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import {
  FaJava,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";
const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
    ],
  },

  {
    category: "Programming",
    items: [
      {
        name: "Java",
        icon: FaJava,
        color: "#F89820",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
    ],
  },

  {
    category: "AI / Machine Learning",
    items: [
      
      
      {
        name: "Pandas",
        icon: SiPandas,
        color: "#150458",
      },
      {
        name: "NumPy",
        icon: SiNumpy,
        color: "#4D77CF",
      },
    ],
  },

  {
    category: "Database",
    items: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
    ],
  },

  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
      {
  name: "VS Code",
  icon: FaCode,
  color: "#007ACC",
},
      
    ],
  },
];

export default skills;