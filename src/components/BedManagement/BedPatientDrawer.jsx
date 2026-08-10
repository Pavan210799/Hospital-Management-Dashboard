import { AnimatePresence, motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import "./BedPatientDrawer.css";

const BedPatientDrawer = ({ isOpen, onClose, bed }) => {
  if (!bed) return null;

  const patient = bed.patient;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="bed-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="bed-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="bed-drawer-header">
              <div>
                <h2>Bed details</h2>
                <p>
                  {bed.ward} • Bed {bed.bedNumber}
                </p>
              </div>

              <button className="bed-drawer-close" onClick={onClose}>
                <FaXmark />
              </button>
            </div>

            <div className="bed-drawer-body">
              <section className="bed-patient-profile">
                <div className="bed-patient-avatar">
                  {patient.name.charAt(0)}
                </div>

                <h3>{patient.name}</h3>

                <span className="bed-patient-id">{patient.id}</span>
              </section>

              <section className="bed-section">
                <h4>Patient information</h4>

                <div className="bed-grid">
                  <div>
                    <label>Age</label>
                    <span>{patient.age} years</span>
                  </div>

                  <div>
                    <label>Gender</label>
                    <span>{patient.gender}</span>
                  </div>

                  <div className="full">
                    <label>Department</label>
                    <span>{patient.department}</span>
                  </div>

                  <div className="full">
                    <label>Assigned doctor</label>
                    <span>{patient.doctorName}</span>
                  </div>
                </div>
              </section>

              <section className="bed-section">
                <h4>Diagnosis</h4>

                <div className="bed-notes">
                  {patient.diagnosis || "No diagnosis available."}
                </div>
              </section>

              <section className="bed-section">
                <h4>Medical history</h4>

                {patient.history?.length ? (
                  <div className="bed-history">
                    {patient.history.map((entry) => (
                      <div key={entry.id} className="bed-history-item">
                        <div className="bed-history-header">
                          <strong>{entry.diagnosis}</strong>
                          <span>{entry.date}</span>
                        </div>

                        <p>{entry.description}</p>

                        {entry.medicines?.length ? (
                          <div className="bed-medicines">
                            {entry.medicines.map((medicine) => (
                              <span key={medicine}>{medicine}</span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bed-notes">
                    No medical history available.
                  </div>
                )}
              </section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default BedPatientDrawer;