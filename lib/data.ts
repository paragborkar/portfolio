import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pizza from "@/public/pizza.png";
import blog from "@/public/blog.jpg";

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
    title: "BCA Grad",
    location: "Nagpur, Maharashtra",
    description:
      "I am pursuing my graduation at Dr.Ambedkar College, Deekshabhoomi,  Nagpur",
    icon: React.createElement(LuGraduationCap),
    date: "2021-24",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "I worked as a Full Stack Developer at Across The Globe(ATG). Worked on MERN stack for 6 months.",
    icon: React.createElement(CgWorkAlt),
    date: "12/22-5/23",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I worked as a Full Stack Developer at Sortwind Pvt Ltd. I have worked on MERN stack for 6 months. Converted various figma design in working code.",
    icon: React.createElement(CgWorkAlt),
    date: "8/23-2/23",
  },
] as const;

export const projectsData = [
  {
    title: "PizzaApp",
    description:
      "Razorpay payment gateway integration. Forgot password feature with OTP verification using NodeMailer.",
    tags: ["React.js", "Express", "MongoDB", "SASS", "Node.js","Redux"],
    imageUrl: pizza, 
    link: "https://pizzaapp-th4d.onrender.com/",
  },
  {
    title: "BlogApp",
    description:
      "FullStack Application with basic CRUD operations on Blog Posts. User can upload,delete and edit posts.",
    tags: ["React", "Express", "MongoDB", "Material UI", "Redux", "Node.js"],
    imageUrl: blog,
    link: "https://mern-blogsapp.onrender.com",
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
  "MongoDB",
  "Redux",
  "Express",
] as const;
