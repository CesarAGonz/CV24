import { CareerItem, Skill } from './interfaces';
import ReactIcon from '../components/icons/ReactIcon';
import NodeIcon from '../components/icons/NodeIcon';
import CSSIcon from '../components/icons/CSSIcon';
import SymfonyIcon from '../components/icons/SymfonyIcon';
import VueIcon from '../components/icons/VueIcon';
import DojoIcon from '../components/icons/DojoIcon';
import HtmlIcon from '../components/icons/HtmlIcon';
import BootstrapIcon from '../components/icons/BootstrapIcon';
import JsIcon from '../components/icons/JsIcon';
import CodepenIcon from '../components/icons/CodepenIcon';
import DatabaseIcon from '../components/icons/DatabaseIcon';
import GitGraphIcon from '../components/icons/GitGraphIcon';
import DockIcon from '../components/icons/DockIcon';

// export const navLinks: string[] = ["About", "Career", "Skills", "Projects", "Contact"];
export const navLinks: string[] = ["About", "Career", "Skills", "Contact"];


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
    { title: "React", icon: ReactIcon },
    { title: "Node.js", icon: NodeIcon },
    { title: "CSS", icon: CSSIcon },
    { title: "Symfony", icon: SymfonyIcon },
    { title: "Vue", icon: VueIcon },
    { title: "Dojo", icon: DojoIcon },
    { title: "HTML5", icon: HtmlIcon },
    { title: "Bootstrap", icon: BootstrapIcon },
    { title: "JavaScript", icon: JsIcon },
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
  