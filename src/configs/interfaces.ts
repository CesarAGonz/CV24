export interface CareerItem {
    title: string;
    company: string;
    duration: string;
    description: string;
  }  

  export interface Skill {
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }