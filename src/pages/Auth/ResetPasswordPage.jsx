import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import logo from '../../assets/images/logo/logo.png';

import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
const [formData, setFormData] = useState({
email: '',
currentPassword: '',
newPassword: '',
confirmPassword: '',
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();


const {
  email,
  currentPassword,
  newPassword,
  confirmPassword,
} = formData;

if (
  !email.trim() ||
  !currentPassword.trim() ||
  !newPassword.trim() ||
  !confirmPassword.trim()
) {
  toast.error('Please fill all fields');
  return;
}

if (newPassword.length < 6) {
  toast.error('New password must be at least 6 characters');
  return;
}

if (newPassword !== confirmPassword) {
  toast.error('New passwords do not match');
  return;
}

const savedUser = JSON.parse(
  localStorage.getItem('medcare-user') || 'null'
);

const isAdmin = email === 'admin@medcare.com';

if (isAdmin) {
  if (currentPassword !== 'Admin@123') {
    toast.error('Current password is incorrect');
    return;
  }

  setFormData({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  toast.success('Password changed successfully');
  return;
}

if (!savedUser || savedUser.email !== email) {
  toast.error('Email not found');
  return;
}

if (savedUser.password !== currentPassword) {
  toast.error('Current password is incorrect');
  return;
}

const updatedUser = {
  ...savedUser,
  password: newPassword,
};

localStorage.setItem(
  'medcare-user',
  JSON.stringify(updatedUser)
);

setFormData({
  email: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
});

toast.success('Password changed successfully');


};

return ( <div className="reset-password-page"> <div className="reset-password-card"> <img
       src={logo}
       alt="MedCare Hospital"
       className="reset-password-logo"
     />


    <h1>Reset password</h1>

    <p>
      Update your account password by verifying your email
      address and current password.
    </p>

    <form
      className="reset-password-form"
      onSubmit={handleSubmit}
    >
      <div className="reset-password-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your registered email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="reset-password-group">
        <label>Current password</label>
        <input
          type="password"
          name="currentPassword"
          placeholder="Enter your current password"
          value={formData.currentPassword}
          onChange={handleChange}
        />
      </div>

      <div className="reset-password-group">
        <label>New password</label>
        <input
          type="password"
          name="newPassword"
          placeholder="Enter a new password"
          value={formData.newPassword}
          onChange={handleChange}
        />
      </div>

      <div className="reset-password-group">
        <label>Confirm new password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your new password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="reset-password-submit-btn"
      >
        Confirm
      </button>

      <Link
        to="/login"
        className="reset-password-back-btn"
      >
        Back to login
      </Link>
    </form>
  </div>
</div>
);
};

export default ResetPasswordPage;
