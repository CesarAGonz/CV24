import React from 'react';
import './BannerStyles.css';

const Banner: React.FC = () => {
  return (
    <div className='banner'>
      <h2>Contact Me</h2>
      <p>Interested in working together? Let's get in touch!</p>
      <button className='contactButton'>Contact</button>
    </div>
  );
};

export default Banner;
