import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";


import annbnb from '@/public/projects/AnnBnb.png';
import cultivate from '@/public/projects/Cultivate.png';
import sketchy from '@/public/projects/Sketchy.png';
import doordash from '@/public/projects/DoorDash.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "App Academy",
    description:
      "Completed a six-month software engineering bootcamp covering Python, JavaScript, SQL, React, HTML, CSS, OOP, data structures, algorithms, TDD, and programming best practices.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Graduated bootcamp",
    location: "Generation USA",
    description:
      "Completed an 18-week Jr. Cloud Practitioner program with 300+ hours of training in cloud infrastructure deployment, configuration, and management. Gained basic knowledge of Linux, Python, AWS, and DevOps for cloud-based IT operations.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Bachelor's degree",
    location: "Payap University",
    description:
     "Earned a bachelor's degree in English from Thailand, focusing on language, communication, literature, and cultural studies.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
,
] as const;

export const projectsData = [
  {
    title: "Cultivate",
    description:
      "Full-Stack clone of Trello website with extended functionalities feature inspired by the Forest application.",
    tags: ["React", "Redux", "Express", "SQL",],
    imageUrl: cultivate,
  },
  {
    title: "AnnBnb",
    description:
      "A Full-Stack Airbnb Clone featuring a clean and intuitive design. The interface is user-friendly, with thoughtful navigation that balances simplicity and functionality.",
    tags: ["React", "Redux", "Express", "SQL",],
    imageUrl: annbnb,
  },
  {
    title: "Sketchy",
    description:
      "Full-Stack clone/inspired by Etsy website. a lively worldwide marketplace designed for artists and other show people to display their 'unique' items as well as sell their 'unique' goods",
    tags: ["React", "Redux", "Flask", "SQL-Alchemy"],
    imageUrl: sketchy,
  },
  {
    title: "DoorDash",
    description:
      "A static clone of DoorDash Landing Page",
    tags: ["HTML", "CSS"],
    imageUrl: doordash,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",,
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
] as const;
