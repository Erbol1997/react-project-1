import React from 'react';
import { Link } from 'react-router-dom';

// import './NavbarLayout.css';

const NavbarLayout = (props) => {
  return (
    <ul
      className={
        props.active ? 'header__link__items__container active' : 'header__link__items__container'
      }>
      {props.items.map((item) => {
        return (
          <li className='header__link__items'>
            <Link className='header__link__item' to={item.to}>
              {item.value}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLayout;
