import { motion } from "framer-motion";
import {
  FaCapsules,
  FaBoxesStacked,
  FaTriangleExclamation,
  FaIndianRupeeSign,
} from "react-icons/fa6";

import "./PharmacyStats.css";

const PharmacyStats = ({ medicines }) => {
  const totalMedicines = medicines.length;

  const totalStock = medicines.reduce(
    (total, medicine) => total + medicine.stock,
    0
  );

  const lowStock = medicines.filter(
    (medicine) => medicine.status === "Low Stock"
  ).length;

  const inventoryValue = medicines.reduce(
    (total, medicine) => total + medicine.stock * medicine.unitPrice,
    0
  );

  const stats = [
    {
      title: "Total medicines",
      value: totalMedicines,
      icon: FaCapsules,
    },
    {
      title: "Total stock",
      value: totalStock,
      icon: FaBoxesStacked,
    },
    {
      title: "Low stock items",
      value: lowStock,
      icon: FaTriangleExclamation,
    },
    {
      title: "Inventory value",
      value: `₹${inventoryValue.toLocaleString("en-IN")}`,
      icon: FaIndianRupeeSign,
    },
  ];

  return (
    <div className="pharmacy-stats-grid">
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
              className="pharmacy-stat-card"
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 25,
                mass: 0.4,
              }}
            >
              <div className="pharmacy-stat-icon">
                <Icon />
              </div>

              <div className="pharmacy-stat-content">
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

export default PharmacyStats;