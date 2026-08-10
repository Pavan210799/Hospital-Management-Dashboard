import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import "./AddDiagnosisModal.css";

const initialForm = {
  disease: "",
  diagnosis: "",
  medicines: "",
  followUpDate: "",
  status: "OP",
};

const AddDiagnosisModal = ({
  isOpen,
  onClose,
  patient,
  setPatients,
}) => {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      setFormData({
        disease:
          patient?.disease &&
          patient.disease !== "Not diagnosed"
            ? patient.disease
            : "",
        diagnosis: patient?.diagnosis || "",
        medicines: "",
        followUpDate: "",
        status: patient?.status || "OP",
      });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const medicinesArray = formData.medicines
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);

    const historyEntry = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      diagnosis: formData.disease,
      description:
        formData.diagnosis ||
        "No additional diagnosis notes available.",
      medicines: medicinesArray,
      followUpDate: formData.followUpDate,
      doctor: patient.doctorName,
    };

    setPatients((prev) =>
      prev.map((p) =>
        p.id === patient.id
          ? {
              ...p,
              disease: formData.disease,
              diagnosis: formData.diagnosis,
              status: formData.status,
              history: [historyEntry, ...(p.history || [])],
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
            onClick={(e) => e.stopPropagation()}
          >
            <div className="patient-modal-header">
              <h2>Add diagnosis</h2>
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
                  <label>Patient</label>
                  <input
                    type="text"
                    value={patient.name}
                    disabled
                  />
                </div>

                <div className="patient-form-group">
                  <label>Patient ID</label>
                  <input
                    type="text"
                    value={patient.id}
                    disabled
                  />
                </div>

                <div className="patient-form-group patient-form-full">
                  <label>Disease</label>
                  <input
                    type="text"
                    name="disease"
                    value={formData.disease}
                    onChange={handleChange}
                    placeholder="Enter primary disease"
                    required
                  />
                </div>

                <div className="patient-form-group patient-form-full">
                  <label>Diagnosis details</label>
                  <textarea
                    name="diagnosis"
                    value={formData.diagnosis}
                    onChange={handleChange}
                    placeholder="Enter diagnosis findings, symptoms, and clinical notes..."
                    rows={5}
                  />
                </div>

                <div className="patient-form-group patient-form-full">
                  <label>Medicines</label>
                  <textarea
                    name="medicines"
                    value={formData.medicines}
                    onChange={handleChange}
                    placeholder="Paracetamol 500mg, Amoxicillin 250mg, Vitamin D3"
                    rows={3}
                  />
                </div>

                <div className="patient-form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="OP">OP</option>
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
                  Save diagnosis
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddDiagnosisModal;
