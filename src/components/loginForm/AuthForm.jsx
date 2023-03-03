import React from 'react';
import './AuthForm.css';
import Button from '../../ui/button/Button';
import { SignUpSocial } from '../socialComponents/SocialComponents';

const AuthForm = () => {
  return (
    <form className='auth-form'>
      <h5 className='auth-form-title'>Login</h5>
      <div className='auth-form__inputs'>
        <input type='email' autoComplete='email' placeholder='Enter your email adress' />
        <input type='password' autoComplete='name' placeholder='Enter your password' />
        <Button text='login' class='authBtn' />
        <SignUpSocial />
      </div>
    </form>
  );
};

export default AuthForm;
