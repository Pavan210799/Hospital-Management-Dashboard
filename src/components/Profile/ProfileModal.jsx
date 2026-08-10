import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCircleUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaIdBadge,
  FaClock,
  FaRightFromBracket,
  FaXmark,
} from "react-icons/fa6";

import logo from "../../assets/images/logo/logo.png";

import "./ProfileModal.css";

const ProfileModal = ({ isOpen, onClose }) => {
    const userName = "Admin User";
const avatarLetter = userName.charAt(0).toUpperCase();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("medcare-auth");
    onClose();
    navigate("/login");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="profile-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="profile-modal"
            initial={{
              scale: 0.95,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
              y: 20,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="profile-modal-header">
              <div className="profile-header-brand">
                <img
                  src={logo}
                  alt="MedCare Hospital"
                />

                <div>
                  <h3>My Profile</h3>
                  <p>MedCare Hospital</p>
                </div>
              </div>

              <button
                className="profile-modal-close"
                onClick={onClose}
              >
                <FaXmark size={18} />
              </button>
            </div>

            <div className="profile-modal-body">
              <div className="profile-avatar-section">
                <div className="profile-avatar">
                    {avatarLetter}
                </div>

                <h2>{userName}</h2>

                <span className="profile-role-badge">
                    Administrator
                </span>
                </div>

              <div className="profile-info-list">
                <div className="profile-info-item">
                  <FaEnvelope size={18} />

                  <div>
                    <span>Email</span>
                    <strong>
                      admin@medcare.com
                    </strong>
                  </div>
                </div>

                <div className="profile-info-item">
                  <FaPhone size={18} />

                  <div>
                    <span>Phone</span>
                    <strong>
                      +91 98765 43210
                    </strong>
                  </div>
                </div>

                <div className="profile-info-item">
                  <FaBuilding size={18} />

                  <div>
                    <span>Department</span>
                    <strong>
                      Administration
                    </strong>
                  </div>
                </div>

                <div className="profile-info-item">
                  <FaIdBadge size={18} />

                  <div>
                    <span>Employee ID</span>
                    <strong>MC-ADM-001</strong>
                  </div>
                </div>

                <div className="profile-info-item">
                  <FaClock size={18} />

                  <div>
                    <span>Last login</span>
                    <strong>
                      Today, 9:42 AM
                    </strong>
                  </div>
                </div>
              </div>

              <button
                className="profile-logout-btn"
                onClick={handleLogout}
              >
                <FaRightFromBracket size={18} />
                Logout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;