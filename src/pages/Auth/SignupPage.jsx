import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

import bg1 from "../../assets/images/Auth/bg1.png";
import bg2 from "../../assets/images/Auth/bg2.png";
import bg3 from "../../assets/images/Auth/bg3.png";
import bg4 from "../../assets/images/Auth/bg4.png";
import center from "../../assets/images/Auth/center.png";

import "./LoginPage.css";

const SignupPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-hero">
        <div className="auth-hero-overlay" />

        <div className="auth-hero-content">
          <div className="auth-badge">
            MedCare Hospital
          </div>

          <h1>
            Join our digital
            <br />
            healthcare network
          </h1>

          <p>
            Create your secure hospital account and
            access patients, appointments, pharmacy,
            billing, and hospital operations.
          </p>

          <div className="auth-hero-collage">
            <motion.img
              src={bg1}
              alt="Hospital"
              className="collage-img collage-top-left"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={bg2}
              alt="Hospital"
              className="collage-img collage-top-right"
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={bg3}
              alt="Hospital"
              className="collage-img collage-bottom-left"
              animate={{
                y: [0, 8, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={bg4}
              alt="Hospital"
              className="collage-img collage-bottom-right"
              animate={{
                x: [0, -8, 0],
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={center}
              alt="Hospital"
              className="collage-center"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="auth-hero-stats">
            <div>
              <h3>500+</h3>
              <span>Patients managed</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Emergency support</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Digital records</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-panel">
        <div className="auth-panel-content">
          <div className="auth-brand">
            <img
              src={logo}
              alt="MedCare Hospital"
            />

            <div>
              <h2>MedCare Hospital</h2>
              <p>Hospital management system</p>
            </div>
          </div>

          <div className="auth-heading">
            <h1>Create account</h1>
            <p>
              Register to access the hospital
              management dashboard
            </p>
          </div>

          <form className="auth-form">
            <div className="auth-form-group">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="auth-form-group">
              <label>Email address</label>
              <input
                type="email"
                placeholder="admin@medcare.com"
              />
            </div>

            <div className="auth-form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
              />
            </div>

            <div className="auth-form-group">
              <label>Confirm password</label>
              <input
                type="password"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
            >
              Create account
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;