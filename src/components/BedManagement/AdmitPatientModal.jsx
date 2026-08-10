import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

import { patientsPageRecords } from "../Patients/patientsPageData";
import { wardBeds } from "../../data/bedManagementData";

import "./AdmitPatientModal.css";

const AdmitPatientModal = ({ isOpen, onClose, onAdmit }) => {
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [selectedWard, setSelectedWard] = useState("ICU");
  const [selectedBedId, setSelectedBedId] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSelectedPatientId("");
      setSelectedWard("ICU");
      setSelectedBedId("");
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const opPatients = useMemo(
    () => patientsPageRecords.filter((patient) => patient.status === "OP"),
    []
  );

  const availableBeds = useMemo(
    () => (wardBeds[selectedWard] || []).filter((bed) => !bed.occupied),
    [selectedWard]
  );

  const selectedPatient = opPatients.find(
    (patient) => patient.id === selectedPatientId
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPatient || !selectedBedId) return;

    onAdmit?.({
      patient: selectedPatient,
      ward: selectedWard,
      bedId: selectedBedId,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="admit-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className="admit-modal"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{
            duration: 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="admit-modal-header">
            <h2>Admit patient</h2>

            <button
              className="admit-modal-close"
              onClick={onClose}
            >
              <FaXmark />
            </button>
          </div>

          <form
            className="admit-form"
            onSubmit={handleSubmit}
          >
            <div className="admit-form-group">
              <label>Select patient</label>

              <select
                value={selectedPatientId}
                onChange={(e) =>
                  setSelectedPatientId(e.target.value)
                }
                required
              >
                <option value="">
                  Choose an outpatient
                </option>

                {opPatients.map((patient) => (
                  <option
                    key={patient.id}
                    value={patient.id}
                  >
                    {patient.name} ({patient.id})
                  </option>
                ))}
              </select>
            </div>

            <div className="admit-form-group">
              <label>Ward</label>

              <select
                value={selectedWard}
                onChange={(e) => {
                  setSelectedWard(e.target.value);
                  setSelectedBedId("");
                }}
              >
                <option value="ICU">ICU</option>
                <option value="General Ward">
                  General Ward
                </option>
                <option value="Private Rooms">
                  Private Rooms
                </option>
              </select>
            </div>

            <div className="admit-form-group">
              <label>Available bed</label>

              <select
                value={selectedBedId}
                onChange={(e) =>
                  setSelectedBedId(e.target.value)
                }
                required
              >
                <option value="">
                  Select an available bed
                </option>

                {availableBeds.map((bed) => (
                  <option
                    key={bed.id}
                    value={bed.id}
                  >
                    {bed.id}
                  </option>
                ))}
              </select>
            </div>

            {selectedPatient && (
              <div className="admit-patient-preview">
                <h4>Patient summary</h4>

                <p>
                  <strong>Name:</strong> {selectedPatient.name}
                </p>

                <p>
                  <strong>Age:</strong> {selectedPatient.age}
                </p>

                <p>
                  <strong>Gender:</strong> {selectedPatient.gender}
                </p>

                <p>
                  <strong>Department:</strong> {selectedPatient.department}
                </p>

                <p>
                  <strong>Doctor:</strong> {selectedPatient.doctorName}
                </p>
              </div>
            )}

            <div className="admit-form-actions">
              <button
                type="button"
                className="admit-btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admit-btn-primary"
                disabled={!selectedPatientId || !selectedBedId}
              >
                Admit patient
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdmitPatientModal;