import React from 'react';
import CartComponents from '../../components/cart/CartComponents';
import HeroSection from '../../components/heroSection/HeroSection';
import './AboutPage.css';

const aboutPage = () => {
  return (
    <section className='page'>
      <HeroSection />
      <section className='container'>
        <div className='about-page__content'>
          <div className='about-page__content__items'>
            <div className='about-page__content__item'>
              <h4 className='about-page__content__item__title'>Lorem ipsum dolor sit amet</h4>
              <p className='about-page__content__item__subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='about-page__content__item'>
              <h4 className='about-page__content__item__title'>Lorem ipsum dolor sit amet</h4>
              <p className='about-page__content__item__subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className='cart-inner'>
            <CartComponents />
            <CartComponents />
            <CartComponents />
          </div>
        </div>
      </section>
    </section>
  );
};

export default aboutPage;
