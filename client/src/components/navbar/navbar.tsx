import { useContext } from "react";
import { Link } from "react-router-dom";

import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {
    const { darkMode, toggleTheme } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <span>LinkX.</span>
                </Link>
                <HomeOutlinedIcon />
                <div
                    className="theme"
                    onClick={toggleTheme}
                    title="Toggle theme"
                >
                    {darkMode ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </div>
                <AppsOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img
                        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="logo"
                    />
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
