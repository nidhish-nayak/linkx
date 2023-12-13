import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./pages/error/error.jsx";
import Home from "./pages/home/home.tsx";
import Login from "./pages/login/login.tsx";
import Profile from "./pages/profile/profile.tsx";
import Register from "./pages/register/register.tsx";

import { DarkModeProvider } from "./context/darkModeContext.tsx";
import "./main.scss";

const currentUser = true;

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return children;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <App />
            </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile/:id",
                element: <Profile />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <DarkModeProvider>
            <RouterProvider router={router} />
        </DarkModeProvider>
    </React.StrictMode>
);
