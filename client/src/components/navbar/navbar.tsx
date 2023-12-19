import { Fragment, useContext } from "react";
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
        <Fragment>
            <div className="navbar-main">
                <div className="left">
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <div className="logo-link">
                            Link<span>X.</span>
                        </div>
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
            <div className="top-mobile">
                <div className="left-mobile">
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <div className="logo-link">
                            Link<span>X.</span>
                        </div>
                    </Link>
                </div>
                <div className="right-mobile">
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
                    <EmailOutlinedIcon />
                    <NotificationsOutlinedIcon />
                </div>
            </div>
            <div className="bottom-mobile">
                <Link to="/" className="home-link" title="Home">
                    <HomeOutlinedIcon />
                </Link>
                <PersonOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
                <AppsOutlinedIcon />
                <div className="user">
                    <img src={currentUser?.profilePic} alt="logo" />
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;
