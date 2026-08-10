import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaIdBadge,
  FaClock,
  FaRightFromBracket,
  FaXmark,
  FaPen,
  FaCheck,
} from "react-icons/fa6";
import { toast } from "react-toastify";

import logo from "../../assets/images/logo/logo.png";
import "./ProfileModal.css";

const ProfileModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(
    localStorage.getItem("medcare-user") || "null"
  );

  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState("");

  const profile = storedUser
    ? {
        name: storedUser.name,
        email: storedUser.email,
        role: "Staff Member",
        department: "General",
        phone: storedUser.phone || "+91 98765 43210",
        employeeId: "MC-USER-001",
        lastLogin: storedUser.lastLogin
          ? new Date(storedUser.lastLogin).toLocaleString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "N/A",
      }
    : {
        name: "Admin User",
        email: "admin@medcare.com",
        role: "Administrator",
        department: "Administration",
        phone: "+91 98765 43210",
        employeeId: "MC-ADM-001",
        lastLogin: new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

  useEffect(() => {
    setPhone(profile.phone);
  }, [isOpen]);

  const avatarLetter = profile.name.charAt(0).toUpperCase();

  const handleSave = () => {
  if (storedUser) {
    const updatedUser = {
      ...storedUser,
      phone,
    };

    localStorage.setItem(
      "medcare-user",
      JSON.stringify(updatedUser)
    );
  }

  setIsEditing(false);
  toast.success("Phone number updated successfully");
};

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
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="profile-modal-header">
              <div className="profile-header-brand">
                <img src={logo} alt="MedCare" />
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

                <h2>{profile.name}</h2>

                <span className="profile-role-badge">
                  {profile.role}
                </span>
              </div>

              <div className="profile-info-list">
                <div className="profile-info-item">
                  <FaEnvelope size={18} />
                  <div>
                    <span>Email</span>
                    <strong>{profile.email}</strong>
                  </div>
                </div>

                <div className="profile-info-item">
                  <FaPhone size={18} />
                  <div className="profile-phone-content">
                    <span>Phone</span>

                    {isEditing ? (
                      <input
                        type="tel"
                        className="profile-phone-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    ) : (
                      <strong>{phone}</strong>
                    )}
                  </div>
                </div>

                <div className="profile-info-item">
                  <FaBuilding size={18} />
                  <div>
                    <span>Department</span>
                    <strong>{profile.department}</strong>
                  </div>
                </div>

                <div className="profile-info-item">
                  <FaIdBadge size={18} />
                  <div>
                    <span>Employee ID</span>
                    <strong>{profile.employeeId}</strong>
                  </div>
                </div>

                <div className="profile-info-item">
                  <FaClock size={18} />
                  <div>
                    <span>Last login</span>
                    <strong>{profile.lastLogin}</strong>
                  </div>
                </div>
              </div>

              <button
                className="profile-edit-btn"
                onClick={() =>
                  isEditing ? handleSave() : setIsEditing(true)
                }
              >
                {isEditing ? (
                  <>
                    <FaCheck />
                    Save
                  </>
                ) : (
                  <>
                    <FaPen />
                    Edit
                  </>
                )}
              </button>

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