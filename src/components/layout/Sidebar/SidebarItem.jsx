import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, setSidebarOpen }) => {
  const Icon = item.icon;

  return (
    <NavLink
        to={item.path}
        className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => {
            if (window.innerWidth <= 768) {
                setSidebarOpen(false);
            }
        }}
    >
      <Icon className="sidebar-icon" />

      <span>{item.title}</span>
    </NavLink>
  );
};

export default SidebarItem;