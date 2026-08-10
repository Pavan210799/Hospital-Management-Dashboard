import { useState } from "react";
import { motion } from "framer-motion";
import doctorsData from "../../data/doctorsData";
import AppointmentDrawer from "./AppointmentDrawer";
import "./TodayTimeline.css";

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

const formatTime = (time) => {
  const [hour, minute] = time.split(":");
  const h = Number(hour);
  const suffix = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 || 12;
  return `${displayHour}:${minute} ${suffix}`;
};

const departmentClass = (department) => {
  const map = {
    Cardiology: "cardiology",
    Neurology: "neurology",
    Orthopedics: "orthopedics",
    ENT: "ent",
    Dermatology: "dermatology",
    Pediatrics: "pediatrics",
    "General Medicine": "general-medicine",
    Pulmonology: "pulmonology",
  };

  return map[department] || "general-medicine";
};

const getDoctorImage = (doctorId) => {
  const doctor = doctorsData.find((d) => d.id === doctorId);
  return doctor?.image || null;
};

const getDoctorInitial = (doctorName) =>
  doctorName.replace(/^Dr\.?\s*/i, "").charAt(0).toUpperCase();

const TodayTimeline = ({ appointments, setAppointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const todayAppointments = appointments.filter(
    (appointment) => appointment.date === today
  );

  const grouped = todayAppointments.reduce((acc, appointment) => {
    if (!acc[appointment.time]) {
      acc[appointment.time] = [];
    }

    acc[appointment.time].push(appointment);
    return acc;
  }, {});

  return (
    <div className="today-timeline-card">
      <div className="today-timeline-header">
        <h3>Today's schedule</h3>
        <p>{todayAppointments.length} appointments scheduled</p>
      </div>

      <div className="today-timeline">
        {timeSlots.map((time) => (
          <div key={time} className="today-slot">
            <div className="today-time">{formatTime(time)}</div>

            <div className="today-lane">
              {grouped[time]?.length ? (
                grouped[time].map((appointment) => {
                  const doctorImage = getDoctorImage(appointment.doctorId);

                  return (
                    <motion.div
                      key={`${appointment.id}-${isDrawerOpen ? "open" : "closed"}`}
                      className={`appointment-card ${departmentClass(appointment.department)}`}
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                        transition: {
                          duration: 0.12,
                          ease: "easeOut",
                        },
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        duration: 0.12,
                        ease: "easeOut",
                      }}
                      onClick={() => {
                        setSelectedAppointment(appointment);
                        setIsDrawerOpen(true);
                      }}
                    >
                      {doctorImage ? (
                        <img
                          src={doctorImage}
                          alt={appointment.doctorName}
                          className="appointment-doctor-avatar"
                        />
                      ) : (
                        <div className="appointment-doctor-avatar appointment-doctor-avatar-fallback">
                          {getDoctorInitial(appointment.doctorName)}
                        </div>
                      )}

                      <div className="appointment-content">
                        <div className="appointment-card-header">
                          <h4>{appointment.patientName}</h4>
                          <span
                            className={`appointment-status ${appointment.status
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {appointment.status}
                          </span>
                        </div>

                        <div className="appointment-doctor-row">
                          <p>{appointment.doctorName}</p>
                          <span className="appointment-department">
                            {appointment.department}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="appointment-empty" />
              )}
            </div>
          </div>
        ))}
      </div>

      <AppointmentDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedAppointment(null);
        }}
        appointment={selectedAppointment}
        setAppointments={setAppointments}
      />
    </div>
  );
};

export default TodayTimeline;