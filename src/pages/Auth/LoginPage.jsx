import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

import AuthLayout from "../../components/auth/AuthLayout";

import logo from "../../assets/images/logo/logo.png";

import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password");
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("medcare-user") || "null"
    );

    const isAdmin =
      email === "admin@medcare.com" &&
      password === "Admin@123";

    const isRegisteredUser =
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password;

    if (isAdmin) {
      localStorage.setItem("medcare-auth", "true");
      navigate("/");
      return;
    }

    if (isRegisteredUser) {
      const updatedUser = {
        ...savedUser,
        lastLogin: new Date().toISOString(),
      };

      localStorage.setItem(
        "medcare-user",
        JSON.stringify(updatedUser)
      );

      localStorage.setItem("medcare-auth", "true");
      navigate("/");
      return;
    }

    toast.error("Invalid email or password");
  };

  return (
    <AuthLayout>
        <div className="auth-panel-content">
          <div className="auth-brand">
            <img src={logo} alt="MedCare Hospital" />

            <div>
              <h2>MedCare Hospital</h2>
              <p>Hospital management system</p>
            </div>
          </div>

          <div className="auth-heading">
            <h1>Welcome back</h1>
            <p>Sign in to access your hospital dashboard</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label>Email address</label>
              <input
                type="email"
                placeholder="admin@medcare.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-form-group">
              <label>Password</label>

              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="auth-form-options">
              <Link to="/reset-password">Reset password</Link>

              <Link to="/forgot-password" className="forgot-password-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-submit-btn">
              Sign in
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/signup">Create account</Link>
            </p>
          </div>
        </div>
    </AuthLayout>
  );
};

export default LoginPage;