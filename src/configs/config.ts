import { CareerItem, Skill } from './interfaces';
import CodepenIcon from '../components/icons/CodepenIcon';
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
    // CodepenIcon skills
    { title: "React", icon: CodepenIcon },
    { title: "Node.js", icon: CodepenIcon },
    { title: "CSS", icon: CodepenIcon },
    { title: "Symfony", icon: CodepenIcon },
    { title: "Vue", icon: CodepenIcon },
    { title: "Dojo", icon: CodepenIcon },
    { title: "HTML5", icon: CodepenIcon },
    { title: "Bootstrap", icon: CodepenIcon },
    { title: "JavaScript", icon: CodepenIcon },
    { title: "PHP", icon: CodepenIcon },
    { title: "Python", icon: CodepenIcon },
    { title: "TypeScript", icon: CodepenIcon },
    { title: "Matlab", icon: CodepenIcon },
    { title: "Java", icon: CodepenIcon },
    { title: "C++", icon: CodepenIcon },
  
    // DatabaseIcon skills
    { title: "MongoDB", icon: DatabaseIcon },
    { title: "PostgreSQL", icon: DatabaseIcon },
    { title: "AWS", icon: DatabaseIcon },
    { title: "Lambda", icon: DatabaseIcon },
    { title: "MySQL", icon: DatabaseIcon },
    { title: "GraphQL", icon: DatabaseIcon },
  
    // GitGraphIcon skills
    { title: "Git", icon: GitGraphIcon },
    { title: "Github", icon: GitGraphIcon },
  
    // DockIcon skills
    { title: "Docker", icon: DockIcon },
    { title: "Linux", icon: DockIcon }
  ];
  