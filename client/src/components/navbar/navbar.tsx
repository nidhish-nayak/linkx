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

import { AuthContext } from "../../context/authContext";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {
    const { darkMode, toggleTheme } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

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
                <Link to="/" className="home-link" title="Home">
                    <HomeOutlinedIcon />
                </Link>
                <div
                    className="theme"
                    onClick={toggleTheme}
                    title="Toggle theme"
                >
                    {darkMode ? (
                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
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
                    <img src={currentUser?.profilePic} alt="logo" />
                    <span>{currentUser?.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
