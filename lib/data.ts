import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


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
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
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
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
