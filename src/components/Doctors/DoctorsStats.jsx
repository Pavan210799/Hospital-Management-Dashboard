import { motion } from "framer-motion";
import {
  FaUserDoctor,
  FaUserCheck,
  FaUserClock,
  FaCalendarCheck,
} from "react-icons/fa6";

import "./DoctorsStats.css";

const DoctorsStats = ({ doctors }) => {
  const availableCount = doctors.filter(
    (doctor) => doctor.availability === "Available"
  ).length;

  const onLeaveCount = doctors.filter(
    (doctor) => doctor.availability === "On Leave"
  ).length;

  const appointmentsToday = doctors.reduce(
    (total, doctor) => total + doctor.appointmentsToday,
    0
  );

  const stats = [
    {
      title: "Total doctors",
      value: doctors.length,
      icon: FaUserDoctor,
    },
    {
      title: "Available doctors",
      value: availableCount,
      icon: FaUserCheck,
    },
    {
      title: "On leave",
      value: onLeaveCount,
      icon: FaUserClock,
    },
    {
      title: "Appointments today",
      value: appointmentsToday,
      icon: FaCalendarCheck,
    },
  ];

  return (
    <div className="doctors-stats-grid">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
          >
            <motion.div
              className="doctors-stat-card"
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 15,
                mass: 0.4,
              }}
            >
              <div className="doctors-stat-icon">
                <Icon />
              </div>

              <div className="doctors-stat-content">
                <h2>{stat.value}</h2>
                <p>{stat.title}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DoctorsStats;