import React from 'react';
import Button from '../../ui/button/Button';
import './CartComponents.css';

const CartComponents = () => {
  return (
    <div className='cart'>
      <div className='cart-row'>
        <h4 className='cart-title'>Lorem ipsum </h4>
        <p className='cart-subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <Button class='cartBtn' text='button' />
      </div>
    </div>
  );
};

export default CartComponents;
