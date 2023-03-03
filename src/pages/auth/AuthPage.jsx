import React from 'react';
import AuthForm from '../../components/loginForm/AuthForm';
import './AuthPage.css';

const authPage = () => {
  return (
    <section className='page'>
      <section className='container'>
        <div className='auth-page__content'>
          <AuthForm />
        </div>
      </section>
    </section>
  );
};

export default authPage;
