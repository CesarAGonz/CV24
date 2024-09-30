import Header from './Header';
import Section from './Section';
import CareerItem from './CareerItem';
import SkillGrid from './SkillGrid';
import ProjectGrid from './ProjectGrid';
import ContactForm from './ContactForm';

export default function MainComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#1a1a1a", color: "white" }}>
      <Header />
      <main style={{ flex: 1, overflow: "hidden" }}>
        <div style={{ height: "100vh", overflow: "auto", scrollBehavior: "smooth", scrollSnapType: "y mandatory" }}>
          <Section id="about" animation="fadeInLeft">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", padding: "0 1rem" }}>
              {/* Tu cosdfsdfntenido */}
            </div>
          </Section>
          <Section id="career" animation="fadeInRight">
            <CareerItem title="Full-Stack Developer" company="Acme Inc." duration="2018 - Present" description="Building modern web applications." />
          </Section>
          <Section id="skills" animation="fadeInLeft">
            <SkillGrid />
          </Section>
          <Section id="projects" animation="fadeInRight">
            <ProjectGrid />
          </Section>
          <Section id="contact" animation="fadeInLeft">
            <ContactForm />
          </Section>
        </div>
      </main>
    </div>
  );
}
