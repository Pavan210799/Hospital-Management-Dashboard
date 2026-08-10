import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark, FaTrash } from "react-icons/fa6";
import doctorsData from "../../data/doctorsData";
import "./AppointmentDrawer.css";

const AppointmentDrawer = ({
  isOpen,
  onClose,
  appointment,
  setAppointments,
}) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!appointment) return null;

  const doctor = doctorsData.find(
    (d) => d.id === appointment.doctorId
  );

  const doctorImage = doctor?.image || null;

  const doctorInitial = appointment.doctorName
    .replace(/^Dr\.?\s*/i, "")
    .charAt(0)
    .toUpperCase();

  const handleDelete = () => {
    if (
      window.confirm(
        `Delete appointment for ${appointment.patientName}?`
      )
    ) {
      setAppointments((prev) =>
        prev.filter((item) => item.id !== appointment.id)
      );
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="appointment-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="appointment-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="appointment-drawer-header">
              <div>
                <h2>Appointment details</h2>
                <p>{appointment.id}</p>
              </div>

              <button
                className="appointment-drawer-close"
                onClick={onClose}
              >
                <FaXmark />
              </button>
            </div>

            <div className="appointment-drawer-body">
              <section className="drawer-doctor-profile">
                {doctorImage ? (
                  <img
                    src={doctorImage}
                    alt={appointment.doctorName}
                    className="drawer-doctor-avatar"
                  />
                ) : (
                  <div className="drawer-doctor-avatar drawer-doctor-avatar-fallback">
                    {doctorInitial}
                  </div>
                )}

                <h3>{appointment.doctorName}</h3>

                <span className="drawer-doctor-department">
                  {appointment.department}
                </span>

                <p className="drawer-doctor-meta">
                  {appointment.date} • {appointment.time}
                </p>
              </section>

              <section className="drawer-section">
                <h4>Appointment information</h4>

                <div className="drawer-grid">
                  <div>
                    <label>Date</label>
                    <span>{appointment.date}</span>
                  </div>

                  <div>
                    <label>Time</label>
                    <span>{appointment.time}</span>
                  </div>

                  <div>
                    <label>Duration</label>
                    <span>{appointment.duration} min</span>
                  </div>

                  <div>
                    <label>Type</label>
                    <span>{appointment.type}</span>
                  </div>

                  <div className="full">
                    <label>Status</label>
                    <span
                      className={`drawer-status ${appointment.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </section>

              <section className="drawer-section">
                <h4>Patient information</h4>

                <div className="drawer-grid">
                  <div>
                    <label>Patient name</label>
                    <span>{appointment.patientName}</span>
                  </div>

                  <div>
                    <label>Patient ID</label>
                    <span>{appointment.patientId}</span>
                  </div>

                  <div>
                    <label>Age</label>
                    <span>{appointment.age} years</span>
                  </div>

                  <div>
                    <label>Gender</label>
                    <span>{appointment.gender}</span>
                  </div>

                  <div className="full">
                    <label>Phone number</label>
                    <span>{appointment.phone}</span>
                  </div>
                </div>
              </section>

              <section className="drawer-section">
                <h4>Clinical notes</h4>

                <div className="drawer-notes">
                  {appointment.notes ||
                    "No notes added for this appointment."}
                </div>
              </section>
            </div>

            {appointment.isCustom && (
              <div className="appointment-drawer-footer">
                <button
                  className="drawer-btn-danger"
                  onClick={handleDelete}
                >
                  <FaTrash />
                  Delete appointment
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentDrawer;