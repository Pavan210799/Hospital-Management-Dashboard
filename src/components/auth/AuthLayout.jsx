import { motion } from "framer-motion";

import bg1 from "../../assets/images/Auth/bg1.png";
import bg2 from "../../assets/images/Auth/bg2.png";
import bg3 from "../../assets/images/Auth/bg3.png";
import bg4 from "../../assets/images/Auth/bg4.png";
import center from "../../assets/images/Auth/center.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      {/* Left hero section */}
      <div className="auth-hero">
        <div className="auth-hero-overlay" />

        <div className="auth-hero-content">
          <div className="auth-badge">MedCare Hospital</div>

          <h1>
            Advanced hospital
            <br />
            management system
          </h1>

          <p>
            Manage patients, appointments, pharmacy, billing, and bed
            management from one secure dashboard.
          </p>

          <div className="auth-hero-collage">
            <motion.img
              src={bg1}
              alt="Hospital"
              className="collage-img collage-top-left"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={bg2}
              alt="Hospital"
              className="collage-img collage-top-right"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={bg3}
              alt="Hospital"
              className="collage-img collage-bottom-left"
              animate={{ y: [0, 8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={bg4}
              alt="Hospital"
              className="collage-img collage-bottom-right"
              animate={{ x: [0, -8, 0], y: [0, -6, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={center}
              alt="Hospital"
              className="collage-center"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Right form section */}
      <div className="auth-form-wrapper">
        <div className="auth-panel">
          <div className="auth-panel-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;