import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="left">
					<div className="left-heading">
						<h1>LinkX.</h1>
						<p>
							Welcome to our vibrant social media community, where meaningful
							connections thrive! Immerse yourself in a world of shared
							experiences, as our platform seamlessly brings together like
							minded individuals. Join us on a journey of authentic expression
							and community engagement.
						</p>
					</div>
					<div className="left-register">
						<span>Already have an account ?</span>
						<Link
							to="/login"
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<button>Login</button>
						</Link>
					</div>
				</div>
				<div className="right">
					<div>
						<h2>Don't have an account ?</h2>
						<p>Register with your email and password</p>
					</div>
					<form action="">
						<input type="text" placeholder="Username" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<input type="text" placeholder="Name" />
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
