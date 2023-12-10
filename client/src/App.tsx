import { Outlet } from "react-router-dom";
import Leftbar from "./components/leftbar/leftbar";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightbar";

const App = () => {
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex" }}>
				<Leftbar />
				<Outlet />
				<Rightbar />
			</div>
		</div>
	);
};

export default App;
