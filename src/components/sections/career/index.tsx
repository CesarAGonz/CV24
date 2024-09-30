import React, { useEffect, useState } from 'react';
import CareerItem from './CareerItem.tsx'; // Asegúrate de importar correctamente el componente
import './CareerSectionStyle.css'; // Para los estilos

const CareerSection: React.FC = () => {
  const data = [
    {
      "title": "Fullstack Developer",
      "company": "Taquitos inc",
      "duration": "2018 - Present",
      "description": "Se vienen cositas"
    },
    {
      "title": "Frontend Developer",
      "company": "Tacos inc",
      "duration": "2017 - 2018",
      "description": "Responsable de la UI/UX"
    },
    {
      "title": "Backend Developer",
      "company": "Quesadillas Corp",
      "duration": "2015 - 2017",
      "description": "Desarrollo de APIs"
    },
    {
      "title": "Backend Developer",
      "company": "Quesadillas Corp",
      "duration": "2015 - 2017",
      "description": "Desarrollo de APIs"
    },
    {
      "title": "Backend Developer",
      "company": "Quesadillas Corp",
      "duration": "2015 - 2017",
      "description": "Desarrollo de APIs"
    },
    {
      "title": "Backend Developer",
      "company": "Quesadillas Corp",
      "duration": "2015 - 2017",
      "description": "Desarrollo de APIs Desarrollo de APIs Desarrollo de APIs Desarrollo de APIs Desarrollo de APIs"
    }
  ];

  const [careerItems, setCareerItems] = useState<any[]>(data);

  return (
    <section id='career' className='fadeInLeft'>
      <div className='career-grid'>
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
