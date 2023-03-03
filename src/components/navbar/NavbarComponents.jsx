import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import NavbarLayout from '../navbarLayout/NavbarLayout';
import './NavbarComponents.css';

const NavbarComponents = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: 'Home', to: '/' },
    { value: 'About', to: '/about' },
    { value: 'Contacts', to: '/contacts' },
    { value: 'Sign in', to: '/auth' },
  ];

  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <div className='header__container__row'>
            <div className='header__logo'>
              <Link className='header__logo__item' to='/'>
                Title
              </Link>
            </div>
            <div className='mobile-menu__btn' onClick={() => setMenuActive(!menuActive)}>
              {!menuActive ? (
                <i className='fa-solid fa-bars'></i>
              ) : (
                <i className='fa-solid fa-xmark'></i>
              )}
            </div>
            <NavbarLayout active={menuActive} setActive={setMenuActive} items={items} />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default NavbarComponents;
