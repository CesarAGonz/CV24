import { CareerItem, Skill } from './interfaces';
import CodepenIcon from '../components/icons/CodepenIcon';
import EclipseIcon from '../components/icons/EclipseIcon';
import DatabaseIcon from '../components/icons/DatabaseIcon';
import GitGraphIcon from '../components/icons/GitGraphIcon';
import DockIcon from '../components/icons/DockIcon';

export const navLinks: string[] = ["About", "Career", "Skills", "Projects", "Contact"];

export const careerData: CareerItem[] = [
    {
      title: "Application Developer",
      company: "PSL Group",
      duration: "October 2022 — September 2024",
      description: "Software developer at a multinational company, member of a development team for global pharmaceutical news and analytics service platforms.",
    },
    {
      title: "Full-stack Developer",
      company: "Solo Trucking",
      duration: "November 2021 — September 2022",
      description: "Software developer at an American startup, member of the development team for the web and mobile application.",
    },
    {
      title: "Full-stack Developer",
      company: "Brounie",
      duration: "September 2021 — October 2021",
      description: "Full-stack web developer at a startup specializing in custom software solutions and technology implementations. Hired on a temporary contract to complete a project.",
    },
    {
      title: "IT Manager",
      company: "Stamping Steel and Trucks",
      duration: "July 2020 — September 2021",
      description: "Manager of an IT department at a metallurgical company that required development services for an ERP system and other related products. Additionally, I implemented technology solutions for security measures and COVID-19 prevention protocols.",
    },
    {
      title: "IT Analyst",
      company: "Stamping Steel and Trucks",
      duration: "July 2019 — July 2020",
      description: "Manager of an IT department at a metallurgical company that required development services for an ERP system and other related products. Additionally, I implemented technology solutions for security measures and COVID-19 prevention protocols.",
    },
  ];
  

  export const skills: Skill[] = [
    { title: "React", icon: CodepenIcon },
    { title: "Node.js", icon: CodepenIcon },
    { title: "JavaScript", icon: EclipseIcon },
    { title: "CSS", icon: CodepenIcon },
    { title: "MongoDB", icon: DatabaseIcon },
    { title: "PostgreSQL", icon: DatabaseIcon },
    { title: "Git", icon: GitGraphIcon },
    { title: "Docker", icon: DockIcon },
    { title: "Symfony", icon: CodepenIcon },
    { title: "PHP", icon: EclipseIcon },
    { title: "Python", icon: EclipseIcon },
    { title: "Vue", icon: CodepenIcon },
    { title: "Dojo", icon: CodepenIcon },
    { title: "TypeScript", icon: EclipseIcon },
    { title: "HTML5", icon: CodepenIcon },
    { title: "Bootstrap", icon: CodepenIcon },
    { title: "AWS", icon: DatabaseIcon },
    { title: "Lambda", icon: DatabaseIcon },
    { title: "MySQL", icon: DatabaseIcon },
    { title: "GraphQL", icon: DatabaseIcon },
    { title: "Github", icon: GitGraphIcon },
    { title: "Linux", icon: DockIcon },
    { title: "Matlab", icon: EclipseIcon },
    { title: "Java", icon: EclipseIcon },
    { title: "C++", icon: EclipseIcon }
  ];
  