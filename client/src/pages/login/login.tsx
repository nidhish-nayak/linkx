import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleLoginSubmit = () => {
        // Run the login func from the AuthContext
        login();
        navigate("/");
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <div className="left-heading">
                        <h1>LinkX.</h1>
                        <p>
                            Welcome to our vibrant social media community, where
                            meaningful connections thrive. Immerse yourself in a
                            world of shared experiences, as our platform
                            seamlessly brings together like minded individuals.
                        </p>
                    </div>
                    <div className="left-register">
                        <span>Don't have an account ?</span>
                        <Link
                            to="/register"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                                width: "min-content",
                            }}
                        >
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h2>Already have an account ?</h2>
                        <p>Sign in with your email and password</p>
                    </div>
                    <form action="" onSubmit={handleLoginSubmit}>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
