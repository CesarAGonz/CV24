import React from 'react';
import Header from '../sections/header/index.tsx';
import Section from '../Section.tsx';
import CareerItem from '../sections/career/index.tsx';
import SkillGrid from '../sections/skills/SkillGrid.tsx';
import ProjectGrid from '../ProjectGrid.tsx';
import ContactForm from '../sections/contact/ContactForm.tsx';
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