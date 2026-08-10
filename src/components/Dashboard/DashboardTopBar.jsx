import { useState } from "react";
import { FaBell, FaCircleUser } from "react-icons/fa6";

import ThemeToggle from "../layout/ThemeToggle/ThemeToggle";
import Header from "../layout/Header/Header";
import NotificationDrawer from "../common/NotificationDrawer/NotificationDrawer";
import notificationsData from "../common/NotificationDrawer/notifications";

import "./DashboardTopBar.css";

const DashboardTopBar = ({
  title,
  setSidebarOpen,
  showDate = false,
  onOpenProfile,
}) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.filter((n) => n.unread).length;

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
    <>
      <Header
        title={title}
        setSidebarOpen={setSidebarOpen}
      >
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

          <button
            className="dashboard-topbar-icon"
            onClick={() => setIsNotificationOpen(true)}
          >
            <FaBell />
            {unreadCount > 0 && (
              <span className="dashboard-topbar-badge">
                {unreadCount}
              </span>
            )}
          </button>

          <ThemeToggle />

          <button
            className="dashboard-topbar-icon"
            onClick={onOpenProfile}
          >
            <FaCircleUser />
          </button>
        </div>
      </Header>

      <NotificationDrawer
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </>
  );
};

export default DashboardTopBar;