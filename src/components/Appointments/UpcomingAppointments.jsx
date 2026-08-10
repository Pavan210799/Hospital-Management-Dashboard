import { useState } from "react";
import { motion } from "framer-motion";
import AppointmentDrawer from "./AppointmentDrawer";
import "./UpcomingAppointments.css";

const formatHeading = (date) => {
  const target = new Date(date);
  const today = new Date();

  // Normalize both dates to midnight
  target.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diff = Math.round(
    (target - today) / (1000 * 60 * 60 * 24)
  );

  if (diff === 1) return "Tomorrow";

  return target.toLocaleDateString("en-US", {
    weekday: "long",
  });
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const formatTime = (time) => {
  const [hour, minute] = time.split(":");
  const h = Number(hour);
  const suffix = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 || 12;
  return `${displayHour}:${minute} ${suffix}`;
};

const UpcomingAppointments = ({
  appointments,
  setAppointments,
}) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = appointments
    .filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      appointmentDate.setHours(0, 0, 0, 0);
      return appointmentDate > today;
    })
    .sort((a, b) => {
      const dateCompare =
        new Date(a.date) - new Date(b.date);
      if (dateCompare !== 0) return dateCompare;
      return a.time.localeCompare(b.time);
    });

  const grouped = upcoming.reduce((acc, appointment) => {
    if (!acc[appointment.date]) {
      acc[appointment.date] = [];
    }

    acc[appointment.date].push(appointment);
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  return (
    <>
      <div className="upcoming-list">
        {sortedDates.map((date) => (
          <div key={date} className="upcoming-card">
            <div className="upcoming-card-header">
              <h3>{formatHeading(date)}</h3>
              <span>{formatDate(date)}</span>
            </div>

            <div className="upcoming-items">
              {grouped[date].map((appointment) => (
                <motion.div
                  key={appointment.id}
                  className="upcoming-item"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 25,
                    mass: 0.5,
                  }}
                  onClick={() => {
                    setSelectedAppointment(appointment);
                    setIsDrawerOpen(true);
                  }}
                >
                  <div className="upcoming-item-left">
                    <h4>{appointment.patientName}</h4>
                    <p>
                      {appointment.doctorName} • {appointment.department}
                    </p>
                  </div>

                  <span className="upcoming-item-time">
                    {formatTime(appointment.time)}
                  </span>
                </motion.div>
              ))}
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
    </>
  );
};

export default UpcomingAppointments;