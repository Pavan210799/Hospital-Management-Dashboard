import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import "./AddDoctorModal.css";

const initialForm = {
  name: "",
  department: "",
  specialization: "",
  experience: "",
  availability: "Available",
  patients: "",
  image: "",
};

const AddDoctorModal = ({
  isOpen,
  onClose,
  doctors,
  setDoctors,
}) => {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFormData(initialForm);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate next available doctor ID
    const lastDoctor = doctors.reduce((max, doctor) => {
      const match = doctor.id.match(/\d+/);
      const num = match ? parseInt(match[0], 10) : 0;
      return Math.max(max, num);
    }, 0);

    const doctorName = formData.name.trim().startsWith("Dr.")
      ? formData.name.trim()
      : `Dr. ${formData.name.trim()}`;

    const newDoctor = {
      id: `MCD${String(lastDoctor + 1).padStart(3, "0")}`,
      name: doctorName,
      department: formData.department,
      specialization: formData.specialization,
      experience: formData.experience,
      availability: formData.availability,
      patients: Number(formData.patients),
      appointmentsToday: 0,
      rating: 4.8,
      image: formData.image.trim() || null,
    };

    setDoctors((prev) => [newDoctor, ...prev]);

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
                <h2>Add new doctor</h2>
                <p>Create a doctor profile</p>
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
                    placeholder="Enter doctor name"
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
                    <option value="">
                      Select department
                    </option>
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
                    placeholder="Enter specialization"
                    required
                  />
                </div>

                <div className="doctor-form-group">
                  <label>Experience</label>
                  <input
                    type="text"
                    name="experience"
                    placeholder="10 Years"
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
                    placeholder="0"
                    required
                  />
                </div>

                <div className="doctor-form-group doctor-form-full">
                  <label>Profile image URL (optional)</label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
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
                  Add doctor
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddDoctorModal;