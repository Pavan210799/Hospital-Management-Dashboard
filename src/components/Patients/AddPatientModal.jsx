import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import doctorsData from "../../data/doctorsData";
import "./AddPatientModal.css";

const initialForm = {
  name: "",
  age: "",
  gender: "",
  department: "",
  disease: "",
  diagnosis: "",
  doctorName: "",
  status: "OP",
};

const AddPatientModal = ({
  isOpen,
  onClose,
  patients,
  setPatients,
}) => {
  const [formData, setFormData] = useState(initialForm);
  const [doctorQuery, setDoctorQuery] = useState("");
  const [showDoctorList, setShowDoctorList] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFormData(initialForm);
      setDoctorQuery("");
      setShowDoctorList(false);
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

  const handleDepartmentChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    department: e.target.value,
    doctorName: "",
  }));

  setDoctorQuery("");
  setShowDoctorList(false);
};

  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesDepartment =
      doctor.department === formData.department;
    const matchesName = doctor.name
      .toLowerCase()
      .includes(doctorQuery.toLowerCase());

    return matchesDepartment && matchesName;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.doctorName) return;

    const lastPatient = patients.reduce((max, patient) => {
      const num = parseInt(
        patient.id.replace("MCP", ""),
        10
      );
      return num > max ? num : max;
    }, 224);

    const newPatient = {
      id: `MCP${String(lastPatient + 1).padStart(3, "0")}`,
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender,
      department: formData.department,
      disease: "Not diagnosed",
      diagnosis: "",
      doctorName: formData.doctorName,
      status: formData.status,
      history: [],
    };

    setPatients((prev) => [newPatient, ...prev]);

    setFormData(initialForm);
    setDoctorQuery("");
    setShowDoctorList(false);

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
    initial={{ opacity: 0, scale: 0.96, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96, y: 20 }}
    transition={{
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
    }}
    onClick={(e) => e.stopPropagation()}
  >

    <div className="patient-modal-header">
      <h2>Add new patient</h2>
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
                    placeholder="Enter patient name"
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
                    placeholder="Age"
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
                    onChange={handleDepartmentChange}
                  >
                    <option>select</option>
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
                        disabled={!formData.department}
                        onChange={(e) => {
                        setDoctorQuery(e.target.value);
                        setShowDoctorList(true);
                        }}
                        onFocus={() => {
                        if (formData.department) {
                            setShowDoctorList(true);
                        }
                        }}
                        placeholder={
                        formData.department
                            ? `Search ${formData.department} doctors`
                            : "Select department first"
                        }
                        required
                    />

                    {showDoctorList && formData.department && (
                        <div className="doctor-search-dropdown">
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor) => (
                            <button
                                key={doctor.id}
                                type="button"
                                className="doctor-search-item"
                                onClick={() => {
                                setDoctorQuery(doctor.name);
                                setFormData((prev) => ({
                                    ...prev,
                                    doctorName: doctor.name,
                                }));
                                setShowDoctorList(false);
                                }}
                            >
                                <span className="doctor-search-name">
                                {doctor.name}
                                </span>
                                <span className="doctor-search-dept">
                                {doctor.department}
                                </span>
                            </button>
                            ))
                        ) : (
                            <div className="doctor-search-empty">
                            No doctors found in {formData.department}
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
                  Add patient
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddPatientModal;