import { motion, AnimatePresence } from "framer-motion";
import {
  FaBell,
  FaTriangleExclamation,
  FaCircleInfo,
  FaXmark,
} from "react-icons/fa6";
import { toast } from "react-toastify";

import "./NotificationDrawer.css";

const NotificationDrawer = ({
  isOpen,
  onClose,
  notifications,
  setNotifications,
}) => {
  const unreadCount = notifications.filter((n) => n.unread).length;

  const getIcon = (type) => {
    switch (type) {
      case "emergency":
        return <FaBell />;
      case "alert":
        return <FaTriangleExclamation />;
      default:
        return <FaCircleInfo />;
    }
  };

  const handleMarkAllRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );

    toast.success("All notifications marked as read");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="notification-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="notification-drawer"
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="notification-header">
              <div>
                <h2>Notifications</h2>
                <p>
                  {unreadCount === 0
                    ? "All notifications read"
                    : `${unreadCount} unread notification${
                        unreadCount > 1 ? "s" : ""
                      }`}
                </p>
              </div>

              <button
                className="notification-close-btn"
                onClick={onClose}
              >
                <FaXmark size={18} />
              </button>
            </div>

            <div className="notification-actions">
              <button
                onClick={handleMarkAllRead}
                disabled={unreadCount === 0}
              >
                Mark all as read
              </button>
            </div>

            <div className="notification-list">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notification-item ${notification.type} ${
                    notification.unread ? "unread" : ""
                  }`}
                >
                  <div
                    className={`notification-icon ${notification.type}`}
                  >
                    {getIcon(notification.type)}
                  </div>

                  <div className="notification-content">
                    <div className="notification-top-row">
                      <h4>{notification.title}</h4>
                      {notification.unread && (
                        <span className="notification-dot" />
                      )}
                    </div>

                    <p>{notification.message}</p>
                    <span className="notification-time">
                      {notification.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationDrawer;