import { ReactNode, createContext, useEffect, useState } from "react";

export type DarkModeContextTypes = {
    darkMode: boolean;
    toggleTheme: () => void;
};

export const DarkModeContext = createContext<DarkModeContextTypes>({
    darkMode: false,
    toggleTheme: () => {},
});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const value = { darkMode, toggleTheme };

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
};
