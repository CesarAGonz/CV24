import React from 'react';
import Header from '../sections/header/index.tsx';
import Section from '../Section.tsx';
import CareerItem from '../sections/career/index.tsx';
import SkillGrid from '../sections/skills/SkillGrid.tsx';
import ProjectGrid from '../ProjectGrid.tsx';
import ContactForm from '../ContactForm.tsx';
import AboutMe from '../sections/about/index.tsx'
import './MainComponentStyles.css';

const MainComponent: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <div className='scrollContainer'>
          <Section id='about' animation='fadeInLeft'>
            <AboutMe />
          </Section>
          <Section id='career' animation='fadeInLeft'>
            <CareerItem />
          </Section>
          <Section id='skills' animation='fadeInLeft'>
            <SkillGrid />
          </Section>
          {/* <Section id='projects' animation='fadeInLeft'>
            <ProjectGrid />
          </Section> */}
          <Section id='contact' animation='fadeInLeft'>
            <ContactForm />
          </Section>
        </div> 
      </main>
    </div>
  );
}

export default MainComponent;
// export default function MainComponent() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#1a1a1a", color: "white" }}>
//       <Header />
//       <main style={{ flex: 1, overflow: "hidden" }}>
//         <div style={{ height: "100vh", overflow: "auto", scrollBehavior: "smooth", scrollSnapType: "y mandatory" }}>
//           <Section id="about" animation="fadeInLeft">
//             <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", padding: "0 1rem" }}>
//               {/* Tu cosdfsdfntenido */}
//             </div>
//           </Section>
//           <Section id="career" animation="fadeInRight">
//             <CareerItem title="Full-Stack Developer" company="Acme Inc." duration="2018 - Present" description="Building modern web applications." />
//           </Section>
//           <Section id="skills" animation="fadeInLeft">
//             <SkillGrid />
//           </Section>
//           <Section id="projects" animation="fadeInRight">
//             <ProjectGrid />
//           </Section>
//           <Section id="contact" animation="fadeInLeft">
//             <ContactForm />
//           </Section>
//         </div>
//       </main>
//     </div>
//   );
// }
