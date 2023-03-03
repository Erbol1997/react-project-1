import React from 'react';
import './HeroSection.css';
import heroSectionImage from '../../ui/images/strategy-development.png';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='container'>
        <div className='hero-section-row'>
          <div className='hero-section__inner__textContent'>
            <h1 className='hero-section__title'>Lorem ipsum dolor sit amet</h1>
            <p className='hero-section__subtitle'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='hero-section__image'>
            <img src={heroSectionImage} alt='hero-section__image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
