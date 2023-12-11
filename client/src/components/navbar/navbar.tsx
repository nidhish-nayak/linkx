import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="left">
				<Link
					to="/"
					style={{
						textDecoration: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "5px",
					}}
				>
					<img src="/logo.svg" alt="logo" />
					<span>LinkX</span>
				</Link>
				<HomeOutlinedIcon />
				{/* <LightModeOutlinedIcon /> */}
				<DarkModeOutlinedIcon />
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
					<img src="/default-user.png" alt="logo" />
					<span>John Doe</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
