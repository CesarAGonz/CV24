import React, { useState } from 'react';
import CareerItem from './CareerItem.tsx';
import './CareerSectionStyle.css';
import { careerData } from '../../../configs/config';
import { CareerItem as CareerItemInterface } from '../../../configs/interfaces';

const CareerSection: React.FC = () => {
  const [careerItems] = useState<CareerItemInterface[]>(careerData);

  return (
    <section id="career" className="career-container">
      <div className="career-title-wrapper">
        <h2 className="career-title">Career</h2>
      </div>
      <div className="career-grid">
        {careerItems.map((item, index) => (
          <CareerItem
            key={index}
            title={item.title}
            company={item.company}
            duration={item.duration}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
