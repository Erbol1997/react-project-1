import React from 'react';
import CartComponents from '../../components/cart/CartComponents';
import HeroSection from '../../components/heroSection/HeroSection';
import Button from '../../ui/button/Button';
import './HomePage.css';

const homePage = () => {
  return (
    <section className='page'>
      <HeroSection />
      <section className='container'>
        <div className='home-page__content'>
          <h2 className='home-page__title'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </h2>
          <Button class='defaultBtnStyle' text='button' />
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

export default homePage;
