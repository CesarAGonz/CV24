import React from 'react';
import { skills } from '../../../configs/config';
import './SkillGrid.css';

const SkillGrid: React.FC = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skill-grid">
        {skills.map(({ title, icon: Icon }, index) => (
          <div key={index} className="skill-card">
            <Icon className="skill-icon" />
            <h3 className="skill-title">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
