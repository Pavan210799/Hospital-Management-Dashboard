import { FaBars } from "react-icons/fa6";

import "./Header.css";

const Header = ({ title, setSidebarOpen, children }) => {
  return (
    <div className="dashboard-topbar">
      <div className="dashboard-topbar-left">
        <button
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <h1 className="dashboard-page-title">{title}</h1>
      </div>

      {children}
    </div>
  );
};

export default Header;