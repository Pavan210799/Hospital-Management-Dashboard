import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBed,
  FaUserCheck,
  FaHouseMedical,
  FaHospital,
} from "react-icons/fa6";

import PageTransition from "../../components/common/PageTransition";
import DashboardTopBar from "../../components/Dashboard/DashboardTopBar";

import { wardBeds as initialWardBeds } from "../../data/bedManagementData";

import BedGrid from "../../components/BedManagement/BedGrid";
import BedPatientDrawer from "../../components/BedManagement/BedPatientDrawer";
import AdmitPatientModal from "../../components/BedManagement/AdmitPatientModal";

import "./BedManagementPage.css";

const iconMap = {
  "Total beds": FaBed,
  "Occupied beds": FaUserCheck,
  "Available beds": FaHouseMedical,
  Wards: FaHospital,
};

const BedManagementPage = ({ setSidebarOpen, onOpenProfile }) => {
  const [beds, setBeds] = useState(initialWardBeds);
  const [selectedWard, setSelectedWard] = useState("ICU");
  const [selectedBed, setSelectedBed] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAdmitOpen, setIsAdmitOpen] = useState(false);

  const wardSummary = useMemo(() => {
    return Object.entries(beds).map(([ward, wardBeds]) => {
      const occupied = wardBeds.filter((bed) => bed.occupied).length;
      return {
        ward,
        total: wardBeds.length,
        occupied,
        available: wardBeds.length - occupied,
      };
    });
  }, [beds]);

  const totalBeds = useMemo(
    () => Object.values(beds).flat().length,
    [beds]
  );

  const occupiedBeds = useMemo(
    () =>
      Object.values(beds)
        .flat()
        .filter((bed) => bed.occupied).length,
    [beds]
  );

  const availableBeds = totalBeds - occupiedBeds;

  const bedManagementStats = [
    { id: 1, title: "Total beds", value: totalBeds },
    { id: 2, title: "Occupied beds", value: occupiedBeds },
    { id: 3, title: "Available beds", value: availableBeds },
    { id: 4, title: "Cleaning", value: 8 },
    { id: 5, title: "Maintenance", value: 4 },
  ];

  const filteredBeds = beds[selectedWard] || [];

  const selectedWardInfo =
    wardSummary.find((ward) => ward.ward === selectedWard) || {};

  const handleBedClick = (bed) => {
    if (!bed.occupied) return;
    setSelectedBed(bed);
    setIsDrawerOpen(true);
  };

  const handleAdmit = ({ patient, ward, bedId }) => {
    setBeds((prev) => ({
      ...prev,
      [ward]: prev[ward].map((bed) =>
        bed.id === bedId
          ? {
              ...bed,
              occupied: true,
              patient: {
                ...patient,
                status: "Admitted",
              },
            }
          : bed
      ),
    }));

    setSelectedWard(ward);
  };

  return (
    <PageTransition>
      <section className="bed-management-page">
        <DashboardTopBar
      title="Bed Management"
      setSidebarOpen={setSidebarOpen}
      onOpenProfile={onOpenProfile}
    />

        <div className="bed-management-content">
          <div className="bed-stats-grid">
            {bedManagementStats.map((stat, index) => {
              const Icon = iconMap[stat.title] || FaBed;

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                >
                  <motion.div
                    className="bed-stat-card"
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
                    <div className="bed-stat-icon">
                      <Icon />
                    </div>

                    <div className="bed-stat-content">
                      <h2>{stat.value}</h2>
                      <p>{stat.title}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="ward-overview-section"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.05 }}
          >
            <div className="ward-section-header">
              <div className="section-header">
                <h3>Ward occupancy</h3>
                <p>Current occupancy across all hospital wards</p>
              </div>

              <motion.button
                className="bed-admit-btn"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.05,
                  ease: "easeOut",
                }}
                onClick={() => setIsAdmitOpen(true)}
              >
                + Admit Patient
              </motion.button>
            </div>

            <div className="ward-grid">
              {wardSummary.map((ward, index) => {
                const percentage = Math.round(
                  (ward.occupied / ward.total) * 100
                );

                return (
                  <motion.div
                    key={ward.ward}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      delay: index * 0.05,
                    }}
                  >
                    <motion.div
                      className={`ward-card ${
                        selectedWard === ward.ward ? "active" : ""
                      }`}
                      whileHover={{
                        y: -6,
                        scale: 1.03,
                      }}
                      whileTap={{ scale: 0.99 }}
                      transition={{
                        type: "spring",
                        stiffness: 900,
                        damping: 16,
                        mass: 0.35,
                      }}
                      onClick={() => setSelectedWard(ward.ward)}
                    >
                      <div className="ward-card-header">
                        <h4>{ward.ward}</h4>
                        <span>{percentage}%</span>
                      </div>

                      <div className="ward-progress">
                        <div
                          className="ward-progress-fill"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <div className="ward-card-footer">
                        <div>
                          <label>Occupied</label>
                          <strong>{ward.occupied}</strong>
                        </div>

                        <div>
                          <label>Available</label>
                          <strong>{ward.available}</strong>
                        </div>

                        <div>
                          <label>Total</label>
                          <strong>{ward.total}</strong>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="bed-layout-placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className="section-header">
              <h3>{selectedWard} bed layout</h3>
              <p>
                {selectedWardInfo.occupied || 0} occupied of {selectedWardInfo.total || 0} beds
              </p>
            </div>

            <BedGrid
              beds={filteredBeds}
              onBedClick={handleBedClick}
            />
          </motion.div>
        </div>

        <BedPatientDrawer
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
            setSelectedBed(null);
          }}
          bed={selectedBed}
        />

        <AdmitPatientModal
          isOpen={isAdmitOpen}
          onClose={() => setIsAdmitOpen(false)}
          onAdmit={handleAdmit}
        />
      </section>
    </PageTransition>
  );
};

export default BedManagementPage;