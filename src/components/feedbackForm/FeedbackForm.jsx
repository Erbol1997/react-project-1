import React from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  return (
    <form className='feddback-form'>
      <h5 className='feddback-form-title'>Contact Us</h5>
      <div className='feddback-form__inputs'>
        <input type='text' autoComplete='name' placeholder='Enter your Name' />
        <input type='email' autoComplete='email' placeholder='Enter your email adress' />
        <textarea name='prompt' cols='1' rows='6'></textarea>
      </div>
    </form>
  );
};

export default FeedbackForm;
