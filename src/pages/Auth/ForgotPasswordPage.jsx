import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import logo from '../../assets/images/logo/logo.png';

import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem('medcare-user') || 'null'
    );

    const isAdmin = email === 'admin@medcare.com';
    const isRegisteredUser =
      savedUser && savedUser.email === email;

    if (isAdmin || isRegisteredUser) {
      toast.success(
        'Recovery email sent to your registered email address'
      );
    } else {
      toast.error('Email not found');
    }
  };

  return (
    <div className='forgot-password-page'>
      <div className='forgot-password-card'>
       

        <h1>Forgot password?</h1>

        <p>
          Enter your registered email address and we'll send a
          recovery email to reset your password.
        </p>

        <form
          className='forgot-password-form'
          onSubmit={handleSubmit}
        >
          <div className='forgot-password-group'>
            <label>Email address</label>

            <input
              type='email'
              placeholder='Enter your registered email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type='submit'
            className='forgot-password-submit-btn'
          >
            Send recovery email
          </button>

          <Link
            to='/login'
            className='forgot-password-back-btn'
          >
            Back to login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;