import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthTransition from "../../components/auth/AuthTransition";

import logo from "../../assets/images/logo/logo.png";

import "./LoginPage.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!formData.password) {
      toast.error("Please enter a password");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!formData.confirmPassword) {
      toast.error("Please confirm your password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("medcare-user") || "null"
    );

    if (
      existingUser &&
      existingUser.email === formData.email
    ) {
      toast.error("An account with this email already exists");
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: "+91 98765 43210",
      lastLogin: new Date().toISOString(),
    };

    localStorage.setItem(
      "medcare-user",
      JSON.stringify(newUser)
    );

    localStorage.setItem("medcare-auth", "true");

    navigate("/signup-success");
  };

  return (
    <AuthLayout>
      <AuthTransition>
        <div className="auth-panel-content">
          <div className="auth-brand">
            <img src={logo} alt="MedCare Hospital" />

            <div>
              <h2>MedCare Hospital</h2>
              <p>Hospital management system</p>
            </div>
          </div>

          <div className="auth-heading">
            <h1>Create account</h1>
            <p>Register to access the hospital management dashboard</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="auth-form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="admin@medcare.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="auth-form-group">
              <label>Password</label>

              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="auth-form-group">
              <label>Confirm password</label>

              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn">
              Create account
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </AuthTransition>
    </AuthLayout>
  );
};

export default SignupPage;