import logo from "../../../assets/images/logo/logo.png";

import sidebarItems from "./sidebarItems";
import SidebarItem from "./SidebarItem";

import { FaCircleUser } from "react-icons/fa6";

import "./Sidebar.css";

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
}) => {

    return (

        <>

            <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

                <div className="sidebar-logo">

                    <img
                        src={logo}
                        alt="Medicare Hospital"
                        className="sidebar-logo-image"
                    />

                    <div className="sidebar-logo-text">

                        <h2>MediCare</h2>

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

                <div className="sidebar-profile">

                    <div className="sidebar-profile-avatar">
                        <FaCircleUser />
                    </div>

                    <div className="sidebar-profile-info">
                        <h4>User</h4>
                        <span>Administrator</span>
                    </div>

                </div>

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