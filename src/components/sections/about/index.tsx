import React from 'react';
import './AboutMeStyles.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section">
      <div className="profile-container">
        <img
          src="https://media.istockphoto.com/id/2149651681/es/foto/hombre-tratando-de-abrir-un-frasco-de-pepinillos.jpg?s=612x612&w=is&k=20&c=haoG2ORANvb-UuZN8SbcNFwyHCap3l5Bn16Z5u8fbi4="
          alt="Cesar Gonzalez profile"
          className="profile-image"
        />
        <h2 className="profile-name">Cesar Antonio Gonzalez Rodriguez</h2>
        <h3 className="profile-title">Full-Stack Developer</h3>
      </div>
      <div className="about-me-content">
        <h3 className="about-me-heading">About Me</h3>
        <p className="about-me-description">
            I'm a developer with 5 years of experience delivering technology solutions at all levels, specializing in custom software development across various technologies.
        </p>
        <p className="about-me-description">
            My goal has always been to provide the best and most effective solutions for users. I'm constantly seeking personal and professional growth, eager to tackle the most complex challenges the tech world presents and contribute in as many meaningful ways as possible.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
