import { Outlet, createBrowserRouter } from "react-router-dom";
import Leftbar from "./components/leftbar/leftBar";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightBar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

const App = () => {
	const Layout = () => {
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

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
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
	]);
};

export default App;
