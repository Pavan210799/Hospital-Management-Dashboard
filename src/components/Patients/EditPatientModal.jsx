import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import doctorsData from "../../data/doctorsData";
import "./AddPatientModal.css";

const EditPatientModal = ({
  isOpen,
  onClose,
  patient,
  setPatients,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    department: "",
    doctorName: "",
    status: "OP",
  });

  const [doctorQuery, setDoctorQuery] = useState("");
  const [showDoctorList, setShowDoctorList] =
    useState(false);

  useEffect(() => {
    if (isOpen && patient) {
      document.body.style.overflow = "hidden";

      setFormData({
        name: patient.name,
        age: patient.age,
        gender: patient.gender,
        department: patient.department,
        doctorName: patient.doctorName,
        status: patient.status,
      });

      setDoctorQuery(patient.doctorName);
      setShowDoctorList(false);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, patient]);

  if (!isOpen || !patient) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDepartmentChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      department: e.target.value,
      doctorName: "",
    }));

    setDoctorQuery("");
    setShowDoctorList(false);
  };

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.department ===
        formData.department &&
      doctor.name
        .toLowerCase()
        .includes(doctorQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setPatients((prev) =>
      prev.map((p) =>
        p.id === patient.id
          ? {
              ...p,
              name: formData.name,
              age: Number(formData.age),
              gender: formData.gender,
              department: formData.department,
              doctorName: formData.doctorName,
              status: formData.status,
            }
          : p
      )
    );

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="patient-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="patient-modal"
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
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="patient-modal-header">
              <h2>Edit patient</h2>

              <button
                className="patient-modal-close"
                onClick={onClose}
              >
                <FaXmark />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="patient-form"
            >
              <div className="patient-form-grid">
                <div className="patient-form-group">
                  <label>Full name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="patient-form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="patient-form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="patient-form-group">
                  <label>Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={
                      handleDepartmentChange
                    }
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

                <div className="patient-form-group doctor-search-group">
                  <label>Assigned doctor</label>

                  <input
                    type="text"
                    value={doctorQuery}
                    onChange={(e) => {
                      setDoctorQuery(
                        e.target.value
                      );
                      setShowDoctorList(true);
                    }}
                    onFocus={() =>
                      setShowDoctorList(true)
                    }
                    placeholder={`Search ${formData.department} doctors`}
                    required
                  />

                  {showDoctorList && (
                    <div className="doctor-search-dropdown">
                      {filteredDoctors.length >
                      0 ? (
                        filteredDoctors.map(
                          (doctor) => (
                            <button
                              key={doctor.id}
                              type="button"
                              className="doctor-search-item"
                              onClick={() => {
                                setDoctorQuery(
                                  doctor.name
                                );
                                setFormData(
                                  (
                                    prev
                                  ) => ({
                                    ...prev,
                                    doctorName:
                                      doctor.name,
                                  })
                                );
                                setShowDoctorList(
                                  false
                                );
                              }}
                            >
                              <span className="doctor-search-name">
                                {doctor.name}
                              </span>
                              <span className="doctor-search-dept">
                                {
                                  doctor.department
                                }
                              </span>
                            </button>
                          )
                        )
                      ) : (
                        <div className="doctor-search-empty">
                          No doctors found
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="patient-form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="OP">
                      OP
                    </option>
                    <option value="Admitted">
                      Admitted
                    </option>
                    <option value="Discharged">
                      Discharged
                    </option>
                  </select>
                </div>
              </div>

              <div className="patient-form-actions">
                <button
                  type="button"
                  className="patient-btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="patient-btn-primary"
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

export default EditPatientModal;