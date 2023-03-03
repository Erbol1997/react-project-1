import React from 'react';
import { Link } from 'react-router-dom';
import './FooterComponents.css';

const FooterComponents = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer__container__row'>
          <div className='footer__logo'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
          <ul className='footer__link__items__container'>
            <li className='footer__link__items'>
              <Link className='footer__link__item' to='/'>
                Home
              </Link>
            </li>
            <li className='footer__link__items'>
              <Link className='footer__link__item' to='/about'>
                About
              </Link>
            </li>
            <li className='footer__link__items'>
              <Link className='footer__link__item' to='/contacts'>
                Contacts
              </Link>
            </li>
            <li className='footer__link__items'>
              <Link className='footer__link__item' to='/auth'>
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;
