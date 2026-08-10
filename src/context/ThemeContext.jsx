import {
    createContext,
    useEffect,
    useMemo,
    useState,
} from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {

        if (isDarkMode) {

            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");

        } else {

            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");

        }

        const metaTheme = document.querySelector(
            'meta[name="theme-color"]'
        );

        if (metaTheme) {

            metaTheme.setAttribute(
                "content",
                isDarkMode ? "#0F172A" : "#F8FAFC"
            );

        }

    }, [isDarkMode]);

    const toggleTheme = () => {

        setIsDarkMode((prev) => !prev);

    };

    const value = useMemo(() => ({
        isDarkMode,
        theme: isDarkMode ? "dark" : "light",
        toggleTheme,
    }), [isDarkMode]);

    return (

        <ThemeContext.Provider value={value}>

            {children}

        </ThemeContext.Provider>

    );

};

export default ThemeProvider;