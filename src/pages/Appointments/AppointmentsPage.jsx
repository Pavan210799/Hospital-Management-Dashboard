import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PageTransition from "../../components/common/PageTransition";
import DashboardTopBar from "../../components/Dashboard/DashboardTopBar";
import TodayTimeline from "../../components/Appointments/TodayTimeline";
import UpcomingAppointments from "../../components/Appointments/UpcomingAppointments";
import NewAppointmentModal from "../../components/Appointments/NewAppointmentModal";

import { appointmentsData } from "../../data/appointmentsData";

import "./AppointmentsPage.css";

const AppointmentsPage = ({
  setSidebarOpen,
  onOpenProfile,
}) => {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointmentsData");
    return saved ? JSON.parse(saved) : appointmentsData;
  });

  const [activeTab, setActiveTab] = useState("today");
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "appointmentsData",
      JSON.stringify(appointments)
    );
  }, [appointments]);

  return (
    <PageTransition>
      <section className="appointments-page">
        <DashboardTopBar
      title="Appointments"
      setSidebarOpen={setSidebarOpen}
      onOpenProfile={onOpenProfile}
    />


        <div className="appointments-toolbar">
          <div className="appointments-tabs">
            <button
              className={`appointments-tab ${
                activeTab === "today" ? "active" : ""
              }`}
              onClick={() => setActiveTab("today")}
            >
              Today
            </button>

            <button
              className={`appointments-tab ${
                activeTab === "upcoming" ? "active" : ""
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming
            </button>
          </div>

          <button
            className="appointments-new-btn"
            onClick={() => setIsNewModalOpen(true)}
          >
            + New Appointment
          </button>
        </div>

        <div className="appointments-content">
          <AnimatePresence mode="wait">
            {activeTab === "today" ? (
              <motion.div
                key="today"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TodayTimeline
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
              </motion.div>
            ) : (
              <motion.div
                key="upcoming"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <UpcomingAppointments
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NewAppointmentModal
          isOpen={isNewModalOpen}
          onClose={() => setIsNewModalOpen(false)}
          appointments={appointments}
          setAppointments={setAppointments}
        />
      </section>
    </PageTransition>
  );
};

export default AppointmentsPage;