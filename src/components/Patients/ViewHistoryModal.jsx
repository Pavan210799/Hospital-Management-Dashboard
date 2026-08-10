import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import "./ViewHistoryModal.css";

const ViewHistoryModal = ({ isOpen, onClose, patient }) => {
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

    if (!patient) return null;

    const history =
        patient.history?.length > 0
            ? patient.history
            : [
                  {
                      id: 1,
                      date: new Date().toISOString().split("T")[0],
                      diagnosis:
                          patient.disease ||
                          "General consultation",
                      description:
                          patient.diagnosis ||
                          "No additional diagnosis notes available.",
                  },
              ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="history-modal-overlay"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="history-modal"
                        onClick={(e) => e.stopPropagation()}
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
                    >
                        <div className="history-modal-header">
                            <div>
                                <h2>Patient history</h2>
                                <p>Medical record timeline</p>
                            </div>

                            <button
                                className="history-modal-close"
                                onClick={onClose}
                            >
                                <FaXmark />
                            </button>
                        </div>

                        <div className="history-patient-summary">
                            <div>
                                <span className="history-label">
                                    Patient
                                </span>
                                <h3>{patient.name}</h3>
                            </div>

                            <span
                                className={`history-status ${patient.status?.toLowerCase()}`}
                            >
                                {patient.status}
                            </span>
                        </div>

                        <div className="history-info-grid">
                            <div>
                                <span className="history-label">
                                    Patient ID
                                </span>
                                <p>{patient.id}</p>
                            </div>

                            <div>
                                <span className="history-label">
                                    Age
                                </span>
                                <p>{patient.age} years</p>
                            </div>

                            <div>
                                <span className="history-label">
                                    Gender
                                </span>
                                <p>{patient.gender}</p>
                            </div>

                            <div>
                                <span className="history-label">
                                    Department
                                </span>
                                <p>
                                    {patient.department ||
                                        "General Medicine"}
                                </p>
                            </div>

                            <div>
                                <span className="history-label">
                                    Doctor
                                </span>
                                <p>{patient.doctorName}</p>
                            </div>

                            <div>
                                <span className="history-label">
                                    Current disease
                                </span>
                                <p>{patient.disease}</p>
                            </div>
                        </div>

                        <div className="history-timeline-section">
                            <h4>Diagnosis timeline</h4>

                            <div className="history-timeline">
                                {history.map((entry) => {
                                    let timelineText = "No additional diagnosis notes available.";

                                    if (
                                        typeof entry.description === "string" &&
                                        entry.description.trim()
                                    ) {
                                        timelineText = entry.description;
                                    } else if (Array.isArray(entry.medicines)) {
                                        timelineText =
                                            entry.medicines.length > 0
                                                ? entry.medicines.join(", ")
                                                : "No additional diagnosis notes available.";
                                    } else if (
                                        typeof entry.medicines === "string" &&
                                        entry.medicines.trim()
                                    ) {
                                        timelineText = entry.medicines;
                                    }

                                    return (
                                        <div
                                            key={entry.id}
                                            className="history-timeline-item"
                                        >
                                            <div className="history-timeline-dot" />

                                            <div className="history-timeline-content">
                                                <div className="history-timeline-date">
                                                    <span>{entry.date}</span>
                                                </div>

                                                <h5>{entry.diagnosis}</h5>

                                                <p>{timelineText}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="history-modal-footer">
                            <button
                                className="history-close-btn"
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

export default ViewHistoryModal;