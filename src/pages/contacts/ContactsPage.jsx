import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import { SocialComponents } from '../../components/socialComponents/SocialComponents';
import FeedbackForm from '../../components/feedbackForm/FeedbackForm';
import './ContactsPage.css';

const contactsPage = () => {
  return (
    <section className='page'>
      <HeroSection />
      <section className='container'>
        <div className='contacts-page__content'>
          <SocialComponents />
          <FeedbackForm />
        </div>
      </section>
    </section>
  );
};

export default contactsPage;
