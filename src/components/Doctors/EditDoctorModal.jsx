import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import "./AddDoctorModal.css";

const EditDoctorModal = ({
  isOpen,
  onClose,
  doctor,
  setDoctors,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    specialization: "",
    experience: "",
    availability: "Available",
    patients: "",
    appointmentsToday: "",
    rating: "",
    image: "",
  });

  useEffect(() => {
    if (isOpen && doctor) {
        document.body.style.overflow = "hidden";

        setFormData({
        name: doctor.name || "",
        department: doctor.department || "",
        specialization: doctor.specialization || "",
        experience: doctor.experience || "",
        availability: doctor.availability || "Available",
        patients: doctor.patients ?? "",
        appointmentsToday: doctor.appointmentsToday ?? "",
        rating: doctor.rating ?? "",
        image: doctor.image || "",
        });
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto";
    };
    }, [isOpen, doctor]);

  if (!doctor) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDoctors((prev) =>
        prev.map((d) =>
        d.id === doctor.id
            ? {
                ...d,
                ...formData,
                patients:
                formData.patients === ""
                    ? 0
                    : Number(formData.patients),
                appointmentsToday:
                formData.appointmentsToday === ""
                    ? 0
                    : Number(formData.appointmentsToday),
                rating:
                formData.rating === ""
                    ? d.rating
                    : Number(formData.rating),
            }
            : d
        )
    );

    onClose();
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="doctor-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="doctor-modal"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="doctor-modal-header">
              <div>
                <h2>Edit doctor</h2>
                <p>Update doctor information</p>
              </div>

              <button
                className="doctor-modal-close"
                onClick={onClose}
              >
                <FaXmark />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="doctor-form"
            >
              <div className="doctor-form-grid">
                <div className="doctor-form-group">
                  <label>Full name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="doctor-form-group">
                  <label>Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>ENT</option>
                    <option>Dermatology</option>
                    <option>Pediatrics</option>
                    <option>General Medicine</option>
                    <option>Pulmonology</option>
                  </select>
                </div>

                <div className="doctor-form-group">
                  <label>Specialization</label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="doctor-form-group">
                  <label>Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="doctor-form-group">
                  <label>Availability</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                  >
                    <option>Available</option>
                    <option>Busy</option>
                    <option>On Leave</option>
                  </select>
                </div>

                <div className="doctor-form-group">
                    <label>Patients assigned</label>
                    <input
                        type="number"
                        name="patients"
                        value={formData.patients}
                        onChange={handleChange}
                        min="0"
                    />
                    </div>

                <div className="doctor-form-group">
                    <label>Appointments today</label>
                    <input
                        type="number"
                        name="appointmentsToday"
                        value={formData.appointmentsToday}
                        onChange={handleChange}
                        min="0"
                    />
                </div>

                <div className="doctor-form-group">
                  <label>Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="doctor-form-group doctor-form-full">
                  <label>Profile image URL</label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="doctor-form-actions">
                <button
                  type="button"
                  className="doctor-btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="doctor-btn-primary"
                >
                  Save changes
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditDoctorModal;