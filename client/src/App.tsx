import { Outlet } from "react-router-dom";
import Leftbar from "./components/leftbar/leftbar";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightbar";
import "./style.scss";

const App = () => {
    return (
        <div className="theme-light">
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
