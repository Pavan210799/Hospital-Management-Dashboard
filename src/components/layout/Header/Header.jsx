import { FaBars } from "react-icons/fa6";

import "./Header.css";

const Header = ({ setSidebarOpen }) => {

    return (

        <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
        >
            <FaBars />
        </button>

    );

};

export default Header;