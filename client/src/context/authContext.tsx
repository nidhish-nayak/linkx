import { ReactNode, createContext, useEffect, useState } from "react";

export type AuthContextTypes = {
    currentUser: string | null;
    login: () => void;
};

export const AuthContext = createContext<AuthContextTypes>({
    currentUser: null,
    login: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        // returning null if no storedUser
        return JSON.parse(storedUser!);
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
        console.log(localStorage);
    }, [currentUser]);

    const login = () => {
        //TO DO
        setCurrentUser(null);
    };

    const value = { currentUser, login };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
