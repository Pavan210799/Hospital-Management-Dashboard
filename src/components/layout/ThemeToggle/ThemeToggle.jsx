import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

import { ThemeContext } from "../../../context/ThemeContext";

import "./ThemeToggle.css";

const ThemeToggle = () => {

    const {
        isDarkMode,
        toggleTheme,
    } = useContext(ThemeContext);

    return (

        <button
            className={`theme-toggle ${isDarkMode ? "dark" : ""}`}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >

            <div className="theme-toggle-thumb">

                {isDarkMode ? <FaMoon /> : <FaSun />}

            </div>

        </button>

    );

};

export default ThemeToggle;