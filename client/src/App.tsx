import { Outlet } from "react-router-dom";
import "./App.css";
import Leftbar from "./components/leftbar/leftbar";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightbar";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<div style={{ display: "flex" }}>
				<Leftbar />
				<div style={{ flex: 6 }}>
					<Outlet />
				</div>
				<Rightbar />
			</div>
		</div>
	);
};

export default App;
