import { ReactNode, createContext, useEffect, useState } from "react";

export type AuthContextTypes = {
    currentUser: { id: number; name: string; profilePic: string } | null;
    login: () => void;
};

export const AuthContext = createContext<AuthContextTypes>({
    currentUser: {
        id: 1,
        name: "Nidhish Nayak",
        profilePic: "https://avatars.githubusercontent.com/u/76598208?v=4",
    },
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
    }, [currentUser]);

    const login = () => {
        setCurrentUser({
            id: 1,
            name: "Nidhish Nayak",
            profilePic: "https://avatars.githubusercontent.com/u/76598208?v=4",
        });
    };

    const value = { currentUser, login };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
