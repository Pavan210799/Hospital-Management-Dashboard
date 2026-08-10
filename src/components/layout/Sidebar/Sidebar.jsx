import logo from "../../../assets/images/logo/logo.png";

import sidebarItems from "./sidebarItems";
import SidebarItem from "./SidebarItem";

import "./Sidebar.css";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  onOpenProfile,
}) => {
  const storedUser = JSON.parse(
    localStorage.getItem("medcare-user") || "null"
  );

  const userName = storedUser?.name || "Admin User";
  const userRole = storedUser ? "Staff Member" : "Administrator";
  const avatarLetter = userName.charAt(0).toUpperCase();

  return (
    <>
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <img src={logo} alt="MedCare Hospital" className="sidebar-logo-image" />

          <div className="sidebar-logo-text">
            <h2>MedCare</h2>
            <span>HOSPITAL</span>
          </div>
        </div>

        <hr className="sidebar-divider" />

        <nav className="sidebar-menu">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              setSidebarOpen={setSidebarOpen}
            />
          ))}
        </nav>

        <button
          className="sidebar-profile"
          onClick={() => {
            setSidebarOpen(false);
            onOpenProfile?.();
          }}
        >
          <div className="sidebar-profile-avatar">
            {avatarLetter}
          </div>

          <div className="sidebar-profile-info">
            <h4>{userName}</h4>
            <span>{userRole}</span>
          </div>
        </button>
      </aside>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;