import { motion } from "framer-motion";
import {
  FaUsers,
  FaUserPlus,
  FaKitMedical,
  FaUserCheck,
} from "react-icons/fa6";

import "./PatientsStats.css";

const PatientsStats = ({ patients }) => {
  const admittedCount = patients.filter(
    (patient) => patient.status === "Admitted"
  ).length;

  const dischargedCount = patients.filter(
    (patient) => patient.status === "Discharged"
  ).length;

  const opCount = patients.filter(
    (patient) => patient.status === "OP"
  ).length;

  const stats = [
    {
      title: "Total patients",
      value: patients.length,
      icon: FaUsers,
    },
    {
      title: "Admitted patients",
      value: admittedCount,
      icon: FaUserPlus,
    },
    {
      title: "Outpatients (OP)",
      value: opCount,
      icon: FaKitMedical,
    },
    {
      title: "Discharged patients",
      value: dischargedCount,
      icon: FaUserCheck,
    },
  ];

  return (
    <div className="patients-stats-grid">
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
              className="patients-stat-card"
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
              <div className="patients-stat-icon">
                <Icon />
              </div>

              <div className="patients-stat-content">
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

export default PatientsStats;

