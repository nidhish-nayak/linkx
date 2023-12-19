import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Leftbar from "./components/leftbar/leftbar";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightbar";

import { DarkModeContext } from "./context/darkModeContext";
import "./style.scss";

const App = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Leftbar />
                <div className="outlet-container">
                    <Outlet />
                </div>
                <Rightbar />
            </div>
        </div>
    );
};

export default App;
