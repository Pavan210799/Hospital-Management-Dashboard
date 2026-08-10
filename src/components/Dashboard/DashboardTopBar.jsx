import {
  FaBell,
  FaCircleUser,
} from "react-icons/fa6";

import ThemeToggle from "../layout/ThemeToggle/ThemeToggle";
import Header from "../layout/Header/Header";

import "./DashboardTopBar.css";

const DashboardTopBar = ({
  title,
  setSidebarOpen,
  showDate = false,
  onOpenProfile,
}) => {
  const today = new Date();

  const day = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = today.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="dashboard-topbar">
      <div className="dashboard-topbar-left">
        <Header setSidebarOpen={setSidebarOpen} />
        <h2 className="dashboard-page-title">
          {title}
        </h2>
      </div>

      <div className="dashboard-topbar-actions">
        {showDate && (
          <div className="dashboard-topbar-date">
            <span className="dashboard-topbar-day">
              {day}
            </span>
            <span className="dashboard-topbar-full-date">
              {date}
            </span>
          </div>
        )}

        <button className="dashboard-topbar-icon">
          <FaBell />
          <span className="dashboard-topbar-badge">3</span>
        </button>

        <ThemeToggle />

        <button
          className="dashboard-topbar-icon"
          onClick={() => {
            console.log("profile clicked");
            onOpenProfile?.();
          }}
        >
          <FaCircleUser />
        </button>
      </div>
    </div>
  );
};

export default DashboardTopBar;