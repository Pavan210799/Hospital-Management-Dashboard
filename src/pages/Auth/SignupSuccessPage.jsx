import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

import "./SignupSuccessPage.css";

const SignupSuccessPage = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/");
  };

  const handleBackToLogin = () => {
    localStorage.removeItem("medcare-auth");
    navigate("/login");
  };

  return (
    <div className="signup-success-page">
      <motion.div
        className="signup-success-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="signup-success-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
        >
          <FaCircleCheck />
        </motion.div>

        <h1>Account created successfully!</h1>

        <p>
          Welcome to <strong>MedCare Hospital</strong>. Your account has
          been created successfully and you can now access the hospital
          management dashboard.
        </p>

        <motion.button
          className="signup-success-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoToDashboard}
        >
          Go to Dashboard
        </motion.button>

        <button
          className="signup-success-secondary"
          onClick={handleBackToLogin}
        >
          Back to Login
        </button>
      </motion.div>
    </div>
  );
};

export default SignupSuccessPage;