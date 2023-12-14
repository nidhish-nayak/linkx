import { ReactNode, createContext, useEffect, useState } from "react";

export type AuthContextTypes = {
    currentUser: string;
    login: () => void;
};

export const AuthContext = createContext<AuthContextTypes>({
    currentUser: "",
    login: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
        console.log(localStorage);
    }, [currentUser]);

    const login = () => {
        //TO DO
        setCurrentUser("");
    };

    const value = { currentUser, login };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
