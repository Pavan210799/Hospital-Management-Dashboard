import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaStar } from "react-icons/fa6";
import "./DoctorProfileModal.css";

const DoctorProfileModal = ({ isOpen, onClose, doctor }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!doctor) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="doctor-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="doctor-modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{
              duration: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="doctor-modal-header">
              <div>
                <h2>Doctor profile</h2>
                <p>Professional details and performance</p>
              </div>

              <button
                className="doctor-modal-close"
                onClick={onClose}
              >
                <FaXmark />
              </button>
            </div>

            <div className="doctor-profile-summary">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-profile-avatar"
              />

              <div className="doctor-profile-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialization}</p>
                <span
                  className={`doctor-profile-status ${doctor.availability
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {doctor.availability}
                </span>
              </div>
            </div>

            <div className="doctor-profile-grid">
              <div>
                <span className="doctor-label">Doctor ID</span>
                <p>{doctor.id}</p>
              </div>

              <div>
                <span className="doctor-label">Department</span>
                <p>{doctor.department}</p>
              </div>

              <div>
                <span className="doctor-label">Experience</span>
                <p>{doctor.experience}</p>
              </div>

              <div>
                <span className="doctor-label">Patients assigned</span>
                <p>{doctor.patients}</p>
              </div>

              <div>
                <span className="doctor-label">Appointments today</span>
                <p>{doctor.appointmentsToday}</p>
              </div>

              <div>
                <span className="doctor-label">Rating</span>
                <p className="doctor-rating">
                  <FaStar /> {doctor.rating}
                </p>
              </div>
            </div>

            <div className="doctor-modal-footer">
              <button
                className="doctor-close-btn"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DoctorProfileModal;