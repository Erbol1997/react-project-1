import React from 'react';
import './SocialComponents.css';
import facebook from '../../ui/icons/facebook.svg';
import google from '../../ui/icons/google.svg';
import vk from '../../ui/icons/vk.svg';

import map from '../../ui/icons/map.svg';
import phone from '../../ui/icons/phone.svg';
import telegram from '../../ui/icons/telegram.svg';
import email from '../../ui/icons/email.svg';

const SocialComponents = () => {
  return (
    <div className='contacts-page__social'>
      <div className='contacts-page__social__items'>
        <div className='contacts-page__social__item'>
          <img src={map} alt='marker' />
          <h6>Our Office</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='contacts-page__social__item'>
          <img src={phone} alt='marker' />
          <h6>Phone Number</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='contacts-page__social__item'>
          <img src={telegram} alt='marker' />
          <h6>Telegram</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='contacts-page__social__item'>
          <img src={email} alt='marker' />
          <h6>Email</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  );
};

const SignUpSocial = () => {
  return (
    <div className='signUpContent'>
      <h4 className='sign-up__title'>Sign up with</h4>
      <ul className='sign-up__icons'>
        <li className='sign-up__icon'>
          <img src={facebook} alt='facebook' />
        </li>
        <li className='sign-up__icon'>
          <img src={google} alt='google' />
        </li>
        <li className='sign-up__icon'>
          <img src={vk} alt='vk' />
        </li>
      </ul>
    </div>
  );
};

export { SocialComponents, SignUpSocial };
